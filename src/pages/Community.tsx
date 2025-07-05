
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
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
  Clock,
  Send,
  Bookmark,
  MoreHorizontal
} from "lucide-react";

const Community = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([]);
  const { toast } = useToast();

  const categories = [
    { id: 'all', name: 'All Posts', icon: Users, color: 'bg-blue-500' },
    { id: 'tips', name: 'Farming Tips', icon: BookOpen, color: 'bg-green-500' },
    { id: 'equipment', name: 'Equipment', icon: Award, color: 'bg-purple-500' },
    { id: 'crops', name: 'Crop Advice', icon: TrendingUp, color: 'bg-orange-500' },
    { id: 'weather', name: 'Weather Updates', icon: Calendar, color: 'bg-cyan-500' }
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
      content: "Just harvested my wheat crop and got excellent results! Here are some key tips that worked for me this season. Proper soil preparation is crucial - make sure to plow the field at least 15-20 days before sowing. Use certified seeds and maintain proper spacing.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
      likes: 45,
      comments: 12,
      shares: 8,
      verified: true,
      tags: ['wheat', 'winter', 'cultivation']
    },
    {
      id: 2,
      author: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      location: "Maharashtra, India",
      time: "5 hours ago",
      category: "equipment",
      title: "New drip irrigation system installation completed",
      content: "Finally installed the new drip irrigation system across 10 acres. Water consumption reduced by 40%! The investment was worth it. Installation took 3 days with professional help. Happy to share my experience and answer questions.",
      image: "https://images.unsplash.com/photo-1416664806563-bb6be3be8b6f?w=600&h=400&fit=crop",
      likes: 67,
      comments: 23,
      shares: 15,
      verified: false,
      tags: ['irrigation', 'water-saving', 'technology']
    },
    {
      id: 3,
      author: "Suresh Patel",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      location: "Gujarat, India",
      time: "1 day ago",
      category: "crops",
      title: "Organic pest control methods that actually work",
      content: "Sharing my experience with natural pest control methods. These techniques have been game-changers for my organic farm. Neem oil spray works wonders for aphids, and companion planting has significantly reduced pest issues.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
      likes: 89,
      comments: 31,
      shares: 22,
      verified: true,
      tags: ['organic', 'pest-control', 'sustainable']
    }
  ];

  const events = [
    {
      id: 1,
      title: "Annual Farmers Meet 2024",
      date: "March 15, 2024",
      location: "Delhi",
      attendees: 250,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      description: "Connect with fellow farmers and learn about latest agricultural innovations"
    },
    {
      id: 2,
      title: "Organic Farming Workshop",
      date: "March 22, 2024",
      location: "Bangalore",
      attendees: 120,
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
      description: "Learn sustainable farming practices from industry experts"
    }
  ];

  const experts = [
    {
      id: 1,
      name: "Dr. Amit Singh",
      specialization: "Crop Science",
      rating: 4.9,
      consultations: 500,
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
      experience: "15+ years",
      badge: "Top Expert"
    },
    {
      id: 2,
      name: "Dr. Sunita Rao",
      specialization: "Soil Health",
      rating: 4.8,
      consultations: 350,
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      experience: "12+ years",
      badge: "Verified Expert"
    }
  ];

  const filteredPosts = communityPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
    toast({
      title: likedPosts.includes(postId) ? "👎 Unliked" : "👍 Liked",
      description: likedPosts.includes(postId) ? "Post removed from your likes" : "Post added to your likes",
      duration: 2000,
    });
  };

  const handleBookmark = (postId: number) => {
    setBookmarkedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
    toast({
      title: bookmarkedPosts.includes(postId) ? "🔖 Unbookmarked" : "📌 Bookmarked",
      description: bookmarkedPosts.includes(postId) ? "Post removed from bookmarks" : "Post saved to bookmarks",
      duration: 2000,
    });
  };

  const handleShare = (post: any) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.content,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`${post.title} - ${window.location.href}`);
      toast({
        title: "🔗 Link Copied",
        description: "Post link copied to clipboard",
        duration: 2000,
      });
    }
  };

  const handleCreatePost = () => {
    if (!newPostTitle.trim() || !newPostContent.trim()) {
      toast({
        title: "❌ Error",
        description: "Please fill in both title and content",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    toast({
      title: "✅ Post Created",
      description: "Your post has been shared with the community!",
      duration: 3000,
    });
    
    setNewPostTitle('');
    setNewPostContent('');
  };

  const handleJoinEvent = (eventId: number) => {
    toast({
      title: "🎉 Event Joined",
      description: "You've successfully registered for the event!",
      duration: 3000,
    });
  };

  const handleConsultExpert = (expertId: number) => {
    toast({
      title: "👨‍🌾 Consultation Booked",
      description: "Expert consultation request sent successfully!",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Modern Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
            <Users className="h-6 w-6 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Join 50k+ Farmers</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Farming Community
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect, learn, and grow with fellow farmers from across the country
          </p>
        </div>

        {/* Enhanced Search and Filter */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-0 rounded-3xl mb-8 overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="relative flex-grow w-full lg:w-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search posts, discussions, tips..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 rounded-2xl border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base bg-white/90"
                />
              </div>
              
              <div className="flex flex-wrap gap-3 w-full lg:w-auto justify-center lg:justify-start">
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
                          ? `${category.color} text-white shadow-lg hover:shadow-xl scale-105`
                          : "hover:bg-gray-50 hover:border-gray-300 hover:scale-105"
                      }`}
                    >
                      <IconComponent className="h-4 w-4 mr-2" />
                      {category.name}
                    </Button>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Quick Actions & Trending */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white">
                <CardTitle className="text-lg font-bold flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl font-semibold py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Post
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg rounded-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">Share Your Experience</DialogTitle>
                      <DialogDescription>Connect with the farming community</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 pt-4">
                      <Input 
                        placeholder="What's your post about?" 
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                        className="rounded-2xl py-3 text-lg"
                      />
                      <Textarea 
                        placeholder="Share your farming insights, tips, or questions..." 
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                        className="rounded-2xl min-h-[120px] text-base leading-relaxed"
                      />
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="rounded-full flex-1">
                          <Camera className="h-4 w-4 mr-2" />
                          Photo
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full flex-1">
                          <Video className="h-4 w-4 mr-2" />
                          Video
                        </Button>
                      </div>
                      <Button 
                        onClick={handleCreatePost}
                        className="w-full bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl py-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Share Post
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button 
                  variant="outline" 
                  className="w-full rounded-2xl font-semibold py-3 hover:bg-blue-50 hover:border-blue-300 transform hover:scale-105 transition-all duration-300"
                  onClick={() => toast({ title: "🌐 Groups", description: "Joining farmer groups feature!", duration: 2000 })}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Join Groups
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full rounded-2xl font-semibold py-3 hover:bg-green-50 hover:border-green-300 transform hover:scale-105 transition-all duration-300"
                  onClick={() => toast({ title: "📅 Events", description: "Exploring farming events!", duration: 2000 })}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Events
                </Button>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-orange-500" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {['Organic Farming', 'Drip Irrigation', 'Crop Insurance', 'Weather Updates'].map((topic, index) => (
                  <div key={topic} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl hover:from-blue-50 hover:to-purple-50 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
                    <span className="font-medium text-gray-700">{topic}</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 rounded-full px-3 py-1">
                      {Math.floor(Math.random() * 50) + 10}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
                <CardHeader className="p-6 pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Avatar className="h-14 w-14 ring-3 ring-blue-200 shadow-lg">
                          <AvatarImage src={post.avatar} alt={post.author} />
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {post.verified && (
                          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1.5 shadow-lg">
                            <Award className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3">
                          <h3 className="font-bold text-gray-900 text-lg">{post.author}</h3>
                          {post.verified && <Badge className="bg-green-100 text-green-700 text-xs rounded-full">Verified</Badge>}
                        </div>
                        <div className="flex items-center text-sm text-gray-500 gap-4 mt-1">
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
                    <div className="flex items-center gap-2">
                      <Badge className={`${categories.find(c => c.id === post.category)?.color || 'bg-gray-500'} text-white capitalize rounded-full px-3 py-1`}>
                        {categories.find(c => c.id === post.category)?.name}
                      </Badge>
                      <Button variant="ghost" size="sm" className="rounded-full p-2">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed text-base">{post.content}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="rounded-full px-3 py-1 text-xs bg-blue-50 text-blue-700 border-blue-200">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {post.image && (
                    <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                      <img 
                        src={post.image} 
                        alt="Post content" 
                        className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center space-x-6">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleLike(post.id)}
                        className={`rounded-2xl px-4 py-2 font-medium transition-all duration-300 ${
                          likedPosts.includes(post.id) 
                            ? 'text-red-500 bg-red-50 hover:bg-red-100' 
                            : 'text-gray-600 hover:text-red-500 hover:bg-red-50'
                        }`}
                      >
                        <Heart className={`h-4 w-4 mr-2 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                        {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-2xl px-4 py-2 font-medium transition-all duration-300"
                        onClick={() => toast({ title: "💬 Comments", description: "Opening comments section!", duration: 2000 })}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {post.comments}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleShare(post)}
                        className="text-gray-600 hover:text-green-500 hover:bg-green-50 rounded-2xl px-4 py-2 font-medium transition-all duration-300"
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        {post.shares}
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleBookmark(post.id)}
                        className={`rounded-full p-2 transition-all duration-300 ${
                          bookmarkedPosts.includes(post.id) 
                            ? 'text-yellow-500 bg-yellow-50' 
                            : 'text-gray-500 hover:text-yellow-500 hover:bg-yellow-50'
                        }`}
                      >
                        <Bookmark className={`h-4 w-4 ${bookmarkedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-500 rounded-full p-2">
                        <Eye className="h-4 w-4 mr-1" />
                        {Math.floor(Math.random() * 500) + 100}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Upcoming Events */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-purple-500" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="p-4 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 border border-purple-100">
                    <img src={event.image} alt={event.title} className="w-full h-24 object-cover rounded-xl mb-3 shadow-md" />
                    <h4 className="font-bold text-gray-900 mb-2 text-sm leading-tight">{event.title}</h4>
                    <p className="text-xs text-gray-600 mb-3 leading-relaxed">{event.description}</p>
                    <div className="text-xs text-gray-600 space-y-2 mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3 text-purple-500" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3 text-purple-500" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3 text-purple-500" />
                        {event.attendees} attending
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleJoinEvent(event.id)}
                      size="sm" 
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-xl font-semibold text-xs py-2 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Join Event
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Experts */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-500" />
                  Expert Consultants
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {experts.map((expert) => (
                  <div key={expert.id} className="p-4 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-2xl hover:shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105 border border-yellow-100">
                    <div className="flex items-start space-x-3 mb-3">
                      <Avatar className="h-12 w-12 shadow-lg ring-2 ring-yellow-200">
                        <AvatarImage src={expert.avatar} alt={expert.name} />
                        <AvatarFallback className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold">
                          {expert.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-gray-900 text-sm">{expert.name}</h4>
                          <Badge className="bg-yellow-100 text-yellow-700 text-xs rounded-full px-2 py-0.5">
                            {expert.badge}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600 font-medium">{expert.specialization}</p>
                        <p className="text-xs text-gray-500">{expert.experience} experience</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="font-semibold">{expert.rating}</span>
                      </div>
                      <span>{expert.consultations} consultations</span>
                    </div>
                    <Button 
                      onClick={() => handleConsultExpert(expert.id)}
                      size="sm" 
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-xl font-semibold text-xs py-2 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Book Consultation
                    </Button>
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
