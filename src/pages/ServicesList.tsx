
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tractor, Wrench, Sprout, MapPin, Filter } from 'lucide-react';

const ServicesList = () => {
  const [sortBy, setSortBy] = useState('name');
  const [filterLocation, setFilterLocation] = useState('');
  const [filterType, setFilterType] = useState('all');

  const services = [
    {
      id: 1,
      name: 'Tractor Plowing Service',
      category: 'Field Services',
      price: '₹2,500/acre',
      availability: 'Available',
      location: 'Rural Valley',
      icon: Tractor,
      description: 'Professional plowing with modern tractors',
      duration: '2-3 hours per acre'
    },
    {
      id: 2,
      name: 'Sprayer Repair',
      category: 'Equipment Repairs',
      price: '₹800-1,500',
      availability: 'Available',
      location: 'Farm District',
      icon: Wrench,
      description: 'Expert repair for all sprayer models',
      duration: '2-4 hours'
    },
    {
      id: 3,
      name: 'Cultivation Service',
      category: 'Field Services',
      price: '₹1,800/acre',
      availability: 'Booked',
      location: 'Green Valley',
      icon: Sprout,
      description: 'Complete cultivation and soil preparation',
      duration: '3-4 hours per acre'
    },
    {
      id: 4,
      name: 'Rotavation Service',
      category: 'Field Services',
      price: '₹2,200/acre',
      availability: 'Available',
      location: 'Rural Valley',
      icon: Tractor,
      description: 'Advanced rotary tilling for better soil preparation',
      duration: '2-3 hours per acre'
    },
    {
      id: 5,
      name: 'Harvesting Service',
      category: 'Field Services',
      price: '₹3,500/acre',
      availability: 'Available',
      location: 'Farm District',
      icon: Tractor,
      description: 'Professional harvesting with modern combines',
      duration: '1-2 hours per acre'
    },
    {
      id: 6,
      name: 'Equipment Maintenance',
      category: 'Equipment Repairs',
      price: '₹1,200-2,000',
      availability: 'Available',
      location: 'Green Valley',
      icon: Wrench,
      description: 'Regular maintenance for all farm equipment',
      duration: '3-5 hours'
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesType = filterType === 'all' || service.category === filterType;
    const matchesLocation = filterLocation === '' || service.location.toLowerCase().includes(filterLocation.toLowerCase());
    return matchesType && matchesLocation;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'price') return a.price.localeCompare(b.price);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
    return 0;
  });

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
              <a href="/services-list" className="text-forest-800 font-semibold border-b-2 border-forest-600">Services List</a>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-forest-600 to-forest-700">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Agricultural services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">All Services</h1>
          <p className="text-xl text-wheat-100 max-w-3xl mx-auto">
            Explore our comprehensive farming services with detailed information and easy booking options.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-forest-700">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">Service Type</label>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full p-2 border border-forest-200 rounded-lg focus:ring-2 focus:ring-forest-500"
                  >
                    <option value="all">All Services</option>
                    <option value="Field Services">Field Services</option>
                    <option value="Equipment Repairs">Equipment Repairs</option>
                    <option value="Other Services">Other Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">Location</label>
                  <Input
                    placeholder="Search by location..."
                    value={filterLocation}
                    onChange={(e) => setFilterLocation(e.target.value)}
                    className="border-forest-200 focus:ring-forest-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2 border border-forest-200 rounded-lg focus:ring-2 focus:ring-forest-500"
                  >
                    <option value="name">Service Name</option>
                    <option value="category">Category</option>
                    <option value="price">Price</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services Table */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-700">Available Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-forest-700">Service</TableHead>
                        <TableHead className="text-forest-700">Category</TableHead>
                        <TableHead className="text-forest-700">Price</TableHead>
                        <TableHead className="text-forest-700">Location</TableHead>
                        <TableHead className="text-forest-700">Status</TableHead>
                        <TableHead className="text-forest-700">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sortedServices.map((service) => {
                        const IconComponent = service.icon;
                        return (
                          <TableRow 
                            key={service.id} 
                            className="hover:bg-forest-50 transition-colors group cursor-pointer"
                          >
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-forest-100 rounded-lg group-hover:bg-forest-200 transition-colors">
                                  <IconComponent className="h-5 w-5 text-forest-600" />
                                </div>
                                <div>
                                  <div className="font-semibold text-forest-800">{service.name}</div>
                                  <div className="text-sm text-forest-600">{service.description}</div>
                                  <div className="text-xs text-forest-500">Duration: {service.duration}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="border-forest-300 text-forest-700">
                                {service.category}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-semibold text-forest-800">{service.price}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1 text-forest-600">
                                <MapPin className="h-4 w-4" />
                                {service.location}
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge 
                                variant={service.availability === 'Available' ? 'default' : 'secondary'}
                                className={service.availability === 'Available' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-orange-100 text-orange-800'
                                }
                              >
                                {service.availability}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Button 
                                size="sm" 
                                className="bg-forest-600 hover:bg-forest-700"
                                disabled={service.availability !== 'Available'}
                              >
                                {service.availability === 'Available' ? 'Book Now' : 'Unavailable'}
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Service Provider Locations Map */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-forest-700">Service Provider Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-forest-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-forest-400 mx-auto mb-2" />
                    <p className="text-forest-600">Interactive map showing service provider locations</p>
                    <p className="text-sm text-forest-500">(Map integration available with location services)</p>
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

export default ServicesList;
