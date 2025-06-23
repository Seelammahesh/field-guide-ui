
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
import { CalendarIcon, Clock, MapPin, Star, Users, Phone, ArrowLeft } from 'lucide-react';
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
    description: "Comprehensive soil analysis to determine nutrient levels and pH balance for optimal crop growth",
    price: "₹1,500",
    duration: "2-3 hours",
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
    features: ["pH Level Testing", "Nutrient Analysis", "Detailed Report", "Recommendations", "Follow-up Support"],
    includes: [
      "Professional soil sampling from multiple points",
      "Laboratory analysis of nutrient content",
      "pH level measurement and assessment",
      "Detailed written report with recommendations",
      "30-day follow-up consultation"
    ],
    process: [
      "Initial consultation and site assessment",
      "Soil sample collection from designated areas",
      "Laboratory testing and analysis",
      "Report preparation with actionable insights",
      "Results presentation and recommendations"
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-wheat-50 to-forest-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Button variant="ghost" asChild className="text-forest-600 hover:text-forest-800">
            <Link to="/services">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative overflow-hidden rounded-lg">
              <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
            </div>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-forest-800">{service.title}</CardTitle>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-2">
                        <div className="flex">{renderStars(service.rating)}</div>
                        <span className="text-sm text-gray-600">({service.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1 text-forest-600">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-forest-600 text-white text-lg px-4 py-2">{service.price}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-forest-600 mb-6">{service.description}</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-forest-800 mb-3">What's Included</h3>
                    <ul className="space-y-2">
                      {service.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-forest-600 rounded-full mt-2"></div>
                          <span className="text-forest-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-forest-800 mb-3">Service Process</h3>
                    <ol className="space-y-2">
                      {service.process.map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="bg-forest-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                            {index + 1}
                          </span>
                          <span className="text-forest-600">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Book This Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

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
                      placeholder="Any specific requirements..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={3}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-forest-600 hover:bg-forest-700"
                    disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || !formData.phone}
                  >
                    Book Service - {service.price}
                  </Button>
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
