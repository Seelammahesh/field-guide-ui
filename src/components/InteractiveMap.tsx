
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, Navigation, Phone, Clock, Star } from 'lucide-react';

const InteractiveMap = () => {
  const [selectedProvider, setSelectedProvider] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const serviceProviders = [
    { 
      id: 1, 
      name: 'Green Valley Equipment', 
      type: 'Equipment Rental', 
      distance: '2.3 miles',
      rating: 4.8,
      phone: '+1 (555) 123-4567',
      address: '123 Farm Road, Green Valley',
      hours: 'Mon-Sat: 8AM-6PM',
      services: ['Tractor Rental', 'Harvester', 'Irrigation Equipment'],
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    { 
      id: 2, 
      name: 'Farm Supply Co.', 
      type: 'Supplies Store', 
      distance: '1.8 miles',
      rating: 4.6,
      phone: '+1 (555) 234-5678',
      address: '456 Market Street, Farmville',
      hours: 'Daily: 7AM-8PM',
      services: ['Seeds', 'Fertilizers', 'Tools', 'Feed'],
      coordinates: { lat: 40.7580, lng: -73.9855 }
    },
    { 
      id: 3, 
      name: 'AgriTech Services', 
      type: 'Repair Services', 
      distance: '3.1 miles',
      rating: 4.9,
      phone: '+1 (555) 345-6789',
      address: '789 Tech Avenue, Innovation Park',
      hours: 'Mon-Fri: 9AM-5PM',
      services: ['Equipment Repair', 'Maintenance', 'Installation'],
      coordinates: { lat: 40.7614, lng: -73.9776 }
    },
    { 
      id: 4, 
      name: 'Organic Solutions', 
      type: 'Organic Products', 
      distance: '4.2 miles',
      rating: 4.7,
      phone: '+1 (555) 456-7890',
      address: '321 Organic Lane, Natural Valley',
      hours: 'Tue-Sun: 8AM-7PM',
      services: ['Organic Fertilizers', 'Bio-pesticides', 'Compost'],
      coordinates: { lat: 40.7505, lng: -73.9934 }
    }
  ];

  const filteredProviders = serviceProviders.filter(provider =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    provider.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    provider.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Generate Google Maps embed URL with markers
  const generateMapUrl = () => {
    const baseUrl = 'https://www.google.com/maps/embed/v1/place';
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // User needs to add this
    const location = selectedProvider 
      ? `${selectedProvider.coordinates.lat},${selectedProvider.coordinates.lng}`
      : '40.7128,-74.0060'; // Default to NYC area
    
    return `${baseUrl}?key=${apiKey}&q=${location}&zoom=12&maptype=roadmap`;
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8 bg-wheat-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-800 mb-3 sm:mb-4">Find Nearby Services</h2>
          <p className="text-base sm:text-lg lg:text-xl text-forest-600">
            Locate service providers and suppliers in your area
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-4 sm:mb-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search services, providers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Google Maps */}
          <Card className="bg-white shadow-xl border-forest-200">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-forest-700 flex items-center gap-2 text-base sm:text-lg">
                🗺️ Service Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden">
                <iframe
                  src={generateMapUrl()}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Service Provider Locations"
                ></iframe>
                
                {/* Overlay for API key notice */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center p-4 bg-white/90 rounded-lg shadow-lg max-w-sm">
                    <MapPin className="h-12 w-12 text-forest-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-forest-800 mb-2">Google Maps Integration</h3>
                    <p className="text-sm text-forest-600 mb-4">
                      To enable Google Maps, please add your Google Maps API key to the project settings.
                    </p>
                    <Button 
                      size="sm" 
                      className="bg-forest-600 hover:bg-forest-700"
                      onClick={() => window.open('https://developers.google.com/maps/documentation/embed/get-api-key', '_blank')}
                    >
                      Get API Key
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Providers List */}
          <Card className="bg-white shadow-xl border-forest-200">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-forest-700 flex items-center gap-2 text-base sm:text-lg">
                📍 Service Providers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4 max-h-96 overflow-y-auto">
                {filteredProviders.map((provider) => (
                  <div 
                    key={provider.id} 
                    className={`p-3 sm:p-4 border rounded-lg transition-all cursor-pointer hover:shadow-md ${
                      selectedProvider?.id === provider.id 
                        ? 'border-forest-600 bg-forest-50 shadow-md' 
                        : 'border-forest-200 hover:bg-forest-50'
                    }`}
                    onClick={() => setSelectedProvider(provider)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-forest-700 text-sm sm:text-base">{provider.name}</h3>
                      <div className="flex items-center gap-1 text-xs sm:text-sm">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-forest-600">{provider.rating}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1 mb-3 text-xs sm:text-sm">
                      <div className="flex items-center gap-2 text-forest-600">
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            provider.type === 'Equipment Rental' ? 'border-blue-500 text-blue-600' :
                            provider.type === 'Supplies Store' ? 'border-green-500 text-green-600' :
                            provider.type === 'Repair Services' ? 'border-red-500 text-red-600' :
                            'border-yellow-500 text-yellow-600'
                          }`}
                        >
                          {provider.type}
                        </Badge>
                        <span className="text-forest-500">{provider.distance}</span>
                      </div>
                      <p className="text-forest-500 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {provider.address}
                      </p>
                      <div className="flex items-center gap-1 text-forest-500">
                        <Clock className="h-3 w-3" />
                        <span>{provider.hours}</span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {provider.services.slice(0, 3).map((service, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                        {provider.services.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{provider.services.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button 
                        size="sm" 
                        className="bg-forest-600 hover:bg-forest-700 text-white flex-1 text-xs sm:text-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`tel:${provider.phone}`, '_self');
                        }}
                      >
                        <Phone className="h-3 w-3 mr-1" />
                        Call Now
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white flex-1 text-xs sm:text-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          const url = `https://www.google.com/maps/dir/?api=1&destination=${provider.coordinates.lat},${provider.coordinates.lng}`;
                          window.open(url, '_blank');
                        }}
                      >
                        <Navigation className="h-3 w-3 mr-1" />
                        Directions
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
