
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Plus } from "lucide-react";
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
      console.log('🛒 Starting add to cart process:', { productId, productName, productPrice, quantity });
      
      // Get existing cart items
      const existingCart = localStorage.getItem('cartItems');
      let cartItems = existingCart ? JSON.parse(existingCart) : [];
      
      console.log('📦 Existing cart items:', cartItems);
      
      // Check if item already exists
      const existingItemIndex = cartItems.findIndex((item: any) => item.id === productId);
      
      if (existingItemIndex > -1) {
        // Update quantity
        cartItems[existingItemIndex].quantity += quantity;
        console.log('📈 Updated existing item quantity:', cartItems[existingItemIndex]);
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
        console.log('✨ Added new item to cart:', newItem);
      }
      
      // Save to localStorage
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      console.log('💾 Cart saved to localStorage:', cartItems);
      
      // Force update cart display across the app
      const cartEvent = new CustomEvent('cartUpdated', {
        detail: { 
          action: 'add',
          productId,
          quantity,
          timestamp: Date.now() 
        }
      });
      window.dispatchEvent(cartEvent);
      
      // Also dispatch storage event for any components listening
      window.dispatchEvent(new Event('storage'));
      
      console.log('📡 Cart events dispatched');
      
      // Calculate total items
      const totalItems = cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0);
      
      // Show success state
      setIsAdded(true);
      
      toast({
        title: "✅ Added to Cart",
        description: `${productName} has been added to your cart! Total items: ${totalItems}`,
        duration: 3000,
      });

      console.log('✅ Successfully added to cart. Total items:', totalItems);

      // Reset success state after 2 seconds
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);

    } catch (error) {
      console.error('❌ Error adding to cart:', error);
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
      className={`transition-all duration-300 transform hover:scale-105 font-semibold ${
        isAdded 
          ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg' 
          : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg'
      } ${className}`}
    >
      {isAdding ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
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
