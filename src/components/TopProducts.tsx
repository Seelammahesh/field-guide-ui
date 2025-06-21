
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TopProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Premium Fertilizer NPK 20-20-20',
      price: '$45.99',
      originalPrice: '$52.99',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'High-quality balanced fertilizer for optimal crop growth',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Organic Pesticide Solution',
      price: '$28.50',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Eco-friendly pest control for sustainable farming',
      badge: 'Organic'
    },
    {
      id: 3,
      name: 'Multi-Purpose Herbicide',
      price: '$67.25',
      originalPrice: '$74.99',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Effective weed control for all crop types',
      badge: 'Popular'
    },
    {
      id: 4,
      name: 'Soil Conditioner Plus',
      price: '$35.00',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Improves soil structure and nutrient retention',
      badge: 'New'
    },
    {
      id: 5,
      name: 'Growth Hormone Booster',
      price: '$89.99',
      originalPrice: '$99.99',
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Accelerates plant growth and yield production',
      badge: 'Premium'
    },
    {
      id: 6,
      name: 'Calcium Supplement',
      price: '$22.75',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Essential calcium for stronger plant cell walls',
      badge: 'Essential'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, products.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, products.length - 3)) % Math.max(1, products.length - 3));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-wheat-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-forest-800 mb-4">Top Products</h2>
            <p className="text-xl text-forest-600">
              Best-selling fertilizers and pesticides trusted by farmers
            </p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevSlide}
              className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white"
            >
              ←
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextSlide}
              className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white"
            >
              →
            </Button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-forest-200 bg-white h-full">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-3 right-3 bg-wheat-500 text-soil-800">
                      {product.badge}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-forest-700 text-lg">{product.name}</CardTitle>
                    <CardDescription className="text-forest-600">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-forest-700">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <Button className="w-full bg-forest-600 hover:bg-forest-700 text-white">
                      Add to Cart 🛒
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
