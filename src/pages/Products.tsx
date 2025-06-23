
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Leaf, Clock, Eye } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import image19 from '../../images/image19.jpeg'
import image7 from '../../images/image7.jpeg'
import image3 from '../../images/image3.jpeg'
import image20 from '../../images/image20.jpeg'
import image5 from '../../images/image5.jpeg'
import image6 from '../../images/image6.jpeg'
import image2 from '../../images/image2.jpeg'
import propiconazole from '../../images/propiconazole.webp'

const Products = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<{id: number, quantity: number}[]>([]);

  const products = [
    // Fertilizers
    {
      id: 1,
      name: "NPK Fertilizer 10:26:26",
      category: "Fertilizers",
      price: 450,
      originalPrice: 450,
      rating: 4.8,
      reviews: 203,
      image: image7,
      isEcoFriendly: false,
      isBestSeller: false,
      isNewArrival: true,
      description: "Complete NPK fertilizer for balanced nutrition",
      stock: 32
    },
    {
      id: 2,
      name: "Organic Compost",
      category: "Fertilizers",
      price: 220,
      originalPrice: 220,
      rating: 4.6,
      reviews: 156,
      image: image2,
      isEcoFriendly: true,
      isBestSeller: false,
      isNewArrival: false,
      description: "Rich organic compost for soil improvement",
      stock: 67
    },
    {
      id: 3,
      name: "Urea Fertilizer",
      category: "Fertilizers",
      price: 340,
      originalPrice: 340,
      rating: 4.4,
      reviews: 167,
      image: image5,
      isEcoFriendly: false,
      isBestSeller: true,
      isNewArrival: false,
      description: "High nitrogen content for rapid growth",
      stock: 53
    },
    // Pesticides
    {
      id: 4,
      name: "Neem Oil Pesticide",
      category: "Pesticides",
      price: 299,
      originalPrice: 349,
      rating: 4.5,
      reviews: 128,
      image: image19,
      isEcoFriendly: true,
      isBestSeller: true,
      isNewArrival: false,
      description: "Organic neem oil for natural pest control",
      stock: 45
    },
    {
      id: 5,
      name: "Chlorpyrifos Insecticide",
      category: "Pesticides",
      price: 380,
      originalPrice: 420,
      rating: 4.2,
      reviews: 89,
      image: image3,
      isEcoFriendly: false,
      isBestSeller: true,
      isNewArrival: false,
      description: "Effective against a wide range of insects",
      stock: 28
    },
    {
      id: 6,
      name: "Bio Pesticide Spray",
      category: "Pesticides",
      price: 290,
      originalPrice: 320,
      rating: 4.7,
      reviews: 142,
      image: image6,
      isEcoFriendly: true,
      isBestSeller: false,
      isNewArrival: true,
      description: "Biological pest control solution",
      stock: 38
    },
    {
      id: 7,
      name: "Triazole Fungicide",
      category: "Pesticides",
      price: 480,
      originalPrice: 520,
      rating: 4.5,
      reviews: 115,
      image: propiconazole,
      isEcoFriendly: false,
      isBestSeller: false,
      isNewArrival: true,
      description: "Broad spectrum fungicide protection",
      stock: 26
    },
    // Tractors & Equipment
    {
      id: 8,
      name: "Heavy Duty Cultivator",
      category: "Tractors & Equipment",
      price: 45000,
      originalPrice: 52000,
      rating: 4.6,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1595475038665-86a7ecad1924?w=400&h=300&fit=crop",
      isEcoFriendly: false,
      isBestSeller: true,
      isNewArrival: false,
      description: "Professional grade cultivator for field preparation",
      stock: 8
    },
    {
      id: 9,
      name: "Rotavator Attachment",
      category: "Tractors & Equipment",
      price: 28500,
      originalPrice: 28500,
      rating: 4.4,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1574691250077-03a929faece5?w=400&h=300&fit=crop",
      isEcoFriendly: false,
      isBestSeller: false,
      isNewArrival: false,
      description: "Efficient soil tillage and preparation tool",
      stock: 12
    },
    {
      id: 10,
      name: "Agricultural Sprayer",
      category: "Tractors & Equipment",
      price: 15999,
      originalPrice: 18999,
      rating: 4.3,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1566281796817-93bc94d7dbd2?w=400&h=300&fit=crop",
      isEcoFriendly: false,
      isBestSeller: false,
      isNewArrival: true,
      description: "High-capacity sprayer for pesticide application",
      stock: 15
    },
    // Drip System Products
    {
      id: 11,
      name: "Drip Irrigation Kit",
      category: "Drip System",
      price: 3499,
      originalPrice: 4199,
      rating: 4.7,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1416664806563-bb6be3be8b6f?w=400&h=300&fit=crop",
      isEcoFriendly: true,
      isBestSeller: true,
      isNewArrival: false,
      description: "Complete drip irrigation system for water efficiency",
      stock: 23
    },
    {
      id: 12,
      name: "Mulching Paper Roll",
      category: "Drip System",
      price: 899,
      originalPrice: 899,
      rating: 4.2,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop",
      isEcoFriendly: true,
      isBestSeller: false,
      isNewArrival: false,
      description: "Premium mulching paper for weed control",
      stock: 45
    },
    {
      id: 13,
      name: "Drip Pipes & Connectors",
      category: "Drip System",
      price: 1299,
      originalPrice: 1499,
      rating: 4.5,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
      isEcoFriendly: false,
      isBestSeller: false,
      isNewArrival: false,
      description: "High-quality drip pipes with connectors",
      stock: 67
    },
    // Seeds & Saplings
    {
      id: 14,
      name: "Hybrid Wheat Seeds",
      category: "Seeds & Saplings",
      price: 850,
      originalPrice: 950,
      rating: 4.8,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop",
      isEcoFriendly: false,
      isBestSeller: true,
      isNewArrival: false,
      description: "High-yield hybrid wheat variety",
      stock: 78
    },
    {
      id: 15,
      name: "Vegetable Seedlings Pack",
      category: "Seeds & Saplings",
      price: 450,
      originalPrice: 450,
      rating: 4.6,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      isEcoFriendly: true,
      isBestSeller: false,
      isNewArrival: true,
      description: "Mixed vegetable seedlings for kitchen garden",
      stock: 56
    }
  ];

  const categories = [
    'all',
    'Fertilizers',
    'Pesticides',
    'Tractors & Equipment',
    'Drip System',
    'Seeds & Saplings'
  ];

  const dealOfTheDay = products.find(p => p.id === 1);
  const featuredProducts = products.filter(p => p.isBestSeller || p.isNewArrival).slice(0, 3);

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

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (productId: number) => {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
      setCart(prev => prev.map(item => 
        item.id === productId 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart(prev => [...prev, { id: productId, quantity: 1 }]);
    }
    
    const product = products.find(p => p.id === productId);
    toast({
      title: "Added to Cart",
      description: `${product?.name} has been added to your cart.`,
    });
  };

  const goToCart = () => {
    // Save cart to localStorage and navigate
    localStorage.setItem('cartItems', JSON.stringify(cart));
    navigate('/cart');
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-bold text-forest-800">Shop Farming Essentials</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={goToCart} className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
              </Button>
            </div>
          </div>
          <p className="text-xl text-forest-600">Complete range of agricultural products across all categories</p>
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
                      <Badge variant="destructive">Save ₹{dealOfTheDay.originalPrice - dealOfTheDay.price}</Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-red-600" />
                        <span className="text-red-600 font-semibold">Limited Time Offer</span>
                      </div>
                      <Button 
                        className="bg-red-600 hover:bg-red-700"
                        onClick={() => addToCart(dealOfTheDay.id)}
                      >
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
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </SelectItem>
                      ))}
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
                      <SelectItem value="under500">Under ₹500</SelectItem>
                      <SelectItem value="500-5000">₹500 - ₹5,000</SelectItem>
                      <SelectItem value="5000-20000">₹5,000 - ₹20,000</SelectItem>
                      <SelectItem value="over20000">Over ₹20,000</SelectItem>
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
                  <Link to={`/products/${product.id}`} className="block">
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
                        onClick={(e) => {
                          e.preventDefault();
                          toggleWishlist(product.id);
                        }}
                        className={`absolute top-2 left-2 ${wishlist.includes(product.id) ? 'text-red-500 bg-white' : 'text-gray-400 bg-white/80'} hover:bg-white`}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </Link>
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
                      <Button 
                        className="flex-1 bg-forest-600 hover:bg-forest-700"
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product.id);
                        }}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/products/${product.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
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
