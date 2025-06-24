import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Leaf, Clock, Filter, Grid, List, ChevronDown } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import image19 from '../../images/image19.jpeg'
import image7 from '../../images/image7.jpeg'
import image3 from '../../images/image3.jpeg'
import image20 from '../../images/image20.jpeg'
import image5 from '../../images/image5.jpeg'
import image6 from '../../images/image6.jpeg'
import image2 from '../../images/image2.jpeg'
import propiconazole from '../../images/propiconazole.webp'
import AddToCartButton from '@/components/AddToCartButton';

const Products = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<{id: number, quantity: number}[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');

  const products = [
    // Fertilizers
    {
      id: 1,
      name: "NPK Fertilizer 10:26:26",
      category: "Fertilizers",
      price: 450,
      originalPrice: 520,
      rating: 4.8,
      reviews: 203,
      image: image7,
      isEcoFriendly: false,
      isBestSeller: true,
      isNewArrival: false,
      description: "Complete NPK fertilizer for balanced nutrition. Enhances plant growth and increases yield.",
      stock: 32,
      brand: "FarmMax",
      weight: "50kg"
    },
    {
      id: 2,
      name: "Organic Compost Premium",
      category: "Fertilizers",
      price: 220,
      originalPrice: 280,
      rating: 4.6,
      reviews: 156,
      image: image2,
      isEcoFriendly: true,
      isBestSeller: false,
      isNewArrival: true,
      description: "Rich organic compost for soil improvement. 100% natural and eco-friendly.",
      stock: 67,
      brand: "GreenGrow",
      weight: "25kg"
    },
    {
      id: 3,
      name: "Urea Fertilizer High Grade",
      category: "Fertilizers",
      price: 340,
      originalPrice: 380,
      rating: 4.4,
      reviews: 167,
      image: image5,
      isEcoFriendly: false,
      isBestSeller: true,
      isNewArrival: false,
      description: "High nitrogen content for rapid growth and lush green foliage.",
      stock: 53,
      brand: "CropBoost",
      weight: "50kg"
    },
    // Pesticides
    {
      id: 4,
      name: "Neem Oil Organic Pesticide",
      category: "Pesticides",
      price: 299,
      originalPrice: 349,
      rating: 4.7,
      reviews: 128,
      image: image19,
      isEcoFriendly: true,
      isBestSeller: true,
      isNewArrival: false,
      description: "100% organic neem oil for natural pest control. Safe for beneficial insects.",
      stock: 45,
      brand: "Nature Shield",
      weight: "1L"
    },
    {
      id: 5,
      name: "Chlorpyrifos Insecticide Pro",
      category: "Pesticides",
      price: 380,
      originalPrice: 420,
      rating: 4.2,
      reviews: 89,
      image: image3,
      isEcoFriendly: false,
      isBestSeller: false,
      isNewArrival: false,
      description: "Effective against a wide range of insects. Professional grade formula.",
      stock: 28,
      brand: "PestAway",
      weight: "500ml"
    },
    {
      id: 6,
      name: "Bio Pesticide Spray Advanced",
      category: "Pesticides",
      price: 290,
      originalPrice: 320,
      rating: 4.7,
      reviews: 142,
      image: image6,
      isEcoFriendly: true,
      isBestSeller: false,
      isNewArrival: true,
      description: "Advanced biological pest control solution. Environmentally friendly.",
      stock: 38,
      brand: "BioProtect",
      weight: "750ml"
    },
    {
      id: 7,
      name: "Triazole Fungicide Shield",
      category: "Pesticides",
      price: 480,
      originalPrice: 520,
      rating: 4.5,
      reviews: 115,
      image: propiconazole,
      isEcoFriendly: false,
      isBestSeller: false,
      isNewArrival: true,
      description: "Broad spectrum fungicide protection for crops. Long-lasting effect.",
      stock: 26,
      brand: "FungiGuard",
      weight: "1L"
    },
    // Tractors & Equipment
    {
      id: 8,
      name: "Heavy Duty Cultivator Pro",
      category: "Tractors & Equipment",
      price: 45000,
      originalPrice: 52000,
      rating: 4.6,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1595475038665-86a7ecad1924?w=400&h=300&fit=crop",
      isEcoFriendly: false,
      isBestSeller: true,
      isNewArrival: false,
      description: "Professional grade cultivator for field preparation. Heavy-duty construction.",
      stock: 8,
      brand: "AgriTech",
      weight: "250kg"
    },
    {
      id: 9,
      name: "Rotavator Attachment 6ft",
      category: "Tractors & Equipment",
      price: 28500,
      originalPrice: 32000,
      rating: 4.4,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1574691250077-03a929faece5?w=400&h=300&fit=crop",
      isEcoFriendly: false,
      isBestSeller: false,
      isNewArrival: false,
      description: "Efficient soil tillage and preparation tool. 6 feet working width.",
      stock: 12,
      brand: "FieldMaster",
      weight: "180kg"
    },
    {
      id: 10,
      name: "Agricultural Sprayer 400L",
      category: "Tractors & Equipment",
      price: 15999,
      originalPrice: 18999,
      rating: 4.3,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1566281796817-93bc94d7dbd2?w=400&h=300&fit=crop",
      isEcoFriendly: false,
      isBestSeller: false,
      isNewArrival: true,
      description: "High-capacity sprayer for pesticide application. 400L tank capacity.",
      stock: 15,
      brand: "SprayTech",
      weight: "120kg"
    },
    // Drip System
    {
      id: 11,
      name: "Drip Irrigation Kit Complete",
      category: "Drip System",
      price: 3499,
      originalPrice: 4199,
      rating: 4.7,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1416664806563-bb6be3be8b6f?w=400&h=300&fit=crop",
      isEcoFriendly: true,
      isBestSeller: true,
      isNewArrival: false,
      description: "Complete drip irrigation system for water efficiency. Covers 1 acre.",
      stock: 23,
      brand: "AquaFlow",
      weight: "15kg"
    },
    {
      id: 12,
      name: "Mulching Paper Roll Premium",
      category: "Drip System",
      price: 899,
      originalPrice: 999,
      rating: 4.2,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop",
      isEcoFriendly: true,
      isBestSeller: false,
      isNewArrival: false,
      description: "Premium mulching paper for weed control. Biodegradable material.",
      stock: 45,
      brand: "EcoMulch",
      weight: "10kg"
    },
    {
      id: 13,
      name: "Drip Pipes & Connectors Set",
      category: "Drip System",
      price: 1299,
      originalPrice: 1499,
      rating: 4.5,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
      isEcoFriendly: false,
      isBestSeller: false,
      isNewArrival: false,
      description: "High-quality drip pipes with connectors. UV resistant material.",
      stock: 67,
      brand: "DripLine",
      weight: "8kg"
    },
    // Seeds & Saplings
    {
      id: 14,
      name: "Hybrid Wheat Seeds Premium",
      category: "Seeds & Saplings",
      price: 850,
      originalPrice: 950,
      rating: 4.8,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop",
      isEcoFriendly: false,
      isBestSeller: true,
      isNewArrival: false,
      description: "High-yield hybrid wheat variety. Disease resistant and drought tolerant.",
      stock: 78,
      brand: "SeedPro",
      weight: "10kg"
    },
    {
      id: 15,
      name: "Vegetable Seedlings Pack Mixed",
      category: "Seeds & Saplings",
      price: 450,
      originalPrice: 500,
      rating: 4.6,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      isEcoFriendly: true,
      isBestSeller: false,
      isNewArrival: true,
      description: "Mixed vegetable seedlings pack for kitchen garden. 20 varieties included.",
      stock: 56,
      brand: "GardenFresh",
      weight: "2kg"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories', count: products.length },
    { value: 'Fertilizers', label: 'Fertilizers', count: products.filter(p => p.category === 'Fertilizers').length },
    { value: 'Pesticides', label: 'Pesticides', count: products.filter(p => p.category === 'Pesticides').length },
    { value: 'Tractors & Equipment', label: 'Tractors & Equipment', count: products.filter(p => p.category === 'Tractors & Equipment').length },
    { value: 'Drip System', label: 'Drip System', count: products.filter(p => p.category === 'Drip System').length },
    { value: 'Seeds & Saplings', label: 'Seeds & Saplings', count: products.filter(p => p.category === 'Seeds & Saplings').length }
  ];

  const dealOfTheDay = products.find(p => p.id === 1);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = 
      priceRange === 'all' ||
      (priceRange === 'under500' && product.price < 500) ||
      (priceRange === '500-5000' && product.price >= 500 && product.price <= 5000) ||
      (priceRange === '5000-20000' && product.price >= 5000 && product.price <= 20000) ||
      (priceRange === 'over20000' && product.price > 20000);
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return b.rating - a.rating;
    }
  });

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const goToCart = () => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
    navigate('/cart');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 sm:h-4 sm:w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white/80 backdrop-blur-sm">
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        {/* Badges */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1">
          {product.isBestSeller && (
            <Badge className="bg-red-500 text-white text-xs px-1.5 py-0.5 sm:px-2 sm:py-1">🔥 Best Seller</Badge>
          )}
          {product.isNewArrival && (
            <Badge className="bg-blue-500 text-white text-xs px-1.5 py-0.5 sm:px-2 sm:py-1">✨ New</Badge>
          )}
          {product.isEcoFriendly && (
            <Badge className="bg-green-500 text-white text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 flex items-center gap-1">
              <Leaf className="h-2 w-2 sm:h-3 sm:w-3" />
              Eco
            </Badge>
          )}
        </div>
        
        {/* Wishlist & Quick View */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex flex-col gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => toggleWishlist(product.id)}
            className={`p-1.5 sm:p-2 rounded-full ${wishlist.includes(product.id) ? 'bg-red-100 text-red-500' : 'bg-white/80 text-gray-600'} hover:bg-white transition-all`}
          >
            <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>

        {/* Discount Badge */}
        {product.originalPrice > product.price && (
          <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3">
            <Badge className="bg-orange-500 text-white font-bold text-xs">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </Badge>
          </div>
        )}
      </div>

      <CardHeader className="pb-2 px-3 sm:px-6">
        <div className="flex justify-between items-start mb-1">
          <Badge variant="outline" className="text-xs text-forest-600 border-forest-600">
            {product.category}
          </Badge>
          <span className="text-xs text-gray-500">{product.brand}</span>
        </div>
        <CardTitle className="text-sm sm:text-lg font-bold text-forest-800 group-hover:text-forest-600 transition-colors line-clamp-2">
          {product.name}
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm text-gray-600 line-clamp-2">
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 px-3 sm:px-6">
        {/* Rating */}
        <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-xs sm:text-sm text-gray-600">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-lg sm:text-2xl font-bold text-forest-700">₹{product.price.toLocaleString()}</span>
            {product.originalPrice > product.price && (
              <span className="text-xs sm:text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
            )}
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">{product.weight}</div>
            <div className={`text-xs font-medium ${product.stock > 20 ? 'text-green-600' : product.stock > 5 ? 'text-orange-600' : 'text-red-600'}`}>
              {product.stock > 20 ? 'In Stock' : product.stock > 5 ? 'Low Stock' : 'Few Left'}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white transition-all text-xs sm:text-sm"
            asChild
          >
            <Link to={`/products/${product.id}`}>
              View Details
            </Link>
          </Button>
          <AddToCartButton 
            productId={product.id}
            productName={product.name}
            size="sm"
            className="flex-1 bg-forest-600 hover:bg-forest-700 text-xs sm:text-sm"
          />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-wheat-50 via-forest-50 to-soil-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-800 mb-3 sm:mb-4">
            Premium Farming Products
          </h1>
          <p className="text-lg sm:text-xl text-forest-600 max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive range of high-quality agricultural products for modern farming
          </p>
        </div>

        {/* Deal of the Day */}
        {dealOfTheDay && (
          <div className="mb-8 sm:mb-12">
            <Card className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 border-2 border-red-200 shadow-xl">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                  <h2 className="text-xl sm:text-2xl font-bold text-red-600">🔥 Deal of the Day</h2>
                  <Badge className="bg-red-600 text-white animate-pulse text-xs sm:text-sm">Limited Time</Badge>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
                  <img src={dealOfTheDay.image} alt={dealOfTheDay.name} className="w-full lg:w-48 xl:w-64 h-40 sm:h-48 object-cover rounded-lg shadow-lg" />
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-forest-800 mb-2">{dealOfTheDay.name}</h3>
                    <p className="text-forest-600 mb-3 sm:mb-4 text-sm sm:text-base">{dealOfTheDay.description}</p>
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-3 sm:mb-4 justify-center lg:justify-start">
                      <span className="text-2xl sm:text-3xl font-bold text-red-600">₹{dealOfTheDay.price.toLocaleString()}</span>
                      <span className="text-lg sm:text-xl text-gray-500 line-through">₹{dealOfTheDay.originalPrice.toLocaleString()}</span>
                      <Badge variant="destructive" className="text-sm sm:text-lg px-2 sm:px-3 py-1">
                        Save ₹{(dealOfTheDay.originalPrice - dealOfTheDay.price).toLocaleString()}
                      </Badge>
                    </div>
                    <Button 
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 text-white shadow-lg w-full sm:w-auto text-sm sm:text-base"
                      onClick={() => navigate(`/products/${dealOfTheDay.id}`)}
                    >
                      <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Get This Deal Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <Card className="sticky top-24 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-forest-800 text-lg sm:text-xl">
                  <Filter className="h-4 w-4 sm:h-5 sm:w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block text-forest-700">Search Products</label>
                  <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-forest-200 focus:border-forest-600 text-sm"
                  />
                </div>

                <Separator />

                {/* Categories */}
                <div>
                  <label className="text-sm font-medium mb-3 block text-forest-700">Categories</label>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div
                        key={category.value}
                        className={`p-2 sm:p-3 rounded-lg cursor-pointer transition-all text-sm ${
                          selectedCategory === category.value 
                            ? 'bg-forest-100 border-2 border-forest-600' 
                            : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                        }`}
                        onClick={() => setSelectedCategory(category.value)}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{category.label}</span>
                          <Badge variant="outline" className="text-xs">
                            {category.count}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-2 block text-forest-700">Price Range</label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger className="border-forest-200 focus:border-forest-600">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="under500">Under ₹500</SelectItem>
                      <SelectItem value="500-5000">₹500 - ₹5,000</SelectItem>
                      <SelectItem value="5000-20000">₹5,000 - ₹20,000</SelectItem>
                      <SelectItem value="over20000">Over ₹20,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                {/* Features */}
                <div>
                  <label className="text-sm font-medium mb-3 block text-forest-700">Features</label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="eco-friendly" />
                      <label htmlFor="eco-friendly" className="text-sm font-medium flex items-center gap-2">
                        <Leaf className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                        Eco-Friendly
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="best-seller" />
                      <label htmlFor="best-seller" className="text-sm font-medium flex items-center gap-2">
                        🔥 Best Sellers
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="new-arrivals" />
                      <label htmlFor="new-arrivals" className="text-sm font-medium flex items-center gap-2">
                        ✨ New Arrivals
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 shadow-lg border-0">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <p className="text-forest-600 font-medium text-sm sm:text-base">
                    {sortedProducts.length} products found
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToCart}
                    className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white text-xs sm:text-sm"
                  >
                    <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
                  </Button>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                  {/* Sort */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="border-forest-200 text-xs sm:text-sm">
                        Sort by <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setSortBy('popular')}>Most Popular</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortBy('price-low')}>Price: Low to High</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortBy('price-high')}>Price: High to Low</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortBy('rating')}>Highest Rated</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSortBy('newest')}>Newest First</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* View Mode */}
                  <div className="flex border border-forest-200 rounded-lg overflow-hidden">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className="rounded-none border-0 px-2 sm:px-3"
                    >
                      <Grid className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="rounded-none border-0 px-2 sm:px-3"
                    >
                      <List className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid - 2 columns for all screen sizes */}
            <div className={`grid gap-4 sm:gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* No Results */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-12 sm:py-16">
                <div className="text-4xl sm:text-6xl mb-4">🔍</div>
                <h3 className="text-xl sm:text-2xl font-bold text-forest-800 mb-2">No products found</h3>
                <p className="text-forest-600 mb-4 text-sm sm:text-base">Try adjusting your filters or search terms</p>
                <Button onClick={() => {
                  setSelectedCategory('all');
                  setPriceRange('all');
                  setSearchQuery('');
                }}>
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
