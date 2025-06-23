
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Package, Search, Eye, Download, ArrowLeft } from 'lucide-react';

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: 'ORD001',
      product: 'NPK Fertilizer 50kg',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=200&h=150&fit=crop',
      status: 'Delivered',
      orderDate: '2024-01-15',
      deliveryDate: '2024-01-18',
      amount: 3500,
      quantity: 2,
      trackingNumber: 'TRK123456789'
    },
    {
      id: 'ORD002',
      product: 'Pesticide Spray 5L',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=150&fit=crop',
      status: 'In Transit',
      orderDate: '2024-01-10',
      deliveryDate: '2024-01-22',
      amount: 1200,
      quantity: 3,
      trackingNumber: 'TRK987654321'
    },
    {
      id: 'ORD003',
      product: 'Organic Manure 100kg',
      image: 'https://images.unsplash.com/photo-1416664806563-bb6be3be8b6f?w=200&h-150&fit=crop',
      status: 'Processing',
      orderDate: '2024-01-08',
      deliveryDate: '2024-01-25',
      amount: 2800,
      quantity: 1,
      trackingNumber: 'TRK456789123'
    },
    {
      id: 'ORD004',
      product: 'Seed Variety Pack',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=200&h=150&fit=crop',
      status: 'Cancelled',
      orderDate: '2024-01-05',
      deliveryDate: null,
      amount: 1500,
      quantity: 1,
      trackingNumber: null
    },
    {
      id: 'ORD005',
      product: 'Bio Pesticide Spray',
      image: 'https://images.unsplash.com/photo-1566281796817-93bc94d7dbd2?w=200&h=150&fit=crop',
      status: 'Confirmed',
      orderDate: '2024-01-20',
      deliveryDate: '2024-01-28',
      amount: 890,
      quantity: 2,
      trackingNumber: 'TRK789123456'
    }
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchQuery.toLowerCase());
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <Button variant="ghost" asChild className="text-forest-600 hover:text-forest-800">
            <Link to="/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <Package className="h-8 w-8 text-forest-600" />
          <h1 className="text-3xl font-bold text-forest-800">My Orders</h1>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search orders by product name or order ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-48">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
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
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <Card key={order.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={order.image}
                    alt={order.product}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-forest-800 text-lg">{order.product}</h3>
                        <p className="text-forest-600">Order ID: {order.id}</p>
                      </div>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-forest-600">Order Date:</span>
                        <p className="font-medium">{new Date(order.orderDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <span className="text-forest-600">Quantity:</span>
                        <p className="font-medium">{order.quantity}</p>
                      </div>
                      <div>
                        <span className="text-forest-600">Amount:</span>
                        <p className="font-medium text-forest-700">₹{order.amount}</p>
                      </div>
                      <div>
                        <span className="text-forest-600">Expected Delivery:</span>
                        <p className="font-medium">
                          {order.deliveryDate ? new Date(order.deliveryDate).toLocaleDateString() : 'N/A'}
                        </p>
                      </div>
                    </div>

                    {order.trackingNumber && (
                      <div className="mt-3 text-sm">
                        <span className="text-forest-600">Tracking Number:</span>
                        <span className="font-medium ml-2">{order.trackingNumber}</span>
                      </div>
                    )}

                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      {order.status === 'Delivered' && (
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download Invoice
                        </Button>
                      )}
                      {order.status === 'In Transit' && (
                        <Button variant="outline" size="sm">
                          Track Order
                        </Button>
                      )}
                      {(order.status === 'Processing' || order.status === 'Confirmed') && (
                        <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
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
          <Card className="text-center py-12">
            <CardContent>
              <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No orders found</h3>
              <p className="text-gray-500 mb-6">
                {searchQuery || statusFilter !== 'all' 
                  ? 'Try adjusting your search or filter criteria' 
                  : 'Start shopping to see your orders here'}
              </p>
              <Button asChild className="bg-forest-600 hover:bg-forest-700">
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
