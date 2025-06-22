
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Edit, Bell, ShoppingBag, Calendar, Camera } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
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
              <a href="/products" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Products</a>
              <a href="/services" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Services</a>
              <a href="/profile" className="text-forest-800 font-semibold border-b-2 border-forest-600">Profile</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-forest-600 to-forest-700">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Farmer profile"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Your Profile</h1>
          <p className="text-xl text-wheat-100 max-w-3xl mx-auto">
            Manage your account and farming activities all in one place.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader className="text-center">
                <div className="relative mx-auto">
                  <div className="w-32 h-32 rounded-full bg-forest-100 flex items-center justify-center shadow-lg">
                    <User className="h-16 w-16 text-forest-600" />
                  </div>
                  <Button
                    size="sm"
                    className="absolute bottom-0 right-0 rounded-full bg-forest-600 hover:bg-forest-700 p-2"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-forest-700 mt-4">{profileData.name}</CardTitle>
                <p className="text-forest-600">{profileData.email}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-forest-700">Farm Size:</span>
                    <p className="text-forest-600">{profileData.farmSize}</p>
                  </div>
                  <div>
                    <span className="font-medium text-forest-700">Crops:</span>
                    <p className="text-forest-600">{profileData.cropTypes}</p>
                  </div>
                  <div>
                    <span className="font-medium text-forest-700">Phone:</span>
                    <p className="text-forest-600">{profileData.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Profile Details</TabsTrigger>
                <TabsTrigger value="orders">Order History</TabsTrigger>
                <TabsTrigger value="bookings">Service Bookings</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>

              {/* Profile Details Tab */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-forest-700">Personal Information</CardTitle>
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(!isEditing)}
                      className="border-forest-300 text-forest-700 hover:bg-forest-50"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      {isEditing ? 'Cancel' : 'Edit Profile'}
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-forest-700 mb-2">Full Name</label>
                        <Input
                          value={profileData.name}
                          disabled={!isEditing}
                          onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                          className="border-forest-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-forest-700 mb-2">Email</label>
                        <Input
                          value={profileData.email}
                          disabled={!isEditing}
                          onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                          className="border-forest-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-forest-700 mb-2">Phone Number</label>
                        <Input
                          value={profileData.phone}
                          disabled={!isEditing}
                          onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                          className="border-forest-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-forest-700 mb-2">Farm Size</label>
                        <Input
                          value={profileData.farmSize}
                          disabled={!isEditing}
                          onChange={(e) => setProfileData({...profileData, farmSize: e.target.value})}
                          className="border-forest-200"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-forest-700 mb-2">Address</label>
                        <Input
                          value={profileData.address}
                          disabled={!isEditing}
                          onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                          className="border-forest-200"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-forest-700 mb-2">Crop Types</label>
                        <Input
                          value={profileData.cropTypes}
                          disabled={!isEditing}
                          onChange={(e) => setProfileData({...profileData, cropTypes: e.target.value})}
                          className="border-forest-200"
                        />
                      </div>
                    </div>
                    {isEditing && (
                      <div className="mt-6">
                        <Button className="bg-forest-600 hover:bg-forest-700">
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
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-forest-700">
                      <ShoppingBag className="h-5 w-5" />
                      Order History
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Service Bookings Tab */}
              <TabsContent value="bookings">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-forest-700">
                      <Calendar className="h-5 w-5" />
                      Service Bookings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-forest-700">
                      <Bell className="h-5 w-5" />
                      Notification Center
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="p-4 border border-forest-200 rounded-lg hover:bg-forest-50 transition-colors"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-forest-800">{notification.message}</p>
                              <p className="text-sm text-forest-600 mt-1">{notification.time}</p>
                            </div>
                            <Badge
                              variant="outline"
                              className={
                                notification.type === 'order' ? 'border-blue-300 text-blue-700' :
                                notification.type === 'service' ? 'border-green-300 text-green-700' :
                                notification.type === 'weather' ? 'border-orange-300 text-orange-700' :
                                'border-forest-300 text-forest-700'
                              }
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
