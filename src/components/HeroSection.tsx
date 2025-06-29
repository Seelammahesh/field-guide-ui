
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import WeatherEffects from './WeatherEffects';

const HeroSection = () => {
  const navigate = useNavigate();
  
  const handleBookService = () => {
    // Trigger booking form modal on home page
    const event = new CustomEvent('openBookingForm');
    window.dispatchEvent(event);
  };
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Beautiful green ripened paddy field in 4K quality */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&h=1080&fit=crop&q=90"
          alt="Lush green ripened paddy fields with golden grains ready for harvest - Premium 4K quality"
          className="w-full h-full object-cover scale-110 animate-[ken-burns_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
      </div>

      {/* Weather Effects - contained within hero section */}
      <WeatherEffects />

      {/* Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in leading-tight drop-shadow-2xl">
            Empowering Farmers with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 block mt-2">
              Tools for Success
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 sm:mb-8 animate-fade-in max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            Weather updates, crop prices, and advanced farming solutions at your fingertips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in max-w-lg sm:max-w-none mx-auto">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-forest-600 via-forest-700 to-forest-800 hover:from-forest-700 hover:via-forest-800 hover:to-forest-900 text-white px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm border border-white/20"
              onClick={() => navigate('/dashboard')}
            >
              <span className="flex items-center gap-2">
                Go to Dashboard 📊
                <span className="animate-pulse">→</span>
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/15 hover:bg-white/25 text-white border-2 border-white/40 hover:border-white/60 backdrop-blur-md px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              onClick={handleBookService}
            >
              <span className="flex items-center gap-2">
                Book Services 📅
                <span className="animate-bounce">✨</span>
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-white/80 rounded-full flex justify-center backdrop-blur-sm bg-white/10 shadow-xl">
          <div className="w-1.5 h-3 sm:h-4 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-white/80 text-xs mt-2 font-medium">Scroll Down</p>
      </div>

      {/* Floating Elements for Premium Feel */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-white/50 rounded-full animate-ping"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
    </section>
  );
};

export default HeroSection;
