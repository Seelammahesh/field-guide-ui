
import { Button } from "@/components/ui/button";
import hero from '../../images/heroImage.jpg'
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  const handleBookService = () => {
    // Trigger booking form modal on home page
    const event = new CustomEvent('openBookingForm');
    window.dispatchEvent(event);
  };
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Golden wheat fields"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in leading-tight">
          Empowering Farmers with Tools for Success
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-wheat-100 mb-6 sm:mb-8 animate-fade-in max-w-4xl mx-auto leading-relaxed">
          Weather updates, crop prices, and more at your fingertips
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in max-w-lg sm:max-w-none mx-auto">
          <Button 
            size="lg" 
            className="bg-forest-600 hover:bg-forest-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            onClick={() => navigate('/dashboard')}
          >
            Go to Dashboard 📊
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-soil-600 hover:bg-soil-700 text-white border-soil-600 hover:border-soil-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            onClick={handleBookService}
          >
            Book Services 📅
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
