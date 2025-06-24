
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Package, Search, Eye, Download, ArrowLeft, Truck } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const isMobile = useIsMobile();

  const orders = [
    {
      id: 'ORD001',
      product: 'NPK Fertilizer 50kg',
      orderDate: '2024-01-15',
      expectedDelivery: '2024-01-18',
      status: 'Delivered',
      amount: 3500,
      quantity: 2,
      trackingNumber: 'TRK123456789',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=150&fit=crop'
    },
    {
      id: 'ORD002',
      product: 'Pesticide Spray 5L',
      orderDate: '2024-01-10',
      expectedDelivery: '2024-01-22',
      status: 'In Transit',
      amount: 1200,
      quantity: 3,
      trackingNumber: 'TRK987654321',
      image: 'https://images.unsplash.com/photo-1574690771115-bc8e8f4b2e15?w=200&h=150&fit=crop'
    },
    {
      id: 'ORD003',
      product: 'Organic Manure 100kg',
      orderDate: '2024-01-08',
      expectedDelivery: '2024-01-25',
      status: 'Processing',
      amount: 2800,
      quantity: 1,
      trackingNumber: 'TRK456789123',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=200&h=150&fit=crop'
    },
    {
      id: 'ORD004',
      product: 'Seeds - Wheat Variety',
      orderDate: '2024-01-05',
      expectedDelivery: '2024-01-28',
      status: 'Confirmed',
      amount: 1500,
      quantity: 5,
      trackingNumber: 'TRK789123456',
      image: 'https://images.unsplash.com/photo-1574690771115-bc8e8f4b2e15?w=200&h=150&fit=crop'
    },
    {
      id: 'ORD005',
      product: 'Irrigation Pipes',
      orderDate: '2024-01-03',
      expectedDelivery: '2024-01-30',
      status: 'Cancelled',
      amount: 4200,
      quantity: 10,
      trackingNumber: 'TRK321654987',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=200&h=150&fit=crop'
    }
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.trackingNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'in transit':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-purple-100 text-purple-800';
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
          <Package className="h-6 w-6 sm:h-8 sm:w-8 text-forest-600" />
          <h1 className="text-2xl sm:text-3xl font-bold text-forest-800">My Orders</h1>
        </div>

        {/* Filters */}
        <Card className="mb-4 sm:mb-6">
          <CardContent className="p-3 sm:p-4 lg:p-6">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder={isMobile ? "Search orders..." : "Search orders by product, order ID, or tracking number..."}
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
                    <SelectItem value="all">All Orders</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="in transit">In Transit</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Orders List */}
        <div className="space-y-3 sm:space-y-4">
          {filteredOrders.map((order) => (
            <Card key={order.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-3 sm:p-4 lg:p-6">
                <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
                  <img
                    src={order.image}
                    alt={order.product}
                    className="w-full lg:w-20 h-32 sm:h-40 lg:h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-forest-800 text-base sm:text-lg truncate">{order.product}</h3>
                        <p className="text-xs sm:text-sm text-forest-500">Order ID: {order.id}</p>
                      </div>
                      <Badge className={`${getStatusColor(order.status)} text-xs sm:text-sm shrink-0`}>
                        {order.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-sm mb-3 sm:mb-4">
                      <div>
                        <span className="text-forest-600 block">Order Date:</span>
                        <p className="font-medium">{new Date(order.orderDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <span className="text-forest-600 block">Quantity:</span>
                        <p className="font-medium">{order.quantity}</p>
                      </div>
                      <div>
                        <span className="text-forest-600 block">Amount:</span>
                        <p className="font-medium text-forest-700">₹{order.amount}</p>
                      </div>
                      <div className="sm:col-span-2 lg:col-span-1">
                        <span className="text-forest-600 block">Expected Delivery:</span>
                        <p className="font-medium">{new Date(order.expectedDelivery).toLocaleDateString()}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-start gap-2">
                        <Truck className="h-4 w-4 text-forest-600 mt-0.5 shrink-0" />
                        <div className="min-w-0 flex-1">
                          <span className="text-forest-600 block text-sm">Tracking Number:</span>
                          <p className="font-medium text-sm break-all">{order.trackingNumber}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        View Details
                      </Button>
                      {order.status === 'Delivered' && (
                        <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                          <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                          Download Invoice
                        </Button>
                      )}
                      {(order.status === 'In Transit' || order.status === 'Processing') && (
                        <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                          Track Order
                        </Button>
                      )}
                      {order.status === 'Confirmed' && (
                        <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50 text-xs sm:text-sm">
                          Cancel Order
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <Card className="text-center py-8 sm:py-12">
            <CardContent className="px-3 sm:px-6">
              <Package className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">No orders found</h3>
              <p className="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">
                {searchQuery || statusFilter !== 'all' 
                  ? 'Try adjusting your search or filter criteria' 
                  : 'Place your first order to see it here'}
              </p>
              <Button asChild className="bg-forest-600 hover:bg-forest-700 text-sm sm:text-base">
                <Link to="/products">Browse Products</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Orders;
