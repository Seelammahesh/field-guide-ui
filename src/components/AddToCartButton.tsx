
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AddToCartButtonProps {
  productId: number;
  productName: string;
  productPrice?: number;
  className?: string;
  size?: "sm" | "default" | "lg";
}

const AddToCartButton = ({ productId, productName, productPrice = 0, className, size = "default" }: AddToCartButtonProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isAdding || isAdded) return;

    setIsAdding(true);

    try {
      // Get existing cart items
      const existingCart = localStorage.getItem('cartItems');
      const cartItems = existingCart ? JSON.parse(existingCart) : [];
      
      // Check if item already exists
      const existingItemIndex = cartItems.findIndex((item: any) => item.id === productId);
      
      if (existingItemIndex > -1) {
        // Update quantity
        cartItems[existingItemIndex].quantity += 1;
      } else {
        // Add new item
        cartItems.push({
          id: productId,
          name: productName,
          price: productPrice,
          quantity: 1,
          addedAt: new Date().toISOString()
        });
      }
      
      // Save to localStorage
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      
      // Dispatch cart update event with more details
      const cartUpdateEvent = new CustomEvent('cartUpdated', { 
        detail: { 
          cartItems,
          action: 'add',
          productId,
          productName,
          totalItems: cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0)
        } 
      });
      window.dispatchEvent(cartUpdateEvent);
      
      // Also dispatch a storage event for cross-tab sync
      window.dispatchEvent(new StorageEvent('storage', {
        key: 'cartItems',
        newValue: JSON.stringify(cartItems),
        storageArea: localStorage
      }));
      
      // Show success state
      setIsAdded(true);
      
      toast({
        title: "Added to Cart",
        description: `${productName} has been added to your cart.`,
      });

      console.log('Item added to cart:', { productId, productName, cartItems });

      // Reset button state after 2 seconds
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);

    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive"
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
      className={`transition-all duration-200 ${
        isAdded 
          ? 'bg-green-600 hover:bg-green-700' 
          : 'bg-forest-600 hover:bg-forest-700'
      } ${className}`}
    >
      {isAdding ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
          Adding...
        </>
      ) : isAdded ? (
        <>
          <Check className="h-4 w-4 mr-2" />
          Added!
        </>
      ) : (
        <>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </>
      )}
    </Button>
  );
};

export default AddToCartButton;
