import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-forest-700">
            🌾 FarmHub
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-8 items-center">
            {["/", "/dashboard", "/products", "/services", "/community", "/advisor", "/contact"].map((path, index) => (
              <Link
                key={path}
                to={path}
                className="text-forest-600 hover:border-b-2 border-forest-600 hover:text-forest-800 font-medium transition-colors"
              >
                {["Home", "Dashboard", "Products", "Services", "Community", "Advisors", "Contact"][index]}
              </Link>
            ))}
            <Link to="/login">
              <Button
                variant="outline"
                className="bg-forest-600 hover:bg-forest-800 text-white hover:text-white transition-colors"
              >
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-forest-800 focus:outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          🌾 FarmHub
          <button onClick={toggleMenu}>
            <X size={24} className="text-gray-700" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          {[
            { label: "Home", path: "/" },
            { label: "Dashboard", path: "/dashboard" },
            { label: "Products", path: "/products" },
            { label: "Services", path: "/services" },
            { label: "Community", path: "/community" },
            { label: "Advisors", path: "/advisor" },
            { label: "Contact", path: "/contact" },
          ].map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={toggleMenu}
              className="text-forest-600 hover:text-forest-800 font-medium transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link to="/login" onClick={toggleMenu}>
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
