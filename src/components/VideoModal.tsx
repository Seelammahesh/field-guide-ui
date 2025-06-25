
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Play } from 'lucide-react';

interface VideoModalProps {
  video: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    duration: string;
    category: string;
    author: string;
    date: string;
    videoUrl?: string;
  };
  onClose: () => void;
}

const VideoModal = ({ video, onClose }: VideoModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Mock video URLs - in a real app, these would come from your video service
  const getVideoUrl = (id: number) => {
    const videoIds = {
      1: "dQw4w9WgXcQ", // Sample YouTube video ID
      2: "jNQXAC9IVRw", // Sample YouTube video ID
      3: "9bZkp7q19f0", // Sample YouTube video ID
      4: "2Vv-BfVoq4g", // Sample YouTube video ID
      5: "6stlCkUDG_s", // Sample YouTube video ID
    };
    return `https://www.youtube.com/embed/${videoIds[id as keyof typeof videoIds] || 'dQw4w9WgXcQ'}`;
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <CardContent className="p-0">
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 z-10 bg-black/50 text-white hover:bg-black/70"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
            
            {isPlaying ? (
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={getVideoUrl(video.id)}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-t-lg"
                ></iframe>
              </div>
            ) : (
              <div className="aspect-video relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 rounded-full w-16 h-16"
                    onClick={() => setIsPlaying(true)}
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>
              </div>
            )}
            
            <div className="p-6">
              <h2 className="text-xl font-bold text-forest-800 mb-2">{video.title}</h2>
              <p className="text-forest-600 mb-4">{video.description}</p>
              <div className="flex items-center justify-between text-sm text-forest-500">
                <span>{video.author}</span>
                <span>{video.date}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoModal;
