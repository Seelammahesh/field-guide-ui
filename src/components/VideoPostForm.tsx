
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Video, X, Upload, Link } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface VideoPostFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (postData: any) => void;
}

const VideoPostForm = ({ isOpen, onClose, onSubmit }: VideoPostFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoUrl: '',
    category: '',
    thumbnail: ''
  });
  const [uploadMethod, setUploadMethod] = useState<'url' | 'upload'>('url');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const categories = [
    'Technology',
    'Government Schemes',
    'Success Stories', 
    'Weather',
    'Sustainability',
    'Fertilizers',
    'Pest Control',
    'Seeds',
    'Farming Techniques',
    'Organic Farming',
    'Storage'
  ];

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 100MB)
      if (file.size > 100 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select a video file smaller than 100MB.",
          variant: "destructive"
        });
        return;
      }
      
      // Check file type
      if (!file.type.startsWith('video/')) {
        toast({
          title: "Invalid file type",
          description: "Please select a valid video file.",
          variant: "destructive"
        });
        return;
      }
      
      setVideoFile(file);
      
      // Create a preview URL (in real app, this would be uploaded to a server)
      const previewUrl = URL.createObjectURL(file);
      setFormData({...formData, videoUrl: previewUrl});
      
      toast({
        title: "Video selected",
        description: `${file.name} is ready to upload.`,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    if (uploadMethod === 'url' && !formData.videoUrl) {
      toast({
        title: "Missing video",
        description: "Please provide a video URL.",
        variant: "destructive"
      });
      return;
    }
    
    if (uploadMethod === 'upload' && !videoFile) {
      toast({
        title: "Missing video",
        description: "Please upload a video file.",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);
    
    try {
      // Simulate upload process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const postData = {
        ...formData,
        id: Date.now(),
        author: 'Current User',
        time: 'Just now',
        replies: 0,
        likes: 0,
        isVideo: true,
        uploadMethod,
        fileName: videoFile?.name
      };
      
      onSubmit(postData);
      
      // Reset form
      setFormData({ title: '', description: '', videoUrl: '', category: '', thumbnail: '' });
      setVideoFile(null);
      setUploadMethod('url');
      
      toast({
        title: "Video posted successfully",
        description: "Your video has been shared with the community.",
      });
      
      onClose();
    } catch (error) {
      console.error('Error posting video:', error);
      toast({
        title: "Upload failed",
        description: "Failed to post video. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="pb-3 sm:pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Video className="h-4 w-4 sm:h-5 sm:w-5" />
              Share a Video
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium block">Video Title</label>
              <Input
                placeholder="Enter video title..."
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                required
                className="text-sm sm:text-base"
              />
            </div>

            {/* Upload Method Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium block">How would you like to add your video?</label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={uploadMethod === 'url' ? 'default' : 'outline'}
                  onClick={() => setUploadMethod('url')}
                  className="flex-1"
                  size="sm"
                >
                  <Link className="h-4 w-4 mr-2" />
                  Video URL
                </Button>
                <Button
                  type="button"
                  variant={uploadMethod === 'upload' ? 'default' : 'outline'}
                  onClick={() => setUploadMethod('upload')}
                  className="flex-1"
                  size="sm"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload File
                </Button>
              </div>
            </div>

            {/* Video URL Input */}
            {uploadMethod === 'url' && (
              <div className="space-y-2">
                <label className="text-sm font-medium block">Video URL</label>
                <Input
                  placeholder="Paste YouTube, Vimeo, or other video URL..."
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({...formData, videoUrl: e.target.value})}
                  required
                  className="text-sm sm:text-base"
                />
                <p className="text-xs text-forest-500">
                  Supported: YouTube, Vimeo, and direct video links
                </p>
              </div>
            )}

            {/* Video File Upload */}
            {uploadMethod === 'upload' && (
              <div className="space-y-2">
                <label className="text-sm font-medium block">Upload Video File</label>
                <div className="border-2 border-dashed border-forest-200 rounded-lg p-6 text-center hover:border-forest-400 transition-colors">
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    className="hidden"
                    id="video-upload"
                  />
                  <label htmlFor="video-upload" className="cursor-pointer">
                    <Upload className="h-12 w-12 text-forest-400 mx-auto mb-4" />
                    {videoFile ? (
                      <div>
                        <p className="text-sm font-medium text-forest-700">{videoFile.name}</p>
                        <p className="text-xs text-forest-500">
                          {(videoFile.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm font-medium text-forest-700">Click to upload video</p>
                        <p className="text-xs text-forest-500">
                          Support: MP4, MOV, AVI, WMV (Max 100MB)
                        </p>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium block">Category</label>
              <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select category" />
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

            <div className="space-y-2">
              <label className="text-sm font-medium block">Thumbnail URL (Optional)</label>
              <Input
                placeholder="Paste thumbnail image URL..."
                value={formData.thumbnail}
                onChange={(e) => setFormData({...formData, thumbnail: e.target.value})}
                className="text-sm sm:text-base"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium block">Description</label>
              <Textarea
                placeholder="Describe your video and why it's helpful for the farming community..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows={4}
                required
                className="text-sm sm:text-base resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <Button 
                type="submit" 
                className="flex-1 bg-forest-600 hover:bg-forest-700 text-sm sm:text-base h-10 sm:h-11"
                disabled={isUploading || (!formData.title || !formData.description || (uploadMethod === 'url' && !formData.videoUrl) || (uploadMethod === 'upload' && !videoFile))}
              >
                {isUploading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Uploading...
                  </>
                ) : (
                  'Share Video'
                )}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                className="text-sm sm:text-base h-10 sm:h-11"
                disabled={isUploading}
              >
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
