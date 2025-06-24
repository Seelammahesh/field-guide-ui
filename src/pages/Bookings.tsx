import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Search, Eye, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Bookings = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const isMobile = useIsMobile();

  const bookings = [
    {
      id: 'SVC001',
      service: 'Tractor Plowing',
      provider: 'Green Farm Services',
      date: '2024-01-20',
      time: '09:00 AM',
      status: 'Completed',
      amount: 5000,
      duration: '4 hours',
      location: 'Field A, Village Greenfield',
      contact: '+91 98765 43210',
      image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=200&h=150&fit=crop'
    },
    {
      id: 'SVC002',
      service: 'Sprayer Repair',
      provider: 'AgriTech Solutions',
      date: '2024-01-18',
      time: '02:00 PM',
      status: 'Completed',
      amount: 1200,
      duration: '2 hours',
      location: 'Farm Workshop',
      contact: '+91 87654 32109',
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=200&h=150&fit=crop'
    },
    {
      id: 'SVC003',
      service: 'Harvesting Service',
      provider: 'Harvest Masters',
      date: '2024-01-25',
      time: '06:00 AM',
      status: 'Scheduled',
      amount: 7000,
      duration: '6 hours',
      location: 'Field B, Village Greenfield',
      contact: '+91 76543 21098',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=200&h=150&fit=crop'
    },
    {
      id: 'SVC004',
      service: 'Soil Testing',
      provider: 'Soil Health Labs',
      date: '2024-01-15',
      time: '10:00 AM',
      status: 'Completed',
      amount: 800,
      duration: '3 hours',
      location: 'Multiple Fields',
      contact: '+91 65432 10987',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=150&fit=crop'
    },
    {
      id: 'SVC005',
      service: 'Irrigation Setup',
      provider: 'Water Solutions Pro',
      date: '2024-01-28',
      time: '08:00 AM',
      status: 'Confirmed',
      amount: 12000,
      duration: '8 hours',
      location: 'Field C, Village Greenfield',
      contact: '+91 54321 09876',
      image: 'https://images.unsplash.com/photo-1416664806563-bb6be3be8b6f?w=200&h=150&fit=crop'
    }
  ];

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         booking.provider.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || booking.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'confirmed':
        return 'bg-purple-100 text-purple-800';
      case 'in progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-wheat-50 to-forest-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <Button variant="ghost" asChild className="text-forest-600 hover:text-forest-800 p-2">
            <Link to="/dashboard">
              <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="text-sm sm:text-base">Back to Dashboard</span>
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-forest-600" />
          <h1 className="text-2xl sm:text-3xl font-bold text-forest-800">Service Bookings</h1>
        </div>

        {/* Filters */}
        <Card className="mb-4 sm:mb-6">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder={isMobile ? "Search bookings..." : "Search bookings by service, provider, or booking ID..."}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 text-sm sm:text-base"
                  />
                </div>
              </div>
              <div className="w-full sm:w-48">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="text-sm sm:text-base">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Bookings</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="in progress">In Progress</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bookings List */}
        <div className="space-y-3 sm:space-y-4">
          {filteredBookings.map((booking) => (
            <Card key={booking.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-3 sm:p-4 lg:p-6">
                <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
                  <img
                    src={booking.image}
                    alt={booking.service}
                    className="w-full lg:w-20 h-32 sm:h-40 lg:h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-forest-800 text-base sm:text-lg truncate">{booking.service}</h3>
                        <p className="text-forest-600 text-sm sm:text-base truncate">{booking.provider}</p>
                        <p className="text-xs sm:text-sm text-forest-500">Booking ID: {booking.id}</p>
                      </div>
                      <Badge className={`${getStatusColor(booking.status)} text-xs sm:text-sm shrink-0`}>
                        {booking.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-sm mb-3 sm:mb-4">
                      <div>
                        <span className="text-forest-600 block">Date & Time:</span>
                        <p className="font-medium">{new Date(booking.date).toLocaleDateString()}</p>
                        <p className="font-medium">{booking.time}</p>
                      </div>
                      <div>
                        <span className="text-forest-600 block">Duration:</span>
                        <p className="font-medium">{booking.duration}</p>
                      </div>
                      <div>
                        <span className="text-forest-600 block">Amount:</span>
                        <p className="font-medium text-forest-700">₹{booking.amount}</p>
                      </div>
                      <div className="sm:col-span-2 lg:col-span-1">
                        <span className="text-forest-600 block">Status:</span>
                        <p className="font-medium">{booking.status}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm mb-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-forest-600 mt-0.5 shrink-0" />
                        <div className="min-w-0">
                          <span className="text-forest-600 block">Location:</span>
                          <p className="font-medium break-words">{booking.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Phone className="h-4 w-4 text-forest-600 mt-0.5 shrink-0" />
                        <div className="min-w-0">
                          <span className="text-forest-600 block">Contact:</span>
                          <p className="font-medium break-all">{booking.contact}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        View Details
                      </Button>
                      {booking.status === 'Scheduled' && (
                        <>
                          <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                            Reschedule
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50 text-xs sm:text-sm">
                            Cancel
                          </Button>
                        </>
                      )}
                      {booking.status === 'Completed' && (
                        <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                          Rate Service
                        </Button>
                      )}
                      <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                        <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Contact Provider
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBookings.length === 0 && (
          <Card className="text-center py-8 sm:py-12">
            <CardContent className="px-3 sm:px-6">
              <Calendar className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">No bookings found</h3>
              <p className="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">
                {searchQuery || statusFilter !== 'all' 
                  ? 'Try adjusting your search or filter criteria' 
                  : 'Book your first service to see it here'}
              </p>
              <Button asChild className="bg-forest-600 hover:bg-forest-700 text-sm sm:text-base">
                <Link to="/services">Browse Services</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Bookings;
