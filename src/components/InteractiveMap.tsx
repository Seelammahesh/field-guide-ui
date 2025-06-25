
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
      position: { top: '20%', left: '20%' }
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
      position: { top: '35%', right: '25%' }
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
      position: { bottom: '30%', left: '30%' }
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
      position: { bottom: '20%', right: '20%' }
    }
  ];

  const filteredProviders = serviceProviders.filter(provider =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    provider.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    provider.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8 bg-wheat-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-800 mb-3 sm:mb-4">Find Nearby Services</h2>
          <p className="text-base sm:text-lg lg:text-xl text-forest-600">
            Locate service providers and suppliers in your area
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Interactive Map */}
          <Card className="bg-white shadow-xl border-forest-200">
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-forest-700 flex items-center gap-2 text-base sm:text-lg">
                🗺️ Interactive Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-80 sm:h-96 flex items-center justify-center relative overflow-hidden">
                {/* Map Background */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Roads */}
                    <path d="M0,200 L400,200" stroke="#666" strokeWidth="3" />
                    <path d="M200,0 L200,400" stroke="#666" strokeWidth="3" />
                    <path d="M100,100 L300,300" stroke="#888" strokeWidth="2" />
                    <path d="M300,100 L100,300" stroke="#888" strokeWidth="2" />
                    
                    {/* Areas */}
                    <circle cx="80" cy="80" r="30" fill="#90EE90" opacity="0.3" />
                    <circle cx="320" cy="120" r="40" fill="#87CEEB" opacity="0.3" />
                    <rect x="250" y="250" width="60" height="40" fill="#DEB887" opacity="0.3" />
                  </svg>
                </div>

                {/* Service Provider Pins */}
                {filteredProviders.map((provider) => (
                  <div
                    key={provider.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={provider.position}
                    onClick={() => setSelectedProvider(provider)}
                  >
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-lg transition-all duration-200 group-hover:scale-110 ${
                      provider.type === 'Equipment Rental' ? 'bg-blue-500' :
                      provider.type === 'Supplies Store' ? 'bg-green-500' :
                      provider.type === 'Repair Services' ? 'bg-red-500' :
                      'bg-yellow-500'
                    } ${selectedProvider?.id === provider.id ? 'scale-125 ring-2 ring-white' : ''}`}>
                      <MapPin className="w-full h-full text-white p-1" />
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {provider.name}
                    </div>
                  </div>
                ))}

                {/* Legend */}
                <div className="absolute bottom-2 left-2 bg-white/90 rounded-lg p-2 text-xs">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Equipment</span>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Supplies</span>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Repair</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>Organic</span>
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
                    className={`p-3 sm:p-4 border rounded-lg transition-all cursor-pointer ${
                      selectedProvider?.id === provider.id 
                        ? 'border-forest-600 bg-forest-50' 
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
                        <Badge variant="outline" className="text-xs">
                          {provider.type}
                        </Badge>
                        <span>{provider.distance}</span>
                      </div>
                      <p className="text-forest-500">{provider.address}</p>
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
                      <Button size="sm" className="bg-forest-600 hover:bg-forest-700 text-white flex-1 text-xs sm:text-sm">
                        <Phone className="h-3 w-3 mr-1" />
                        Call Now
                      </Button>
                      <Button size="sm" variant="outline" className="border-forest-600 text-forest-600 flex-1 text-xs sm:text-sm">
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
