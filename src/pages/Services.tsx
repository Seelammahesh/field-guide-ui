
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Clock, MapPin, Star, Users, Phone } from 'lucide-react';
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import image1 from '../../images/image1.jpeg'
import image13 from '../../images/image13.jpeg'
import image18 from '../../images/image18.jpeg'
import image16 from '../../images/image16.jpeg'
import image15 from '../../images/image15.jpeg'
import image9 from '../../images/image9.jpeg'


const Services = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      id: 1,
      title: "Soil Testing & Analysis",
      description: "Comprehensive soil analysis to determine nutrient levels and pH balance",
      price: "₹1,500",
      duration: "2-3 hours",
      rating: 4.8,
      reviews: 156,
      image:image16,
      // image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      features: ["pH Level Testing", "Nutrient Analysis", "Detailed Report", "Recommendations"]
    },
    {
      id: 2,
      title: "Crop Disease Diagnosis",
      description: "Expert diagnosis and treatment recommendations for crop diseases",
      price: "₹2,000",
      duration: "1-2 hours",
      rating: 4.9,
      reviews: 203,
      image:image1,
      // image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=400&h=300&fit=crop",
      features: ["Field Inspection", "Disease Identification", "Treatment Plan", "Follow-up Support"]
    },
    {
      id: 3,
      title: "Irrigation System Setup",
      description: "Professional installation and setup of modern irrigation systems",
      price: "₹15,000",
      duration: "1-2 days",
      rating: 4.7,
      reviews: 89,
      image:image18,
      // image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop",
      features: ["System Design", "Installation", "Training", "Maintenance Support"]
    },
    {
      id: 4,
      title: "Organic Farming Consultation",
      description: "Expert guidance on transitioning to organic farming practices",
      price: "₹3,500",
      duration: "3-4 hours",
      rating: 4.6,
      reviews: 142,
        image:image13,
      // image: "https://images.unsplash.com/photo-1416664806563-bb6be3be8b6f?w=400&h=300&fit=crop",
      features: ["Transition Planning", "Certification Guidance", "Organic Methods", "Market Access"]
    },
    {
      id: 5,
      title: "Pest Control Service",
      description: "Integrated pest management solutions for healthy crops",
      price: "₹2,500",
      duration: "2-3 hours",
      rating: 4.5,
      reviews: 178,
       image:image15,
      // image: "https://images.unsplash.com/photo-1566281796817-93bc94d7dbd2?w=400&h=300&fit=crop",
      features: ["Pest Identification", "Treatment Application", "Prevention Plan", "Regular Monitoring"]
    },
    {
      id: 6,
      title: "Farm Equipment Rental",
      description: "Rent modern farming equipment and machinery",
      price: "₹500/day",
      duration: "Flexible",
      rating: 4.4,
      reviews: 94,
      image:image9,
      // image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&h=300&fit=crop",
      features: ["Various Equipment", "Delivery Available", "Operator Training", "Maintenance Included"]
    }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

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
    // Handle form submission here
    alert('Service scheduled successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-wheat-50 to-forest-50">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-forest-700">🌾 FarmHub</Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Home</Link>
              <Link to="/dashboard" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Dashboard</Link>
              <Link to="/products" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Products</Link>
              <Link to="/services" className="text-forest-800 font-semibold border-b-2 border-forest-600">Services</Link>
              <Link to="/community" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Community</Link>
              <Link to="/advisor" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Advisors</Link>
              <Link to="/contact" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-forest-800 mb-4">Professional Farm Services</h1>
          <p className="text-xl text-forest-600">Expert assistance for all your farming needs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                    />
                    <Badge className="absolute top-2 right-2 bg-forest-600">
                      {service.price}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-forest-700 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex">{renderStars(service.rating)}</div>
                        <span className="text-sm text-gray-600">({service.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-forest-600">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="w-full bg-forest-600 hover:bg-forest-700"
                      onClick={() => setSelectedService(service.title)}
                    >
                      Schedule Service
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Schedule a Service
                </CardTitle>
                <CardDescription>
                  Book an appointment with our farming experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Service Selection */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Select Service</label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.id} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date Selection */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Select Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Select Time</label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger>
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

                  {/* Contact Information */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Name</label>
                    <Input
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="+91 12345 67890"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Additional Notes</label>
                    <Textarea
                      placeholder="Any specific requirements or questions..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={3}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-forest-600 hover:bg-forest-700"
                    disabled={!selectedService || !selectedDate || !selectedTime || !formData.name || !formData.email || !formData.phone}
                  >
                    Book Appointment
                  </Button>
                </form>

                {/* Contact Info */}
                <div className="mt-6 p-4 bg-forest-50 rounded-lg">
                  <h4 className="font-semibold text-forest-800 mb-2">Need Help?</h4>
                  <div className="space-y-1 text-sm text-forest-600">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>(555) 123-FARM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Available across all districts</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
