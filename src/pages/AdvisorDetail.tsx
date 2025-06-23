
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Star, MapPin, Phone, Mail, Calendar as CalendarIcon, ArrowLeft, Award, Users } from 'lucide-react';
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const AdvisorDetail = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [consultationType, setConsultationType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    farmSize: '',
    cropType: '',
    issue: ''
  });

  const advisor = {
    id: parseInt(id || '1'),
    name: "Dr. Rajesh Kumar",
    title: "Senior Agricultural Consultant",
    specialization: "Crop Disease Management & Soil Health",
    experience: "15+ years",
    rating: 4.9,
    reviews: 324,
    consultations: 1200,
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    location: "Mumbai, Maharashtra",
    languages: ["Hindi", "English", "Marathi"],
    education: [
      "Ph.D. in Agricultural Sciences - IARI, Delhi",
      "M.Sc. in Plant Pathology - GBPUAT, Pantnagar"
    ],
    certifications: [
      "Certified Crop Advisor (CCA)",
      "Integrated Pest Management Specialist",
      "Soil Health Certification"
    ],
    expertise: [
      "Crop Disease Diagnosis",
      "Soil Testing & Analysis",
      "Pest Management",
      "Organic Farming",
      "Yield Optimization",
      "Sustainable Agriculture"
    ],
    about: "Dr. Rajesh Kumar is a renowned agricultural consultant with over 15 years of experience in crop management and soil health. He has helped thousands of farmers increase their yield while maintaining sustainable farming practices.",
    consultationFee: "₹500/hour",
    availability: "Mon-Sat, 9 AM - 6 PM"
  };

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const consultationTypes = [
    'Crop Disease Diagnosis',
    'Soil Health Assessment',
    'Pest Management',
    'Fertilizer Recommendation',
    'General Farm Consultation'
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
    console.log('Consultation booking:', {
      advisor: advisor.name,
      date: selectedDate,
      time: selectedTime,
      type: consultationType,
      ...formData
    });
    alert('Consultation booked successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-wheat-50 to-forest-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Button variant="ghost" asChild className="text-forest-600 hover:text-forest-800">
            <Link to="/advisor">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Advisors
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Advisor Profile */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <img
                    src={advisor.avatar}
                    alt={advisor.name}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-forest-800 mb-2">{advisor.name}</h1>
                    <p className="text-xl text-forest-600 mb-2">{advisor.title}</p>
                    <p className="text-forest-600 mb-4">{advisor.specialization}</p>
                    
                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex">{renderStars(advisor.rating)}</div>
                        <span className="font-semibold">{advisor.rating}</span>
                        <span className="text-forest-600">({advisor.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-forest-600" />
                        <span className="text-forest-600">{advisor.consultations}+ consultations</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-forest-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{advisor.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        <span>{advisor.experience} experience</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex gap-2">
                        {advisor.languages.map((lang) => (
                          <Badge key={lang} variant="outline">{lang}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-forest-800">About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-forest-600 leading-relaxed">{advisor.about}</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-forest-800">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {advisor.education.map((edu, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-forest-600 rounded-full mt-2"></div>
                        <span className="text-forest-600">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-forest-800">Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {advisor.certifications.map((cert, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-forest-600 rounded-full mt-2"></div>
                        <span className="text-forest-600">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-forest-800">Areas of Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {advisor.expertise.map((skill) => (
                    <Badge key={skill} className="bg-forest-100 text-forest-700">{skill}</Badge>
                  ))}
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
                  Book Consultation
                </CardTitle>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-forest-700">{advisor.consultationFee}</span>
                  <span className="text-sm text-forest-600">{advisor.availability}</span>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Consultation Type</label>
                    <Select value={consultationType} onValueChange={setConsultationType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select consultation type" />
                      </SelectTrigger>
                      <SelectContent>
                        {consultationTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

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
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input
                      type="tel"
                      placeholder="+91 12345 67890"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Farm Size</label>
                    <Input
                      placeholder="e.g., 5 acres"
                      value={formData.farmSize}
                      onChange={(e) => handleInputChange('farmSize', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Crop Type</label>
                    <Input
                      placeholder="e.g., Wheat, Rice"
                      value={formData.cropType}
                      onChange={(e) => handleInputChange('cropType', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Describe Your Issue</label>
                    <Textarea
                      placeholder="Please describe your farming issue or question..."
                      value={formData.issue}
                      onChange={(e) => handleInputChange('issue', e.target.value)}
                      rows={3}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-forest-600 hover:bg-forest-700"
                    disabled={!selectedDate || !selectedTime || !consultationType || !formData.name || !formData.email || !formData.phone || !formData.issue}
                  >
                    Book Consultation - {advisor.consultationFee}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-forest-50 rounded-lg">
                  <h4 className="font-semibold text-forest-800 mb-2">Contact Information</h4>
                  <div className="space-y-1 text-sm text-forest-600">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>rajesh.kumar@farmhub.com</span>
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

export default AdvisorDetail;
