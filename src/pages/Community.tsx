
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Video, 
  Play, 
  User, 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  Users, 
  Lightbulb, 
  Plus, 
  Search, 
  Eye, 
  Clock,
  Star,
  ChevronRight
} from 'lucide-react';

interface VideoPost {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  author: string;
  date: string;
  category: string;
  views: string;
  likes: number;
  comments: number;
  shares: number;
}

interface Discussion {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  replies: number;
  likes: number;
  category: string;
}

interface Tip {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  likes: number;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

const Community = () => {
  const [activeTab, setActiveTab] = useState<'videos' | 'discussions' | 'tips'>('tips');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [posts] = useState<VideoPost[]>([
    {
      id: 1,
      title: "Smart Irrigation System Setup",
      description: "Learn how to set up an automated irrigation system for maximum water efficiency.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?w=400&h=250&fit=crop&q=80",
      author: "John Farmer",
      date: "2 days ago",
      category: "Technology",
      views: "12.5K",
      likes: 120,
      comments: 30,
      shares: 15
    },
    {
      id: 2,
      title: "Organic Pest Control Methods",
      description: "Natural ways to protect your crops without harmful chemicals.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1523381210434-6a59a2c65c2a?w=400&h=250&fit=crop&q=80",
      author: "Sarah Green",
      date: "1 week ago",
      category: "Organic",
      views: "8.3K",
      likes: 95,
      comments: 22,
      shares: 10
    },
    {
      id: 3,
      title: "Maximizing Crop Yield",
      description: "Proven techniques to increase your harvest by 30%.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop&q=80",
      author: "Mike Chen",
      date: "3 days ago",
      category: "Techniques",
      views: "15.2K",
      likes: 240,
      comments: 45,
      shares: 28
    }
  ]);

  const [discussions] = useState<Discussion[]>([
    {
      id: 1,
      title: "Best practices for crop rotation in small farms?",
      content: "I have a 5-acre farm and want to implement effective crop rotation. What are your recommendations?",
      author: "FarmHelper",
      date: "3 hours ago",
      replies: 12,
      likes: 8,
      category: "General"
    },
    {
      id: 2,
      title: "Dealing with pest issues organically",
      content: "Looking for eco-friendly solutions to handle pest problems without chemicals.",
      author: "GreenFarmer",
      date: "1 day ago",
      replies: 24,
      likes: 15,
      category: "Organic"
    }
  ]);

  const [tips] = useState<Tip[]>([
    {
      id: 1,
      title: "Water Conservation with Drip Irrigation",
      content: "Install drip irrigation to save up to 50% water while maintaining optimal crop growth. Use timers for automation.",
      author: "WaterWise",
      date: "2 days ago",
      likes: 32,
      category: "Water Management",
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "Natural Pest Deterrent Recipe",
      content: "Mix neem oil with water (1:10 ratio) and spray during early morning. Effective against most pests.",
      author: "NaturalFarm",
      date: "5 days ago",
      likes: 28,
      category: "Pest Control",
      difficulty: "Intermediate"
    }
  ]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleVideoPlay = (id: number) => {
    console.log(`Playing video ${id}`);
    // Add video play functionality
  };

  const handleLike = (type: string, id: number) => {
    console.log(`Liked ${type} ${id}`);
    // Add like functionality
  };

  const handleShare = (type: string, id: number) => {
    console.log(`Shared ${type} ${id}`);
    // Add share functionality
  };

  const handleComment = (type: string, id: number) => {
    console.log(`Commenting on ${type} ${id}`);
    // Add comment functionality
  };

  const CreateContentModal = () => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Share Knowledge</h2>
            <Button variant="ghost" onClick={() => setShowCreateForm(false)} className="text-gray-500 hover:text-gray-700 p-1">
              ✕
            </Button>
          </div>
          
          <div className="space-y-3">
            <Button className="w-full justify-start h-12 text-left bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200">
              <Video className="h-5 w-5 mr-3 flex-shrink-0" />
              <div className="text-sm">
                <div className="font-medium">Share Video</div>
                <div className="opacity-75">Upload educational content</div>
              </div>
            </Button>
            
            <Button className="w-full justify-start h-12 text-left bg-green-50 hover:bg-green-100 text-green-700 border border-green-200">
              <MessageCircle className="h-5 w-5 mr-3 flex-shrink-0" />
              <div className="text-sm">
                <div className="font-medium">Start Discussion</div>
                <div className="opacity-75">Ask questions or share insights</div>
              </div>
            </Button>
            
            <Button className="w-full justify-start h-12 text-left bg-yellow-50 hover:bg-yellow-100 text-yellow-700 border border-yellow-200">
              <Lightbulb className="h-5 w-5 mr-3 flex-shrink-0" />
              <div className="text-sm">
                <div className="font-medium">Share Tip</div>
                <div className="opacity-75">Quick farming tips</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Title Section */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="p-2 bg-green-600 rounded-xl">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Community Hub</h1>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">Connect, learn, and grow with fellow farmers</p>
          </div>
          
          {/* Search and Create */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md mx-auto sm:mx-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search tips..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-full border-gray-200"
              />
            </div>
            
            <Button 
              onClick={() => setShowCreateForm(true)}
              className="bg-green-600 hover:bg-green-700 rounded-full px-6 w-full sm:w-auto"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow-sm border inline-flex">
            {(['videos', 'discussions', 'tips'] as const).map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                variant="ghost"
                className={`capitalize rounded-full px-4 sm:px-6 py-2 text-sm font-medium transition-all ${
                  activeTab === tab 
                    ? 'bg-green-600 text-white shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab === 'videos' && <Video className="h-4 w-4 mr-2" />}
                {tab === 'discussions' && <MessageCircle className="h-4 w-4 mr-2" />}
                {tab === 'tips' && <Lightbulb className="h-4 w-4 mr-2" />}
                <span className="hidden sm:inline">{tab}</span>
                <Badge className="ml-2 text-xs bg-gray-100 text-gray-700">
                  {tab === 'videos' ? posts.length : tab === 'discussions' ? discussions.length : tips.length}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    src={post.thumbnail}
                    alt={post.title}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      onClick={() => handleVideoPlay(post.id)}
                      className="bg-white/90 rounded-full p-3 hover:bg-white"
                    >
                      <Play className="h-6 w-6 text-green-600" />
                    </Button>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-green-600 text-white text-xs">
                    {post.category}
                  </Badge>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-sm">
                    <Eye className="h-3 w-3" />
                    <span>{post.views}</span>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 pb-4 border-b">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <User className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => handleLike('video', post.id)}
                        className="flex items-center gap-1 hover:text-red-500 transition-colors"
                      >
                        <ThumbsUp className="h-4 w-4" />
                        {post.likes}
                      </button>
                      <button 
                        onClick={() => handleComment('video', post.id)}
                        className="flex items-center gap-1 hover:text-blue-500 transition-colors"
                      >
                        <MessageCircle className="h-4 w-4" />
                        {post.comments}
                      </button>
                    </div>
                    <button 
                      onClick={() => handleShare('video', post.id)}
                      className="flex items-center gap-1 hover:text-green-600 transition-colors"
                    >
                      <Share2 className="h-4 w-4" />
                      Share
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'discussions' && (
          <div className="space-y-4">
            {discussions.map((discussion) => (
              <Card key={discussion.id} className="hover:shadow-lg transition-shadow border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge className="bg-blue-100 text-blue-700 text-xs">
                          {discussion.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>{discussion.date}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-3 hover:text-green-600 transition-colors cursor-pointer">
                        {discussion.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {discussion.content}
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <User className="h-3 w-3 text-white" />
                          </div>
                          <span className="font-medium text-sm">{discussion.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t gap-4">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-blue-600 font-medium">
                        <MessageCircle className="h-4 w-4" />
                        {discussion.replies} replies
                      </span>
                      <button 
                        onClick={() => handleLike('discussion', discussion.id)}
                        className="flex items-center gap-1 text-red-500 hover:text-red-600 transition-colors"
                      >
                        <ThumbsUp className="h-4 w-4" />
                        {discussion.likes}
                      </button>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-full hover:bg-green-50 hover:text-green-600">
                      Join Discussion
                      <ChevronRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'tips' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tips.map((tip) => (
              <Card key={tip.id} className="hover:shadow-lg transition-shadow border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold flex-1 pr-4">
                      {tip.title}
                    </h3>
                    <Badge className={`${getDifficultyColor(tip.difficulty)} text-xs flex-shrink-0`}>
                      {tip.difficulty}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tip.content}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 pb-4 border-b">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Lightbulb className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{tip.author}</p>
                        <p className="text-xs text-gray-500">{tip.date}</p>
                      </div>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-700 text-xs">
                      {tip.category}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => handleLike('tip', tip.id)}
                      className="flex items-center gap-1 text-red-500 hover:text-red-600 transition-colors font-medium"
                    >
                      <ThumbsUp className="h-4 w-4" />
                      {tip.likes}
                    </button>
                    <Button variant="outline" size="sm" className="rounded-full hover:bg-yellow-50 hover:text-yellow-600">
                      Save Tip
                      <Star className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Create Content Modal */}
      {showCreateForm && <CreateContentModal />}
    </div>
  );
};

export default Community;
