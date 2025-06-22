import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Instagram, Youtube, ArrowDown, ArrowUp } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import WeatherWidget from "@/components/WeatherWidget";
import FeaturedServices from "@/components/FeaturedServices";
import TopProducts from "@/components/TopProducts";
import CropPrices from "@/components/CropPrices";

import InteractiveMap from "@/components/InteractiveMap";
import FarmingTip from "@/components/FarmingTip";

const Navbar = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide navbar on /dashboard
    if (location.pathname === "/dashboard") {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [location.pathname]);

  if (!isVisible) return null;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-forest-700">
              🌾 FarmHub
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-forest-800 font-semibold hover:border-b-2 border-forest-600"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="text-forest-600 hover:border-b-2 border-forest-600 hover:text-forest-800 font-medium transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/products"
              className="text-forest-600 hover:border-b-2 border-forest-600 hover:text-forest-800 font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              to="/services"
              className="text-forest-600 hover:border-b-2 border-forest-600 hover:text-forest-800 font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              to="/community"
              className="text-forest-600 hover:text-forest-800 font-medium transition-colors"
            >
              Community
            </Link>
            <Link
              to="/advisor"
              className="text-forest-600 hover:border-b-2 border-forest-600 hover:text-forest-800 font-medium transition-colors"
            >
              Advisors
            </Link>
            <Link
              to="/contact"
              className="text-forest-600 hover:border-b-2 border-forest-600 hover:text-forest-800 font-medium transition-colors"
            >
              Contact
            </Link>
            <Link to="/login">
              <Button
                variant="outline"
                className="bg-forest-600 hover:bg-forest-800 text-white hover:text-white transition-colors"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
