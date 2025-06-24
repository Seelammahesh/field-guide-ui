import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Edit, Bell, ShoppingBag, Calendar, Camera } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const isMobile = useIsMobile();
  const [profileData, setProfileData] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@farmhub.com',
    phone: '+91 98765 43210',
    address: 'Village Greenfield, District Farming, State 12345',
    farmSize: '25 acres',
    cropTypes: 'Wheat, Rice, Sugarcane'
  });

  const orderHistory = [
    { id: 'ORD001', product: 'NPK Fertilizer', status: 'Delivered', date: '2024-01-15', amount: '₹3,500' },
    { id: 'ORD002', product: 'Pesticide Spray', status: 'In Transit', date: '2024-01-10', amount: '₹1,200' },
    { id: 'ORD003', product: 'Organic Manure', status: 'Processing', date: '2024-01-08', amount: '₹2,800' },
    { id: 'ORD004', product: 'Seed Variety Pack', status: 'Delivered', date: '2024-01-05', amount: '₹1,500' }
  ];

  const bookingHistory = [
    { id: 'SVC001', service: 'Tractor Plowing', date: '2024-01-20', status: 'Completed', amount: '₹5,000' },
    { id: 'SVC002', service: 'Sprayer Repair', date: '2024-01-18', status: 'Completed', amount: '₹1,200' },
    { id: 'SVC003', service: 'Harvesting Service', date: '2024-01-25', status: 'Scheduled', amount: '₹7,000' },
    { id: 'SVC004', service: 'Soil Testing', date: '2024-01-15', status: 'Completed', amount: '₹800' }
  ];

  const notifications = [
    { id: 1, message: 'Your order ORD002 is out for delivery', time: '2 hours ago', type: 'order' },
    { id: 2, message: 'Harvesting service scheduled for tomorrow', time: '1 day ago', type: 'service' },
    { id: 3, message: 'New weather alert: Heavy rain expected', time: '2 days ago', type: 'weather' },
    { id: 4, message: 'Your profile was updated successfully', time: '3 days ago', type: 'profile' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-wheat-50 to-forest-50 font-montserrat">
      {/* Header */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-forest-600 to-forest-700">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Farmer profile"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">Your Profile</h1>
          <p className="text-base sm:text-lg lg:text-xl text-wheat-100 max-w-3xl mx-auto">
            Manage your account and farming activities all in one place.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 sm:top-24">
              <CardHeader className="text-center p-4 sm:p-6">
                <div className="relative mx-auto">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-forest-100 flex items-center justify-center shadow-lg">
                    <User className="h-12 w-12 sm:h-16 sm:w-16 text-forest-600" />
                  </div>
                  <Button
                    size="sm"
                    className="absolute bottom-0 right-0 rounded-full bg-forest-600 hover:bg-forest-700 p-1.5 sm:p-2"
                  >
                    <Camera className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
                <CardTitle className="text-forest-700 mt-3 sm:mt-4 text-base sm:text-lg">{profileData.name}</CardTitle>
                <p className="text-forest-600 text-sm sm:text-base break-all">{profileData.email}</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-forest-700 block">Farm Size:</span>
                    <p className="text-forest-600">{profileData.farmSize}</p>
                  </div>
                  <div>
                    <span className="font-medium text-forest-700 block">Crops:</span>
                    <p className="text-forest-600 break-words">{profileData.cropTypes}</p>
                  </div>
                  <div>
                    <span className="font-medium text-forest-700 block">Phone:</span>
                    <p className="text-forest-600 break-all">{profileData.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="space-y-4 sm:space-y-6">
              <TabsList className={`grid w-full ${isMobile ? 'grid-cols-2' : 'grid-cols-4'} text-xs sm:text-sm`}>
                <TabsTrigger value="profile" className="px-2 sm:px-4">Profile Details</TabsTrigger>
                <TabsTrigger value="orders" className="px-2 sm:px-4">Orders</TabsTrigger>
                {!isMobile && <TabsTrigger value="bookings" className="px-2 sm:px-4">Bookings</TabsTrigger>}
                {!isMobile && <TabsTrigger value="notifications" className="px-2 sm:px-4">Notifications</TabsTrigger>}
              </TabsList>

              {isMobile && (
                <div className="grid grid-cols-2 gap-2">
                  <TabsList className="grid w-full grid-cols-1">
                    <TabsTrigger value="bookings" className="text-xs">Service Bookings</TabsTrigger>
                  </TabsList>
                  <TabsList className="grid w-full grid-cols-1">
                    <TabsTrigger value="notifications" className="text-xs">Notifications</TabsTrigger>
                  </TabsList>
                </div>
              )}

              {/* Profile Details Tab */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between p-4 sm:p-6">
                    <CardTitle className="text-forest-700 text-base sm:text-lg">Personal Information</CardTitle>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(!isEditing)}
                      className="border-forest-300 text-forest-700 hover:bg-forest-50 text-xs sm:text-sm px-2 sm:px-4"
                    >
                      <Edit className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      {isEditing ? 'Cancel' : 'Edit Profile'}
                    </Button>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="grid grid-cols-1 gap-4 sm:gap-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label className="block text-sm font-medium text-forest-700 mb-2">Full Name</label>
                          <Input
                            value={profileData.name}
                            disabled={!isEditing}
                            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                            className="border-forest-200 text-sm sm:text-base"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-forest-700 mb-2">Email</label>
                          <Input
                            value={profileData.email}
                            disabled={!isEditing}
                            onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                            className="border-forest-200 text-sm sm:text-base"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-forest-700 mb-2">Phone Number</label>
                          <Input
                            value={profileData.phone}
                            disabled={!isEditing}
                            onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                            className="border-forest-200 text-sm sm:text-base"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-forest-700 mb-2">Farm Size</label>
                          <Input
                            value={profileData.farmSize}
                            disabled={!isEditing}
                            onChange={(e) => setProfileData({...profileData, farmSize: e.target.value})}
                            className="border-forest-200 text-sm sm:text-base"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-forest-700 mb-2">Address</label>
                        <Input
                          value={profileData.address}
                          disabled={!isEditing}
                          onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                          className="border-forest-200 text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-forest-700 mb-2">Crop Types</label>
                        <Input
                          value={profileData.cropTypes}
                          disabled={!isEditing}
                          onChange={(e) => setProfileData({...profileData, cropTypes: e.target.value})}
                          className="border-forest-200 text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    {isEditing && (
                      <div className="mt-6">
                        <Button className="bg-forest-600 hover:bg-forest-700 text-sm sm:text-base">
                          Update Profile
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Order History Tab */}
              <TabsContent value="orders">
                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="flex items-center gap-2 text-forest-700 text-base sm:text-lg">
                      <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
                      Order History
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    {isMobile ? (
                      <div className="space-y-4">
                        {orderHistory.map((order) => (
                          <div key={order.id} className="p-3 border border-forest-200 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                              <div className="min-w-0 flex-1">
                                <h4 className="font-medium text-forest-800 text-sm truncate">{order.product}</h4>
                                <p className="text-xs text-forest-500">ID: {order.id}</p>
                              </div>
                              <Badge
                                variant={order.status === 'Delivered' ? 'default' : 
                                        order.status === 'In Transit' ? 'secondary' : 'outline'}
                                className={`text-xs ${
                                  order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                  order.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                                  'bg-orange-100 text-orange-800'
                                }`}
                              >
                                {order.status}
                              </Badge>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-forest-600">{order.date}</span>
                              <span className="font-semibold text-forest-700">{order.amount}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Order ID</TableHead>
                              <TableHead>Product</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Date</TableHead>
                              <TableHead>Amount</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {orderHistory.map((order) => (
                              <TableRow key={order.id} className="hover:bg-forest-50">
                                <TableCell className="font-medium">{order.id}</TableCell>
                                <TableCell>{order.product}</TableCell>
                                <TableCell>
                                  <Badge
                                    variant={order.status === 'Delivered' ? 'default' : 
                                            order.status === 'In Transit' ? 'secondary' : 'outline'}
                                    className={
                                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                      order.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                                      'bg-orange-100 text-orange-800'
                                    }
                                  >
                                    {order.status}
                                  </Badge>
                                </TableCell>
                                <TableCell>{order.date}</TableCell>
                                <TableCell className="font-semibold">{order.amount}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Service Bookings Tab */}
              <TabsContent value="bookings">
                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="flex items-center gap-2 text-forest-700 text-base sm:text-lg">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                      Service Bookings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    {isMobile ? (
                      <div className="space-y-4">
                        {bookingHistory.map((booking) => (
                          <div key={booking.id} className="p-3 border border-forest-200 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                              <div className="min-w-0 flex-1">
                                <h4 className="font-medium text-forest-800 text-sm truncate">{booking.service}</h4>
                                <p className="text-xs text-forest-500">ID: {booking.id}</p>
                              </div>
                              <Badge
                                variant={booking.status === 'Completed' ? 'default' : 'secondary'}
                                className={
                                  booking.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                  'bg-blue-100 text-blue-800'
                                }
                              >
                                {booking.status}
                              </Badge>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-forest-600">{booking.date}</span>
                              <span className="font-semibold text-forest-700">{booking.amount}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Booking ID</TableHead>
                              <TableHead>Service</TableHead>
                              <TableHead>Date</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Amount</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {bookingHistory.map((booking) => (
                              <TableRow key={booking.id} className="hover:bg-forest-50">
                                <TableCell className="font-medium">{booking.id}</TableCell>
                                <TableCell>{booking.service}</TableCell>
                                <TableCell>{booking.date}</TableCell>
                                <TableCell>
                                  <Badge
                                    variant={booking.status === 'Completed' ? 'default' : 'secondary'}
                                    className={
                                      booking.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                      'bg-blue-100 text-blue-800'
                                    }
                                  >
                                    {booking.status}
                                  </Badge>
                                </TableCell>
                                <TableCell className="font-semibold">{booking.amount}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications">
                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="flex items-center gap-2 text-forest-700 text-base sm:text-lg">
                      <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
                      Notification Center
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="space-y-3 sm:space-y-4">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="p-3 sm:p-4 border border-forest-200 rounded-lg hover:bg-forest-50 transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <p className="text-forest-800 text-sm sm:text-base break-words">{notification.message}</p>
                              <p className="text-xs sm:text-sm text-forest-600 mt-1">{notification.time}</p>
                            </div>
                            <Badge
                              variant="outline"
                              className={`text-xs shrink-0 ${
                                notification.type === 'order' ? 'border-blue-300 text-blue-700' :
                                notification.type === 'service' ? 'border-green-300 text-green-700' :
                                notification.type === 'weather' ? 'border-orange-300 text-orange-700' :
                                'border-forest-300 text-forest-700'
                              }`}
                            >
                              {notification.type}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
