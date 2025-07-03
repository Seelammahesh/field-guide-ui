
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Video, 
  Play, 
  Calendar, 
  User, 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  Users, 
  Lightbulb, 
  Plus, 
  Send, 
  Search, 
  Eye, 
  Clock,
  Filter,
  TrendingUp,
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
  const [activeTab, setActiveTab] = useState<'videos' | 'discussions' | 'tips'>('videos');
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
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const CreateContentModal = () => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardContent className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Share Your Knowledge</h2>
            <Button variant="ghost" onClick={() => setShowCreateForm(false)} className="text-gray-500 hover:text-gray-700">
              ✕
            </Button>
          </div>
          
          <div className="space-y-4">
            <Button className="w-full justify-start h-16 text-left bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-700 border border-blue-200">
              <Video className="h-6 w-6 mr-4" />
              <div>
                <div className="font-semibold">Share a Video</div>
                <div className="text-sm opacity-75">Upload or link educational content</div>
              </div>
            </Button>
            
            <Button className="w-full justify-start h-16 text-left bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 text-green-700 border border-green-200">
              <MessageCircle className="h-6 w-6 mr-4" />
              <div>
                <div className="font-semibold">Start Discussion</div>
                <div className="text-sm opacity-75">Ask questions or share insights</div>
              </div>
            </Button>
            
            <Button className="w-full justify-start h-16 text-left bg-gradient-to-r from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 text-yellow-700 border border-yellow-200">
              <Lightbulb className="h-6 w-6 mr-4" />
              <div>
                <div className="font-semibold">Share a Tip</div>
                <div className="text-sm opacity-75">Quick farming tips and tricks</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      {/* Modern Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                <div className="p-2 bg-gradient-to-r from-green-600 to-forest-600 rounded-xl">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">Community Hub</h1>
              </div>
              <p className="text-gray-600">Connect, learn, and grow with fellow farmers</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 sm:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder={`Search ${activeTab}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-11 pr-4 py-3 rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              
              <Button 
                onClick={() => setShowCreateForm(true)}
                className="bg-gradient-to-r from-green-600 to-forest-600 hover:from-green-700 hover:to-forest-700 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Plus className="h-5 w-5 mr-2" />
                Create
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Modern Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            {(['videos', 'discussions', 'tips'] as const).map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                variant={activeTab === tab ? "default" : "ghost"}
                className={`capitalize px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-green-600 to-forest-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab === 'videos' && <Video className="h-5 w-5 mr-2" />}
                {tab === 'discussions' && <MessageCircle className="h-5 w-5 mr-2" />}
                {tab === 'tips' && <Lightbulb className="h-5 w-5 mr-2" />}
                {tab}
                <Badge className="ml-2 text-xs" variant="secondary">
                  {tab === 'videos' ? posts.length : tab === 'discussions' ? discussions.length : tips.length}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white">
                  <div className="relative overflow-hidden">
                    <img
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      src={post.thumbnail}
                      alt={post.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-4 backdrop-blur-sm">
                        <Play className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 font-semibold">
                      {post.category}
                    </Badge>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                      <Eye className="h-4 w-4" />
                      <span className="text-sm font-medium">{post.views}</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-forest-500 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
                          <ThumbsUp className="h-4 w-4" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer">
                          <MessageCircle className="h-4 w-4" />
                          {post.comments}
                        </span>
                      </div>
                      <button className="flex items-center gap-1 hover:text-green-600 transition-colors">
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
            <div className="space-y-6">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge className="bg-blue-100 text-blue-700 px-3 py-1 font-semibold">
                            {discussion.category}
                          </Badge>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>{discussion.date}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-green-600 transition-colors cursor-pointer">
                          {discussion.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {discussion.content}
                        </p>
                        
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                              <User className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-semibold text-gray-900">{discussion.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-6 text-sm">
                        <span className="flex items-center gap-2 text-blue-600 font-semibold">
                          <MessageCircle className="h-4 w-4" />
                          {discussion.replies} replies
                        </span>
                        <span className="flex items-center gap-2 text-red-500 font-semibold hover:text-red-600 transition-colors cursor-pointer">
                          <ThumbsUp className="h-4 w-4" />
                          {discussion.likes} likes
                        </span>
                      </div>
                      <Button variant="outline" className="rounded-xl hover:bg-green-50 hover:text-green-600 hover:border-green-200">
                        Join Discussion
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {tips.map((tip) => (
                <Card key={tip.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 flex-1 pr-4">
                        {tip.title}
                      </h3>
                      <Badge className={`${getDifficultyColor(tip.difficulty)} px-3 py-1 font-semibold flex-shrink-0`}>
                        {tip.difficulty}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {tip.content}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                          <Lightbulb className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{tip.author}</p>
                          <p className="text-xs text-gray-500">{tip.date}</p>
                        </div>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-700 px-3 py-1 font-semibold">
                        {tip.category}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-red-500 font-semibold hover:text-red-600 transition-colors cursor-pointer">
                        <ThumbsUp className="h-4 w-4" />
                        {tip.likes} likes
                      </span>
                      <Button variant="outline" size="sm" className="rounded-xl hover:bg-yellow-50 hover:text-yellow-600 hover:border-yellow-200">
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
      </div>

      {/* Create Content Modal */}
      {showCreateForm && <CreateContentModal />}
    </div>
  );
};

export default Community;
