import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Users, MessageSquare, ThumbsUp, Share, Plus, Search, TrendingUp, Clock, User } from 'lucide-react';

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showingAllDiscussions, setShowingAllDiscussions] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  const allDiscussions = [
    {
      id: 1,
      title: "Best organic fertilizer for wheat crops?",
      author: "RameshFarmer",
      time: "2 hours ago",
      replies: 23,
      likes: 45,
      category: "Fertilizers",
      preview: "I've been using chemical fertilizers for years, but want to switch to organic options for my wheat fields. Any recommendations?",
      isHot: true
    },
    {
      id: 2,
      title: "Dealing with aphid infestation on cotton",
      author: "CottonKing",
      time: "4 hours ago",
      replies: 18,
      likes: 32,
      category: "Pest Control",
      preview: "My cotton plants are getting attacked by aphids. Looking for effective organic solutions that won't harm beneficial insects.",
      isHot: true
    },
    {
      id: 3,
      title: "Weather prediction apps - which ones work?",
      author: "TechFarmer",
      time: "1 day ago",
      replies: 41,
      likes: 67,
      category: "Technology",
      preview: "With climate change affecting weather patterns, I need reliable weather prediction apps. What do you fellow farmers use?",
      isHot: false
    },
    {
      id: 4,
      title: "Crop rotation strategies for small farms",
      author: "SmallFarmGuru",
      time: "1 day ago",
      replies: 29,
      likes: 54,
      category: "Farming Techniques",
      preview: "Running a 10-acre farm and looking for effective crop rotation strategies to maintain soil health and maximize yield.",
      isHot: false
    },
    {
      id: 5,
      title: "Solar-powered irrigation systems - worth the investment?",
      author: "GreenEnergy",
      time: "2 days ago",
      replies: 35,
      likes: 78,
      category: "Technology",
      preview: "Considering installing solar-powered irrigation on my 50-acre farm. Has anyone made this investment? ROI experiences?",
      isHot: false
    },
    {
      id: 6,
      title: "Seed variety recommendations for monsoon season",
      author: "MonsoonExpert",
      time: "2 days ago",
      replies: 22,
      likes: 43,
      category: "Seeds",
      preview: "With monsoon approaching, what seed varieties would you recommend for rice and vegetable crops in high rainfall areas?",
      isHot: false
    },
    {
      id: 7,
      title: "Government subsidies for farm equipment - how to apply?",
      author: "SubsidySeeker",
      time: "3 days ago",
      replies: 56,
      likes: 89,
      category: "Government Schemes",
      preview: "Looking to buy new tractor and implements. Can someone guide me through the government subsidy application process?",
      isHot: false
    },
    {
      id: 8,
      title: "Organic certification process - step by step guide",
      author: "OrganicPioneer",
      time: "3 days ago",
      replies: 47,
      likes: 91,
      category: "Organic Farming",
      preview: "Planning to get organic certification for my farm. Would appreciate a detailed guide from someone who has been through the process.",
      isHot: false
    },
    {
      id: 9,
      title: "Vertical farming techniques for space optimization",
      author: "VerticalGrower",
      time: "4 days ago",
      replies: 31,
      likes: 62,
      category: "Farming Techniques",
      preview: "Limited land space but want to maximize production. Exploring vertical farming techniques for leafy vegetables.",
      isHot: false
    },
    {
      id: 10,
      title: "Post-harvest storage solutions to reduce waste",
      author: "StorageMaster",
      time: "5 days ago",
      replies: 38,
      likes: 71,
      category: "Storage",
      preview: "Losing too much produce to poor storage. Looking for cost-effective storage solutions for fruits and vegetables.",
      isHot: false
    }
  ];

  const displayedDiscussions = showingAllDiscussions ? allDiscussions : allDiscussions.slice(0, 4);
  
  const filteredDiscussions = displayedDiscussions.filter(discussion =>
    discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    discussion.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    discussion.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredExperts = [
    {
      name: "Dr. Priya Sharma",
      title: "Soil Health Specialist",
      expertise: "Organic Farming, Soil Management",
      posts: 156,
      followers: 2400,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      title: "Crop Disease Expert",
      expertise: "Plant Pathology, IPM",
      posts: 203,
      followers: 1890,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Anita Patel",
      title: "Sustainable Agriculture",
      expertise: "Water Management, Climate Adaptation",
      posts: 178,
      followers: 3200,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const trendingTopics = [
    { tag: "#OrganicFarming", posts: 234 },
    { tag: "#ClimateChange", posts: 189 },
    { tag: "#SustainableAgriculture", posts: 156 },
    { tag: "#CropRotation", posts: 134 },
    { tag: "#SoilHealth", posts: 128 }
  ];

  const handleNewPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      // Add new post logic here
      console.log('New post:', newPost);
      alert('Post created successfully!');
      setNewPost({ title: '', content: '' });
      setShowNewPostForm(false);
    }
  };

  const loadMoreDiscussions = () => {
    setShowingAllDiscussions(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-wheat-50 to-forest-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-forest-800 mb-4">FarmHub Community</h1>
          <p className="text-xl text-forest-600">Connect, learn, and grow together with fellow farmers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button 
                className="bg-forest-600 hover:bg-forest-700"
                onClick={() => setShowNewPostForm(!showNewPostForm)}
              >
                <Plus className="h-4 w-4 mr-2" />
                New Discussion
              </Button>
            </div>

            {/* New Post Form */}
            {showNewPostForm && (
              <Card>
                <CardHeader>
                  <CardTitle>Start a New Discussion</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNewPost} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Discussion title..."
                        value={newPost.title}
                        onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Share your thoughts, questions, or experiences..."
                        value={newPost.content}
                        onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                        rows={4}
                        required
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button type="submit" className="bg-forest-600 hover:bg-forest-700">
                        Post Discussion
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setShowNewPostForm(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Discussions */}
            <div className="space-y-4">
              {filteredDiscussions.map((discussion) => (
                <Card key={discussion.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-forest-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-forest-800 mb-1 flex items-center gap-2">
                              {discussion.title}
                              {discussion.isHot && (
                                <Badge variant="destructive" className="text-xs">
                                  🔥 Hot
                                </Badge>
                              )}
                            </h3>
                            <div className="flex items-center gap-3 text-sm text-forest-600">
                              <span>by {discussion.author}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {discussion.time}
                              </span>
                              <Badge variant="outline" className="ml-2">
                                {discussion.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-forest-600 mb-4">{discussion.preview}</p>
                        
                        <div className="flex items-center gap-6">
                          <button className="flex items-center gap-2 text-forest-600 hover:text-forest-800 transition-colors">
                            <MessageSquare className="h-4 w-4" />
                            <span className="text-sm">{discussion.replies} replies</span>
                          </button>
                          <button className="flex items-center gap-2 text-forest-600 hover:text-forest-800 transition-colors">
                            <ThumbsUp className="h-4 w-4" />
                            <span className="text-sm">{discussion.likes} likes</span>
                          </button>
                          <button className="flex items-center gap-2 text-forest-600 hover:text-forest-800 transition-colors">
                            <Share className="h-4 w-4" />
                            <span className="text-sm">Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            {!showingAllDiscussions && filteredDiscussions.length === 4 && (
              <div className="text-center">
                <Button 
                  variant="outline" 
                  onClick={loadMoreDiscussions}
                  className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white"
                >
                  Load More Discussions
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-forest-600">Total Members</span>
                    <span className="font-semibold text-forest-800">12,453</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-forest-600">Active Today</span>
                    <span className="font-semibold text-forest-800">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-forest-600">Total Discussions</span>
                    <span className="font-semibold text-forest-800">3,567</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-forest-600">This Week</span>
                    <span className="font-semibold text-forest-800">89</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Experts */}
            <Card>
              <CardHeader>
                <CardTitle>Featured Experts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {featuredExperts.map((expert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <img
                        src={expert.avatar}
                        alt={expert.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-forest-800 truncate">{expert.name}</h4>
                        <p className="text-sm text-forest-600 truncate">{expert.title}</p>
                        <p className="text-xs text-forest-500">{expert.posts} posts • {expert.followers} followers</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-forest-700 hover:text-forest-800 cursor-pointer font-medium">
                        {topic.tag}
                      </span>
                      <span className="text-sm text-forest-600">{topic.posts}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Link to="/advisor" className="block text-forest-600 hover:text-forest-800 transition-colors">
                    🧑‍🌾 Find an Expert
                  </Link>
                  <Link to="/services" className="block text-forest-600 hover:text-forest-800 transition-colors">
                    🔧 Book Farm Services
                  </Link>
                  <Link to="/products" className="block text-forest-600 hover:text-forest-800 transition-colors">
                    🛒 Shop Products
                  </Link>
                  <Link to="/crop-prices" className="block text-forest-600 hover:text-forest-800 transition-colors">
                    📈 Check Crop Prices
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
