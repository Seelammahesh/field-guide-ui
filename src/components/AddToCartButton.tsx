
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Plus, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AddToCartButtonProps {
  productId: number;
  productName: string;
  productPrice?: number;
  className?: string;
  size?: "sm" | "default" | "lg";
  quantity?: number;
}

const AddToCartButton = ({ 
  productId, 
  productName, 
  productPrice = 0, 
  className = "", 
  size = "default",
  quantity = 1 
}: AddToCartButtonProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isAdding || isAdded) return;

    setIsAdding(true);

    try {
      console.log('🛒 Adding to cart:', { productId, productName, productPrice, quantity });
      
      // Get existing cart items
      const existingCartString = localStorage.getItem('cartItems');
      let cartItems = [];
      
      try {
        cartItems = existingCartString ? JSON.parse(existingCartString) : [];
        if (!Array.isArray(cartItems)) {
          cartItems = [];
        }
      } catch (parseError) {
        console.warn('Cart parsing error, starting fresh:', parseError);
        cartItems = [];
      }
      
      console.log('📦 Current cart:', cartItems);
      
      // Check if item already exists
      const existingItemIndex = cartItems.findIndex((item: any) => item.id === productId);
      
      if (existingItemIndex > -1) {
        // Update quantity
        cartItems[existingItemIndex].quantity += quantity;
        console.log('📈 Updated existing item:', cartItems[existingItemIndex]);
      } else {
        // Add new item
        const newItem = {
          id: productId,
          name: productName,
          price: productPrice,
          originalPrice: productPrice,
          quantity: quantity,
          image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=200&h=150&fit=crop",
          inStock: 50,
          addedAt: new Date().toISOString()
        };
        cartItems.push(newItem);
        console.log('✨ Added new item:', newItem);
      }
      
      // Save to localStorage
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      console.log('💾 Cart saved successfully:', cartItems);
      
      // Calculate total items for display
      const totalItems = cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0);
      
      // Dispatch comprehensive cart update events
      const cartUpdateEvent = new CustomEvent('cartUpdated', {
        detail: { 
          action: 'add',
          productId,
          productName,
          quantity,
          totalItems,
          cartItems,
          timestamp: Date.now() 
        }
      });
      
      const storageEvent = new Event('storage');
      
      const cartItemsChangedEvent = new CustomEvent('cartItemsChanged', {
        detail: { cartItems, totalItems, action: 'add' }
      });

      // Dispatch all events
      window.dispatchEvent(cartUpdateEvent);
      window.dispatchEvent(storageEvent);
      window.dispatchEvent(cartItemsChangedEvent);
      
      // Additional event for navbar cart count update
      window.dispatchEvent(new CustomEvent('updateCartCount', {
        detail: { count: totalItems }
      }));
      
      console.log('📡 All cart events dispatched successfully, total items:', totalItems);
      
      // Show success state
      setIsAdded(true);
      
      // Show success toast
      toast({
        title: "✅ Added to Cart!",
        description: `${productName} (${quantity}x) added successfully. Total items: ${totalItems}`,
        duration: 3000,
      });

      console.log('✅ Add to cart completed successfully');

      // Reset success state after 2 seconds
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);

    } catch (error) {
      console.error('❌ Add to cart error:', error);
      toast({
        title: "❌ Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
        duration: 4000,
      });
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isAdding}
      size={size}
      className={`transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl ${
        isAdded 
          ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600' 
          : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
      } ${className}`}
    >
      {isAdding ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Adding...
        </>
      ) : isAdded ? (
        <>
          <Check className="h-4 w-4 mr-2 animate-bounce" />
          Added! ✅
        </>
      ) : (
        <>
          <Plus className="h-4 w-4 mr-2" />
          Add to Cart
        </>
      )}
    </Button>
  );
};

export default AddToCartButton;
