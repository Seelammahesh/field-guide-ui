
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Clock, MapPin, Star, Users, Phone, ArrowLeft, CheckCircle, Shield, Award } from 'lucide-react';
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const ServiceDetail = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const service = {
    id: parseInt(id || '1'),
    title: "Soil Testing & Analysis",
    description: "Comprehensive soil analysis to determine nutrient levels and pH balance for optimal crop growth. Our expert team uses advanced laboratory techniques to provide detailed insights about your soil health.",
    price: "₹1,500",
    originalPrice: "₹2,000",
    duration: "2-3 hours",
    rating: 4.8,
    reviews: 156,
    completedJobs: 1200,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=500&fit=crop&q=80",
    features: ["pH Level Testing", "Nutrient Analysis", "Detailed Report", "Recommendations", "Follow-up Support"],
    includes: [
      "Professional soil sampling from multiple points across your field",
      "Comprehensive laboratory analysis of macro and micronutrient content",
      "pH level measurement and soil acidity assessment",
      "Detailed written report with actionable insights and recommendations",
      "30-day follow-up consultation with our agricultural experts",
      "Digital copy of results accessible anytime"
    ],
    process: [
      "Initial consultation and site assessment with our expert team",
      "Strategic soil sample collection from designated areas",
      "Advanced laboratory testing and comprehensive analysis",
      "Detailed report preparation with actionable insights",
      "Results presentation and personalized recommendations"
    ],
    benefits: [
      "Increase crop yield by up to 30%",
      "Optimize fertilizer usage and reduce costs",
      "Prevent soil degradation and maintain health",
      "Make data-driven farming decisions"
    ]
  };

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
      service: service.title,
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    alert('Service booked successfully!');
  };

  const savings = parseInt(service.originalPrice.replace('₹', '')) - parseInt(service.price.replace('₹', ''));

  return (
    <div className="min-h-screen bg-gradient-to-br from-wheat-50 via-white to-forest-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Button variant="ghost" asChild className="text-forest-600 hover:text-forest-800 hover:bg-forest-50">
            <Link to="/services">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Service Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img src={service.image} alt={service.title} className="w-full h-72 lg:h-80 object-cover" />
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-600 text-white px-3 py-1 text-sm font-semibold">
                  Save ₹{savings}
                </Badge>
              </div>
            </div>

            {/* Service Info */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl lg:text-3xl text-forest-800 mb-3">{service.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex">{renderStars(service.rating)}</div>
                        <span className="text-sm font-medium text-gray-700">
                          {service.rating} ({service.reviews} reviews)
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-forest-600">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm font-medium">{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-forest-600">
                        <Users className="h-4 w-4" />
                        <span className="text-sm font-medium">{service.completedJobs}+ completed</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 justify-end mb-1">
                      <span className="text-2xl lg:text-3xl font-bold text-forest-700">{service.price}</span>
                      <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-600">Per service</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-forest-600 text-lg leading-relaxed">{service.description}</p>
                
                {/* Key Benefits */}
                <div className="bg-gradient-to-r from-forest-50 to-wheat-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-forest-800 mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Key Benefits
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-forest-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What's Included */}
                <div>
                  <h3 className="text-xl font-semibold text-forest-800 mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    What's Included
                  </h3>
                  <div className="space-y-3">
                    {service.includes.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-forest-100">
                        <div className="w-2 h-2 bg-forest-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-forest-600 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Process */}
                <div>
                  <h3 className="text-xl font-semibold text-forest-800 mb-4">Service Process</h3>
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-white to-forest-50 rounded-lg border border-forest-100">
                        <span className="bg-forest-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-forest-600 leading-relaxed font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6 shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <CalendarIcon className="h-5 w-5 text-forest-600" />
                  Book This Service
                </CardTitle>
                <div className="bg-gradient-to-r from-green-50 to-forest-50 p-3 rounded-lg">
                  <p className="text-sm text-green-700 font-medium">✨ 25% off for limited time!</p>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm font-semibold mb-3 block text-forest-800">Select Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal border-forest-200 hover:border-forest-400",
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
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-3 block text-forest-800">Select Time</label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger className="border-forest-200 hover:border-forest-400">
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

                  <div>
                    <label className="text-sm font-semibold mb-3 block text-forest-800">Your Name</label>
                    <Input
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="border-forest-200 focus:border-forest-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-3 block text-forest-800">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-forest-200 focus:border-forest-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-3 block text-forest-800">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="+91 12345 67890"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="border-forest-200 focus:border-forest-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-3 block text-forest-800">Additional Notes</label>
                    <Textarea
                      placeholder="Any specific requirements..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="border-forest-200 focus:border-forest-400"
                      rows={3}
                    />
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-600">Service Price:</span>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-forest-700">{service.price}</span>
                        <span className="text-sm text-gray-500 line-through">{service.originalPrice}</span>
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                      disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.phone}
                    >
                      Book Service - {service.price}
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      No payment required now. Pay after service completion.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
