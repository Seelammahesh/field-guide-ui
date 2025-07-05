
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
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop',
      description: 'High-quality balanced fertilizer for optimal crop growth',
      badge: 'Best Seller',
      category: 'Fertilizers'
    },
    {
      id: 4,
      name: 'Soil Conditioner Plus',
      price: '₹899',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1416664806563-bb6be3be8b6f?w=400&h=300&fit=crop',
      description: 'Improves soil structure and nutrient retention',
      badge: 'New',
      category: 'Fertilizers'
    },
    {
      id: 5,
      name: 'Growth Hormone Booster',
      price: '₹2,299',
      originalPrice: '₹2,599',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      description: 'Eco-friendly pest control for sustainable farming',
      badge: 'Organic',
      category: 'Pesticides'
    },
    {
      id: 3,
      name: 'Multi-Purpose Herbicide',
      price: '₹1,899',
      originalPrice: '₹2,199',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop',
      description: 'Complete drip irrigation system for water efficiency',
      badge: 'Water Saver',
      category: 'Drip System'
    },
    {
      id: 11,
      name: 'Mulching Paper Roll',
      price: '₹899',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      description: 'Premium mulching paper for weed control',
      badge: 'Eco-Friendly',
      category: 'Drip System'
    },
    {
      id: 12,
      name: 'Drip Pipes & Connectors',
      price: '₹1,299',
      originalPrice: '₹1,499',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop',
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
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 lg:mb-16 gap-4">
          <div className="w-full sm:w-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
              Top Products
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-medium">
              Best-selling farming essentials across all categories
            </p>
          </div>
          <div className="flex gap-3 self-end sm:self-auto">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevSlide}
              className="border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextSlide}
              className="border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className={`min-w-full flex gap-6 ${isMobile ? 'justify-center' : ''}`}>
                {products.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((product) => (
                  <div key={product.id} className={`${isMobile ? 'w-full max-w-sm' : 'flex-1'} min-w-0`}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white rounded-2xl overflow-hidden h-[500px] flex flex-col">
                      <div className="relative overflow-hidden h-56">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 text-xs font-bold shadow-lg">
                          {product.badge}
                        </Badge>
                        <Badge variant="outline" className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-700 text-xs font-semibold border-0 shadow-lg">
                          {product.category}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-col flex-grow p-6">
                        <div className="flex-grow">
                          <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 leading-tight h-14">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4 h-10">
                            {product.description}
                          </p>
                        </div>
                        
                        <div className="mt-auto">
                          <div className="flex justify-between items-center mb-4 h-8">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                {product.price}
                              </span>
                              {product.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">
                                  {product.originalPrice}
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-3">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white rounded-xl font-semibold transition-all duration-300 h-10"
                              asChild
                            >
                              <Link to={`/products/${product.id}`}>
                                View Details
                              </Link>
                            </Button>
                            <AddToCartButton 
                              productId={product.id}
                              productName={product.name}
                              productPrice={parseInt(product.price.replace('₹', '').replace(',', ''))}
                              size="sm"
                              className="w-full rounded-xl font-semibold h-10"
                            />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
