import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';
import Fertilizer from '../../images/PremiumOrganicFertilizerCoverage.jpg'
import soilConditioner from '../../images/soil-conditioner-1-1.jpg'
import Organicpesticides from '../../images/tractor-field-applies-fertilizer-soil.avif'
import MutliHerbicides from '../../images/john-deere-sprayer.jpg'
import GrowthHormone from '../../images/Spray_tractor.jpg'
import AddToCartButton from './AddToCartButton';

const TopProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

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

  const itemsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-wheat-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 lg:mb-16 gap-4">
          <div className="w-full sm:w-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-800 mb-2 sm:mb-4">Top Products</h2>
            <p className="text-base sm:text-lg lg:text-xl text-forest-600">
              Best-selling farming essentials across all categories
            </p>
          </div>
          <div className="flex gap-2 self-end sm:self-auto">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevSlide}
              className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white p-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextSlide}
              className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white p-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className={`min-w-full flex gap-4 sm:gap-6 ${isMobile ? 'justify-center' : ''}`}>
                {products.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((product) => (
                  <div key={product.id} className={`${isMobile ? 'w-full max-w-sm' : 'flex-1'} min-w-0`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border-forest-200 bg-white h-full">
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                        />
                        <Badge className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-wheat-500 text-soil-800 text-xs">
                          {product.badge}
                        </Badge>
                        <Badge variant="outline" className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/90 text-xs">
                          {product.category}
                        </Badge>
                      </div>
                      <CardHeader className="p-4 sm:p-6">
                        <CardTitle className="text-forest-700 text-base sm:text-lg leading-tight">{product.name}</CardTitle>
                        <CardDescription className="text-forest-600 text-sm leading-relaxed">{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 sm:p-6 pt-0">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xl sm:text-2xl font-bold text-forest-700">{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-xs sm:text-sm text-gray-500 line-through">{product.originalPrice}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white text-sm"
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
                            className="flex-1 text-sm"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-forest-600' : 'bg-forest-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
