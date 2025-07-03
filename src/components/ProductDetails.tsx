
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Star, Truck, Shield, Award, Heart, Zap, Sparkles, CheckCircle, Package, Users, MessageCircle } from 'lucide-react';
import AddToCartButton from './AddToCartButton';
import { useToast } from "@/hooks/use-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: parseInt(id || '1'),
    name: "Premium NPK Fertilizer 10:26:26",
    price: 450,
    originalPrice: 520,
    rating: 4.8,
    reviews: 234,
    inStock: 32,
    description: "High-quality NPK fertilizer specially formulated for optimal plant growth and maximum yield. This premium blend contains essential nutrients that promote healthy root development, vigorous flowering, and increased fruit production.",
    features: [
      "Balanced NPK ratio for all crops",
      "Water-soluble formula for quick absorption",
      "Enhanced with micronutrients",
      "Suitable for all soil types",
      "Increases yield by up to 40%",
      "Eco-friendly composition"
    ],
    specifications: {
      "NPK Ratio": "10:26:26",
      "Weight": "50 kg",
      "Form": "Granular",
      "pH Level": "6.5 - 7.0",
      "Moisture Content": "< 2%",
      "Application Rate": "200-300 kg/hectare"
    },
    images: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1416664806563-bb6be3be8b6f?w=600&h=400&fit=crop&q=80"
    ],
    category: "Fertilizers",
    brand: "AgriMax Pro",
    benefits: [
      "Promotes healthy root system development",
      "Increases flowering and fruit set",
      "Improves plant resistance to diseases",
      "Enhances soil fertility over time"
    ]
  };

  const handleBuyNow = () => {
    try {
      // Add to cart first
      const existingCart = localStorage.getItem('cartItems');
      let cartItems = existingCart ? JSON.parse(existingCart) : [];
      
      const existingItemIndex = cartItems.findIndex((item: any) => item.id === product.id);
      
      if (existingItemIndex > -1) {
        cartItems[existingItemIndex].quantity += quantity;
      } else {
        const newItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          quantity: quantity,
          image: product.images[0],
          inStock: product.inStock,
          addedAt: new Date().toISOString()
        };
        cartItems.push(newItem);
      }
      
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      
      // Dispatch events to update cart display
      window.dispatchEvent(new Event('storage'));
      window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { action: 'add' } }));
      
      // Show success message
      toast({
        title: "✅ Added to Cart",
        description: `${product.name} added! Redirecting to checkout...`,
        duration: 2000,
      });
      
      // Redirect to cart/payment page
      setTimeout(() => {
        navigate('/cart');
      }, 1000);
    } catch (error) {
      console.error('❌ Error in Buy Now:', error);
      toast({
        title: "❌ Error",
        description: "Failed to process. Please try again.",
        variant: "destructive",
        duration: 4000,
      });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const savings = product.originalPrice - product.price;

  return (
    <div className="min-h-screen bg-gradient-to-br from-wheat-50 via-white to-forest-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Enhanced Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <Button variant="ghost" asChild className="text-forest-600 hover:text-forest-800 hover:bg-forest-100 transition-all duration-200">
            <Link to="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Back to Products</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 sm:mb-12">
          {/* Enhanced Product Images */}
          <div className="space-y-4 sm:space-y-6">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl group">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-64 sm:h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex flex-col gap-2 sm:gap-3">
                <Badge className="bg-red-600 text-white px-2 sm:px-4 py-1 sm:py-2 font-bold shadow-lg text-xs sm:text-sm">
                  Save ₹{savings}
                </Badge>
                <Badge className="bg-green-600 text-white px-2 sm:px-4 py-1 sm:py-2 font-bold shadow-lg text-xs sm:text-sm">
                  In Stock ✓
                </Badge>
              </div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                <Badge className="bg-blue-600 text-white px-2 sm:px-4 py-1 sm:py-2 font-bold shadow-lg text-xs sm:text-sm">
                  Premium Quality ⭐
                </Badge>
              </div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    selectedImage === index ? 'ring-2 sm:ring-4 ring-forest-600 scale-105' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-16 sm:h-20 lg:h-24 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Product Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Badge className="bg-forest-100 text-forest-800 px-2 sm:px-3 py-1 font-semibold text-xs sm:text-sm">
                  {product.category}
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 font-semibold text-xs sm:text-sm">
                  {product.brand}
                </Badge>
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-forest-800 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                {product.name}
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-sm font-bold text-gray-700">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-forest-600" />
                  <span className="text-sm font-semibold text-forest-600">
                    {product.reviews}+ customers
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-forest-100 via-white to-forest-100 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-inner mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                  <span className="text-3xl sm:text-4xl font-black text-forest-700">₹{product.price}</span>
                  <span className="text-xl sm:text-2xl text-gray-500 line-through">₹{product.originalPrice}</span>
                  <Badge className="bg-green-600 text-white px-2 sm:px-3 py-1 font-bold text-xs sm:text-sm">
                    {Math.round((savings / product.originalPrice) * 100)}% OFF
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 font-semibold">
                  💰 You save ₹{savings} on this purchase!
                </p>
              </div>

              <p className="text-forest-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium">
                {product.description}
              </p>

              {/* Enhanced Stock Status */}
              <div className="bg-gradient-to-r from-green-50 to-forest-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Package className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                    <span className="font-bold text-green-700 text-sm sm:text-base">
                      {product.inStock > 10 ? 'In Stock' : 'Limited Stock'}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-green-600">
                    {product.inStock} units available
                  </span>
                </div>
              </div>

              {/* Enhanced Add to Cart Section */}
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border-2 border-forest-200 mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center border-2 border-forest-300 rounded-xl">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 sm:px-4 py-2 text-forest-600 hover:bg-forest-50 rounded-l-xl transition-colors font-bold"
                    >
                      -
                    </button>
                    <span className="px-4 sm:px-6 py-2 font-bold text-base sm:text-lg">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.inStock, quantity + 1))}
                      className="px-3 sm:px-4 py-2 text-forest-600 hover:bg-forest-50 rounded-r-xl transition-colors font-bold"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-forest-700">
                    ₹{product.price * quantity}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <AddToCartButton
                    productId={product.id}
                    productName={product.name}
                    productPrice={product.price}
                    quantity={quantity}
                    size="lg"
                    className="w-full py-3 sm:py-4 text-lg sm:text-xl font-black rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                  />
                  
                  <Button
                    onClick={handleBuyNow}
                    size="lg"
                    className="w-full py-3 sm:py-4 text-lg sm:text-xl font-black rounded-xl bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                  >
                    🚀 Buy Now
                  </Button>
                </div>
              </div>

              {/* Enhanced Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-sm">
                  <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  <span className="text-xs sm:text-sm font-bold text-blue-700">Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow-sm">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  <span className="text-xs sm:text-sm font-bold text-green-700">Quality Guaranteed</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl shadow-sm">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
                  <span className="text-xs sm:text-sm font-bold text-yellow-700">Premium Brand</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Product Details Tabs */}
        <Card className="mt-8 sm:mt-16 shadow-xl sm:shadow-2xl border-0 bg-gradient-to-br from-white via-white to-forest-50/30">
          <CardContent className="p-4 sm:p-8">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6 sm:mb-8 bg-forest-100 p-1 sm:p-2 rounded-xl sm:rounded-2xl">
                <TabsTrigger value="features" className="font-bold text-sm sm:text-lg rounded-lg sm:rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-200">
                  Key Features
                </TabsTrigger>
                <TabsTrigger value="specifications" className="font-bold text-sm sm:text-lg rounded-lg sm:rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-200">
                  Specifications
                </TabsTrigger>
                <TabsTrigger value="benefits" className="font-bold text-sm sm:text-lg rounded-lg sm:rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-200">
                  Benefits
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-black text-forest-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
                  Key Features
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 animate-pulse" />
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-white to-forest-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-forest-700 font-semibold text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="specifications" className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-black text-forest-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <Package className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-gradient-to-r from-white to-forest-50 rounded-xl shadow-sm">
                      <span className="font-bold text-forest-700 text-sm sm:text-base">{key}:</span>
                      <span className="font-semibold text-forest-600 text-sm sm:text-base">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="benefits" className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-black text-forest-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
                  Benefits & Advantages
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-r from-white via-forest-50/30 to-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm sm:text-base">{index + 1}</span>
                      </div>
                      <span className="text-forest-700 font-semibold text-sm sm:text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetails;
