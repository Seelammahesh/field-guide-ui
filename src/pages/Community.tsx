
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Video, Play, Calendar, User, ThumbsUp, MessageCircle, Share2, Users, Lightbulb, Plus, Send, Search, Eye, Clock } from 'lucide-react';
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
  const [searchTerm, setSearchTerm] = useState('');

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
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
        <div className="relative max-w-4xl w-full">
          <button
            className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl font-bold"
            onClick={onClose}
          >
            ✕
          </button>
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              src={video.videoUrl}
              title="Video Post"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="bg-white p-6 rounded-b-lg">
            <h3 className="font-bold text-xl text-gray-800 mb-2">{video.title}</h3>
            <p className="text-gray-600 mb-4">{video.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {video.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {video.date}
                </span>
              </div>
              <span>{video.views} views</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="h-8 w-8 text-forest-600" />
            <h1 className="text-3xl font-bold text-gray-800">Community Hub</h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect, share, and grow together in our farming community
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder={`Search ${activeTab}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-lg border p-1">
            {(['videos', 'discussions', 'tips'] as const).map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                variant={activeTab === tab ? "default" : "ghost"}
                className={`capitalize ${activeTab === tab ? 'bg-forest-600 text-white' : 'text-gray-600'}`}
              >
                {tab === 'videos' && <Video className="h-4 w-4 mr-2" />}
                {tab === 'discussions' && <MessageCircle className="h-4 w-4 mr-2" />}
                {tab === 'tips' && <Lightbulb className="h-4 w-4 mr-2" />}
                {tab}
                <Badge className="ml-2" variant="secondary">
                  {tab === 'videos' ? posts.length : tab === 'discussions' ? discussions.length : tips.length}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Add Post Button */}
        <div className="text-center mb-8">
          {activeTab === 'videos' && (
            <Button onClick={() => setShowVideoForm(true)} className="bg-forest-600 hover:bg-forest-700">
              <Plus className="h-4 w-4 mr-2" />
              Share Video
            </Button>
          )}
          {activeTab === 'discussions' && (
            <Button onClick={() => setShowDiscussionForm(true)} className="bg-forest-600 hover:bg-forest-700">
              <Plus className="h-4 w-4 mr-2" />
              Start Discussion
            </Button>
          )}
          {activeTab === 'tips' && (
            <Button onClick={() => setShowTipForm(true)} className="bg-forest-600 hover:bg-forest-700">
              <Plus className="h-4 w-4 mr-2" />
              Share Tip
            </Button>
          )}
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative group">
                    <img
                      className="w-full h-48 object-cover cursor-pointer"
                      src={post.thumbnail}
                      alt={post.title}
                      onClick={() => setSelectedVideo(post)}
                    />
                    <div 
                      className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      onClick={() => setSelectedVideo(post)}
                    >
                      <Play className="h-12 w-12 text-white" />
                    </div>
                    <Badge className="absolute top-2 right-2 bg-forest-600">
                      {post.category}
                    </Badge>
                    <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/50 rounded px-2 py-1">
                      <Eye className="h-3 w-3 text-white" />
                      <span className="text-white text-xs">{post.views}</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="h-3 w-3" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3" />
                          {post.comments}
                        </span>
                      </div>
                      <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-forest-600">
                        <Share2 className="h-3 w-3" />
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
                <Card key={discussion.id} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {discussion.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {discussion.content}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{discussion.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{discussion.date}</span>
                        </div>
                        <Badge variant="outline">{discussion.category}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                      <MessageCircle className="h-3 w-3" />
                      {discussion.replies} replies
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                      <ThumbsUp className="h-3 w-3" />
                      {discussion.likes} likes
                    </span>
                    <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-forest-600">
                      <Share2 className="h-3 w-3" />
                      Share
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tips.map((tip) => (
                <Card key={tip.id} className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {tip.title}
                    </h3>
                    <Badge className={`text-xs ${
                      tip.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      tip.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {tip.difficulty}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {tip.content}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{tip.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{tip.date}</span>
                    </div>
                    <Badge variant="outline">{tip.category}</Badge>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                      <ThumbsUp className="h-3 w-3" />
                      {tip.likes} likes
                    </span>
                    <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-forest-600">
                      <Share2 className="h-3 w-3" />
                      Share
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Modals */}
        {showVideoForm && (
          <VideoPostForm 
            onClose={() => setShowVideoForm(false)}
            onSubmit={handleVideoSubmit}
          />
        )}

        {showDiscussionForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Start New Discussion</h2>
                  <Button variant="ghost" onClick={() => setShowDiscussionForm(false)}>
                    ✕
                  </Button>
                </div>
                <form onSubmit={handleDiscussionSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Discussion Title
                    </label>
                    <Input
                      value={newDiscussion.title}
                      onChange={(e) => setNewDiscussion({...newDiscussion, title: e.target.value})}
                      placeholder="What would you like to discuss?"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <Textarea
                      value={newDiscussion.content}
                      onChange={(e) => setNewDiscussion({...newDiscussion, content: e.target.value})}
                      placeholder="Describe your question or topic in detail..."
                      rows={4}
                      required
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button type="submit" className="flex-1 bg-forest-600 hover:bg-forest-700">
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

        {showTipForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Share a Farming Tip</h2>
                  <Button variant="ghost" onClick={() => setShowTipForm(false)}>
                    ✕
                  </Button>
                </div>
                <form onSubmit={handleTipSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tip Title
                    </label>
                    <Input
                      value={newTip.title}
                      onChange={(e) => setNewTip({...newTip, title: e.target.value})}
                      placeholder="Give your tip a catchy title"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tip Content
                    </label>
                    <Textarea
                      value={newTip.content}
                      onChange={(e) => setNewTip({...newTip, content: e.target.value})}
                      placeholder="Share your farming tip in detail..."
                      rows={3}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </label>
                      <Input
                        value={newTip.category}
                        onChange={(e) => setNewTip({...newTip, category: e.target.value})}
                        placeholder="e.g., Pest Control"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Difficulty
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
                  <div className="flex gap-3">
                    <Button type="submit" className="flex-1 bg-forest-600 hover:bg-forest-700">
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
