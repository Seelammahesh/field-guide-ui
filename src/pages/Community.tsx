
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
  MapPin,
  Star,
  Camera,
  Video,
  BookOpen,
  Award,
  Eye,
  Clock,
  Send,
  Bookmark,
  MoreHorizontal,
  Zap,
  Globe,
  Shield,
  Target,
  Sparkles,
  Flame,
  Thunder,
  Rocket,
  Crown,
  Diamond,
  Verified,
  Play,
  Pause,
  Volume2,
  VolumeX
} from "lucide-react";

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([]);
  const [followedUsers, setFollowedUsers] = useState<number[]>([]);
  const { toast } = useToast();

  const categories = [
    { id: 'all', name: 'All', icon: Globe, gradient: 'from-violet-500 via-purple-500 to-blue-500', count: '12.5k' },
    { id: 'tips', name: 'Pro Tips', icon: Zap, gradient: 'from-yellow-400 via-orange-500 to-red-500', count: '8.2k' },
    { id: 'equipment', name: 'Tech', icon: Target, gradient: 'from-emerald-400 via-teal-500 to-cyan-500', count: '6.1k' },
    { id: 'crops', name: 'Crops', icon: BookOpen, gradient: 'from-green-400 via-emerald-500 to-teal-500', count: '9.8k' },
    { id: 'weather', name: 'Climate', icon: Shield, gradient: 'from-blue-400 via-indigo-500 to-purple-500', count: '4.3k' }
  ];

  const communityPosts = [
    {
      id: 1,
      author: "Ravi Kumar",
      username: "@ravikumar_farms",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      location: "Punjab, India",
      time: "2h",
      category: "tips",
      title: "🌾 Revolutionary wheat method increases yield by 40%",
      content: "After 3 seasons of testing, I've cracked the code! This technique combines ancient wisdom with modern science. The results are mind-blowing - 40% more yield with 25% less water. Here's the complete breakdown...",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=500&fit=crop",
      likes: 2847,
      comments: 156,
      shares: 89,
      verified: true,
      premium: true,
      tags: ['#Innovation', '#Sustainable', '#HighYield'],
      trending: true,
      engagement: 98,
      videoThumbnail: true
    },
    {
      id: 2,
      author: "Dr. Priya Sharma",
      username: "@drpriya_agri",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      location: "Maharashtra, India",
      time: "4h",
      category: "equipment",
      title: "💰 Smart irrigation ROI - Complete 12-month analysis",
      content: "Invested ₹2.5L in AI-powered drip irrigation. The results? Mind-blowing! 300% ROI in first year. Here's the detailed breakdown that convinced my entire village...",
      image: "https://images.unsplash.com/photo-1416664806563-bb6be3be8b6f?w=800&h=500&fit=crop",
      likes: 1923,
      comments: 94,
      shares: 67,
      verified: true,
      premium: false,
      tags: ['#SmartFarming', '#ROI', '#Technology'],
      trending: true,
      engagement: 95
    },
    {
      id: 3,
      author: "Suresh Patel",
      username: "@organic_suresh",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      location: "Gujarat, India",
      time: "1d",
      category: "crops",
      title: "🌱 Zero pesticide farming: 5 methods that actually work",
      content: "Completely eliminated chemicals from my 50-acre farm. Revenue jumped 30% due to premium organic pricing. Here are the 5 game-changing natural methods...",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=500&fit=crop",
      likes: 3421,
      comments: 287,
      shares: 156,
      verified: true,
      premium: true,
      tags: ['#Organic', '#Natural', '#Premium'],
      trending: true,
      engagement: 97
    }
  ];

  const trendingTopics = [
    { name: 'AI Farming', posts: 2847, growth: '+45%', icon: Rocket, hot: true },
    { name: 'Climate Tech', posts: 1923, growth: '+38%', icon: Thunder, hot: true },
    { name: 'Drone Spraying', posts: 1456, growth: '+29%', icon: Zap, hot: false },
    { name: 'Smart Sensors', posts: 987, growth: '+22%', icon: Target, hot: false }
  ];

  const topExperts = [
    {
      id: 1,
      name: "Dr. Amit Singh",
      username: "@amit_precision",
      specialization: "AI & Precision Agriculture",
      rating: 4.9,
      followers: "25.6K",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
      verified: true,
      premium: true,
      status: "live",
      lastActive: "now",
      expertise: ["AI", "Sensors", "Analytics"]
    },
    {
      id: 2,
      name: "Dr. Sunita Rao",
      username: "@sunita_organic",
      specialization: "Sustainable & Organic Methods",
      rating: 4.8,
      followers: "18.9K",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      verified: true,
      premium: false,
      status: "available",
      lastActive: "5m ago",
      expertise: ["Organic", "Sustainability", "Soil Health"]
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
      title: likedPosts.includes(postId) ? "💔 Unliked" : "❤️ Liked",
      description: likedPosts.includes(postId) ? "Removed from favorites" : "Added to favorites",
      duration: 1500,
    });
  };

  const handleBookmark = (postId: number) => {
    setBookmarkedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const handleFollow = (userId: number) => {
    setFollowedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
    toast({
      title: followedUsers.includes(userId) ? "👋 Unfollowed" : "🎉 Following",
      description: followedUsers.includes(userId) ? "Removed from following" : "Added to following",
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
        title: "⚠️ Missing Information",
        description: "Please add both title and content",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    toast({
      title: "🚀 Post Published",
      description: "Your post is now live in the community!",
      duration: 3000,
    });
    
    setNewPostTitle('');
    setNewPostContent('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full shadow-2xl mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <Users className="h-5 w-5 text-white" />
              <span className="text-sm font-bold text-white">50K+ Active Farmers • Live Now</span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-6 tracking-tight">
              Farm
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-medium">
              Where innovation meets tradition. Connect, learn, and grow with the world's most advanced farming community.
            </p>
          </div>

          {/* Enhanced Search & Filter */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl mb-8">
            <div className="flex flex-col xl:flex-row gap-6 items-center">
              <div className="relative flex-grow w-full">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/60 h-6 w-6" />
                <Input
                  placeholder="Search innovations, breakthroughs, success stories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-16 pr-6 py-5 rounded-2xl border-white/30 focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 text-lg bg-white/10 text-white placeholder-white/60 shadow-xl backdrop-blur-xl"
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
                      className={`rounded-2xl px-6 py-4 font-bold transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 ${
                        selectedCategory === category.id
                          ? `bg-gradient-to-r ${category.gradient} text-white border-0 shadow-2xl`
                          : "hover:bg-white/20 border-white/30 bg-white/10 text-white backdrop-blur-xl"
                      }`}
                    >
                      <IconComponent className="h-5 w-5 mr-2" />
                      <span className="hidden sm:inline">{category.name}</span>
                      <Badge className="ml-2 bg-white/20 text-white border-0 text-xs font-bold">
                        {category.count}
                      </Badge>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          {/* Left Sidebar */}
          <div className="xl:col-span-1 space-y-6">
            {/* Create Post */}
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Share Innovation</h3>
                  <p className="text-white/60 text-sm">Inspire the community</p>
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 rounded-2xl font-bold py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <Plus className="h-5 w-5 mr-2" />
                    Create Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl rounded-3xl bg-slate-900/95 backdrop-blur-2xl border border-white/20">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Share Your Innovation
                    </DialogTitle>
                    <DialogDescription className="text-lg text-white/70">
                      Help fellow farmers with your breakthrough insights
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 pt-6">
                    <Input 
                      placeholder="What's your breakthrough story?" 
                      value={newPostTitle}
                      onChange={(e) => setNewPostTitle(e.target.value)}
                      className="rounded-2xl py-4 text-lg font-medium bg-white/10 border-white/20 text-white placeholder-white/60"
                    />
                    <Textarea 
                      placeholder="Share your farming innovation, game-changing results, or problem-solving approach..." 
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                      className="rounded-2xl min-h-[150px] text-base leading-relaxed resize-none bg-white/10 border-white/20 text-white placeholder-white/60"
                    />
                    <div className="flex gap-4">
                      <Button variant="outline" size="lg" className="rounded-2xl flex-1 font-semibold bg-white/10 border-white/20 text-white hover:bg-white/20">
                        <Camera className="h-4 w-4 mr-2" />
                        Photo
                      </Button>
                      <Button variant="outline" size="lg" className="rounded-2xl flex-1 font-semibold bg-white/10 border-white/20 text-white hover:bg-white/20">
                        <Video className="h-4 w-4 mr-2" />
                        Video
                      </Button>
                    </div>
                    <Button 
                      onClick={handleCreatePost}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl py-4 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Publish Innovation
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Trending Topics */}
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6">
                <div className="flex items-center gap-3">
                  <Flame className="h-6 w-6 text-white animate-pulse" />
                  <h3 className="text-xl font-bold text-white">Trending Now</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {trendingTopics.map((topic, index) => {
                  const IconComponent = topic.icon;
                  return (
                    <div key={topic.name} className="group p-4 bg-white/5 hover:bg-white/10 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/10 hover:border-white/20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${topic.hot ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-white/20'}`}>
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-white">{topic.name}</p>
                              {topic.hot && <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>}
                            </div>
                            <p className="text-sm text-white/60">{topic.posts} posts</p>
                          </div>
                        </div>
                        <Badge className={`font-bold rounded-full px-3 py-1 ${topic.hot ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'}`}>
                          {topic.growth}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="xl:col-span-3 space-y-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="group bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
                {post.trending && (
                  <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 px-6 py-3">
                    <div className="flex items-center gap-3 text-white font-bold">
                      <TrendingUp className="h-5 w-5 animate-bounce" />
                      <span>🔥 VIRAL POST</span>
                      <div className="ml-auto flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        <span className="text-sm">{post.engagement}% engagement</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Avatar className="h-16 w-16 ring-4 ring-purple-400/50 shadow-2xl">
                          <AvatarImage src={post.avatar} alt={post.author} />
                          <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {post.verified && (
                          <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-2 shadow-xl">
                            <Verified className="h-4 w-4 text-white" />
                          </div>
                        )}
                        {post.premium && (
                          <div className="absolute -top-1 -left-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-1.5 shadow-xl">
                            <Crown className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-white text-xl">{post.author}</h3>
                          <span className="text-purple-300 text-sm font-medium">{post.username}</span>
                          {post.verified && <Badge className="bg-blue-500/20 text-blue-300 text-xs rounded-full font-bold px-2">Verified</Badge>}
                          {post.premium && <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs rounded-full font-bold px-2">Pro</Badge>}
                        </div>
                        <div className="flex items-center text-sm text-white/60 gap-4">
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
                    <div className="flex items-center gap-3">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleFollow(post.id)}
                        className={`rounded-full px-4 py-2 font-bold transition-all duration-300 ${
                          followedUsers.includes(post.id) 
                            ? 'bg-white/20 text-white' 
                            : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                        }`}
                      >
                        {followedUsers.includes(post.id) ? 'Following' : 'Follow'}
                      </Button>
                      <Button variant="ghost" size="sm" className="rounded-full p-3 text-white/60 hover:text-white hover:bg-white/10">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-4 leading-tight">{post.title}</h2>
                  <p className="text-white/80 mb-6 leading-relaxed text-lg">{post.content}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <Badge key={tag} className="rounded-full px-4 py-2 bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30 cursor-pointer font-medium transition-all duration-300 hover:scale-110">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {post.image && (
                    <div className="relative rounded-3xl overflow-hidden mb-8 shadow-2xl group">
                      <img 
                        src={post.image} 
                        alt="Post content" 
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {post.videoThumbnail && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                          <Button className="bg-white/20 backdrop-blur-xl border border-white/30 text-white rounded-full p-6 hover:bg-white/30 hover:scale-110 transition-all duration-300">
                            <Play className="h-8 w-8" />
                          </Button>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-6 border-t border-white/20">
                    <div className="flex items-center space-x-6">
                      <Button 
                        variant="ghost" 
                        size="lg" 
                        onClick={() => handleLike(post.id)}
                        className={`rounded-2xl px-6 py-3 font-bold transition-all duration-300 transform hover:scale-110 ${
                          likedPosts.includes(post.id) 
                            ? 'text-red-400 bg-red-500/20 hover:bg-red-500/30' 
                            : 'text-white/70 hover:text-red-400 hover:bg-red-500/20'
                        }`}
                      >
                        <Heart className={`h-6 w-6 mr-2 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                        {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="lg" 
                        className="text-white/70 hover:text-blue-400 hover:bg-blue-500/20 rounded-2xl px-6 py-3 font-bold transition-all duration-300 transform hover:scale-110"
                        onClick={() => toast({ title: "💬 Comments", description: "Opening comments section!", duration: 2000 })}
                      >
                        <MessageCircle className="h-6 w-6 mr-2" />
                        {post.comments}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="lg" 
                        onClick={() => handleShare(post)}
                        className="text-white/70 hover:text-green-400 hover:bg-green-500/20 rounded-2xl px-6 py-3 font-bold transition-all duration-300 transform hover:scale-110"
                      >
                        <Share2 className="h-6 w-6 mr-2" />
                        {post.shares}
                      </Button>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button 
                        variant="ghost" 
                        size="lg" 
                        onClick={() => handleBookmark(post.id)}
                        className={`rounded-full p-3 transition-all duration-300 transform hover:scale-110 ${
                          bookmarkedPosts.includes(post.id) 
                            ? 'text-yellow-400 bg-yellow-500/20' 
                            : 'text-white/60 hover:text-yellow-400 hover:bg-yellow-500/20'
                        }`}
                      >
                        <Bookmark className={`h-6 w-6 ${bookmarkedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                      </Button>
                      <div className="flex items-center text-white/50 text-sm font-medium">
                        <Eye className="h-4 w-4 mr-1" />
                        {Math.floor(Math.random() * 50000) + 10000}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="xl:col-span-1 space-y-6">
            {/* Top Experts */}
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6">
                <div className="flex items-center gap-3">
                  <Diamond className="h-6 w-6 text-white animate-pulse" />
                  <h3 className="text-xl font-bold text-white">Top Experts</h3>
                </div>
              </div>
              <div className="p-6 space-y-6">
                {topExperts.map((expert) => (
                  <div key={expert.id} className="group p-5 bg-white/5 hover:bg-white/10 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/10 hover:border-white/20">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="relative">
                        <Avatar className="h-16 w-16 shadow-xl ring-2 ring-purple-400/50">
                          <AvatarImage src={expert.avatar} alt={expert.name} />
                          <AvatarFallback className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold">
                            {expert.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                          expert.status === 'live' ? 'bg-red-500 animate-pulse' : 
                          expert.status === 'available' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                        {expert.premium && (
                          <div className="absolute -top-1 -left-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-1">
                            <Crown className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-white text-sm truncate">{expert.name}</h4>
                          {expert.verified && <Verified className="h-4 w-4 text-blue-400 flex-shrink-0" />}
                        </div>
                        <p className="text-purple-300 text-xs font-medium mb-1">{expert.username}</p>
                        <p className="text-white/60 text-xs leading-tight mb-2">{expert.specialization}</p>
                        <div className="flex items-center gap-3 text-xs text-white/50 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="font-bold">{expert.rating}</span>
                          </div>
                          <span>{expert.followers} followers</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {expert.expertise.map((skill) => (
                            <Badge key={skill} className="bg-purple-500/20 text-purple-300 text-xs px-2 py-0.5 rounded-full border-0">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <Button 
                        onClick={() => toast({ title: "🎯 Expert Call", description: "Booking expert consultation!", duration: 2000 })}
                        size="sm" 
                        className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-xl font-bold text-xs py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        {expert.status === 'live' ? '🔴 Join Live' : 'Book Call'}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="px-3 py-2 rounded-xl border-white/20 bg-white/5 hover:bg-white/10 text-white"
                        onClick={() => toast({ title: "💬 Message", description: "Opening chat!", duration: 2000 })}
                      >
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Community;
