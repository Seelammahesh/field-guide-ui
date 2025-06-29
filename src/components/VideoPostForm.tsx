
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, Upload, Link2, Video } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

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

interface VideoPostFormProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: (newPost: VideoPost) => void;
}

const VideoPostForm = ({ onClose, onSubmit }: VideoPostFormProps) => {
  const { toast } = useToast();
  const [uploadMethod, setUploadMethod] = useState<'upload' | 'link'>('link');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoUrl: '',
    category: '',
    author: 'Current User'
  });
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const categories = ['Technology', 'Organic', 'Education', 'Solutions', 'Tips', 'Equipment'];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file);
      // Create a temporary URL for the video
      const videoUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, videoUrl }));
    } else {
      toast({
        title: "Invalid File",
        description: "Please select a valid video file.",
        variant: "destructive"
      });
    }
  };

  const extractYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getYouTubeThumbnail = (url: string) => {
    const videoId = extractYouTubeId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.category) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (uploadMethod === 'link' && !formData.videoUrl) {
      toast({
        title: "Missing Video",
        description: "Please provide a video URL.",
        variant: "destructive"
      });
      return;
    }

    if (uploadMethod === 'upload' && !videoFile) {
      toast({
        title: "Missing Video",
        description: "Please upload a video file.",
        variant: "destructive"
      });
      return;
    }

    const newPost: VideoPost = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      videoUrl: uploadMethod === 'link' ? formData.videoUrl : URL.createObjectURL(videoFile!),
      thumbnail: uploadMethod === 'link' ? getYouTubeThumbnail(formData.videoUrl) : '/placeholder.svg',
      author: formData.author,
      date: 'Just now',
      category: formData.category,
      views: '0',
      likes: 0,
      comments: 0,
      shares: 0
    };

    onSubmit(newPost);
    toast({
      title: "Video Posted",
      description: "Your video has been shared with the community!",
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5" />
            Share Your Video
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Upload Method Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium">How would you like to add your video?</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setUploadMethod('link')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                    uploadMethod === 'link' 
                      ? 'bg-forest-600 text-white border-forest-600' 
                      : 'bg-white text-forest-600 border-forest-200 hover:border-forest-600'
                  }`}
                >
                  <Link2 className="h-4 w-4" />
                  Video Link
                </button>
                <button
                  type="button"
                  onClick={() => setUploadMethod('upload')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                    uploadMethod === 'upload' 
                      ? 'bg-forest-600 text-white border-forest-600' 
                      : 'bg-white text-forest-600 border-forest-200 hover:border-forest-600'
                  }`}
                >
                  <Upload className="h-4 w-4" />
                  Upload File
                </button>
              </div>
            </div>

            {/* Video Input */}
            {uploadMethod === 'link' ? (
              <div className="space-y-2">
                <label className="text-sm font-medium">Video URL *</label>
                <Input
                  placeholder="https://youtube.com/watch?v=..."
                  value={formData.videoUrl}
                  onChange={(e) => handleInputChange('videoUrl', e.target.value)}
                  required
                />
                <p className="text-xs text-gray-500">Paste a YouTube, Vimeo, or other video URL</p>
              </div>
            ) : (
              <div className="space-y-2">
                <label className="text-sm font-medium">Upload Video File *</label>
                <div className="border-2 border-dashed border-forest-200 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-forest-600 mx-auto mb-2" />
                  <p className="text-sm text-forest-600 mb-2">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500 mb-4">MP4, AVI, MOV up to 100MB</p>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="video-upload"
                  />
                  <Button type="button" variant="outline" onClick={() => document.getElementById('video-upload')?.click()}>
                    Choose File
                  </Button>
                  {videoFile && (
                    <p className="text-sm text-green-600 mt-2">Selected: {videoFile.name}</p>
                  )}
                </div>
              </div>
            )}

            {/* Title */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Title *</label>
              <Input
                placeholder="Enter video title..."
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Description *</label>
              <Textarea
                placeholder="Describe your video..."
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                required
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Category *</label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Author */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Author</label>
              <Input
                placeholder="Your name"
                value={formData.author}
                onChange={(e) => handleInputChange('author', e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-forest-600 hover:bg-forest-700"
              >
                Share Video
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoPostForm;
