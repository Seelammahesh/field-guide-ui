import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
  inStock: number;
}

const Cart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{code: string, discount: number} | null>(null);

  // Sample product data for missing items
  const productData = {
    1: { name: "NPK Fertilizer 10:26:26", price: 450, originalPrice: 450, image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=200&h=150&fit=crop", inStock: 32 },
    2: { name: "Neem Oil Pesticide", price: 299, originalPrice: 349, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=150&fit=crop", inStock: 45 },
    3: { name: "Organic Compost", price: 220, originalPrice: 220, image: "https://images.unsplash.com/photo-1416664806563-bb6be3be8b6f?w=200&h=150&fit=crop", inStock: 67 },
    4: { name: "Heavy Duty Cultivator", price: 45000, originalPrice: 52000, image: "https://images.unsplash.com/photo-1595475038665-86a7ecad1924?w=200&h=150&fit=crop", inStock: 8 },
    5: { name: "Drip Irrigation Kit", price: 3499, originalPrice: 4199, image: "https://images.unsplash.com/photo-1416664806563-bb6be3be8b6f?w=200&h=150&fit=crop", inStock: 23 }
  };

  const coupons = {
    'FARM10': 10,
    'NEWUSER': 15,
    'BULK20': 20
  };

  const loadCartItems = () => {
    const savedCart = localStorage.getItem('cartItems');
    console.log('📦 Loading cart from localStorage:', savedCart);
    
    if (savedCart) {
      try {
        const cartData = JSON.parse(savedCart);
        console.log('📦 Parsed cart data:', cartData);
        
        // Ensure all cart items have required properties
        const fullCartItems = cartData.map((item: any) => {
          const productInfo = productData[item.id as keyof typeof productData];
          const fullItem = {
            id: item.id,
            name: item.name || productInfo?.name || `Product ${item.id}`,
            price: item.price || productInfo?.price || 0,
            originalPrice: item.originalPrice || productInfo?.originalPrice || item.price || productInfo?.price || 0,
            quantity: item.quantity || 1,
            image: item.image || productInfo?.image || "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=200&h=150&fit=crop",
            inStock: item.inStock || productInfo?.inStock || 50
          };
          console.log('📦 Processed cart item:', fullItem);
          return fullItem;
        });
        
        setCartItems(fullCartItems);
        console.log('📦 Cart items loaded successfully:', fullCartItems);
      } catch (error) {
        console.error('❌ Error parsing cart data:', error);
        setCartItems([]);
      }
    } else {
      console.log('📦 No cart data found in localStorage');
      setCartItems([]);
    }
  };

  useEffect(() => {
    console.log('🔄 Cart component mounted, loading cart items...');
    loadCartItems();
    
    // Listen for cart updates
    const handleCartUpdate = (e: any) => {
      console.log('🔄 Cart update event received:', e.type, e.detail);
      loadCartItems();
    };
    
    const handleStorageChange = (e: StorageEvent) => {
      console.log('🔄 Storage change event received:', e.key);
      if (e.key === 'cartItems') {
        loadCartItems();
      }
    };

    // Add event listeners
    window.addEventListener('cartUpdated', handleCartUpdate);
    window.addEventListener('cartChanged', handleCartUpdate);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
      window.removeEventListener('cartChanged', handleCartUpdate);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const item = cartItems.find(item => item.id === id);
    if (item && newQuantity > item.inStock) {
      toast({
        title: "Insufficient Stock",
        description: `Only ${item.inStock} items available in stock.`,
        variant: "destructive"
      });
      return;
    }
    
    // Update localStorage
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      const cartData = JSON.parse(savedCart);
      const updatedCart = cartData.map((item: any) => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      console.log('📦 Updated cart quantity:', { id, newQuantity });
      
      // Update local state
      setCartItems(items =>
        items.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
      
      // Dispatch events
      window.dispatchEvent(new Event('storage'));
      window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { action: 'update' } }));
    }
  };

  const removeItem = (id: number) => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      const cartData = JSON.parse(savedCart);
      const updatedCart = cartData.filter((item: any) => item.id !== id);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      console.log('📦 Removed item from cart:', id);
      
      // Update local state
      setCartItems(items => items.filter(item => item.id !== id));
      
      // Dispatch events
      window.dispatchEvent(new Event('storage'));
      window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { action: 'remove' } }));
      
      toast({
        title: "Item Removed",
        description: "Item has been removed from your cart.",
      });
    }
  };

  const applyCoupon = () => {
    if (coupons[couponCode as keyof typeof coupons]) {
      setAppliedCoupon({
        code: couponCode,
        discount: coupons[couponCode as keyof typeof coupons]
      });
      toast({
        title: "Coupon Applied",
        description: `${couponCode} coupon applied successfully! ${coupons[couponCode as keyof typeof coupons]}% discount.`,
      });
    } else {
      toast({
        title: "Invalid Coupon",
        description: "Please enter a valid coupon code.",
        variant: "destructive"
      });
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    toast({
      title: "Coupon Removed",
      description: "Coupon has been removed from your order.",
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
  const savings = originalTotal - subtotal;
  const couponDiscount = appliedCoupon ? (subtotal * appliedCoupon.discount) / 100 : 0;
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal - couponDiscount + shipping;

  const proceedToCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart Empty",
        description: "Please add items to your cart before checkout.",
        variant: "destructive"
      });
      return;
    }
    
    const orderDetails = {
      items: cartItems,
      subtotal,
      savings,
      couponDiscount,
      appliedCoupon,
      shipping,
      total
    };
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    console.log('🛒 Proceeding to checkout with order:', orderDetails);
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-wheat-50 to-forest-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <Button variant="ghost" asChild className="text-forest-600 hover:text-forest-800">
            <Link to="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <ShoppingBag className="h-8 w-8 text-forest-600" />
          <h1 className="text-3xl font-bold text-forest-800">Shopping Cart</h1>
          <Badge variant="outline" className="ml-2">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </Badge>
        </div>

        {cartItems.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Start shopping to add items to your cart</p>
              <Button asChild className="bg-forest-600 hover:bg-forest-700">
                <Link to="/products">Browse Products</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Link to={`/products/${item.id}`}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                        />
                      </Link>
                      <div className="flex-1">
                        <Link to={`/products/${item.id}`}>
                          <h3 className="font-semibold text-forest-800 mb-1 hover:text-forest-600 cursor-pointer">{item.name}</h3>
                        </Link>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg font-bold text-forest-700">₹{item.price}</span>
                          {item.originalPrice > item.price && (
                            <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                          )}
                          {item.originalPrice > item.price && (
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              Save ₹{item.originalPrice - item.price}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-green-600">In Stock: {item.inStock}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border rounded-md bg-white">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="hover:bg-gray-100"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="px-3 py-1 min-w-[40px] text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= item.inStock}
                            className="hover:bg-gray-100"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <span className="font-semibold text-forest-700 min-w-[80px] text-right">
                          ₹{item.price * item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-forest-800">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>₹{subtotal}</span>
                  </div>
                  {savings > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Product Savings</span>
                      <span>-₹{savings}</span>
                    </div>
                  )}
                  {appliedCoupon && (
                    <div className="flex justify-between text-green-600">
                      <span>Coupon ({appliedCoupon.code})</span>
                      <div className="flex items-center gap-2">
                        <span>-₹{couponDiscount.toFixed(0)}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={removeCoupon}
                          className="text-red-500 hover:text-red-700 p-1 h-auto"
                        >
                          ×
                        </Button>
                      </div>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-sm text-forest-600">
                      Add ₹{500 - subtotal} more for free shipping
                    </p>
                  )}
                  <hr className="border-forest-200" />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-forest-700">₹{total.toFixed(0)}</span>
                  </div>
                  
                  <div className="space-y-3 pt-4">
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Enter coupon code" 
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                        disabled={!!appliedCoupon}
                      />
                      <Button 
                        variant="outline" 
                        onClick={applyCoupon}
                        disabled={!couponCode || !!appliedCoupon}
                      >
                        Apply
                      </Button>
                    </div>
                    <div className="text-xs text-gray-500">
                      Try: FARM10, NEWUSER, BULK20
                    </div>
                    <Button 
                      className="w-full bg-forest-600 hover:bg-forest-700 text-lg py-3"
                      onClick={proceedToCheckout}
                    >
                      Proceed to Checkout
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/products">Continue Shopping</Link>
                    </Button>
                  </div>

                  <div className="pt-4 space-y-2 text-sm text-forest-600">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-forest-600 rounded-full"></span>
                      Free shipping on orders above ₹500
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-forest-600 rounded-full"></span>
                      7-day return policy
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-forest-600 rounded-full"></span>
                      Secure payment gateway
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
