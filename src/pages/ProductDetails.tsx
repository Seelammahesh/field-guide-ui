import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Heart, ShoppingCart, Leaf, ArrowLeft, Truck, Shield, RefreshCw } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample product data - in real app this would come from API
  const product = {
    id: parseInt(id || '1'),
    name: "Neem Oil Pesticide",
    category: "Pesticides",
    price: 299,
    originalPrice: 349,
    rating: 4.5,
    reviews: 128,
    images: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop"
    ],
    isEcoFriendly: true,
    description: "Organic neem oil for natural pest control. This premium quality neem oil is extracted from the seeds of the neem tree and provides effective protection against a wide range of pests including aphids, whiteflies, spider mites, and other soft-bodied insects.",
    stock: 45,
    brand: "BioGreen",
    specifications: {
      "Volume": "500ml bottle",
      "Certification": "Organic certified",
      "Active Ingredient": "Azadirachtin 1500 ppm",
      "Application Rate": "2-3ml per liter of water",
      "Shelf Life": "3 years from manufacturing date",
      "Storage": "Store in cool, dry place"
    },
    benefits: [
      "100% organic and biodegradable",
      "Safe for beneficial insects when used as directed",
      "Systemic action for long-lasting protection",
      "Can be used up to harvest day",
      "Compatible with most other pesticides"
    ],
    usage: "Mix 2-3ml of neem oil per liter of water. Spray during early morning or evening hours. Repeat application every 7-10 days or as needed.",
    relatedProducts: [
      { id: 2, name: "Bio Pesticide Spray", price: 290, image: "https://images.unsplash.com/photo-1566281796817-93bc94d7dbd2?w=200&h=150&fit=crop" },
      { id: 3, name: "Organic Compost", price: 220, image: "https://images.unsplash.com/photo-1416664806563-bb6be3be8b6f?w=200&h=150&fit=crop" },
      { id: 4, name: "NPK Fertilizer", price: 450, image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=200&h=150&fit=crop" }
    ]
  };

  const [selectedImage, setSelectedImage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
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
              <Link to="/" className="text-2xl font-bold text-forest-700">🌾 FarmHub</Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Home</Link>
              <Link to="/dashboard" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Dashboard</Link>
              <Link to="/products" className="text-forest-800 font-semibold border-b-2 border-forest-600">Products</Link>
              <Link to="/services" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Services</Link>
              <Link to="/community" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Community</Link>
              <Link to="/advisor" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Advisors</Link>
              <Link to="/contact" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/products')}
            className="text-forest-600 hover:text-forest-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
          <span className="text-gray-400">/</span>
          <span className="text-forest-600">{product.category}</span>
          <span className="text-gray-400">/</span>
          <span className="text-forest-800 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg border-2 border-forest-200">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {product.isEcoFriendly && (
                <div className="absolute top-4 right-4 bg-green-100 rounded-full p-2">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
              )}
            </div>
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-md border-2 ${
                    selectedImage === index ? 'border-forest-600' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-20 h-20 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">{product.category}</Badge>
              <h1 className="text-3xl font-bold text-forest-800 mb-2">{product.name}</h1>
              <p className="text-forest-600 mb-4">{product.description}</p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-forest-600">({product.reviews} reviews)</span>
                </div>
                <span className="text-green-600 font-medium">In Stock: {product.stock}</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-forest-700">₹{product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
                )}
                {product.originalPrice > product.price && (
                  <Badge variant="destructive">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </Badge>
                )}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-medium">Quantity:</label>
                <div className="flex items-center border rounded-md">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="px-4 py-2">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 bg-forest-600 hover:bg-forest-700 text-lg py-3">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? 'text-red-500 border-red-500' : ''}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </Button>
              </div>

              <Button variant="outline" className="w-full">
                Buy Now
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200">
              <div className="text-center">
                <Truck className="h-8 w-8 text-forest-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-gray-600">On orders above ₹500</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-forest-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Secure Payment</p>
                <p className="text-xs text-gray-600">100% secure checkout</p>
              </div>
              <div className="text-center">
                <RefreshCw className="h-8 w-8 text-forest-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Easy Returns</p>
                <p className="text-xs text-gray-600">7-day return policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="usage">Usage</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="mt-6">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold text-forest-800 mb-4">Product Details</h3>
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    This premium neem oil is carefully extracted using cold-press methods to preserve the natural 
                    properties of the neem seed. It provides effective, eco-friendly pest control while being safe 
                    for beneficial insects, humans, and the environment when used as directed.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="specifications" className="mt-6">
                <h3 className="text-xl font-semibold text-forest-800 mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium text-forest-700">{key}:</span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="benefits" className="mt-6">
                <h3 className="text-xl font-semibold text-forest-800 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-forest-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="usage" className="mt-6">
                <h3 className="text-xl font-semibold text-forest-800 mb-4">How to Use</h3>
                <div className="bg-forest-50 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">{product.usage}</p>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Safety Note:</strong> Always read the label before use. Wear protective equipment when handling. 
                    Keep away from children and pets.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-forest-800 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <Link to={`/products/${relatedProduct.id}`} className="block">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{relatedProduct.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-forest-700">₹{relatedProduct.price}</span>
                      <Button size="sm" className="bg-forest-600 hover:bg-forest-700">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
