import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Leaf, Clock, Eye } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Neem Oil Pesticide",
      category: "Pesticides",
      price: 299,
      originalPrice: 349,
      rating: 4.5,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      isEcoFriendly: true,
      isBestSeller: true,
      isNewArrival: false,
      description: "Organic neem oil for natural pest control",
      stock: 45
    },
    {
      id: 2,
      name: "NPK Fertilizer 10:26:26",
      category: "Fertilizers",
      price: 450,
      originalPrice: 450,
      rating: 4.8,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
      isEcoFriendly: false,
      isBestSeller: false,
      isNewArrival: true,
      description: "Complete NPK fertilizer for balanced nutrition",
      stock: 32
    },
    {
      id: 3,
      name: "Chlorpyrifos Insecticide",
      category: "Pesticides",
      price: 380,
      originalPrice: 420,
      rating: 4.2,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=400&h=300&fit=crop",
      isEcoFriendly: false,
      isBestSeller: true,
      isNewArrival: false,
      description: "Effective against a wide range of insects",
      stock: 28
    },
    {
      id: 4,
      name: "Organic Compost",
      category: "Fertilizers",
      price: 220,
      originalPrice: 220,
      rating: 4.6,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1416664806563-bb6be3be8b6f?w=400&h=300&fit=crop",
      isEcoFriendly: true,
      isBestSeller: false,
      isNewArrival: false,
      description: "Rich organic compost for soil improvement",
      stock: 67
    },
    {
      id: 5,
      name: "Glyphosate Herbicide",
      category: "Pesticides",
      price: 520,
      originalPrice: 580,
      rating: 4.3,
      reviews: 94,
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
      isEcoFriendly: false,
      isBestSeller: false,
      isNewArrival: false,
      description: "Systemic herbicide for weed control",
      stock: 19
    },
    {
      id: 6,
      name: "Urea Fertilizer",
      category: "Fertilizers",
      price: 340,
      originalPrice: 340,
      rating: 4.4,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&h=300&fit=crop",
      isEcoFriendly: false,
      isBestSeller: true,
      isNewArrival: false,
      description: "High nitrogen content for rapid growth",
      stock: 53
    },
    {
      id: 7,
      name: "Bio Pesticide Spray",
      category: "Pesticides",
      price: 290,
      originalPrice: 320,
      rating: 4.7,
      reviews: 142,
      image: "https://images.unsplash.com/photo-1566281796817-93bc94d7dbd2?w=400&h=300&fit=crop",
      isEcoFriendly: true,
      isBestSeller: false,
      isNewArrival: true,
      description: "Biological pest control solution",
      stock: 38
    },
    {
      id: 8,
      name: "Phosphate Fertilizer",
      category: "Fertilizers",
      price: 410,
      originalPrice: 450,
      rating: 4.1,
      reviews: 73,
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop",
      isEcoFriendly: false,
      isBestSeller: false,
      isNewArrival: false,
      description: "Essential phosphorus for root development",
      stock: 41
    },
    {
      id: 9,
      name: "Triazole Fungicide",
      category: "Pesticides",
      price: 480,
      originalPrice: 520,
      rating: 4.5,
      reviews: 115,
      image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=400&h=300&fit=crop",
      isEcoFriendly: false,
      isBestSeller: false,
      isNewArrival: true,
      description: "Broad spectrum fungicide protection",
      stock: 26
    }
  ];

  const dealOfTheDay = products.find(p => p.id === 1);
  const featuredProducts = products.filter(p => p.isBestSeller || p.isNewArrival).slice(0, 3);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = 
      priceRange === 'all' ||
      (priceRange === 'under300' && product.price < 300) ||
      (priceRange === '300-500' && product.price >= 300 && product.price <= 500) ||
      (priceRange === 'over500' && product.price > 500);
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-wheat-50 to-forest-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-forest-700">🌾 FarmHub</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Home</a>
              <a href="/dashboard" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Dashboard</a>
              <a href="/products" className="text-forest-800 font-semibold border-b-2 border-forest-600">Products</a>
              <a href="/services" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Services</a>
              <a href="/community" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Community</a>
              <a href="/advisor" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Advisors</a>
              <a href="/contact" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-forest-800 mb-4">Shop Farming Essentials</h1>
          <p className="text-xl text-forest-600">High-quality pesticides and fertilizers for your crops</p>
        </div>

        {/* Deal of the Day */}
        {dealOfTheDay && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-forest-800 mb-6">🔥 Deal of the Day</h2>
            <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img src={dealOfTheDay.image} alt={dealOfTheDay.name} className="w-48 h-36 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-forest-800 mb-2">{dealOfTheDay.name}</h3>
                    <p className="text-forest-600 mb-4">{dealOfTheDay.description}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-bold text-red-600">₹{dealOfTheDay.price}</span>
                      <span className="text-xl text-gray-500 line-through">₹{dealOfTheDay.originalPrice}</span>
                      <Badge variant="destructive">50% OFF</Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-red-600" />
                        <span className="text-red-600 font-semibold">Limited Time: 23:45:12</span>
                      </div>
                      <Button className="bg-red-600 hover:bg-red-700">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Featured Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-forest-800 mb-6">✨ Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-2 border-forest-200">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  {product.isBestSeller && <Badge className="absolute top-2 left-2 bg-orange-500">Best Seller</Badge>}
                  {product.isNewArrival && <Badge className="absolute top-2 left-2 bg-blue-500">New Arrival</Badge>}
                  {product.isEcoFriendly && <Leaf className="absolute top-2 right-2 h-6 w-6 text-green-600 bg-white rounded-full p-1" />}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-forest-700">₹{product.price}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleWishlist(product.id)}
                      className={wishlist.includes(product.id) ? 'text-red-500' : 'text-gray-400'}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-forest-600 hover:bg-forest-700">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`/products/${product.id}`}>
                        <Eye className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Search Products</label>
                  <Input
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Category Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Pesticides">Pesticides</SelectItem>
                      <SelectItem value="Fertilizers">Fertilizers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Price Range</label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="under300">Under ₹300</SelectItem>
                      <SelectItem value="300-500">₹300 - ₹500</SelectItem>
                      <SelectItem value="over500">Over ₹500</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Eco-Friendly Filter */}
                <div className="flex items-center space-x-2">
                  <Checkbox id="eco-friendly" />
                  <label htmlFor="eco-friendly" className="text-sm font-medium flex items-center gap-1">
                    <Leaf className="h-4 w-4 text-green-600" />
                    Eco-Friendly Only
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-forest-600">{filteredProducts.length} products found</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                    />
                    {product.isEcoFriendly && (
                      <div className="absolute top-2 right-2 bg-green-100 rounded-full p-1">
                        <Leaf className="h-4 w-4 text-green-600" />
                      </div>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute top-2 left-2 ${wishlist.includes(product.id) ? 'text-red-500 bg-white' : 'text-gray-400 bg-white/80'} hover:bg-white`}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg group-hover:text-forest-700 transition-colors">{product.name}</CardTitle>
                      <Badge variant="outline">{product.category}</Badge>
                    </div>
                    <CardDescription>{product.description}</CardDescription>
                    <div className="flex items-center gap-2">
                      <div className="flex">{renderStars(product.rating)}</div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-forest-700">₹{product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                        )}
                      </div>
                      <span className="text-sm text-green-600">Stock: {product.stock}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-forest-600 hover:bg-forest-700">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={`/products/${product.id}`}>
                          <Eye className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
