
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
      let cartItems = existingCart ? JSON.parse(existingCart) : [];
      
      console.log('🛒 Current cart before adding:', cartItems);
      
      // Check if item already exists
      const existingItemIndex = cartItems.findIndex((item: any) => item.id === productId);
      
      if (existingItemIndex > -1) {
        // Update quantity
        cartItems[existingItemIndex].quantity += 1;
        console.log('📦 Updated existing item quantity:', cartItems[existingItemIndex]);
      } else {
        // Add new item
        const newItem = {
          id: productId,
          name: productName,
          price: productPrice,
          originalPrice: productPrice,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=200&h=150&fit=crop",
          inStock: 50,
          addedAt: new Date().toISOString()
        };
        cartItems.push(newItem);
        console.log('✨ Added new item:', newItem);
      }
      
      // Save to localStorage
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      console.log('💾 Cart saved to localStorage:', cartItems);
      
      // Calculate total items
      const totalItems = cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0);
      console.log('📊 Total items in cart:', totalItems);
      
      // Force update cart count in navigation
      const updateCartCount = () => {
        const cartCountElements = document.querySelectorAll('[data-cart-count], .cart-count');
        console.log('🔍 Found cart count elements:', cartCountElements.length);
        
        cartCountElements.forEach((element: any) => {
          if (element) {
            element.textContent = totalItems.toString();
            element.style.display = totalItems > 0 ? 'inline-block' : 'none';
            
            // Add visual feedback
            element.classList.add('animate-pulse');
            setTimeout(() => {
              element.classList.remove('animate-pulse');
            }, 1000);
          }
        });
      };

      // Update cart count immediately and with delays
      updateCartCount();
      setTimeout(updateCartCount, 100);
      setTimeout(updateCartCount, 500);
      setTimeout(updateCartCount, 1000);
      
      // Dispatch events to notify other components
      const events = [
        new StorageEvent('storage', {
          key: 'cartItems',
          newValue: JSON.stringify(cartItems),
          oldValue: existingCart,
          storageArea: localStorage,
          url: window.location.href
        }),
        new CustomEvent('cartUpdated', { 
          detail: { 
            action: 'add', 
            productId, 
            productName, 
            totalItems,
            cartItems 
          }
        }),
        new CustomEvent('cartChanged', { detail: { totalItems, cartItems } })
      ];

      events.forEach(event => {
        window.dispatchEvent(event);
        console.log('📡 Dispatched event:', event.type);
      });
      
      // Show success state
      setIsAdded(true);
      
      toast({
        title: "✅ Added to Cart",
        description: `${productName} has been added to your cart! Total items: ${totalItems}`,
        duration: 3000,
      });

      console.log('✅ Item successfully added to cart. Total items:', totalItems);

      // Reset button state after 2 seconds
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
      className={`transition-all duration-300 transform hover:scale-105 ${
        isAdded 
          ? 'bg-green-600 hover:bg-green-700 shadow-lg' 
          : 'bg-forest-600 hover:bg-forest-700 shadow-md hover:shadow-lg'
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
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </>
      )}
    </Button>
  );
};

export default AddToCartButton;
