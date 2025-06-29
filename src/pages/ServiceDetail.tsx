
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
import { CalendarIcon, Clock, MapPin, Star, Users, Phone, ArrowLeft, CheckCircle, Shield, Award, Sparkles, Zap, Heart } from 'lucide-react';
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
        {/* Enhanced Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" asChild className="text-forest-600 hover:text-forest-800 hover:bg-forest-100 transition-all duration-200">
            <Link to="/services">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Enhanced Service Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Premium Hero Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              <img src={service.image} alt={service.title} className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute top-6 right-6 flex gap-3">
                <Badge className="bg-green-600 text-white px-4 py-2 text-sm font-bold shadow-lg">
                  Save ₹{savings}
                </Badge>
                <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-bold shadow-lg">
                  Premium ⭐
                </Badge>
              </div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-sm font-semibold">Professional Service</span>
                </div>
              </div>
            </div>

            {/* Enhanced Service Info */}
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white via-white to-forest-50/30 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                  <div className="flex-1">
                    <CardTitle className="text-3xl lg:text-4xl text-forest-800 mb-4 flex items-center gap-3">
                      {service.title}
                      <Heart className="h-6 w-6 text-red-500" />
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-6 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex">{renderStars(service.rating)}</div>
                        <span className="text-sm font-bold text-gray-700">
                          {service.rating} ({service.reviews} reviews)
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-forest-600">
                        <Clock className="h-5 w-5" />
                        <span className="text-sm font-bold">{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-forest-600">
                        <Users className="h-5 w-5" />
                        <span className="text-sm font-bold">{service.completedJobs}+ completed</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center lg:text-right bg-gradient-to-br from-forest-100 to-forest-200 p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3 justify-center lg:justify-end mb-2">
                      <span className="text-3xl lg:text-4xl font-black text-forest-700">{service.price}</span>
                      <span className="text-xl text-gray-500 line-through">{service.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-600 font-semibold">Per service</p>
                    <Badge className="mt-2 bg-orange-500 text-white">Limited Time!</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-forest-600 text-xl leading-relaxed font-medium">{service.description}</p>
                
                {/* Enhanced Key Benefits */}
                <div className="bg-gradient-to-br from-forest-50 via-white to-wheat-50 p-8 rounded-2xl shadow-inner border border-forest-100">
                  <h3 className="text-2xl font-black text-forest-800 mb-6 flex items-center gap-3">
                    <Award className="h-6 w-6 text-yellow-500" />
                    Key Benefits
                    <Zap className="h-5 w-5 text-yellow-500 animate-pulse" />
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-forest-700 font-bold text-lg">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced What's Included */}
                <div>
                  <h3 className="text-2xl font-black text-forest-800 mb-6 flex items-center gap-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                    What's Included
                  </h3>
                  <div className="space-y-4">
                    {service.includes.map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-r from-white via-forest-50/30 to-white rounded-xl border border-forest-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="w-3 h-3 bg-gradient-to-r from-forest-600 to-forest-700 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                        <span className="text-forest-600 leading-relaxed font-medium text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Service Process */}
                <div>
                  <h3 className="text-2xl font-black text-forest-800 mb-6">Our Service Process</h3>
                  <div className="space-y-6">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start gap-6 p-6 bg-gradient-to-r from-white via-forest-50/50 to-white rounded-2xl border border-forest-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <span className="bg-gradient-to-r from-forest-600 to-forest-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-black flex-shrink-0 shadow-lg">
                          {index + 1}
                        </span>
                        <span className="text-forest-600 leading-relaxed font-bold text-lg">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Booking Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6 shadow-2xl border-0 bg-gradient-to-br from-white via-white to-forest-50/30 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <CalendarIcon className="h-6 w-6 text-forest-600" />
                  Book This Service
                  <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
                </CardTitle>
                <div className="bg-gradient-to-r from-green-100 via-forest-100 to-green-100 p-4 rounded-xl shadow-inner">
                  <p className="text-sm text-green-700 font-bold flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    ✨ 25% off for limited time!
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-black mb-3 block text-forest-800">Select Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal border-2 border-forest-300 hover:border-forest-500 rounded-xl shadow-sm",
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
                    <label className="text-sm font-black mb-3 block text-forest-800">Select Time</label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger className="border-2 border-forest-300 hover:border-forest-500 rounded-xl shadow-sm">
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
                    <label className="text-sm font-black mb-3 block text-forest-800">Your Name</label>
                    <Input
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="border-2 border-forest-300 focus:border-forest-500 rounded-xl shadow-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-black mb-3 block text-forest-800">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-2 border-forest-300 focus:border-forest-500 rounded-xl shadow-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-black mb-3 block text-forest-800">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="+91 12345 67890"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="border-2 border-forest-300 focus:border-forest-500 rounded-xl shadow-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-black mb-3 block text-forest-800">Additional Notes</label>
                    <Textarea
                      placeholder="Any specific requirements..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="border-2 border-forest-300 focus:border-forest-500 rounded-xl shadow-sm"
                      rows={3}
                    />
                  </div>

                  <div className="border-t pt-6 bg-gradient-to-r from-forest-50 to-wheat-50 -mx-6 px-6 rounded-b-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600 font-semibold">Service Price:</span>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-black text-forest-700">{service.price}</span>
                        <span className="text-sm text-gray-500 line-through">{service.originalPrice}</span>
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-forest-600 via-forest-700 to-forest-800 hover:from-forest-700 hover:via-forest-800 hover:to-forest-900 text-white font-black py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 rounded-xl"
                      disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.phone}
                    >
                      <span className="flex items-center gap-2">
                        Book Service - {service.price}
                        <Sparkles className="h-4 w-4 animate-spin" />
                      </span>
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-3 font-medium">
                      💯 No payment required now. Pay after service completion.
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
