
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Neem Oil Pesticide",
      price: 299,
      originalPrice: 349,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=150&fit=crop",
      inStock: 45
    },
    {
      id: 2,
      name: "NPK Fertilizer 10:26:26",
      price: 450,
      originalPrice: 450,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=200&h=150&fit=crop",
      inStock: 32
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

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
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-forest-800 mb-1">{item.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg font-bold text-forest-700">₹{item.price}</span>
                          {item.originalPrice > item.price && (
                            <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                          )}
                        </div>
                        <p className="text-sm text-green-600">In Stock: {item.inStock}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="px-3 py-1 min-w-[40px] text-center">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= item.inStock}
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
                      <span>Savings</span>
                      <span>-₹{savings}</span>
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
                    <span className="text-forest-700">₹{total}</span>
                  </div>
                  
                  <div className="space-y-3 pt-4">
                    <Input placeholder="Enter coupon code" />
                    <Button variant="outline" className="w-full">
                      Apply Coupon
                    </Button>
                    <Button className="w-full bg-forest-600 hover:bg-forest-700 text-lg py-3">
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
