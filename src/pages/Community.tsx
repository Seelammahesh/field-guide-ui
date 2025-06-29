
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video, Play, Calendar, User, ThumbsUp, MessageCircle, Share2, TrendingUp, Users, BookOpen, Lightbulb } from 'lucide-react';
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
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
        <div className="relative max-w-5xl w-full mx-4">
          <button
            className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10 text-2xl font-bold bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
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
            <h3 className="font-bold text-xl text-forest-800 mb-2">{video.title}</h3>
            <p className="text-forest-600 mb-4 leading-relaxed">{video.description}</p>
            <div className="flex items-center justify-between text-sm text-forest-500">
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
              <span className="font-medium">{video.views} views</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-wheat-50 via-white to-forest-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-800 mb-4">
            Community Hub
          </h1>
          <p className="text-lg sm:text-xl text-forest-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Connect with fellow farmers, share experiences, and learn together in our thriving agricultural community
          </p>
          <Button 
            onClick={() => setShowVideoForm(true)}
            className="bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <Video className="h-5 w-5 mr-2" />
            Share Your Video
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
          <Card className="text-center p-4 lg:p-6 bg-gradient-to-br from-white to-forest-50 border-forest-100 shadow-lg hover:shadow-xl transition-all duration-200">
            <CardContent className="p-0">
              <div className="flex flex-col items-center">
                <Users className="h-8 w-8 text-forest-600 mb-2" />
                <div className="text-2xl lg:text-3xl font-bold text-forest-700">1,234</div>
                <div className="text-sm lg:text-base text-forest-600">Active Members</div>
              </div>
            </CardContent>
          </Card>
          <Card className="text-center p-4 lg:p-6 bg-gradient-to-br from-white to-wheat-50 border-forest-100 shadow-lg hover:shadow-xl transition-all duration-200">
            <CardContent className="p-0">
              <div className="flex flex-col items-center">
                <Video className="h-8 w-8 text-forest-600 mb-2" />
                <div className="text-2xl lg:text-3xl font-bold text-forest-700">{posts.length}</div>
                <div className="text-sm lg:text-base text-forest-600">Video Posts</div>
              </div>
            </CardContent>
          </Card>
          <Card className="text-center p-4 lg:p-6 bg-gradient-to-br from-white to-forest-50 border-forest-100 shadow-lg hover:shadow-xl transition-all duration-200">
            <CardContent className="p-0">
              <div className="flex flex-col items-center">
                <MessageCircle className="h-8 w-8 text-forest-600 mb-2" />
                <div className="text-2xl lg:text-3xl font-bold text-forest-700">89</div>
                <div className="text-sm lg:text-base text-forest-600">Discussions</div>
              </div>
            </CardContent>
          </Card>
          <Card className="text-center p-4 lg:p-6 bg-gradient-to-br from-white to-wheat-50 border-forest-100 shadow-lg hover:shadow-xl transition-all duration-200">
            <CardContent className="p-0">
              <div className="flex flex-col items-center">
                <Lightbulb className="h-8 w-8 text-forest-600 mb-2" />
                <div className="text-2xl lg:text-3xl font-bold text-forest-700">456</div>
                <div className="text-sm lg:text-base text-forest-600">Tips Shared</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-forest-100">
              <div className="relative group">
                <img
                  className="w-full h-48 lg:h-56 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                  src={post.thumbnail}
                  alt={post.title}
                  onClick={() => setSelectedVideo(post)}
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300"
                  onClick={() => setSelectedVideo(post)}
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="h-8 w-8 lg:h-12 lg:w-12 text-white" />
                  </div>
                </div>
                <Badge className="absolute top-3 right-3 bg-forest-600/90 text-white text-xs font-semibold px-2 py-1">
                  {post.category}
                </Badge>
              </div>
              <CardContent className="p-4 lg:p-6">
                <h3 className="font-bold text-forest-800 mb-2 text-lg lg:text-xl line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                <p className="text-forest-600 text-sm lg:text-base mb-4 line-clamp-2 leading-relaxed">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-sm lg:text-base text-forest-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-forest-100">
                  <div className="flex items-center gap-4 text-sm lg:text-base">
                    <button className="flex items-center gap-1 text-forest-600 hover:text-forest-800 hover:bg-forest-50 px-2 py-1 rounded transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-forest-600 hover:text-forest-800 hover:bg-forest-50 px-2 py-1 rounded transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-1 text-forest-600 hover:text-forest-800 hover:bg-forest-50 px-2 py-1 rounded transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span>{post.shares}</span>
                    </button>
                  </div>
                  <span className="text-sm font-medium text-forest-600 bg-forest-50 px-2 py-1 rounded">
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
