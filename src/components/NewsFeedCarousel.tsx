
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Play, Calendar, User, Eye } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';
import VideoModal from './VideoModal';

const NewsFeedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const isMobile = useIsMobile();

  const newsItems = [
    {
      id: 1,
      title: "Organic Fertilizers for Rice Farming",
      description: "Learn about the benefits of organic fertilizers for rice cultivation and how to apply them effectively",
      videoUrl: "https://www.youtube.com/embed/oP8_Dx0Xzl4", // Telugu rice farming video
      thumbnail: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
      author: "Agriculture Expert",
      date: "2 days ago",
      category: "Farming Techniques",
      views: "12.5K",
      duration: "15:30"
    },
    {
      id: 2,
      title: "Post Harvest Rice Storage Techniques",
      description: "Proper methods for storing rice after harvest to maintain quality and prevent losses",
      videoUrl: "https://www.youtube.com/embed/RWgQdibP9EM", // Telugu rice storage video
      thumbnail: "https://images.unsplash.com/photo-1566281796817-93bc94d7dbd2?w=400&h=300&fit=crop",
      author: "Farming Advisor",
      date: "1 week ago",
      category: "Storage Methods",
      views: "8.3K",
      duration: "12:45"
    },
    {
      id: 3,
      title: "Crop Insurance Schemes for Farmers",
      description: "Understanding PM Fasal Bima Yojana and other crop insurance schemes available for farmers",
      videoUrl: "https://www.youtube.com/embed/VF4kB_oa6fQ", // Telugu crop insurance video
      thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
      author: "Government Schemes",
      date: "3 days ago",
      category: "Schemes",
      views: "25.2K",
      duration: "18:20"
    },
    {
      id: 4,
      title: "Modern Drip Irrigation Techniques",
      description: "Water conservation methods and drip irrigation system installation for efficient farming",
      videoUrl: "https://www.youtube.com/embed/2l1BhqE_eYU", // Telugu irrigation video
      thumbnail: "https://images.unsplash.com/photo-1416664806563-bb6be3be8b6f?w=400&h=300&fit=crop",
      author: "Water Management",
      date: "5 days ago",
      category: "Technology",
      views: "15.7K",
      duration: "22:15"
    },
    {
      id: 5,
      title: "Organic Pesticide Preparation at Home",
      description: "How to prepare effective organic pesticides at home using natural ingredients",
      videoUrl: "https://www.youtube.com/embed/dZ8KqF4XJDs", // Telugu organic pesticide video
      thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      author: "Organic Farming Experts",
      date: "1 day ago",
      category: "Organic Farming",
      views: "9.1K",
      duration: "14:50"
    },
    {
      id: 6,
      title: "Soil Testing and Fertilizer Application",
      description: "How to conduct soil tests and apply fertilizers based on soil analysis results",
      videoUrl: "https://www.youtube.com/embed/kVBnJ8-4D6s", // Telugu soil testing video
      thumbnail: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop",
      author: "Agri Science Lab",
      date: "4 days ago",
      category: "Soil Management",
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
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
          <div className="w-full sm:w-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
              Agricultural News & Updates
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-medium">
              Latest farming news and expert advice
            </p>
          </div>
          <div className="flex gap-3 self-end sm:self-auto">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevSlide}
              className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextSlide}
              className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className={`min-w-full flex gap-6 ${isMobile ? 'justify-center' : ''}`}>
                {newsItems.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((item) => (
                  <div key={item.id} className={`${isMobile ? 'w-full max-w-sm' : 'flex-1'} min-w-0`}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white rounded-2xl overflow-hidden h-[480px] flex flex-col">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-56 object-cover cursor-pointer group-hover:scale-110 transition-transform duration-700"
                          onClick={() => setSelectedVideo(item)}
                        />
                        <div 
                          className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/50 transition-colors"
                          onClick={() => setSelectedVideo(item)}
                        >
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:scale-110 transition-transform duration-300">
                            <Play className="h-8 w-8 text-white drop-shadow-lg" />
                          </div>
                        </div>
                        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 shadow-lg">
                          {item.category}
                        </Badge>
                        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-semibold">
                          {item.duration}
                        </div>
                      </div>
                      
                      <div className="flex flex-col flex-grow p-6">
                        <div className="flex-grow">
                          <h3 className="font-bold text-gray-800 mb-3 text-lg line-clamp-2 leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        
                        <div className="mt-auto">
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4" />
                              <span className="truncate font-medium">{item.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span className="font-medium">{item.date}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Eye className="h-4 w-4" />
                              <span className="font-semibold">{item.views} views</span>
                            </div>
                            <Button 
                              size="sm" 
                              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold px-4 transition-all duration-300"
                              onClick={() => setSelectedVideo(item)}
                            >
                              <Play className="h-4 w-4 mr-2" />
                              Watch
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
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
