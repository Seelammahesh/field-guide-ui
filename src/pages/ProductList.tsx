
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Star, ShoppingCart, ChevronDown, ChevronUp, ArrowUpDown, Leaf, Grid3X3 } from 'lucide-react';

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Neem Oil Pesticide",
      category: "Pesticides",
      price: 299,
      rating: 4.5,
      reviews: 128,
      isEcoFriendly: true,
      description: "Organic neem oil for natural pest control. Effective against aphids, whiteflies, and other soft-bodied insects.",
      stock: 45,
      brand: "BioGreen",
      specifications: "500ml bottle, Organic certified, Safe for beneficial insects"
    },
    {
      id: 2,
      name: "NPK Fertilizer 10:26:26",
      category: "Fertilizers",
      price: 450,
      rating: 4.8,
      reviews: 203,
      isEcoFriendly: false,
      description: "Complete NPK fertilizer for balanced nutrition. Ideal for all crop types during flowering and fruiting stage.",
      stock: 32,
      brand: "FarmMax",
      specifications: "25kg bag, Water soluble, Enhanced with micronutrients"
    },
    {
      id: 3,
      name: "Chlorpyrifos Insecticide",
      category: "Pesticides",
      price: 380,
      rating: 4.2,
      reviews: 89,
      isEcoFriendly: false,
      description: "Effective against a wide range of insects including termites, bollworms, and stem borers.",
      stock: 28,
      brand: "AgriChem",
      specifications: "1L bottle, Systemic action, 30-day residual effect"
    },
    {
      id: 4,
      name: "Organic Compost",
      category: "Fertilizers",
      price: 220,
      rating: 4.6,
      reviews: 156,
      isEcoFriendly: true,
      description: "Rich organic compost for soil improvement. Made from decomposed farm waste and cow dung.",
      stock: 67,
      brand: "EcoFarm",
      specifications: "20kg bag, 100% organic, pH balanced"
    },
    {
      id: 5,
      name: "Glyphosate Herbicide",
      category: "Pesticides",
      price: 520,
      rating: 4.3,
      reviews: 94,
      isEcoFriendly: false,
      description: "Systemic herbicide for weed control. Non-selective, kills both grasses and broadleaf weeds.",
      stock: 19,
      brand: "WeedOut",
      specifications: "1L bottle, Non-selective, Rainfast in 2 hours"
    },
    {
      id: 6,
      name: "Urea Fertilizer",
      category: "Fertilizers",
      price: 340,
      rating: 4.4,
      reviews: 167,
      isEcoFriendly: false,
      description: "High nitrogen content for rapid growth. Essential for vegetative growth phase of crops.",
      stock: 53,
      brand: "CropBoost",
      specifications: "50kg bag, 46% Nitrogen, Prilled form"
    },
    {
      id: 7,
      name: "Bio Pesticide Spray",
      category: "Pesticides",
      price: 290,
      rating: 4.7,
      reviews: 142,
      isEcoFriendly: true,
      description: "Biological pest control solution using beneficial microorganisms. Safe for environment.",
      stock: 38,
      brand: "NaturePro",
      specifications: "750ml spray bottle, Microbial based, Organic certified"
    },
    {
      id: 8,
      name: "Phosphate Fertilizer",
      category: "Fertilizers",
      price: 410,
      rating: 4.1,
      reviews: 73,
      isEcoFriendly: false,
      description: "Essential phosphorus for root development. Promotes flowering and fruit development.",
      stock: 41,
      brand: "RootPower",
      specifications: "25kg bag, 18% P2O5, Granular form"
    }
  ];

  const filteredAndSortedProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = 
        priceRange === 'all' ||
        (priceRange === 'under300' && product.price < 300) ||
        (priceRange === '300-500' && product.price >= 300 && product.price <= 500) ||
        (priceRange === 'over500' && product.price > 500);
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        case 'name':
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
      }
      
      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const toggleRow = (productId: number) => {
    setExpandedRows(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleProductSelection = (productId: number) => {
    setSelectedProducts(prev =>
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
      {/* <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-forest-700">🌾 FarmHub</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Home</a>
              <a href="/dashboard" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Dashboard</a>
              <a href="/products" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Products</a>
              <a href="/products/list" className="text-forest-800 font-semibold border-b-2 border-forest-600">Product List</a>
              <a href="/services" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Services</a>
              <a href="#" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Community</a>
              <a href="#" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-forest-800 mb-4">All Products</h1>
          <p className="text-xl text-forest-600">Browse our full range of farming supplies</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Filters & Search</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Search Products</label>
                  <Input
                    placeholder="Search by name..."
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

                {/* Rating Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Minimum Rating</label>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map(rating => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <label htmlFor={`rating-${rating}`} className="text-sm flex items-center gap-1">
                          <div className="flex">{renderStars(rating)}</div>
                          <span>& up</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compare Products */}
                {selectedProducts.length > 0 && (
                  <div className="border-t pt-4">
                    <p className="text-sm font-medium mb-2">Compare Products ({selectedProducts.length}/3)</p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      disabled={selectedProducts.length < 2}
                    >
                      Compare Selected
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Product Table */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-forest-600">{filteredAndSortedProducts.length} products found</p>
              <div className="flex gap-2">
                <Button variant="outline" asChild>
                  <a href="/products">
                    <Grid3X3 className="h-4 w-4 mr-2" />
                    Grid View
                  </a>
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-forest-50">
                      <TableHead className="w-12">
                        <Checkbox 
                          checked={selectedProducts.length === filteredAndSortedProducts.length}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedProducts(filteredAndSortedProducts.map(p => p.id));
                            } else {
                              setSelectedProducts([]);
                            }
                          }}
                        />
                      </TableHead>
                      <TableHead>
                        <Button 
                          variant="ghost" 
                          className="font-semibold p-0 h-auto"
                          onClick={() => handleSort('name')}
                        >
                          Product Name
                          <ArrowUpDown className="h-4 w-4 ml-1" />
                        </Button>
                      </TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>
                        <Button 
                          variant="ghost" 
                          className="font-semibold p-0 h-auto"
                          onClick={() => handleSort('price')}
                        >
                          Price
                          <ArrowUpDown className="h-4 w-4 ml-1" />
                        </Button>
                      </TableHead>
                      <TableHead>
                        <Button 
                          variant="ghost" 
                          className="font-semibold p-0 h-auto"
                          onClick={() => handleSort('rating')}
                        >
                          Rating
                          <ArrowUpDown className="h-4 w-4 ml-1" />
                        </Button>
                      </TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Actions</TableHead>
                      <TableHead className="w-12"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAndSortedProducts.map((product, index) => (
                      <React.Fragment key={product.id}>
                        <TableRow className={`${index % 2 === 0 ? 'bg-white' : 'bg-green-50/30'} hover:bg-forest-50 transition-colors`}>
                          <TableCell>
                            <Checkbox 
                              checked={selectedProducts.includes(product.id)}
                              onCheckedChange={() => toggleProductSelection(product.id)}
                              disabled={selectedProducts.length >= 3 && !selectedProducts.includes(product.id)}
                            />
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="font-medium text-forest-800">{product.name}</div>
                              {product.isEcoFriendly && <Leaf className="h-4 w-4 text-green-600" />}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{product.category}</Badge>
                          </TableCell>
                          <TableCell>
                            <span className="font-semibold text-forest-700">₹{product.price}</span>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="flex">{renderStars(product.rating)}</div>
                              <span className="text-sm text-gray-600">({product.reviews})</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className={`${product.stock < 30 ? 'text-red-600' : 'text-green-600'} font-medium`}>
                              {product.stock}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" className="bg-forest-600 hover:bg-forest-700">
                              <ShoppingCart className="h-4 w-4 mr-1" />
                              Add to Cart
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Collapsible>
                              <CollapsibleTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => toggleRow(product.id)}
                                >
                                  {expandedRows.includes(product.id) ? 
                                    <ChevronUp className="h-4 w-4" /> : 
                                    <ChevronDown className="h-4 w-4" />
                                  }
                                </Button>
                              </CollapsibleTrigger>
                            </Collapsible>
                          </TableCell>
                        </TableRow>
                        <Collapsible open={expandedRows.includes(product.id)}>
                          <CollapsibleContent asChild>
                            <TableRow className="bg-forest-25">
                              <TableCell colSpan={8}>
                                <div className="py-4 space-y-3">
                                  <div>
                                    <h4 className="font-semibold text-forest-800 mb-1">Description</h4>
                                    <p className="text-gray-700">{product.description}</p>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                      <h4 className="font-semibold text-forest-800 mb-1">Brand</h4>
                                      <p className="text-gray-700">{product.brand}</p>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-forest-800 mb-1">Specifications</h4>
                                      <p className="text-gray-700">{product.specifications}</p>
                                    </div>
                                  </div>
                                </div>
                              </TableCell>
                            </TableRow>
                          </CollapsibleContent>
                        </Collapsible>
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
