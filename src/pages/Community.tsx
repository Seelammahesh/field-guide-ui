import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Video, Play, Calendar, User, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

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
      description: "Learn about the latest advancements in farming technology.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?w=400&h=300&fit=crop",
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
      description: "A guide to sustainable and organic farming methods.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1523381210434-6a59a2c65c2a?w=400&h=300&fit=crop",
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
      description: "The benefits of crop rotation for soil health and yield.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1593119854027-c57cd135c19f?w=400&h=300&fit=crop",
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
      description: "Efficient irrigation methods for water conservation.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1557426356-b144435ca963?w=400&h=300&fit=crop",
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
      description: "Effective and eco-friendly pest control solutions.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1563019770-99445259a74b?w=400&h=300&fit=crop",
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
      description: "Tips for maintaining healthy and fertile soil.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1518837460629-78e206c2a4fa?w=400&h=300&fit=crop",
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

  const VideoPostForm = ({ onClose, onSubmit }: { onClose: () => void, onSubmit: (post: VideoPost) => void }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
      const newPost = {
        id: 0,
        title,
        description,
        videoUrl,
        thumbnail,
        author,
        date: new Date().toLocaleDateString(),
        category,
        views: "0",
        likes: 0,
        comments: 0,
        shares: 0
      };
      onSubmit(newPost);
    };

    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg max-w-md w-full">
          <h2 className="text-lg font-semibold text-forest-800 mb-4">Share Your Video</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title" className="text-sm font-medium block">Title</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="description" className="text-sm font-medium block">Description</Label>
              <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="videoUrl" className="text-sm font-medium block">Video URL</Label>
              <Input id="videoUrl" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="thumbnail" className="text-sm font-medium block">Thumbnail URL</Label>
              <Input id="thumbnail" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="author" className="text-sm font-medium block">Your Name</Label>
              <Input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="category" className="text-sm font-medium block">Category</Label>
              <Select onValueChange={setCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Organic">Organic</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Solutions">Solutions</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={onClose}>Cancel</Button>
              <Button className="bg-forest-600 hover:bg-forest-700" onClick={handleSubmit}>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const VideoModal = ({ video, onClose }: { video: VideoPost, onClose: () => void }) => {
    return (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
        <div className="relative max-w-4xl w-full mx-4">
          <button
            className="absolute top-4 right-4 text-gray-300 hover:text-white z-10"
            onClick={onClose}
          >
            ✕
          </button>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={video.videoUrl}
              title="Video Post"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="bg-white p-4">
            <h3 className="font-semibold text-forest-800 mb-2">{video.title}</h3>
            <p className="text-forest-600 text-sm mb-3">{video.description}</p>
            <div className="flex items-center justify-between text-xs text-forest-500">
              <div>
                <span>Author: {video.author}</span>
                <span className="ml-4">Date: {video.date}</span>
              </div>
              <span>Views: {video.views}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-wheat-50 to-forest-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-800 mb-2">Community Hub</h1>
            <p className="text-sm sm:text-base lg:text-lg text-forest-600">
              Connect with fellow farmers, share experiences, and learn together
            </p>
          </div>
          <Button 
            onClick={() => setShowVideoForm(true)}
            className="bg-forest-600 hover:bg-forest-700 w-full sm:w-auto"
          >
            <Video className="h-4 w-4 mr-2" />
            Share Video
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <Card className="text-center p-3 sm:p-4">
            <CardContent className="p-0">
              <div className="text-xl sm:text-2xl font-bold text-forest-700">1,234</div>
              <div className="text-xs sm:text-sm text-forest-600">Active Members</div>
            </CardContent>
          </Card>
          <Card className="text-center p-3 sm:p-4">
            <CardContent className="p-0">
              <div className="text-xl sm:text-2xl font-bold text-forest-700">{posts.length}</div>
              <div className="text-xs sm:text-sm text-forest-600">Video Posts</div>
            </CardContent>
          </Card>
          <Card className="text-center p-3 sm:p-4">
            <CardContent className="p-0">
              <div className="text-xl sm:text-2xl font-bold text-forest-700">89</div>
              <div className="text-xs sm:text-sm text-forest-600">Discussions</div>
            </CardContent>
          </Card>
          <Card className="text-center p-3 sm:p-4">
            <CardContent className="p-0">
              <div className="text-xl sm:text-2xl font-bold text-forest-700">456</div>
              <div className="text-xs sm:text-sm text-forest-600">Tips Shared</div>
            </CardContent>
          </Card>
        </div>

        {/* Video Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <video
                  className="w-full h-40 sm:h-48 object-cover cursor-pointer"
                  poster={post.thumbnail}
                  onClick={() => setSelectedVideo(post)}
                  controls={false}
                >
                  <source src={post.videoUrl} type="video/mp4" />
                </video>
                <div 
                  className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors"
                  onClick={() => setSelectedVideo(post)}
                >
                  <Play className="h-8 w-8 sm:h-12 sm:w-12 text-white" />
                </div>
                <Badge className="absolute top-2 right-2 bg-forest-600 text-white text-xs">
                  {post.category}
                </Badge>
              </div>
              <CardContent className="p-3 sm:p-4">
                <h3 className="font-semibold text-forest-800 mb-2 text-sm sm:text-base line-clamp-2">{post.title}</h3>
                <p className="text-forest-600 text-xs sm:text-sm mb-3 line-clamp-2">{post.description}</p>
                <div className="flex items-center justify-between text-xs sm:text-sm text-forest-500">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <User className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-forest-100">
                  <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                    <button className="flex items-center gap-1 text-forest-600 hover:text-forest-800">
                      <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-forest-600 hover:text-forest-800">
                      <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-1 text-forest-600 hover:text-forest-800">
                      <Share2 className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{post.shares}</span>
                    </button>
                  </div>
                  <span className="text-xs text-forest-500">{post.views} views</span>
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
