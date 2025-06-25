import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Users, MessageSquare, ThumbsUp, Share, Plus, Search, TrendingUp, Clock, User, Video, Play } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import VideoPostForm from '@/components/VideoPostForm';
import VideoModal from '@/components/VideoModal';

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showingAllDiscussions, setShowingAllDiscussions] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [showVideoForm, setShowVideoForm] = useState(false);
  const [discussions, setDiscussions] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const isMobile = useIsMobile();

  // Sample video posts
  const sampleVideos = [
    {
      id: 1001,
      title: "PM-KISAN Scheme: Complete Registration Guide",
      author: "AgriExpert",
      time: "3 hours ago",
      replies: 45,
      likes: 128,
      category: "Government Schemes",
      preview: "Step-by-step guide on how to register for PM-KISAN scheme and receive ₹6000 annual financial benefit. This comprehensive tutorial covers documentation, online application process, and common issues farmers face.",
      isVideo: true,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
      duration: "8:45",
      isHot: true
    },
    {
      id: 1002,
      title: "Organic Farming Success Story - From Loss to Profit",
      author: "FarmerRaj",
      time: "1 day ago",
      replies: 67,
      likes: 234,
      category: "Success Stories",
      preview: "My journey from traditional farming to organic methods. How I increased my income by 40% in 2 years using sustainable practices. Sharing real numbers, challenges faced, and solutions found.",
      isVideo: true,
      videoUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
      thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300&h=200&fit=crop",
      duration: "12:30",
      isHot: true
    },
    {
      id: 1003,
      title: "Drip Irrigation Setup for Small Farmers",
      author: "WaterWiseAgriculture",
      time: "2 days ago",
      replies: 34,
      likes: 89,
      category: "Technology",
      preview: "Complete installation guide for drip irrigation system on a budget. Save up to 60% water and increase crop yield. Includes material list, cost breakdown, and maintenance tips.",
      isVideo: true,
      videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      thumbnail: "https://images.unsplash.com/photo-1416664513467-7ad6ac882d5b?w=300&h=200&fit=crop",
      duration: "15:20",
      isHot: false
    }
  ];

  const allDiscussions = [
    ...sampleVideos,
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

  const displayedDiscussions = showingAllDiscussions ? allDiscussions : allDiscussions.slice(0, 6);
  
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
      const newDiscussion = {
        id: Date.now(),
        title: newPost.title,
        author: 'Current User',
        time: 'Just now',
        replies: 0,
        likes: 0,
        category: 'General',
        preview: newPost.content,
        isHot: false
      };
      setDiscussions([newDiscussion, ...discussions]);
      setNewPost({ title: '', content: '' });
      setShowNewPostForm(false);
    }
  };

  const handleVideoPost = (videoData: any) => {
    const newVideoPost = {
      ...videoData,
      isVideo: true
    };
    setDiscussions([newVideoPost, ...discussions]);
  };

  const handleVideoClick = (video: any) => {
    if (video.isVideo) {
      setSelectedVideo(video);
      setShowVideoModal(true);
    }
  };

  const loadMoreDiscussions = () => {
    setShowingAllDiscussions(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-wheat-50 to-forest-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-800 mb-3 sm:mb-4">FarmHub Community</h1>
          <p className="text-base sm:text-lg lg:text-xl text-forest-600">Connect, learn, and grow together with fellow farmers</p>
        </div>

        <div className={`grid grid-cols-1 ${isMobile ? '' : 'lg:grid-cols-4'} gap-6 sm:gap-8`}>
          {/* Main Content */}
          <div className={`${isMobile ? '' : 'lg:col-span-3'} space-y-4 sm:space-y-6`}>
            {/* Action Bar */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 text-sm sm:text-base"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  className="bg-forest-600 hover:bg-forest-700 flex-1 sm:flex-none"
                  onClick={() => setShowNewPostForm(!showNewPostForm)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  New Discussion
                </Button>
                <Button 
                  variant="outline"
                  className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white flex-1 sm:flex-none"
                  onClick={() => setShowVideoForm(true)}
                >
                  <Video className="h-4 w-4 mr-2" />
                  Share Video
                </Button>
              </div>
            </div>

            {/* New Post Form */}
            {showNewPostForm && (
              <Card className="border-forest-200 shadow-lg">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-base sm:text-lg">Start a New Discussion</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNewPost} className="space-y-3 sm:space-y-4">
                    <Input
                      placeholder="Discussion title..."
                      value={newPost.title}
                      onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                      required
                      className="text-sm sm:text-base"
                    />
                    <Textarea
                      placeholder="Share your thoughts, questions, or experiences..."
                      value={newPost.content}
                      onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                      rows={isMobile ? 3 : 4}
                      required
                      className="text-sm sm:text-base"
                    />
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button type="submit" className="bg-forest-600 hover:bg-forest-700 text-sm sm:text-base">
                        Post Discussion
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setShowNewPostForm(false)}
                        className="text-sm sm:text-base"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Discussions */}
            <div className="space-y-3 sm:space-y-4">
              {[...discussions, ...filteredDiscussions].map((discussion) => (
                <Card 
                  key={discussion.id} 
                  className={`hover:shadow-lg transition-all duration-200 cursor-pointer border-forest-200 ${
                    discussion.isVideo ? 'bg-gradient-to-r from-red-50 to-orange-50' : 'bg-white'
                  }`}
                  onClick={() => discussion.isVideo && handleVideoClick(discussion)}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0">
                        {discussion.isVideo ? (
                          <Video className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                        ) : (
                          <User className="h-5 w-5 sm:h-6 sm:w-6 text-forest-600" />
                        )}
                      </div>
                      
                      {/* Video Thumbnail for video posts */}
                      {discussion.isVideo && discussion.thumbnail && (
                        <div className="relative w-24 h-16 sm:w-32 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={discussion.thumbnail} 
                            alt={discussion.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <Play className="h-6 w-6 text-white" />
                          </div>
                          {discussion.duration && (
                            <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                              {discussion.duration}
                            </div>
                          )}
                        </div>
                      )}
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                          <div className="min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold text-forest-800 mb-1 flex items-start gap-2 leading-tight">
                              <span className="break-words">{discussion.title}</span>
                              {discussion.isHot && (
                                <Badge variant="destructive" className="text-xs flex-shrink-0">
                                  🔥 Hot
                                </Badge>
                              )}
                              {discussion.isVideo && (
                                <Badge className="text-xs flex-shrink-0 bg-red-600 hover:bg-red-700">
                                  📹 Video
                                </Badge>
                              )}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs sm:text-sm text-forest-600">
                              <span>by {discussion.author}</span>
                              <span className="hidden sm:inline">•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {discussion.time}
                              </span>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs self-start sm:self-auto flex-shrink-0 border-forest-300">
                            {discussion.category}
                          </Badge>
                        </div>
                        
                        <p className="text-forest-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed line-clamp-3">
                          {discussion.preview}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                          <button className="flex items-center gap-2 text-forest-600 hover:text-forest-800 transition-colors text-sm">
                            <MessageSquare className="h-4 w-4" />
                            <span>{discussion.replies} replies</span>
                          </button>
                          <button className="flex items-center gap-2 text-forest-600 hover:text-forest-800 transition-colors text-sm">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{discussion.likes} likes</span>
                          </button>
                          <button className="flex items-center gap-2 text-forest-600 hover:text-forest-800 transition-colors text-sm">
                            <Share className="h-4 w-4" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            {!showingAllDiscussions && filteredDiscussions.length >= 6 && (
              <div className="text-center">
                <Button 
                  variant="outline" 
                  onClick={loadMoreDiscussions}
                  className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white text-sm sm:text-base"
                >
                  Load More Discussions
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar - keep existing code unchanged */}
          {!isMobile && (
            <div className="lg:col-span-1 space-y-4 sm:space-y-6">
              {/* Community Stats */}
              <Card>
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                    Community Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-forest-600">Total Members</span>
                      <span className="font-semibold text-forest-800">12,453</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-forest-600">Active Today</span>
                      <span className="font-semibold text-forest-800">1,234</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-forest-600">Total Discussions</span>
                      <span className="font-semibold text-forest-800">3,567</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-forest-600">This Week</span>
                      <span className="font-semibold text-forest-800">89</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Featured Experts */}
              <Card>
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-base sm:text-lg">Featured Experts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    {featuredExperts.map((expert, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <img
                          src={expert.avatar}
                          alt={expert.name}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-forest-800 truncate text-sm sm:text-base">{expert.name}</h4>
                          <p className="text-xs sm:text-sm text-forest-600 truncate">{expert.title}</p>
                          <p className="text-xs text-forest-500">{expert.posts} posts • {expert.followers} followers</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trending Topics */}
              <Card>
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
                    Trending Topics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {trendingTopics.map((topic, index) => (
                      <div key={index} className="flex items-center justify-between text-sm sm:text-base">
                        <span className="text-forest-700 hover:text-forest-800 cursor-pointer font-medium truncate">
                          {topic.tag}
                        </span>
                        <span className="text-xs sm:text-sm text-forest-600 flex-shrink-0 ml-2">{topic.posts}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-base sm:text-lg">Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <Link to="/advisor" className="block text-forest-600 hover:text-forest-800 transition-colors text-sm sm:text-base">
                      🧑‍🌾 Find Expert
                    </Link>
                    <Link to="/services" className="block text-forest-600 hover:text-forest-800 transition-colors text-sm sm:text-base">
                      🔧 Services
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Mobile Sidebar Content */}
          {isMobile && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Users className="h-4 w-4" />
                    Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-center">
                      <div className="font-semibold text-forest-800">12,453</div>
                      <div className="text-forest-600">Members</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-forest-800">1,234</div>
                      <div className="text-forest-600">Active</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <Link to="/advisor" className="block text-forest-600 hover:text-forest-800 transition-colors">
                      🧑‍🌾 Find Expert
                    </Link>
                    <Link to="/services" className="block text-forest-600 hover:text-forest-800 transition-colors">
                      🔧 Services
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Video Post Form */}
      <VideoPostForm
        isOpen={showVideoForm}
        onClose={() => setShowVideoForm(false)}
        onSubmit={handleVideoPost}
      />

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={showVideoModal}
          onClose={() => setShowVideoModal(false)}
          video={{
            id: selectedVideo.id,
            title: selectedVideo.title,
            description: selectedVideo.preview,
            thumbnail: selectedVideo.thumbnail,
            duration: selectedVideo.duration,
            category: selectedVideo.category,
            author: selectedVideo.author,
            date: selectedVideo.time,
            videoUrl: selectedVideo.videoUrl
          }}
        />
      )}
    </div>
  );
};

export default Community;
