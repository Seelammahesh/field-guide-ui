
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Calendar, User } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const NewsFeedCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();

  const newsVideos = [
    {
      id: 1,
      title: "Smart Farming Techniques - Modern Agriculture",
      description: "Learn about precision agriculture and how technology is revolutionizing farming practices.",
      thumbnail: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop",
      duration: "5:32",
      category: "Technology",
      author: "AgriTech Today",
      date: "2024-01-20"
    },
    {
      id: 2,
      title: "Government Schemes for Farmers 2024",
      description: "Complete guide to new agricultural subsidies and support programs available for farmers.",
      thumbnail: "https://images.unsplash.com/photo-1574690771115-bc8e8f4b2e15?w=400&h=300&fit=crop",
      duration: "8:15",
      category: "Government",
      author: "Ministry of Agriculture",
      date: "2024-01-18"
    },
    {
      id: 3,
      title: "Organic Farming Success Stories",
      description: "Real farmers share their journey from traditional to organic farming methods.",
      thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
      duration: "12:45",
      category: "Success Stories",
      author: "Green Farmers Network",
      date: "2024-01-15"
    },
    {
      id: 4,
      title: "Weather Patterns & Crop Planning",
      description: "Understanding climate change impact on agriculture and adaptive strategies.",
      thumbnail: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop",
      duration: "6:20",
      category: "Weather",
      author: "Climate & Agriculture",
      date: "2024-01-12"
    },
    {
      id: 5,
      title: "Sustainable Water Management",
      description: "Innovative irrigation techniques for water conservation in farming.",
      thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      duration: "9:30",
      category: "Sustainability",
      author: "Water Wise Farming",
      date: "2024-01-10"
    }
  ];

  const slidesToShow = isMobile ? 1 : 3;
  const maxSlides = Math.max(0, newsVideos.length - slidesToShow);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlides : prev - 1));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8 bg-gradient-to-b from-wheat-50 to-forest-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-800 mb-3 sm:mb-4">
            Agricultural News & Updates
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-forest-600">
            Stay informed with the latest farming techniques, government schemes, and success stories
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg border-forest-200 text-forest-700 w-8 h-8 sm:w-10 sm:h-10 p-0"
            onClick={prevSlide}
            disabled={newsVideos.length <= slidesToShow}
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg border-forest-200 text-forest-700 w-8 h-8 sm:w-10 sm:h-10 p-0"
            onClick={nextSlide}
            disabled={newsVideos.length <= slidesToShow}
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-8 sm:mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`
              }}
            >
              {newsVideos.map((video) => (
                <div
                  key={video.id}
                  className={`flex-shrink-0 ${
                    isMobile ? 'w-full' : 'w-1/3'
                  }`}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 sm:h-56 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg">
                        <Play className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs sm:text-sm">
                        {video.duration}
                      </div>
                      <div className="absolute top-2 left-2 bg-forest-600 text-white px-2 py-1 rounded text-xs">
                        {video.category}
                      </div>
                    </div>
                    <CardContent className="p-3 sm:p-4">
                      <h3 className="font-semibold text-forest-800 mb-2 text-sm sm:text-base line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-forest-600 text-xs sm:text-sm mb-3 line-clamp-3">
                        {video.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-forest-500">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span className="truncate">{video.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(video.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-forest-600' : 'bg-forest-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsFeedCarousel;
