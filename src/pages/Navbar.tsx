
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Palette } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  if (!isVisible) return null;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="text-xl sm:text-2xl font-bold text-forest-700 flex-shrink-0">
            🌾 FarmHub
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-4 xl:space-x-8 items-center">
            {[
              { path: "/", label: "Home" },
              { path: "/dashboard", label: "Dashboard" },
              { path: "/products", label: "Products" },
              { path: "/services", label: "Services" },
              { path: "/weather-theme", label: "Themes", icon: <Palette className="w-4 h-4 mr-1" /> },
              { path: "/community", label: "Community" },
              { path: "/advisor", label: "Advisors" },
              { path: "/contact", label: "Contact" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm xl:text-base text-forest-600 hover:border-b-2 border-forest-600 hover:text-forest-800 font-medium transition-colors flex items-center px-2 py-1"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            <Link to="/login">
              <Button
                variant="outline"
                size="sm"
                className="bg-forest-600 hover:bg-forest-800 text-white hover:text-white transition-colors ml-4"
              >
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-forest-800 focus:outline-none p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 sm:w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-bold text-forest-700">🌾 FarmHub</span>
          <button onClick={toggleMenu} className="p-2">
            <X size={24} className="text-gray-700" />
          </button>
        </div>
        <nav className="flex flex-col space-y-2 p-4">
          {[
            { label: "Home", path: "/" },
            { label: "Dashboard", path: "/dashboard" },
            { label: "Products", path: "/products" },
            { label: "Services", path: "/services" },
            { label: "Themes", path: "/weather-theme", icon: <Palette className="w-4 h-4 mr-2" /> },
            { label: "Community", path: "/community" },
            { label: "Advisors", path: "/advisor" },
            { label: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={toggleMenu}
              className="text-forest-600 hover:text-forest-800 hover:bg-forest-50 font-medium transition-colors flex items-center p-3 rounded-lg"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
          <Link to="/login" onClick={toggleMenu} className="pt-4">
            <Button className="w-full bg-forest-600 hover:bg-forest-800 text-white">
              Login
            </Button>
          </Link>
        </nav>
      </div>

      {/* Backdrop for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
