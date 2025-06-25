
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Play, Calendar, User } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';
import VideoModal from './VideoModal';

const NewsFeedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const isMobile = useIsMobile();

  const newsItems = [
    {
      id: 1,
      title: "వరి పంట కోసం సేంద్రీయ ఎరువుల వాడకం | Organic Fertilizers for Rice Farming",
      description: "వరి పంటలో సేంద్రీయ ఎరువుల ప్రయోజనాలు మరియు వాటి వాడకం గురించి వివరణ",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample YouTube embed
      thumbnail: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
      author: "అగ్రికల్చర్ ఎక్స్‌పర్ట్",
      date: "2 days ago",
      category: "రైతు పద్ధతులు",
      views: "12.5K",
      duration: "15:30"
    },
    {
      id: 2,
      title: "కత్తిరింపు తర్వాత వరి నిల్వ పద్ధతులు | Post Harvest Rice Storage Techniques",
      description: "పంట కోతకు తర్వాత వరిని సరైన పద్ధతిలో నిల్వ చేయడం ఎలా",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample YouTube embed
      thumbnail: "https://images.unsplash.com/photo-1566281796817-93bc94d7dbd2?w=400&h=300&fit=crop",
      author: "రైతు సలహాదారు",
      date: "1 week ago",
      category: "నిల్వ పద్ధతులు",
      views: "8.3K",
      duration: "12:45"
    },
    {
      id: 3,
      title: "పంట బీమా పథకాలు | Crop Insurance Schemes for Farmers",
      description: "ప్రధానమంత్రి ఫసల్ బీమా యోజన మరియు ఇతర పంట బీమా పథకాల గురించి",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample YouTube embed
      thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
      author: "గవర్నమెంట్ స్కీమ్స్",
      date: "3 days ago",
      category: "పథకాలు",
      views: "25.2K",
      duration: "18:20"
    },
    {
      id: 4,
      title: "డ్రిప్ ఇరిగేషన్ వ్యవస్థ | Modern Drip Irrigation Techniques",
      description: "నీటి ఆదా పద్ధతులు మరియు డ్రిప్ ఇరిగేషన్ సిస్టం ఇన్‌స్టాలేషన్",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample YouTube embed
      thumbnail: "https://images.unsplash.com/photo-1416664806563-bb6be3be8b6f?w=400&h=300&fit=crop",
      author: "వాటర్ మేనేజ్‌మెంట్",
      date: "5 days ago",
      category: "సాంకేతికత",
      views: "15.7K",
      duration: "22:15"
    },
    {
      id: 5,
      title: "సేంద్రీయ పురుగుమందుల తయారీ | Organic Pesticide Preparation at Home",
      description: "ఇంట్లోనే సేంద్రీయ పురుగుమందులను ఎలా తయారు చేయాలి",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample YouTube embed
      thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      author: "సేంద్రీయ వ్యవసాయ నిపుణులు",
      date: "1 day ago",
      category: "సేంద్రీయ వ్యవసాయం",
      views: "9.1K",
      duration: "14:50"
    },
    {
      id: 6,
      title: "మట్టి పరీక్ష మరియు ఎరువుల వాడకం | Soil Testing and Fertilizer Application",
      description: "మట్టి పరీక్ష ఎలా చేయాలి మరియు దాని ఆధారంగా ఎరువుల వాడకం",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample YouTube embed
      thumbnail: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop",
      author: "అగ్రి సైన్స్ లాబ్",
      date: "4 days ago",
      category: "మట్టి నిర్వహణ",
      views: "18.4K",
      duration: "16:30"
    }
  ];

  const itemsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(newsItems.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          <div className="w-full sm:w-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-800 mb-2 sm:mb-3">
              వ్యవసాయ వార్తలు & అప్డేట్స్
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-forest-600">
              తాజా వ్యవసాయ వార్తలు మరియు నిపుణుల సలహాలు
            </p>
          </div>
          <div className="flex gap-2 self-end sm:self-auto">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevSlide}
              className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white p-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextSlide}
              className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white p-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className={`min-w-full flex gap-4 sm:gap-6 ${isMobile ? 'justify-center' : ''}`}>
                {newsItems.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((item) => (
                  <div key={item.id} className={`${isMobile ? 'w-full max-w-sm' : 'flex-1'} min-w-0`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-forest-200 bg-white">
                      <div className="relative">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-40 sm:h-48 object-cover rounded-t-lg cursor-pointer"
                          onClick={() => setSelectedVideo(item)}
                        />
                        <div 
                          className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors rounded-t-lg"
                          onClick={() => setSelectedVideo(item)}
                        >
                          <Play className="h-8 w-8 sm:h-12 sm:w-12 text-white" />
                        </div>
                        <Badge className="absolute top-2 right-2 bg-forest-600 text-white text-xs">
                          {item.category}
                        </Badge>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {item.duration}
                        </div>
                      </div>
                      <CardContent className="p-4 sm:p-6">
                        <h3 className="font-semibold text-forest-800 mb-2 text-sm sm:text-base line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-forest-600 text-xs sm:text-sm mb-3 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between text-xs sm:text-sm text-forest-500 mb-3">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <User className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="truncate">{item.author}</span>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{item.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-forest-500">{item.views} views</span>
                          <Button 
                            size="sm" 
                            className="bg-forest-600 hover:bg-forest-700 text-xs sm:text-sm"
                            onClick={() => setSelectedVideo(item)}
                          >
                            <Play className="h-3 w-3 mr-1" />
                            Watch
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-forest-600' : 'bg-forest-300'
              }`}
            />
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <VideoModal 
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </div>
    </section>
  );
};

export default NewsFeedCarousel;
