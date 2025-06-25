
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Video, X } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.videoUrl) {
      onSubmit({
        ...formData,
        id: Date.now(),
        author: 'Current User',
        time: 'Just now',
        replies: 0,
        likes: 0,
        isVideo: true
      });
      setFormData({ title: '', description: '', videoUrl: '', category: '', thumbnail: '' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
      <Card className="w-full max-w-lg max-h-[90vh] overflow-y-auto">
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
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
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
                disabled={!formData.title || !formData.description || !formData.videoUrl}
              >
                Share Video
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                className="text-sm sm:text-base h-10 sm:h-11"
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
