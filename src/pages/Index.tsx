
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Instagram, Youtube, Calendar } from 'lucide-react';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useIsMobile } from '@/hooks/use-mobile';
import HeroSection from '@/components/HeroSection';
import WeatherWidget from '@/components/WeatherWidget';
import FeaturedServices from '@/components/FeaturedServices';
import TopProducts from '@/components/TopProducts';
import CropPrices from '@/components/CropPrices';
import InteractiveMap from '@/components/InteractiveMap';
import FarmingTip from '@/components/FarmingTip';
import ClimateRecommendations from '@/components/ClimateRecommendations';
import { useWeatherTheme } from '@/contexts/WeatherThemeContext';
import WeatherEffects from '@/components/WeatherEffects';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const isMobile = useIsMobile();

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const services = [
    'Soil Testing & Analysis',
    'Crop Disease Diagnosis', 
    'Irrigation System Setup',
    'Organic Farming Consultation',
    'Pest Control Service',
    'Farm Equipment Rental'
  ];

  const { currentTheme } = useWeatherTheme();

  useEffect(() => {
    setIsVisible(true);
    
    // Listen for booking form open event
    const handleOpenBookingForm = () => {
      setShowBookingForm(true);
    };
    
    window.addEventListener('openBookingForm', handleOpenBookingForm);
    
    return () => {
      window.removeEventListener('openBookingForm', handleOpenBookingForm);
    };
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Service booking:', {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    alert('Service booking request submitted successfully!');
    setShowBookingForm(false);
    // Reset form
    setSelectedDate(undefined);
    setSelectedTime('');
    setSelectedService('');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${currentTheme.colors.background} font-montserrat`}>
      {/* Weather Effects */}
      <WeatherEffects />

      {/* Hero Section */}
      <HeroSection />

      {/* Weather Widget - Positioned absolutely in top-right */}
      <WeatherWidget />

      {/* Climate Recommendations - Below hero */}
      <ClimateRecommendations />

      {/* Quick Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
          <Card className={`w-full ${isMobile ? 'max-w-sm' : 'max-w-lg'} max-h-[90vh] overflow-y-auto`}>
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg lg:text-xl">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                Book a Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium block">Select Service</label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium block">Select Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium block">Select Time</label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium block">Your Name</label>
                  <Input
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium block">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium block">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="+91 12345 67890"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium block">Additional Notes</label>
                  <Textarea
                    placeholder="Any specific requirements..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={3}
                    className="w-full resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-forest-600 hover:bg-forest-700 text-sm sm:text-base h-10 sm:h-11"
                    disabled={!selectedService || !selectedDate || !selectedTime || !formData.name || !formData.email || !formData.phone}
                  >
                    Book Service
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowBookingForm(false)}
                    className="text-sm sm:text-base h-10 sm:h-11"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

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
      <footer className="bg-soil-800 text-wheat-100 py-6 sm:py-8 lg:py-12 mt-8 sm:mt-12 lg:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 text-wheat-100">🌾 FarmHub</h3>
              <p className="text-wheat-200 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">Empowering farmers with modern tools and technology for sustainable agriculture.</p>
              <div className="flex space-x-3 sm:space-x-4">
                <Button variant="ghost" size="sm" className="text-wheat-200 hover:text-wheat-100 hover:bg-soil-700 p-2">
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-wheat-200 hover:text-wheat-100 hover:bg-soil-700 p-2">
                  <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 sm:mb-3 lg:mb-4 text-wheat-100 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-1 sm:space-y-2">
                {[
                  { to: "/", label: "Home" },
                  { to: "/dashboard", label: "Dashboard" },
                  { to: "/products", label: "Products" },
                  { to: "/services", label: "Services" },
                  { to: "/weather-theme", label: "Themes" },
                  { to: "/community", label: "Community" },
                  { to: "/advisor", label: "Advisors" },
                  { to: "/contact", label: "Contact" }
                ].map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-wheat-200 hover:text-wheat-100 transition-colors text-xs sm:text-sm block py-1">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 sm:mb-3 lg:mb-4 text-wheat-100 text-sm sm:text-base">Explore More</h4>
              <ul className="space-y-1 sm:space-y-2 text-wheat-200 text-xs sm:text-sm">
                <li><Link to="/services" className="hover:text-wheat-100 transition-colors block py-1">All Services</Link></li>
                <li><Link to="/plant-diseases" className="hover:text-wheat-100 transition-colors block py-1">Plant Diseases</Link></li>
                <li><Link to="/profile" className="hover:text-wheat-100 transition-colors block py-1">Profile</Link></li>
                <li className="py-1">📞 (555) 123-FARM</li>
                <li className="py-1">✉️ hello@farmhub.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-soil-600 mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 lg:pt-8 text-center">
            <p className="text-wheat-300 text-xs sm:text-sm">&copy; 2024 FarmHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
