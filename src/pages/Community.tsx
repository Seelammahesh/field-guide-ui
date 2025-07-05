
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
  ThumbsUp,
  Eye,
  Clock,
  Send,
  Bookmark,
  MoreHorizontal,
  Zap,
  Globe,
  Shield,
  Target
} from "lucide-react";

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([]);
  const { toast } = useToast();

  const categories = [
    { id: 'all', name: 'All', icon: Globe, gradient: 'from-blue-500 to-purple-500' },
    { id: 'tips', name: 'Tips', icon: Zap, gradient: 'from-green-500 to-teal-500' },
    { id: 'equipment', name: 'Equipment', icon: Target, gradient: 'from-orange-500 to-red-500' },
    { id: 'crops', name: 'Crops', icon: BookOpen, gradient: 'from-emerald-500 to-cyan-500' },
    { id: 'weather', name: 'Weather', icon: Shield, gradient: 'from-indigo-500 to-pink-500' }
  ];

  const communityPosts = [
    {
      id: 1,
      author: "Ravi Kumar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      location: "Punjab, India",
      time: "2 hours ago",
      category: "tips",
      title: "Revolutionary wheat cultivation method increases yield by 40%",
      content: "After 3 seasons of testing, I've developed a technique that combines traditional wisdom with modern science. The results speak for themselves - 40% increase in yield with 25% less water usage. Here's exactly how I did it...",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
      likes: 1247,
      comments: 89,
      shares: 156,
      verified: true,
      tags: ['wheat', 'innovation', 'yield-boost'],
      trending: true
    },
    {
      id: 2,
      author: "Dr. Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      location: "Maharashtra, India",
      time: "5 hours ago",
      category: "equipment",
      title: "Smart drip irrigation: My ROI analysis after 1 year",
      content: "Invested ₹2.5L in smart drip irrigation system. Here's the complete breakdown of costs, savings, and unexpected benefits that convinced my entire village to adopt this technology.",
      image: "https://images.unsplash.com/photo-1416664806563-bb6be3be8b6f?w=600&h=400&fit=crop",
      likes: 892,
      comments: 67,
      shares: 134,
      verified: true,
      tags: ['technology', 'ROI', 'smart-farming'],
      trending: false
    },
    {
      id: 3,
      author: "Suresh Patel",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      location: "Gujarat, India",
      time: "1 day ago",
      category: "crops",
      title: "Zero-pesticide farming: 5 natural methods that actually work",
      content: "Completely eliminated chemical pesticides from my 50-acre farm. Revenue increased by 30% due to premium organic pricing. Here are the 5 game-changing methods I use...",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
      likes: 2156,
      comments: 234,
      shares: 445,
      verified: true,
      tags: ['organic', 'sustainable', 'premium'],
      trending: true
    }
  ];

  const trendingTopics = [
    { name: 'Smart Farming', posts: 1247, growth: '+23%' },
    { name: 'Organic Methods', posts: 892, growth: '+18%' },
    { name: 'Water Conservation', posts: 654, growth: '+31%' },
    { name: 'Crop Insurance', posts: 432, growth: '+12%' }
  ];

  const experts = [
    {
      id: 1,
      name: "Dr. Amit Singh",
      specialization: "Precision Agriculture",
      rating: 4.9,
      consultations: 2500,
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
      experience: "15+ years",
      badge: "Top Expert",
      status: "online"
    },
    {
      id: 2,
      name: "Dr. Sunita Rao",
      specialization: "Sustainable Farming",
      rating: 4.8,
      consultations: 1800,
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      experience: "12+ years",
      badge: "Verified Expert",
      status: "busy"
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
      title: likedPosts.includes(postId) ? "👎 Unliked" : "❤️ Liked",
      description: likedPosts.includes(postId) ? "Removed from likes" : "Added to likes",
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
      title: bookmarkedPosts.includes(postId) ? "🔖 Removed" : "📌 Bookmarked",
      description: bookmarkedPosts.includes(postId) ? "Removed from bookmarks" : "Saved to bookmarks",
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
        title: "❌ Missing Information",
        description: "Please add both title and content",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    toast({
      title: "🎉 Post Published",
      description: "Your post is now live in the community!",
      duration: 3000,
    });
    
    setNewPostTitle('');
    setNewPostContent('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full shadow-xl mb-6">
              <Users className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white">50,000+ Active Farmers</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              Farming
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
              Where innovation meets tradition. Share knowledge, grow together.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search & Filter Section */}
        <Card className="bg-white/80 backdrop-blur-xl shadow-2xl border-0 rounded-3xl mb-8 overflow-hidden">
          <CardContent className="p-8">
            <div className="flex flex-col xl:flex-row gap-6 items-center">
              <div className="relative flex-grow w-full">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search discussions, tips, innovations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-14 pr-6 py-4 rounded-2xl border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 text-lg bg-white/90 shadow-lg"
                />
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center xl:justify-start">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="lg"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`rounded-2xl px-6 py-3 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                        selectedCategory === category.id
                          ? `bg-gradient-to-r ${category.gradient} text-white border-0`
                          : "hover:bg-gray-50 hover:border-gray-300 bg-white"
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

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          {/* Left Sidebar */}
          <div className="xl:col-span-1 space-y-6">
            {/* Create Post */}
            <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-emerald-800 flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Share Your Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-2xl font-bold py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Post
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl rounded-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        Share Your Experience
                      </DialogTitle>
                      <DialogDescription className="text-lg text-gray-600">
                        Help fellow farmers with your insights
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 pt-6">
                      <Input 
                        placeholder="What's your story about?" 
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                        className="rounded-2xl py-4 text-lg font-medium"
                      />
                      <Textarea 
                        placeholder="Share your farming insights, breakthrough moments, or challenges overcome..." 
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                        className="rounded-2xl min-h-[150px] text-base leading-relaxed resize-none"
                      />
                      <div className="flex gap-4">
                        <Button variant="outline" size="lg" className="rounded-2xl flex-1 font-semibold">
                          <Camera className="h-4 w-4 mr-2" />
                          Add Photo
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-2xl flex-1 font-semibold">
                          <Video className="h-4 w-4 mr-2" />
                          Add Video
                        </Button>
                      </div>
                      <Button 
                        onClick={handleCreatePost}
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl py-4 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Publish Post
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card className="bg-white shadow-xl border-0 rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <CardTitle className="text-lg font-bold flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Trending Now
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {trendingTopics.map((topic, index) => (
                  <div key={topic.name} className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl hover:shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105">
                    <div>
                      <p className="font-semibold text-gray-800">{topic.name}</p>
                      <p className="text-sm text-gray-600">{topic.posts} posts</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700 font-bold rounded-full px-3 py-1">
                      {topic.growth}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Feed */}
          <div className="xl:col-span-3 space-y-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                {post.trending && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2">
                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                      <TrendingUp className="h-4 w-4" />
                      TRENDING POST
                    </div>
                  </div>
                )}
                
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Avatar className="h-16 w-16 ring-4 ring-emerald-200 shadow-xl">
                          <AvatarImage src={post.avatar} alt={post.author} />
                          <AvatarFallback className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-xl">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {post.verified && (
                          <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-2 shadow-lg">
                            <Award className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-gray-900 text-xl">{post.author}</h3>
                          {post.verified && <Badge className="bg-blue-100 text-blue-800 text-xs rounded-full font-bold">Verified Farmer</Badge>}
                        </div>
                        <div className="flex items-center text-sm text-gray-500 gap-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {post.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.time}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="rounded-full p-3">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">{post.content}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="rounded-full px-4 py-2 text-sm bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 cursor-pointer font-medium">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {post.image && (
                    <div className="rounded-3xl overflow-hidden mb-8 shadow-2xl">
                      <img 
                        src={post.image} 
                        alt="Post content" 
                        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center space-x-8">
                      <Button 
                        variant="ghost" 
                        size="lg" 
                        onClick={() => handleLike(post.id)}
                        className={`rounded-2xl px-6 py-3 font-semibold transition-all duration-300 ${
                          likedPosts.includes(post.id) 
                            ? 'text-red-500 bg-red-50 hover:bg-red-100' 
                            : 'text-gray-600 hover:text-red-500 hover:bg-red-50'
                        }`}
                      >
                        <Heart className={`h-5 w-5 mr-2 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                        {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="lg" 
                        className="text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-2xl px-6 py-3 font-semibold transition-all duration-300"
                        onClick={() => toast({ title: "💬 Comments", description: "Opening comments!", duration: 2000 })}
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        {post.comments}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="lg" 
                        onClick={() => handleShare(post)}
                        className="text-gray-600 hover:text-green-500 hover:bg-green-50 rounded-2xl px-6 py-3 font-semibold transition-all duration-300"
                      >
                        <Share2 className="h-5 w-5 mr-2" />
                        {post.shares}
                      </Button>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button 
                        variant="ghost" 
                        size="lg" 
                        onClick={() => handleBookmark(post.id)}
                        className={`rounded-full p-3 transition-all duration-300 ${
                          bookmarkedPosts.includes(post.id) 
                            ? 'text-yellow-500 bg-yellow-50' 
                            : 'text-gray-500 hover:text-yellow-500 hover:bg-yellow-50'
                        }`}
                      >
                        <Bookmark className={`h-5 w-5 ${bookmarkedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                      </Button>
                      <div className="flex items-center text-gray-500 text-sm font-medium">
                        <Eye className="h-4 w-4 mr-1" />
                        {Math.floor(Math.random() * 10000) + 1000}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="xl:col-span-1 space-y-6">
            {/* Expert Consultants */}
            <Card className="bg-white shadow-xl border-0 rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                <CardTitle className="text-lg font-bold flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Top Experts
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {experts.map((expert) => (
                  <div key={expert.id} className="p-5 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl hover:shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105 border border-purple-100">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="relative">
                        <Avatar className="h-14 w-14 shadow-lg ring-2 ring-purple-200">
                          <AvatarImage src={expert.avatar} alt={expert.name} />
                          <AvatarFallback className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold">
                            {expert.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                          expert.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-gray-900 text-sm">{expert.name}</h4>
                          <Badge className="bg-purple-100 text-purple-700 text-xs rounded-full px-2 py-0.5 font-bold">
                            {expert.badge}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600 font-semibold">{expert.specialization}</p>
                        <p className="text-xs text-gray-500">{expert.experience}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="font-bold">{expert.rating}</span>
                      </div>
                      <span className="font-medium">{expert.consultations} helped</span>
                    </div>
                    <Button 
                      onClick={() => toast({ title: "🎯 Consultation", description: "Booking expert consultation!", duration: 2000 })}
                      size="sm" 
                      className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 rounded-xl font-bold text-xs py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Book Now
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
