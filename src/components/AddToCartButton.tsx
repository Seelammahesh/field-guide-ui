
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
    const savedCart = localStorage.getItem('cartItems');
    const cartItems = savedCart ? JSON.parse(savedCart) : [];
    const totalItems = cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0);
    
    // Update all cart count elements
    const cartCountElements = document.querySelectorAll('[data-cart-count], .cart-count, #cart-count');
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
    
    // Update cart badge in navigation
    const cartBadges = document.querySelectorAll('.cart-badge');
    cartBadges.forEach((badge: any) => {
      if (badge) {
        badge.textContent = totalItems.toString();
        badge.style.display = totalItems > 0 ? 'inline-flex' : 'none';
      }
    });
    
    return totalItems;
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isAdding || isAdded) return;

    setIsAdding(true);

    try {
      // Get existing cart items
      const existingCart = localStorage.getItem('cartItems');
      let cartItems = existingCart ? JSON.parse(existingCart) : [];
      
      console.log('🛒 Adding to cart - Product:', { productId, productName, productPrice });
      console.log('🛒 Current cart before adding:', cartItems);
      
      // Check if item already exists
      const existingItemIndex = cartItems.findIndex((item: any) => item.id === productId);
      
      if (existingItemIndex > -1) {
        // Update quantity
        cartItems[existingItemIndex].quantity += 1;
        console.log('📦 Updated existing item quantity:', cartItems[existingItemIndex]);
      } else {
        // Add new item with all required fields
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
        console.log('✨ Added new item to cart:', newItem);
      }
      
      // Save to localStorage
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      console.log('💾 Cart saved to localStorage:', cartItems);
      
      // Update cart count and get total
      const totalItems = updateCartCount();
      console.log('📊 Total items in cart after update:', totalItems);
      
      // Dispatch multiple events to ensure all components are notified
      const events = [
        new Event('storage'),
        new CustomEvent('cartUpdated', { 
          detail: { 
            action: 'add', 
            productId, 
            productName, 
            totalItems,
            cartItems 
          }
        }),
        new CustomEvent('cartChanged', { 
          detail: { 
            totalItems, 
            cartItems,
            lastAction: 'add',
            addedItem: { productId, productName, productPrice }
          }
        })
      ];

      events.forEach(event => {
        window.dispatchEvent(event);
        console.log('📡 Dispatched event:', event.type);
      });
      
      // Force update after short delay
      setTimeout(() => {
        updateCartCount();
      }, 100);
      
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
