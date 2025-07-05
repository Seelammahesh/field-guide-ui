import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Share2, ShoppingCart, CreditCard, ArrowLeft, Plus, Minus, Truck, Shield, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Fertilizer from '../../images/PremiumOrganicFertilizerCoverage.jpg';
import soilConditioner from '../../images/soil-conditioner-1-1.jpg';
import Organicpesticides from '../../images/tractor-field-applies-fertilizer-soil.avif';
import MutliHerbicides from '../../images/john-deere-sprayer.jpg';
import GrowthHormone from '../../images/Spray_tractor.jpg';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const products = [
    // Fertilizers
    {
      id: 1,
      name: 'Premium Fertilizer NPK 20-20-20',
      price: '₹1,299',
      originalPrice: '₹1,499',
      image: Fertilizer,
      description: 'High-quality balanced fertilizer for optimal crop growth',
      badge: 'Best Seller',
      category: 'Fertilizers'
    },
    {
      id: 4,
      name: 'Soil Conditioner Plus',
      price: '₹899',
      originalPrice: null,
      image: soilConditioner,
      description: 'Improves soil structure and nutrient retention',
      badge: 'New',
      category: 'Fertilizers'
    },
    {
      id: 5,
      name: 'Growth Hormone Booster',
      price: '₹2,299',
      originalPrice: '₹2,599',
      image: GrowthHormone,
      description: 'Accelerates plant growth and yield production',
      badge: 'Premium',
      category: 'Fertilizers'
    },
    // Pesticides
    {
      id: 2,
      name: 'Organic Pesticide Solution',
      price: '₹849',
      originalPrice: null,
      image: Organicpesticides,
      description: 'Eco-friendly pest control for sustainable farming',
      badge: 'Organic',
      category: 'Pesticides'
    },
    {
      id: 3,
      name: 'Multi-Purpose Herbicide',
      price: '₹1,899',
      originalPrice: '₹2,199',
      image: MutliHerbicides,
      description: 'Effective weed control for all crop types',
      badge: 'Popular',
      category: 'Pesticides'
    },
    // Tractors & Equipment
    {
      id: 7,
      name: 'Heavy Duty Cultivator',
      price: '₹45,000',
      originalPrice: '₹52,000',
      image: 'https://images.unsplash.com/photo-1595475038665-86a7ecad1924?w=400&h=300&fit=crop',
      description: 'Professional grade cultivator for field preparation',
      badge: 'Heavy Duty',
      category: 'Tractors & Equipment'
    },
    {
      id: 8,
      name: 'Rotavator Attachment',
      price: '₹28,500',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1574691250077-03a929faece5?w=400&h=300&fit=crop',
      description: 'Efficient soil tillage and preparation tool',
      badge: 'Essential',
      category: 'Tractors & Equipment'
    },
    {
      id: 9,
      name: 'Agricultural Sprayer',
      price: '₹15,999',
      originalPrice: '₹18,999',
      image: 'https://images.unsplash.com/photo-1566281796817-93bc94d7dbd2?w=400&h=300&fit=crop',
      description: 'High-capacity sprayer for pesticide application',
      badge: 'Efficient',
      category: 'Tractors & Equipment'
    },
    // Drip System Products
    {
      id: 10,
      name: 'Drip Irrigation Kit',
      price: '₹3,499',
      originalPrice: '₹4,199',
      image: 'https://images.unsplash.com/photo-1416664806563-bb6be3be8b6f?w=400&h=300&fit=crop',
      description: 'Complete drip irrigation system for water efficiency',
      badge: 'Water Saver',
      category: 'Drip System'
    },
    {
      id: 11,
      name: 'Mulching Paper Roll',
      price: '₹899',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop',
      description: 'Premium mulching paper for weed control',
      badge: 'Eco-Friendly',
      category: 'Drip System'
    },
    {
      id: 12,
      name: 'Drip Pipes & Connectors',
      price: '₹1,299',
      originalPrice: '₹1,499',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop',
      description: 'High-quality drip pipes with connectors',
      badge: 'Durable',
      category: 'Drip System'
    }
  ];

  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <Button onClick={() => navigate('/products')} className="bg-gradient-to-r from-blue-600 to-indigo-600">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    if (isAddingToCart) return;
    
    setIsAddingToCart(true);

    try {
      console.log('🛒 Adding to cart from product details:', { 
        productId: product.id, 
        productName: product.name, 
        productPrice: product.price,
        quantity 
      });

      // Get existing cart items
      const existingCartString = localStorage.getItem('cartItems');
      let cartItems = [];
      
      try {
        cartItems = existingCartString ? JSON.parse(existingCartString) : [];
      } catch (parseError) {
        console.warn('Cart parsing error, starting fresh:', parseError);
        cartItems = [];
      }
      
      // Check if item already exists
      const existingItemIndex = cartItems.findIndex((item: any) => item.id === product.id);
      
      if (existingItemIndex > -1) {
        cartItems[existingItemIndex].quantity += quantity;
      } else {
        const newItem = {
          id: product.id,
          name: product.name,
          price: parseInt(product.price.replace('₹', '').replace(',', '')),
          originalPrice: product.originalPrice ? parseInt(product.originalPrice.replace('₹', '').replace(',', '')) : null,
          quantity: quantity,
          image: product.image,
          inStock: 50,
          addedAt: new Date().toISOString()
        };
        cartItems.push(newItem);
      }
      
      // Save to localStorage
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      
      // Dispatch events
      const totalItems = cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0);
      const events = [
        new CustomEvent('cartUpdated', {
          detail: { 
            action: 'add',
            productId: product.id,
            quantity,
            totalItems,
            timestamp: Date.now() 
          }
        }),
        new Event('storage'),
        new CustomEvent('cartItemsChanged', {
          detail: { cartItems, totalItems }
        })
      ];
      
      events.forEach(event => window.dispatchEvent(event));
      
      toast({
        title: "✅ Added to Cart!",
        description: `${product.name} (${quantity}x) added to your cart successfully!`,
        duration: 3000,
      });

      console.log('✅ Product added to cart successfully');

    } catch (error) {
      console.error('❌ Error adding to cart:', error);
      toast({
        title: "❌ Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
        duration: 4000,
      });
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleBuyNow = async () => {
    if (isBuying) return;
    
    setIsBuying(true);

    try {
      console.log('💳 Processing buy now:', { 
        productId: product.id, 
        productName: product.name, 
        quantity 
      });

      // First add to cart
      await handleAddToCart();
      
      // Then navigate to cart/checkout
      setTimeout(() => {
        navigate('/cart');
        toast({
          title: "🛒 Redirecting to Cart",
          description: "Taking you to complete your purchase!",
          duration: 2000,
        });
      }, 1000);

    } catch (error) {
      console.error('❌ Buy now error:', error);
      toast({
        title: "❌ Error",
        description: "Failed to process purchase. Please try again.",
        variant: "destructive",
        duration: 4000,
      });
    } finally {
      setIsBuying(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "🔗 Link Copied!",
        description: "Product link copied to clipboard",
        duration: 2000,
      });
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "💔 Removed from Favorites" : "❤️ Added to Favorites",
      description: isFavorite ? "Product removed from your favorites" : "Product added to your favorites",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 font-bold">
                  {product.badge}
                </Badge>
                <Badge variant="outline" className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-700 font-semibold border-0">
                  {product.category}
                </Badge>
              </div>
            </Card>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">(4.8) • 156 reviews</span>
              </div>
            </div>

            {/* Price */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                    <Badge variant="destructive" className="text-xs">
                      SAVE {Math.round(((parseInt(product.originalPrice.replace('₹', '').replace(',', '')) - parseInt(product.price.replace('₹', '').replace(',', ''))) / parseInt(product.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
                    </Badge>
                  </>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-semibold text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleBuyNow}
                    disabled={isBuying}
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isBuying ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard className="h-5 w-5 mr-2" />
                        Buy Now
                      </>
                    )}
                  </Button>
                  <Button 
                    onClick={handleAddToCart}
                    disabled={isAddingToCart}
                    variant="outline" 
                    className="flex-1 border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-semibold py-3 rounded-xl transition-all duration-300"
                  >
                    {isAddingToCart ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                        Adding...
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Add to Cart
                      </>
                    )}
                  </Button>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={toggleFavorite}
                    className={`flex-1 ${isFavorite ? 'border-red-500 text-red-600 bg-red-50' : 'border-gray-300'}`}
                  >
                    <Heart className={`h-4 w-4 mr-2 ${isFavorite ? 'fill-current' : ''}`} />
                    {isFavorite ? 'Favorited' : 'Add to Favorites'}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleShare}
                    className="flex-1 border-gray-300"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <Truck className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-800">Free Delivery</p>
                    <p className="text-sm text-green-600">On orders above ₹999</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-800">Quality Assured</p>
                    <p className="text-sm text-blue-600">100% authentic products</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                  <RotateCcw className="h-6 w-6 text-purple-600" />
                  <div>
                    <p className="font-semibold text-purple-800">Easy Returns</p>
                    <p className="text-sm text-purple-600">7-day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
