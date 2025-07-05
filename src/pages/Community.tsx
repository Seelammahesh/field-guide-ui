
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Plus, 
  Search, 
  TrendingUp,
  Users,
  Calendar,
  MapPin,
  Star,
  Camera,
  Video,
  BookOpen,
  Award,
  Filter,
  ThumbsUp,
  Eye,
  Clock
} from "lucide-react";

const Community = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', icon: Users },
    { id: 'tips', name: 'Farming Tips', icon: BookOpen },
    { id: 'equipment', name: 'Equipment', icon: Award },
    { id: 'crops', name: 'Crop Advice', icon: TrendingUp },
    { id: 'weather', name: 'Weather Updates', icon: Calendar }
  ];

  const communityPosts = [
    {
      id: 1,
      author: "Ravi Kumar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      location: "Punjab, India",
      time: "2 hours ago",
      category: "tips",
      title: "Best practices for wheat cultivation in winter season",
      content: "Just harvested my wheat crop and got excellent results! Here are some key tips that worked for me this season...",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
      likes: 45,
      comments: 12,
      shares: 8,
      verified: true
    },
    {
      id: 2,
      author: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      location: "Maharashtra, India",
      time: "5 hours ago",
      category: "equipment",
      title: "New drip irrigation system installation completed",
      content: "Finally installed the new drip irrigation system across 10 acres. Water consumption reduced by 40%! Happy to share my experience.",
      image: "https://images.unsplash.com/photo-1416664806563-bb6be3be8b6f?w=600&h=400&fit=crop",
      likes: 67,
      comments: 23,
      shares: 15,
      verified: false
    },
    {
      id: 3,
      author: "Suresh Patel",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      location: "Gujarat, India",
      time: "1 day ago",
      category: "crops",
      title: "Organic pest control methods that actually work",
      content: "Sharing my experience with natural pest control methods. These techniques have been game-changers for my organic farm.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
      likes: 89,
      comments: 31,
      shares: 22,
      verified: true
    }
  ];

  const events = [
    {
      id: 1,
      title: "Annual Farmers Meet 2024",
      date: "March 15, 2024",
      location: "Delhi",
      attendees: 250,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Organic Farming Workshop",
      date: "March 22, 2024",
      location: "Bangalore",
      attendees: 120,
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop"
    }
  ];

  const experts = [
    {
      id: 1,
      name: "Dr. Amit Singh",
      specialization: "Crop Science",
      rating: 4.9,
      consultations: 500,
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Dr. Sunita Rao",
      specialization: "Soil Health",
      rating: 4.8,
      consultations: 350,
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const filteredPosts = communityPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Farming Community
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow farmers, share experiences, and grow together
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full lg:w-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search posts, tips, discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-center lg:justify-start">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`rounded-full px-4 py-2 font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "hover:bg-blue-50 hover:border-blue-300"
                    }`}
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Left Sidebar - Quick Actions */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                <CardTitle className="text-lg font-bold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold">
                      <Plus className="h-4 w-4 mr-2" />
                      New Post
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Create New Post</DialogTitle>
                      <DialogDescription>Share your farming experience with the community</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input placeholder="Post title" className="rounded-xl" />
                      <Textarea placeholder="Share your thoughts..." className="rounded-xl min-h-[120px]" />
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="rounded-xl">
                          <Camera className="h-4 w-4 mr-2" />
                          Photo
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-xl">
                          <Video className="h-4 w-4 mr-2" />
                          Video
                        </Button>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 rounded-xl">
                        Share Post
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button variant="outline" className="w-full rounded-xl font-semibold hover:bg-blue-50">
                  <Users className="h-4 w-4 mr-2" />
                  Join Groups
                </Button>
                
                <Button variant="outline" className="w-full rounded-xl font-semibold hover:bg-green-50">
                  <Calendar className="h-4 w-4 mr-2" />
                  Events
                </Button>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card className="bg-white shadow-xl border-0 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-orange-500" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {['Organic Farming', 'Drip Irrigation', 'Crop Insurance', 'Weather Updates'].map((topic) => (
                  <div key={topic} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 cursor-pointer transition-colors">
                    <span className="font-medium text-gray-700">{topic}</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {Math.floor(Math.random() * 50) + 10}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <CardHeader className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Avatar className="h-12 w-12 ring-2 ring-blue-200">
                          <AvatarImage src={post.avatar} alt={post.author} />
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {post.verified && (
                          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                            <Award className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-gray-900">{post.author}</h3>
                          {post.verified && <Badge className="bg-green-100 text-green-700 text-xs">Verified</Badge>}
                        </div>
                        <div className="flex items-center text-sm text-gray-500 gap-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {post.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.time}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700 capitalize">
                      {categories.find(c => c.id === post.category)?.name}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
                  
                  {post.image && (
                    <div className="rounded-xl overflow-hidden mb-4">
                      <img 
                        src={post.image} 
                        alt="Post content" 
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-6">
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-xl">
                        <Heart className="h-4 w-4 mr-2" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-xl">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-500 hover:bg-green-50 rounded-xl">
                        <Share2 className="h-4 w-4 mr-2" />
                        {post.shares}
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      <Eye className="h-4 w-4 mr-1" />
                      {Math.floor(Math.random() * 500) + 100}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Upcoming Events */}
            <Card className="bg-white shadow-xl border-0 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-purple-500" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                    <img src={event.image} alt={event.title} className="w-full h-24 object-cover rounded-lg mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3" />
                        {event.attendees} attending
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Experts */}
            <Card className="bg-white shadow-xl border-0 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-500" />
                  Top Experts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {experts.map((expert) => (
                  <div key={expert.id} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-xl hover:bg-yellow-100 cursor-pointer transition-colors">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={expert.avatar} alt={expert.name} />
                      <AvatarFallback className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                        {expert.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-900">{expert.name}</h4>
                      <p className="text-sm text-gray-600">{expert.specialization}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          {expert.rating}
                        </div>
                        <span>•</span>
                        <span>{expert.consultations} consultations</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
