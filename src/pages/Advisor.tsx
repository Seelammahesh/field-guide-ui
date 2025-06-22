
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { User, Star, Video, Phone, MessageCircle, Calendar as CalendarIcon, Clock, Award } from 'lucide-react';

const Advisor = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedAdvisor, setSelectedAdvisor] = useState<number | null>(null);

  const advisors = [
    {
      id: 1,
      name: 'Dr. Rajesh Patel',
      specialty: 'Crop Health',
      experience: '15 years',
      rating: 4.9,
      consultations: 1250,
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Expert in crop disease management and organic farming practices. PhD in Plant Pathology.',
      languages: ['Hindi', 'English', 'Gujarati'],
      availability: 'Available Today',
      hourlyRate: '₹500/hour',
      nextSlot: '2:00 PM - 3:00 PM'
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      specialty: 'Soil Management',
      experience: '12 years',
      rating: 4.8,
      consultations: 980,
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Specialist in soil health assessment and nutrient management. Expert in precision agriculture.',
      languages: ['Hindi', 'English'],
      availability: 'Available Tomorrow',
      hourlyRate: '₹450/hour',
      nextSlot: '10:00 AM - 11:00 AM'
    },
    {
      id: 3,
      name: 'Prof. Amitesh Kumar',
      specialty: 'Irrigation Systems',
      experience: '20 years',
      rating: 4.9,
      consultations: 1500,
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Leading expert in modern irrigation techniques and water conservation methods.',
      languages: ['Hindi', 'English', 'Bengali'],
      availability: 'Available Today',
      hourlyRate: '₹600/hour',
      nextSlot: '4:00 PM - 5:00 PM'
    },
    {
      id: 4,
      name: 'Dr. Sunita Verma',
      specialty: 'Organic Farming',
      experience: '18 years',
      rating: 4.7,
      consultations: 1100,
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Pioneer in organic farming methods and sustainable agriculture practices in India.',
      languages: ['Hindi', 'English', 'Marathi'],
      availability: 'Available Today',
      hourlyRate: '₹550/hour',
      nextSlot: '6:00 PM - 7:00 PM'
    },
    {
      id: 5,
      name: 'Dr. Vikram Singh',
      specialty: 'Pest Management',
      experience: '14 years',
      rating: 4.8,
      consultations: 890,
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Expert in integrated pest management and biological control methods.',
      languages: ['Hindi', 'English', 'Punjabi'],
      availability: 'Available Tomorrow',
      hourlyRate: '₹480/hour',
      nextSlot: '9:00 AM - 10:00 AM'
    },
    {
      id: 6,
      name: 'Dr. Meera Joshi',
      specialty: 'Market Analysis',
      experience: '10 years',
      rating: 4.6,
      consultations: 650,
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Agricultural economist specializing in crop price forecasting and market trends.',
      languages: ['Hindi', 'English'],
      availability: 'Available Today',
      hourlyRate: '₹400/hour',
      nextSlot: '1:00 PM - 2:00 PM'
    }
  ];

  const featuredAdvisor = advisors[0]; // Dr. Rajesh Patel as featured

  const consultationTypes = [
    { id: 'video', name: 'Video Call', icon: Video, duration: '30-60 min', popular: true },
    { id: 'phone', name: 'Phone Call', icon: Phone, duration: '30-45 min', popular: false },
    { id: 'chat', name: 'Live Chat', icon: MessageCircle, duration: '15-30 min', popular: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-wheat-50 to-forest-50 font-montserrat">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-forest-700">🌾 FarmHub</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Home</a>
              <a href="/dashboard" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Dashboard</a>
              <a href="/products" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Products</a>
              <a href="/services" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Services</a>
              <a href="/advisor" className="text-forest-800 font-semibold border-b-2 border-forest-600">Advisors</a>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-forest-600 to-forest-700">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Agricultural advisors"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Meet Our Advisors</h1>
          <p className="text-xl text-wheat-100 max-w-3xl mx-auto">
            Get expert guidance from certified agricultural specialists to maximize your farm's potential.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Advisor Spotlight */}
        <Card className="mb-12 bg-gradient-to-r from-forest-50 to-wheat-50 border-forest-200">
          <CardHeader>
            <CardTitle className="text-2xl text-forest-700 flex items-center gap-2">
              <Award className="h-6 w-6" />
              Advisor Spotlight - Expert of the Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <img
                  src={featuredAdvisor.image}
                  alt={featuredAdvisor.name}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-bold text-forest-800">{featuredAdvisor.name}</h3>
                  <Badge className="bg-gold-100 text-gold-800">⭐ Featured</Badge>
                </div>
                <div className="flex items-center gap-4 text-forest-600">
                  <span className="font-medium">{featuredAdvisor.specialty}</span>
                  <span>•</span>
                  <span>{featuredAdvisor.experience}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{featuredAdvisor.rating}</span>
                  </div>
                </div>
                <p className="text-forest-600 text-lg">{featuredAdvisor.bio}</p>
                <div className="flex items-center gap-4">
                  <span className="text-forest-700 font-medium">Next Available:</span>
                  <Badge variant="outline" className="border-green-300 text-green-700">
                    {featuredAdvisor.nextSlot}
                  </Badge>
                </div>
                <Button size="lg" className="bg-forest-600 hover:bg-forest-700">
                  <Video className="h-5 w-5 mr-2" />
                  Book Consultation Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Booking Form Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-forest-700">Book Consultation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">Consultation Type</label>
                  <div className="space-y-2">
                    {consultationTypes.map((type) => {
                      const IconComponent = type.icon;
                      return (
                        <div
                          key={type.id}
                          className="flex items-center p-3 border border-forest-200 rounded-lg hover:bg-forest-50 cursor-pointer"
                        >
                          <IconComponent className="h-5 w-5 text-forest-600 mr-3" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-forest-800">{type.name}</span>
                              {type.popular && (
                                <Badge className="bg-forest-100 text-forest-700 text-xs">Popular</Badge>
                              )}
                            </div>
                            <span className="text-sm text-forest-600">{type.duration}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">Select Date</label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border border-forest-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">Preferred Time</label>
                  <select className="w-full p-2 border border-forest-200 rounded-lg focus:ring-2 focus:ring-forest-500">
                    <option>9:00 AM - 10:00 AM</option>
                    <option>10:00 AM - 11:00 AM</option>
                    <option>11:00 AM - 12:00 PM</option>
                    <option>2:00 PM - 3:00 PM</option>
                    <option>3:00 PM - 4:00 PM</option>
                    <option>4:00 PM - 5:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">Topic/Issue</label>
                  <textarea
                    className="w-full p-2 border border-forest-200 rounded-lg focus:ring-2 focus:ring-forest-500"
                    rows={3}
                    placeholder="Briefly describe your farming issue or question..."
                  />
                </div>

                <Button className="w-full bg-forest-600 hover:bg-forest-700">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Advisors Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-forest-700 mb-2">Our Expert Advisors</h2>
              <p className="text-forest-600">Choose from our certified agricultural specialists</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advisors.map((advisor) => (
                <Card 
                  key={advisor.id} 
                  className={`hover:shadow-lg transition-all cursor-pointer group ${
                    selectedAdvisor === advisor.id ? 'ring-2 ring-forest-500 bg-forest-50' : ''
                  }`}
                  onClick={() => setSelectedAdvisor(advisor.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-forest-200"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-forest-800">{advisor.name}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{advisor.rating}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="border-forest-300 text-forest-700">
                              {advisor.specialty}
                            </Badge>
                            <span className="text-forest-600">{advisor.experience}</span>
                          </div>
                          
                          <p className="text-forest-600 line-clamp-2">{advisor.bio}</p>
                          
                          <div className="flex items-center justify-between text-xs text-forest-500">
                            <span>{advisor.consultations} consultations</span>
                            <span className="font-medium text-forest-700">{advisor.hourlyRate}</span>
                          </div>
                          
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span className="text-xs">Next slot: {advisor.nextSlot}</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-1 mt-2">
                            {advisor.languages.map((lang) => (
                              <Badge key={lang} variant="secondary" className="text-xs">
                                {lang}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-forest-200">
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1 border-forest-300 text-forest-700 hover:bg-forest-50"
                        >
                          View Profile
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1 bg-forest-600 hover:bg-forest-700"
                        >
                          <Video className="h-3 w-3 mr-1" />
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Live Chat Widget */}
            <Card className="mt-8 bg-gradient-to-r from-blue-50 to-forest-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-forest-800">Need Immediate Help?</h3>
                    <p className="text-forest-600">Start a live chat with our support team for quick queries</p>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Start Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisor;
