
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  Wrench, 
  Tractor, 
  Wheat, 
  Scissors, 
  Settings, 
  Truck, 
  MapPin, 
  Clock,
  Star,
  ChevronDown
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Services = () => {
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedServiceType, setSelectedServiceType] = useState('All Services');

  const fieldServices = [
    {
      id: 1,
      icon: Tractor,
      name: "Ploughing Service",
      description: "Professional field ploughing for optimal soil preparation",
      price: "₹500/acre",
      duration: "2-3 hours per acre",
      location: "Rural Valley",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      icon: Settings,
      name: "Rotavation",
      description: "Modern rotavator services for perfect seedbed preparation",
      price: "₹400/acre",
      duration: "1-2 hours per acre",
      location: "Green Fields",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      icon: Wheat,
      name: "Harvesting",
      description: "Efficient crop harvesting with modern equipment",
      price: "₹800/acre",
      duration: "3-4 hours per acre",
      location: "Rural Valley",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      icon: Truck,
      name: "Cultivation",
      description: "Complete cultivation services for all crop types",
      price: "₹600/acre",
      duration: "2-3 hours per acre",
      location: "Farm Hills",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      icon: Scissors,
      name: "Pruning Services",
      description: "Expert pruning for fruit trees and vineyards",
      price: "₹300/tree",
      duration: "30 min per tree",
      location: "Green Fields",
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      icon: Truck,
      name: "Seeding Service",
      description: "Precision seeding with latest technology",
      price: "₹450/acre",
      duration: "1-2 hours per acre",
      location: "Farm Hills",
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const equipmentRepairs = [
    {
      id: 7,
      icon: Wrench,
      name: "Tractor Repair",
      description: "Complete tractor maintenance and repair services",
      price: "₹2000-5000",
      duration: "2-6 hours",
      location: "All Locations",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 8,
      icon: Settings,
      name: "Sprayer Repair",
      description: "Professional sprayer maintenance and calibration",
      price: "₹800-2000",
      duration: "1-3 hours",
      location: "Rural Valley",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 9,
      icon: Wrench,
      name: "Harvester Repair",
      description: "Expert harvester repair and maintenance",
      price: "₹3000-8000",
      duration: "3-8 hours",
      location: "Green Fields",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 10,
      icon: Settings,
      name: "Irrigation Repair",
      description: "Irrigation system installation and repair",
      price: "₹1500-4000",
      duration: "2-5 hours",
      location: "Farm Hills",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 11,
      icon: Wrench,
      name: "Pump Repair",
      description: "Water pump repair and installation services",
      price: "₹1000-3000",
      duration: "1-4 hours",
      location: "All Locations",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 12,
      icon: Settings,
      name: "Equipment Maintenance",
      description: "Regular maintenance for all farm equipment",
      price: "₹500-2500",
      duration: "1-3 hours",
      location: "Rural Valley",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const otherServices = [
    {
      id: 13,
      icon: Truck,
      name: "Crop Transportation",
      description: "Safe and reliable crop transportation services",
      price: "₹5/km/quintal",
      duration: "Based on distance",
      location: "All Locations",
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 14,
      icon: Settings,
      name: "Soil Testing",
      description: "Comprehensive soil analysis and recommendations",
      price: "₹500/sample",
      duration: "3-5 days",
      location: "Green Fields",
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 15,
      icon: Wheat,
      name: "Storage Solutions",
      description: "Modern storage facilities for your harvest",
      price: "₹50/quintal/month",
      duration: "Monthly basis",
      location: "Farm Hills",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 16,
      icon: Scissors,
      name: "Consulting Services",
      description: "Expert agricultural consulting and planning",
      price: "₹1000/hour",
      duration: "1-2 hours",
      location: "All Locations",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 17,
      icon: Truck,
      name: "Land Preparation",
      description: "Complete land preparation for new crops",
      price: "₹1200/acre",
      duration: "4-6 hours per acre",
      location: "Rural Valley",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 18,
      icon: Settings,
      name: "Pest Control",
      description: "Integrated pest management solutions",
      price: "₹800/acre",
      duration: "2-3 hours per acre",
      location: "Green Fields",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Rural Valley",
      quote: "FarmHub's ploughing service saved me so much time. Professional and reliable!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Green Fields",
      quote: "The harvesting service was excellent. They handled my wheat crop with great care.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b566?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Farm Hills",
      quote: "Quick tractor repair service. Got my equipment back to work in no time!",
      rating: 4,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Sunita Devi",
      location: "Rural Valley",
      quote: "The soil testing service provided valuable insights for my next crop season.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Green Fields",
      quote: "Professional irrigation repair service. Highly recommend FarmHub!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const locations = ['All Locations', 'Rural Valley', 'Green Fields', 'Farm Hills'];
  const serviceTypes = ['All Services', 'Field Services', 'Equipment Repairs', 'Other Services'];

  const filterServices = (services: any[]) => {
    return services.filter(service => {
      const locationMatch = selectedLocation === 'All Locations' || service.location === selectedLocation;
      return locationMatch;
    });
  };

  const ServiceCard = ({ service }: { service: any }) => {
    const IconComponent = service.icon;
    
    return (
      <Card className="group hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-forest-300 bg-white">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={service.image} 
            alt={service.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-forest-600 text-white">
              {service.price}
            </Badge>
          </div>
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-forest-100 rounded-full group-hover:bg-forest-200 transition-colors">
              <IconComponent className="h-6 w-6 text-forest-600 animate-pulse group-hover:animate-spin" />
            </div>
            <CardTitle className="text-lg text-forest-700">{service.name}</CardTitle>
          </div>
          <CardDescription className="text-soil-600">{service.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-soil-500">
              <Clock className="h-4 w-4" />
              <span>{service.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-soil-500">
              <MapPin className="h-4 w-4" />
              <span>{service.location}</span>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-forest-50 p-3 rounded-lg">
              <p className="text-sm text-forest-700 font-medium">Additional Details:</p>
              <p className="text-xs text-forest-600 mt-1">Professional service with modern equipment and experienced operators. Available 7 days a week.</p>
            </div>
            <Button className="w-full bg-forest-600 hover:bg-forest-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Book Now
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-wheat-50 to-forest-50 font-montserrat">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-forest-700">🌾 FarmHub</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Home</a>
              <a href="/dashboard" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Dashboard</a>
              <a href="#" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Products</a>
              <a href="/services" className="text-forest-800 font-semibold border-b-2 border-forest-600">Services</a>
              <a href="#" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Community</a>
              <a href="#" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-forest-600 to-forest-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Farming Services
          </h1>
          <p className="text-xl md:text-2xl text-forest-100 max-w-3xl mx-auto animate-fade-in">
            Reliable solutions for all your farming needs
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-48 justify-between">
                  {selectedLocation}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {locations.map((location) => (
                  <DropdownMenuItem key={location} onSelect={() => setSelectedLocation(location)}>
                    {location}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-48 justify-between">
                  {selectedServiceType}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {serviceTypes.map((type) => (
                  <DropdownMenuItem key={type} onSelect={() => setSelectedServiceType(type)}>
                    {type}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="field" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-wheat-100">
              <TabsTrigger value="field" className="text-lg font-semibold">Field Services</TabsTrigger>
              <TabsTrigger value="equipment" className="text-lg font-semibold">Equipment Repairs</TabsTrigger>
              <TabsTrigger value="other" className="text-lg font-semibold">Other Services</TabsTrigger>
            </TabsList>

            <TabsContent value="field" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterServices(fieldServices).map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="equipment" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterServices(equipmentRepairs).map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="other" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterServices(otherServices).map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-soil-100 to-wheat-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-soil-600 mb-8">
            Book your service today and experience the difference professional farming support makes.
          </p>
          <Button 
            size="lg" 
            className="bg-forest-600 hover:bg-forest-700 text-white px-12 py-4 text-xl font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Schedule a Service Today 📅
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-4">
              What Our Farmers Say
            </h2>
            <p className="text-xl text-soil-600">
              Real experiences from our satisfied customers
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-gradient-to-br from-wheat-50 to-forest-50 border-2 border-wheat-200 hover:border-forest-300 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-forest-700">{testimonial.name}</h4>
                          <p className="text-sm text-soil-500">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current text-wheat-500" />
                        ))}
                      </div>
                      <p className="text-soil-700 italic">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-soil-800 text-wheat-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-wheat-100">🌾 FarmHub</h3>
              <p className="text-wheat-200 mb-4">Empowering farmers with modern tools and technology for sustainable agriculture.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-wheat-100">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-wheat-200 hover:text-wheat-100 transition-colors">Home</a></li>
                <li><a href="/dashboard" className="text-wheat-200 hover:text-wheat-100 transition-colors">Dashboard</a></li>
                <li><a href="/services" className="text-wheat-200 hover:text-wheat-100 transition-colors">Services</a></li>
                <li><a href="#" className="text-wheat-200 hover:text-wheat-100 transition-colors">Products</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-wheat-100">Contact Info</h4>
              <ul className="space-y-2 text-wheat-200">
                <li>📞 (555) 123-FARM</li>
                <li>✉️ hello@farmhub.com</li>
                <li>📍 Rural Valley, State 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-soil-600 mt-8 pt-8 text-center">
            <p className="text-wheat-300">&copy; 2024 FarmHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
