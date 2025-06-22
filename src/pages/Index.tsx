
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Instagram, Youtube, ArrowDown, ArrowUp } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import WeatherWidget from '@/components/WeatherWidget';
import FeaturedServices from '@/components/FeaturedServices';
import TopProducts from '@/components/TopProducts';
import CropPrices from '@/components/CropPrices';
import InteractiveMap from '@/components/InteractiveMap';
import FarmingTip from '@/components/FarmingTip';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-wheat-50 to-forest-50 font-montserrat">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-forest-700">🌾 FarmHub</Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-forest-800 font-semibold border-b-2 border-forest-600">Home</Link>
              <Link to="/dashboard" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Dashboard</Link>
              <Link to="/products" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Products</Link>
              <Link to="/services" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Services</Link>
              <Link to="/community" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Community</Link>
              <Link to="/advisor" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Advisors</Link>
              <Link to="/contact" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <HeroSection />

      {/* Weather Widget - Positioned absolutely in top-right */}
      <WeatherWidget />

      {/* Main Content */}
      <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        {/* Featured Services */}
        <FeaturedServices />

        {/* Top Products */}
        <TopProducts />

        {/* Crop Prices */}
        <CropPrices />

        {/* Interactive Map */}
        <InteractiveMap />

        {/* Farming Tip */}
        <FarmingTip />
      </div>

      {/* Footer */}
      <footer className="bg-soil-800 text-wheat-100 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-wheat-100">🌾 FarmHub</h3>
              <p className="text-wheat-200 mb-4">Empowering farmers with modern tools and technology for sustainable agriculture.</p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-wheat-200 hover:text-wheat-100 hover:bg-soil-700">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-wheat-200 hover:text-wheat-100 hover:bg-soil-700">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-wheat-100">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-wheat-200 hover:text-wheat-100 transition-colors">Home</Link></li>
                <li><Link to="/dashboard" className="text-wheat-200 hover:text-wheat-100 transition-colors">Dashboard</Link></li>
                <li><Link to="/products" className="text-wheat-200 hover:text-wheat-100 transition-colors">Products</Link></li>
                <li><Link to="/services" className="text-wheat-200 hover:text-wheat-100 transition-colors">Services</Link></li>
                <li><Link to="/community" className="text-wheat-200 hover:text-wheat-100 transition-colors">Community</Link></li>
                <li><Link to="/advisor" className="text-wheat-200 hover:text-wheat-100 transition-colors">Advisors</Link></li>
                <li><Link to="/contact" className="text-wheat-200 hover:text-wheat-100 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-wheat-100">Explore More</h4>
              <ul className="space-y-2 text-wheat-200">
                <li><Link to="/services-list" className="hover:text-wheat-100 transition-colors">All Services</Link></li>
                <li><Link to="/plant-diseases" className="hover:text-wheat-100 transition-colors">Plant Diseases</Link></li>
                <li><Link to="/profile" className="hover:text-wheat-100 transition-colors">Profile</Link></li>
                <li>📞 (555) 123-FARM</li>
                <li>✉️ hello@farmhub.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-soil-600 mt-8 pt-8 text-center">
            <p className="text-wheat-300">&copy; 2024 FarmHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
