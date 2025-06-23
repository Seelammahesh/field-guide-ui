
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Search, MapPin, ArrowLeft, BarChart3 } from 'lucide-react';

const CropPricesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');

  const cropPrices = [
    {
      crop: 'Wheat',
      currentPrice: 2150,
      previousPrice: 2100,
      unit: 'per quintal',
      location: 'Delhi',
      market: 'Azadpur Mandi',
      lastUpdated: '2024-01-20',
      trend: 'up',
      change: 2.4,
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=100&h=100&fit=crop'
    },
    {
      crop: 'Rice',
      currentPrice: 3200,
      previousPrice: 3250,
      unit: 'per quintal',
      location: 'Punjab',
      market: 'Amritsar Mandi',
      lastUpdated: '2024-01-20',
      trend: 'down',
      change: -1.5,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=100&h=100&fit=crop'
    },
    {
      crop: 'Sugarcane',
      currentPrice: 350,
      previousPrice: 340,
      unit: 'per quintal',
      location: 'Uttar Pradesh',
      market: 'Lucknow Mandi',
      lastUpdated: '2024-01-20',
      trend: 'up',
      change: 2.9,
      image: 'https://images.unsplash.com/photo-1605027269121-4db992f8eb32?w=100&h=100&fit=crop'
    },
    {
      crop: 'Cotton',
      currentPrice: 5800,
      previousPrice: 5750,
      unit: 'per quintal',
      location: 'Gujarat',
      market: 'Rajkot Mandi',
      lastUpdated: '2024-01-20',
      trend: 'up',
      change: 0.9,
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=100&h=100&fit=crop'
    },
    {
      crop: 'Tomato',
      currentPrice: 1800,
      previousPrice: 2000,
      unit: 'per quintal',
      location: 'Karnataka',
      market: 'Bangalore Mandi',
      lastUpdated: '2024-01-20',
      trend: 'down',
      change: -10.0,
      image: 'https://images.unsplash.com/photo-1546470427-e55b1a3976c3?w=100&h=100&fit=crop'
    },
    {
      crop: 'Onion',
      currentPrice: 2500,
      previousPrice: 2300,
      unit: 'per quintal',
      location: 'Maharashtra',
      market: 'Nashik Mandi',
      lastUpdated: '2024-01-20',
      trend: 'up',
      change: 8.7,
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&h=100&fit=crop'
    },
    {
      crop: 'Potato',
      currentPrice: 1200,
      previousPrice: 1150,
      unit: 'per quintal',
      location: 'West Bengal',
      market: 'Kolkata Mandi',
      lastUpdated: '2024-01-20',
      trend: 'up',
      change: 4.3,
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&h=100&fit=crop'
    },
    {
      crop: 'Maize',
      currentPrice: 1950,
      previousPrice: 1980,
      unit: 'per quintal',
      location: 'Bihar',
      market: 'Patna Mandi',
      lastUpdated: '2024-01-20',
      trend: 'down',
      change: -1.5,
      image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=100&h=100&fit=crop'
    }
  ];

  const filteredPrices = cropPrices.filter(item => {
    const matchesSearch = item.crop.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.market.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = locationFilter === 'all' || item.location.toLowerCase() === locationFilter.toLowerCase();
    return matchesSearch && matchesLocation;
  });

  const locations = [...new Set(cropPrices.map(item => item.location))];

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
          <BarChart3 className="h-8 w-8 text-forest-600" />
          <h1 className="text-3xl font-bold text-forest-800">Market Prices</h1>
          <Badge variant="outline" className="ml-2">Live Updates</Badge>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search crops or markets..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-48">
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location.toLowerCase()}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Price Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPrices.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.crop}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-lg text-forest-800">{item.crop}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-forest-600">
                      <MapPin className="h-3 w-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-forest-700">
                      ₹{item.currentPrice}
                    </span>
                    <div className={`flex items-center gap-1 text-sm font-medium ${
                      item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {item.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span>{Math.abs(item.change)}%</span>
                    </div>
                  </div>
                  <p className="text-sm text-forest-600">{item.unit}</p>
                  
                  <div className="pt-2 border-t border-forest-100">
                    <p className="text-sm text-forest-600 mb-1">
                      Previous: ₹{item.previousPrice}
                    </p>
                    <p className="text-sm text-forest-600 mb-1">
                      Market: {item.market}
                    </p>
                    <p className="text-xs text-forest-500">
                      Updated: {new Date(item.lastUpdated).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View History
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Set Alert
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPrices.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No crops found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </CardContent>
          </Card>
        )}

        {/* Market Summary */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-forest-800">Market Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {filteredPrices.filter(item => item.trend === 'up').length}
                </div>
                <p className="text-forest-600">Crops Rising</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-1">
                  {filteredPrices.filter(item => item.trend === 'down').length}
                </div>
                <p className="text-forest-600">Crops Falling</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-forest-700 mb-1">
                  {filteredPrices.length}
                </div>
                <p className="text-forest-600">Total Markets</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CropPricesPage;
