import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, Calendar, Award, Users, Search } from 'lucide-react';

const Advisor = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');

  const advisors = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      title: "Senior Agricultural Consultant",
      specialization: "Crop Disease Management",
      experience: "15+ years",
      rating: 4.9,
      reviews: 324,
      consultations: 1200,
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      location: "Mumbai, Maharashtra",
      languages: ["Hindi", "English", "Marathi"],
      expertise: ["Crop Disease Diagnosis", "Soil Testing", "Pest Management"],
      consultationFee: "₹500/hour",
      availability: "Mon-Sat",
      isVerified: true
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      title: "Soil Health Specialist",
      specialization: "Organic Farming",
      experience: "12+ years",
      rating: 4.8,
      reviews: 267,
      consultations: 890,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=300&h=300&fit=crop&crop=face",
      location: "Delhi, NCR",
      languages: ["Hindi", "English", "Punjabi"],
      expertise: ["Organic Certification", "Soil Management", "Sustainable Practices"],
      consultationFee: "₹450/hour",
      availability: "Tue-Sun",
      isVerified: true
    },
    {
      id: 3,
      name: "Anita Patel",
      title: "Water Management Expert",
      specialization: "Irrigation Systems",
      experience: "10+ years",
      rating: 4.7,
      reviews: 198,
      consultations: 675,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      location: "Ahmedabad, Gujarat",
      languages: ["Hindi", "English", "Gujarati"],
      expertise: ["Drip Irrigation", "Water Conservation", "Smart Farming"],
      consultationFee: "₹400/hour",
      availability: "Mon-Fri",
      isVerified: true
    },
    {
      id: 4,
      name: "Suresh Reddy",
      title: "Crop Nutrition Specialist",
      specialization: "Fertilizer Management",
      experience: "8+ years",
      rating: 4.6,
      reviews: 156,
      consultations: 543,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      location: "Hyderabad, Telangana",
      languages: ["Telugu", "Hindi", "English"],
      expertise: ["Nutrient Management", "Yield Optimization", "Precision Agriculture"],
      consultationFee: "₹350/hour",
      availability: "Mon-Sat",
      isVerified: false
    },
    {
      id: 5,
      name: "Dr. Meera Nair",
      title: "Plant Pathologist",
      specialization: "Disease Prevention",
      experience: "14+ years",
      rating: 4.8,
      reviews: 289,
      consultations: 987,
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face",
      location: "Kochi, Kerala",
      languages: ["Malayalam", "English", "Tamil"],
      expertise: ["Plant Disease Diagnosis", "Integrated Pest Management", "Crop Protection"],
      consultationFee: "₹550/hour",
      availability: "Tue-Sat",
      isVerified: true
    },
    {
      id: 6,
      name: "Vikram Singh",
      title: "Agricultural Technology Expert",
      specialization: "Farm Mechanization",
      experience: "11+ years",
      rating: 4.5,
      reviews: 134,
      consultations: 421,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      location: "Jaipur, Rajasthan",
      languages: ["Hindi", "English", "Rajasthani"],
      expertise: ["Farm Equipment", "Automation", "Technology Integration"],
      consultationFee: "₹450/hour",
      availability: "Mon-Fri",
      isVerified: true
    }
  ];

  const specializations = [...new Set(advisors.map(advisor => advisor.specialization))];

  const filteredAdvisors = advisors.filter(advisor => {
    const matchesSearch = advisor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         advisor.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         advisor.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialization = selectedSpecialization === 'all' || 
                                 advisor.specialization === selectedSpecialization;
    return matchesSearch && matchesSpecialization;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-wheat-50 to-forest-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-forest-800 mb-4">Farm Advisors & Experts</h1>
          <p className="text-xl text-forest-600">Get expert guidance from certified agricultural professionals</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search advisors by name, specialization, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="w-full md:w-64">
            <select
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
            >
              <option value="all">All Specializations</option>
              {specializations.map((spec) => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-forest-700 mb-2">{advisors.length}</div>
              <p className="text-forest-600">Expert Advisors</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-forest-700 mb-2">
                {advisors.filter(a => a.isVerified).length}
              </div>
              <p className="text-forest-600">Verified Experts</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-forest-700 mb-2">
                {advisors.reduce((sum, a) => sum + a.consultations, 0).toLocaleString()}
              </div>
              <p className="text-forest-600">Total Consultations</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-forest-700 mb-2">4.7</div>
              <p className="text-forest-600">Average Rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAdvisors.map((advisor) => (
            <Card key={advisor.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="relative inline-block">
                    <img
                      src={advisor.avatar}
                      alt={advisor.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
                    />
                    {advisor.isVerified && (
                      <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-1">
                        <Award className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-forest-800 mb-1">{advisor.name}</h3>
                  <p className="text-forest-600 mb-2">{advisor.title}</p>
                  <Badge className="mb-3">{advisor.specialization}</Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex">{renderStars(advisor.rating)}</div>
                    <span className="font-semibold">{advisor.rating}</span>
                    <span className="text-forest-600 text-sm">({advisor.reviews} reviews)</span>
                  </div>

                  <div className="text-sm text-forest-600 space-y-1">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{advisor.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      <span>{advisor.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{advisor.consultations}+ consultations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Available: {advisor.availability}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <h4 className="font-medium text-forest-800 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-1">
                      {advisor.expertise.slice(0, 2).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {advisor.expertise.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{advisor.expertise.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-forest-700">{advisor.consultationFee}</span>
                      <div className="flex gap-1">
                        {advisor.languages.slice(0, 2).map((lang, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-forest-600 hover:bg-forest-700" asChild>
                        <Link to={`/advisor/${advisor.id}`}>
                          Book Consultation
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/advisor/${advisor.id}`}>
                          View Profile
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAdvisors.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No advisors found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* CTA Section */}
        <Card className="mt-12 bg-gradient-to-r from-forest-50 to-wheat-50 border-forest-200">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-forest-800 mb-4">
              Need Expert Guidance for Your Farm?
            </h2>
            <p className="text-forest-600 mb-6 max-w-2xl mx-auto">
              Connect with certified agricultural experts and get personalized advice for your farming challenges. 
              From crop diseases to soil management, our advisors are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-forest-600 hover:bg-forest-700">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Free Consultation
              </Button>
              <Button variant="outline" className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white">
                <Phone className="h-4 w-4 mr-2" />
                Call Expert Helpline
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Advisor;
