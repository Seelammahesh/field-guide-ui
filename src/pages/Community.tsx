import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Video, Play, Calendar, User, ThumbsUp, MessageCircle, Share2, Users, BookOpen, Lightbulb, Sparkles, Heart, TrendingUp, Award, Plus, Send } from 'lucide-react';
import VideoPostForm from '@/components/VideoPostForm';

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
  const [showVideoForm, setShowVideoForm] = useState(false);
  const [showDiscussionForm, setShowDiscussionForm] = useState(false);
  const [showTipForm, setShowTipForm] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoPost | null>(null);

  const [posts, setPosts] = useState<VideoPost[]>([
    {
      id: 1,
      title: "Modern Farming Techniques",
      description: "Learn about the latest advancements in farming technology and precision agriculture methods.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?w=400&h=300&fit=crop&q=80",
      author: "John Doe",
      date: "2 days ago",
      category: "Technology",
      views: "12.5K",
      likes: 120,
      comments: 30,
      shares: 15
    },
    {
      id: 2,
      title: "Organic Farming Practices",
      description: "A comprehensive guide to sustainable and organic farming methods for better crop yield.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1523381210434-6a59a2c65c2a?w=400&h=300&fit=crop&q=80",
      author: "Jane Smith",
      date: "1 week ago",
      category: "Organic",
      views: "8.3K",
      likes: 95,
      comments: 22,
      shares: 10
    }
  ]);

  const [discussions, setDiscussions] = useState<Discussion[]>([
    {
      id: 1,
      title: "Best practices for crop rotation in small farms?",
      content: "I have a 5-acre farm and want to implement crop rotation. What are the best practices you'd recommend?",
      author: "FarmHelper",
      date: "3 hours ago",
      replies: 12,
      likes: 8,
      category: "General"
    },
    {
      id: 2,
      title: "Dealing with pest issues in organic farming",
      content: "Looking for eco-friendly solutions to handle pest problems without using chemical pesticides.",
      author: "GreenFarmer",
      date: "1 day ago",
      replies: 24,
      likes: 15,
      category: "Organic"
    }
  ]);

  const [tips, setTips] = useState<Tip[]>([
    {
      id: 1,
      title: "Water Conservation Technique",
      content: "Use drip irrigation to save up to 50% water while maintaining optimal crop growth. Install timers for automated watering.",
      author: "WaterWise",
      date: "2 days ago",
      likes: 32,
      category: "Water Management",
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "Natural Pest Deterrent",
      content: "Mix neem oil with water (1:10 ratio) and spray during early morning. This natural solution repels most common pests.",
      author: "NaturalFarm",
      date: "5 days ago",
      likes: 28,
      category: "Pest Control",
      difficulty: "Intermediate"
    }
  ]);

  const [newDiscussion, setNewDiscussion] = useState({ title: '', content: '' });
  const [newTip, setNewTip] = useState({ 
    title: '', 
    content: '', 
    category: '', 
    difficulty: 'Beginner' as 'Beginner' | 'Intermediate' | 'Advanced'
  });

  const handleVideoSubmit = (newPost: VideoPost) => {
    setPosts(prevPosts => [...prevPosts, { ...newPost, id: prevPosts.length + 1 }]);
    setShowVideoForm(false);
  };

  const handleDiscussionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDiscussion.title && newDiscussion.content) {
      const discussion: Discussion = {
        id: discussions.length + 1,
        title: newDiscussion.title,
        content: newDiscussion.content,
        author: "You",
        date: "Just now",
        replies: 0,
        likes: 0,
        category: "General"
      };
      setDiscussions([discussion, ...discussions]);
      setNewDiscussion({ title: '', content: '' });
      setShowDiscussionForm(false);
    }
  };

  const handleTipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTip.title && newTip.content) {
      const tip: Tip = {
        id: tips.length + 1,
        title: newTip.title,
        content: newTip.content,
        author: "You",
        date: "Just now",
        likes: 0,
        category: newTip.category || "General",
        difficulty: newTip.difficulty
      };
      setTips([tip, ...tips]);
      setNewTip({ title: '', content: '', category: '', difficulty: 'Beginner' });
      setShowTipForm(false);
    }
  };

  const VideoModal = ({ video, onClose }: { video: VideoPost, onClose: () => void }) => {
    return (
      <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
        <div className="relative max-w-6xl w-full mx-4">
          <button
            className="absolute -top-16 right-0 text-white hover:text-gray-300 z-10 text-3xl font-bold bg-white/10 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 hover:bg-white/20"
            onClick={onClose}
          >
            ✕
          </button>
          <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src={video.videoUrl}
              title="Video Post"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="bg-white p-8 rounded-b-2xl shadow-2xl">
            <h3 className="font-black text-2xl text-forest-800 mb-3 flex items-center gap-2">
              {video.title}
              <Heart className="h-5 w-5 text-red-500" />
            </h3>
            <p className="text-forest-600 mb-6 leading-relaxed text-lg">{video.description}</p>
            <div className="flex items-center justify-between text-sm text-forest-500">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2 font-semibold">
                  <User className="h-4 w-4" />
                  {video.author}
                </span>
                <span className="flex items-center gap-2 font-semibold">
                  <Calendar className="h-4 w-4" />
                  {video.date}
                </span>
              </div>
              <span className="font-bold text-lg">{video.views} views</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-wheat-50 via-white to-forest-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Enhanced Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="h-12 w-12 text-forest-600" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-forest-800">
              Community Hub
            </h1>
            <Sparkles className="h-10 w-10 text-yellow-500 animate-pulse" />
          </div>
          <p className="text-xl sm:text-2xl text-forest-600 max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
            Connect with fellow farmers, share experiences, and learn together in our thriving agricultural community
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            onClick={() => setActiveTab('videos')}
            className={`px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 ${
              activeTab === 'videos'
                ? 'bg-gradient-to-r from-forest-600 to-forest-700 text-white shadow-2xl'
                : 'bg-white text-forest-600 border-2 border-forest-200 hover:bg-forest-50'
            }`}
          >
            <Video className="h-5 w-5 mr-2" />
            Videos ({posts.length})
          </Button>
          <Button
            onClick={() => setActiveTab('discussions')}
            className={`px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 ${
              activeTab === 'discussions'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl'
                : 'bg-white text-forest-600 border-2 border-forest-200 hover:bg-forest-50'
            }`}
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Discussions ({discussions.length})
          </Button>
          <Button
            onClick={() => setActiveTab('tips')}
            className={`px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 ${
              activeTab === 'tips'
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-2xl'
                : 'bg-white text-forest-600 border-2 border-forest-200 hover:bg-forest-50'
            }`}
          >
            <Lightbulb className="h-5 w-5 mr-2" />
            Tips ({tips.length})
          </Button>
        </div>

        {/* Action Button */}
        <div className="text-center mb-8">
          {activeTab === 'videos' && (
            <Button 
              onClick={() => setShowVideoForm(true)}
              className="bg-gradient-to-r from-forest-600 via-forest-700 to-forest-800 hover:from-forest-700 hover:via-forest-800 hover:to-forest-900 text-white px-8 py-4 text-xl font-black shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 rounded-2xl"
            >
              <Plus className="h-6 w-6 mr-3" />
              Share Your Video
            </Button>
          )}
          {activeTab === 'discussions' && (
            <Button 
              onClick={() => setShowDiscussionForm(true)}
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white px-8 py-4 text-xl font-black shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 rounded-2xl"
            >
              <Plus className="h-6 w-6 mr-3" />
              Start Discussion
            </Button>
          )}
          {activeTab === 'tips' && (
            <Button 
              onClick={() => setShowTipForm(true)}
              className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900 text-white px-8 py-4 text-xl font-black shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 rounded-2xl"
            >
              <Plus className="h-6 w-6 mr-3" />
              Share a Tip
            </Button>
          )}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 bg-white border-2 border-forest-200 rounded-2xl group">
                <div className="relative group/image">
                  <img
                    className="w-full h-56 lg:h-64 object-cover cursor-pointer transition-transform duration-700 group-hover/image:scale-110"
                    src={post.thumbnail}
                    alt={post.title}
                    onClick={() => setSelectedVideo(post)}
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-center justify-center cursor-pointer opacity-0 group-hover/image:opacity-100 transition-all duration-500"
                    onClick={() => setSelectedVideo(post)}
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 transform scale-75 group-hover/image:scale-100 transition-transform duration-500 shadow-2xl">
                      <Play className="h-12 w-12 lg:h-16 lg:w-16 text-white" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-forest-600 to-forest-700 text-white text-xs font-black px-3 py-1 shadow-lg">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6 lg:p-8">
                  <h3 className="font-black text-forest-800 mb-3 text-xl lg:text-2xl line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-forest-600 text-sm lg:text-base mb-6 line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-sm lg:text-base text-forest-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="font-bold">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-semibold">{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t-2 border-forest-100">
                    <div className="flex items-center gap-6 text-sm lg:text-base">
                      <button className="flex items-center gap-2 text-forest-600 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-xl transition-all duration-200 font-bold">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-forest-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-xl transition-all duration-200 font-bold">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </button>
                    </div>
                    <span className="text-sm font-black text-forest-600 bg-gradient-to-r from-forest-100 to-wheat-100 px-3 py-2 rounded-xl shadow-sm">
                      {post.views} views
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'discussions' && (
          <div className="space-y-6">
            {discussions.map((discussion) => (
              <Card key={discussion.id} className="p-6 hover:shadow-2xl transition-all duration-300 bg-white border-2 border-blue-200 rounded-2xl">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-forest-800 mb-2">{discussion.title}</h3>
                    <p className="text-forest-600 mb-4 leading-relaxed">{discussion.content}</p>
                    <div className="flex items-center gap-4 text-sm text-forest-500">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span className="font-semibold">{discussion.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{discussion.date}</span>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">{discussion.category}</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 pt-4 border-t border-forest-100">
                  <button className="flex items-center gap-2 text-forest-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-xl transition-all duration-200 font-semibold">
                    <MessageCircle className="h-4 w-4" />
                    <span>{discussion.replies} replies</span>
                  </button>
                  <button className="flex items-center gap-2 text-forest-600 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-xl transition-all duration-200 font-semibold">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{discussion.likes} likes</span>
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'tips' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip) => (
              <Card key={tip.id} className="p-6 hover:shadow-2xl transition-all duration-300 bg-white border-2 border-green-200 rounded-2xl">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-forest-800">{tip.title}</h3>
                      <Badge className={`text-xs ${
                        tip.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        tip.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {tip.difficulty}
                      </Badge>
                    </div>
                    <p className="text-forest-600 mb-4 leading-relaxed">{tip.content}</p>
                    <div className="flex items-center gap-4 text-sm text-forest-500">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span className="font-semibold">{tip.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{tip.date}</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">{tip.category}</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 pt-4 border-t border-forest-100">
                  <button className="flex items-center gap-2 text-forest-600 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-xl transition-all duration-200 font-semibold">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{tip.likes} likes</span>
                  </button>
                  <button className="flex items-center gap-2 text-forest-600 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-xl transition-all duration-200 font-semibold">
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Video Post Form Modal */}
        {showVideoForm && (
          <VideoPostForm 
            onClose={() => setShowVideoForm(false)}
            onSubmit={handleVideoSubmit}
          />
        )}

        {/* Discussion Form Modal */}
        {showDiscussionForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-forest-800 flex items-center gap-2">
                    <MessageCircle className="h-6 w-6" />
                    Start New Discussion
                  </h2>
                  <Button variant="ghost" onClick={() => setShowDiscussionForm(false)}>
                    ✕
                  </Button>
                </div>
                <form onSubmit={handleDiscussionSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      Discussion Title
                    </label>
                    <Input
                      value={newDiscussion.title}
                      onChange={(e) => setNewDiscussion({...newDiscussion, title: e.target.value})}
                      placeholder="What would you like to discuss?"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      Description
                    </label>
                    <Textarea
                      value={newDiscussion.content}
                      onChange={(e) => setNewDiscussion({...newDiscussion, content: e.target.value})}
                      placeholder="Describe your question or topic in detail..."
                      rows={5}
                      className="w-full"
                      required
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Send className="h-4 w-4 mr-2" />
                      Post Discussion
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setShowDiscussionForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Tip Form Modal */}
        {showTipForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-forest-800 flex items-center gap-2">
                    <Lightbulb className="h-6 w-6" />
                    Share a Farming Tip
                  </h2>
                  <Button variant="ghost" onClick={() => setShowTipForm(false)}>
                    ✕
                  </Button>
                </div>
                <form onSubmit={handleTipSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      Tip Title
                    </label>
                    <Input
                      value={newTip.title}
                      onChange={(e) => setNewTip({...newTip, title: e.target.value})}
                      placeholder="Give your tip a catchy title"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      Tip Content
                    </label>
                    <Textarea
                      value={newTip.content}
                      onChange={(e) => setNewTip({...newTip, content: e.target.value})}
                      placeholder="Share your farming tip in detail..."
                      rows={4}
                      className="w-full"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-forest-700 mb-2">
                        Category
                      </label>
                      <Input
                        value={newTip.category}
                        onChange={(e) => setNewTip({...newTip, category: e.target.value})}
                        placeholder="e.g., Pest Control, Irrigation"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-forest-700 mb-2">
                        Difficulty Level
                      </label>
                      <select
                        value={newTip.difficulty}
                        onChange={(e) => setNewTip({...newTip, difficulty: e.target.value as 'Beginner' | 'Intermediate' | 'Advanced'})}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
                      <Send className="h-4 w-4 mr-2" />
                      Share Tip
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setShowTipForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Video Modal */}
        {selectedVideo && (
          <VideoModal 
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Community;
