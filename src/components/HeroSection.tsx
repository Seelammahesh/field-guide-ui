
import { Button } from "@/components/ui/button";
import hero from '../../images/heroImage.jpg'
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
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
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Empowering Farmers with Tools for Success
        </h1>
        <p className="text-xl md:text-2xl text-wheat-100 mb-8 animate-fade-in">
          Weather updates, crop prices, and more at your fingertips
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            onClick={() => navigate('/dashboard')}
          >
            Go to Dashboard 📊
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-soil-600 hover:bg-soil-700 text-white border-soil-600 hover:border-soil-700 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            onClick={() => {
              const bookingSection = document.querySelector('#booking-form');
              if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                // Trigger booking form modal
                const event = new CustomEvent('openBookingForm');
                window.dispatchEvent(event);
              }
            }}
          >
            Book Services 📅
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
