
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

  const updateCartCount = () => {
    // Dispatch multiple events to ensure all cart counters update
    const storageEvent = new StorageEvent('storage', {
      key: 'cartItems',
      newValue: localStorage.getItem('cartItems'),
      storageArea: localStorage
    });
    window.dispatchEvent(storageEvent);
    
    // Also dispatch custom cart update event
    const cartUpdateEvent = new CustomEvent('cartUpdated', { 
      detail: { action: 'add', productId, productName }
    });
    window.dispatchEvent(cartUpdateEvent);
    
    // Force a page refresh of cart-dependent components
    setTimeout(() => {
      window.dispatchEvent(new Event('storage'));
    }, 100);
  };

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
      
      console.log('Cart updated successfully:', {
        productId,
        productName,
        totalItems: cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0),
        cartItems
      });
      
      // Update cart count with multiple methods
      updateCartCount();
      
      // Show success state
      setIsAdded(true);
      
      toast({
        title: "Added to Cart",
        description: `${productName} has been added to your cart.`,
      });

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
