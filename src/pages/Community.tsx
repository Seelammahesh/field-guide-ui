
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, Play, Calendar, User, ThumbsUp, MessageCircle, Share2, Users, BookOpen, Lightbulb, Sparkles, Heart, TrendingUp, Award } from 'lucide-react';
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

const Community = () => {
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
    },
    {
      id: 3,
      title: "Crop Rotation Explained",
      description: "Understanding the benefits of crop rotation for soil health and maximizing agricultural productivity.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1593119854027-c57cd135c19f?w=400&h=300&fit=crop&q=80",
      author: "Mike Johnson",
      date: "3 days ago",
      category: "Education",
      views: "25.2K",
      likes: 210,
      comments: 45,
      shares: 25
    },
    {
      id: 4,
      title: "Irrigation Techniques",
      description: "Efficient irrigation methods for water conservation and optimal crop growth in different climates.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1557426356-b144435ca963?w=400&h=300&fit=crop&q=80",
      author: "Emily White",
      date: "5 days ago",
      category: "Technology",
      views: "15.7K",
      likes: 145,
      comments: 32,
      shares: 18
    },
    {
      id: 5,
      title: "Pest Control Strategies",
      description: "Effective and eco-friendly pest control solutions that protect crops without harming the environment.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1563019770-99445259a74b?w=400&h=300&fit=crop&q=80",
      author: "David Green",
      date: "1 day ago",
      category: "Solutions",
      views: "9.1K",
      likes: 80,
      comments: 18,
      shares: 8
    },
    {
      id: 6,
      title: "Soil Management Tips",
      description: "Essential tips for maintaining healthy and fertile soil for sustainable agricultural practices.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1518837460629-78e206c2a4fa?w=400&h=300&fit=crop&q=80",
      author: "Sophia Brown",
      date: "4 days ago",
      category: "Education",
      views: "18.4K",
      likes: 160,
      comments: 38,
      shares: 20
    }
  ]);
  const [showVideoForm, setShowVideoForm] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoPost | null>(null);

  const handleVideoSubmit = (newPost: VideoPost) => {
    setPosts(prevPosts => [...prevPosts, { ...newPost, id: prevPosts.length + 1 }]);
    setShowVideoForm(false);
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
          <Button 
            onClick={() => setShowVideoForm(true)}
            className="bg-gradient-to-r from-forest-600 via-forest-700 to-forest-800 hover:from-forest-700 hover:via-forest-800 hover:to-forest-900 text-white px-8 py-4 text-xl font-black shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 rounded-2xl"
          >
            <Video className="h-6 w-6 mr-3" />
            Share Your Video
            <Sparkles className="h-5 w-5 ml-2 animate-spin" />
          </Button>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          <Card className="text-center p-6 lg:p-8 bg-gradient-to-br from-white via-forest-50/30 to-white border-2 border-forest-200 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 rounded-2xl">
            <CardContent className="p-0">
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-r from-forest-600 to-forest-700 p-4 rounded-2xl mb-4 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-forest-700 mb-2">1,234</div>
                <div className="text-sm lg:text-base text-forest-600 font-bold">Active Members</div>
              </div>
            </CardContent>
          </Card>
          <Card className="text-center p-6 lg:p-8 bg-gradient-to-br from-white via-wheat-50/30 to-white border-2 border-forest-200 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 rounded-2xl">
            <CardContent className="p-0">
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-2xl mb-4 shadow-lg">
                  <Video className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-forest-700 mb-2">{posts.length}</div>
                <div className="text-sm lg:text-base text-forest-600 font-bold">Video Posts</div>
              </div>
            </CardContent>
          </Card>
          <Card className="text-center p-6 lg:p-8 bg-gradient-to-br from-white via-forest-50/30 to-white border-2 border-forest-200 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 rounded-2xl">
            <CardContent className="p-0">
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 rounded-2xl mb-4 shadow-lg">
                  <MessageCircle className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-forest-700 mb-2">89</div>
                <div className="text-sm lg:text-base text-forest-600 font-bold">Discussions</div>
              </div>
            </CardContent>
          </Card>
          <Card className="text-center p-6 lg:p-8 bg-gradient-to-br from-white via-wheat-50/30 to-white border-2 border-forest-200 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 rounded-2xl">
            <CardContent className="p-0">
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 p-4 rounded-2xl mb-4 shadow-lg">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-forest-700 mb-2">456</div>
                <div className="text-sm lg:text-base text-forest-600 font-bold">Tips Shared</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Video Posts Grid */}
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
                <div className="absolute top-4 left-4">
                  <TrendingUp className="h-5 w-5 text-white animate-pulse" />
                </div>
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
                    <button className="flex items-center gap-2 text-forest-600 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-xl transition-all duration-200 font-bold">
                      <Share2 className="h-4 w-4" />
                      <span>{post.shares}</span>
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

        {/* Video Post Form Modal */}
        {showVideoForm && (
          <VideoPostForm 
            onClose={() => setShowVideoForm(false)}
            onSubmit={handleVideoSubmit}
          />
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
