
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FarmingTip = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const farmingTips = [
    {
      icon: '💧',
      title: 'Soil Moisture Check',
      tip: 'Check soil moisture before planting by inserting your finger 2 inches deep. If it feels dry, water thoroughly.',
      category: 'Watering'
    },
    {
      icon: '🌱',
      title: 'Crop Rotation',
      tip: 'Rotate crops annually to prevent soil depletion and reduce pest buildup. Legumes help fix nitrogen in soil.',
      category: 'Soil Health'
    },
    {
      icon: '🦟',
      title: 'Natural Pest Control',
      tip: 'Plant marigolds and basil around your crops to naturally deter pests without harmful chemicals.',
      category: 'Pest Management'
    },
    {
      icon: '🌡️',
      title: 'Weather Timing',
      tip: 'Plant after the last expected frost date in your area. Check local weather patterns for optimal timing.',
      category: 'Timing'
    },
    {
      icon: '🍂',
      title: 'Composting',
      tip: 'Create compost from kitchen scraps and yard waste. It provides excellent nutrients for soil enrichment.',
      category: 'Fertilization'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % farmingTips.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [farmingTips.length]);

  const nextTip = () => {
    setCurrentTipIndex((prev) => (prev + 1) % farmingTips.length);
  };

  const prevTip = () => {
    setCurrentTipIndex((prev) => (prev - 1 + farmingTips.length) % farmingTips.length);
  };

  const currentTip = farmingTips[currentTipIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-forest-800 mb-4">Farming Tip of the Day</h2>
          <p className="text-xl text-forest-600">
            Daily wisdom to help you grow better crops
          </p>
        </div>

        <Card className="bg-gradient-to-br from-wheat-100 to-forest-100 shadow-xl border-forest-200 overflow-hidden">
          <div className="relative">
            <CardHeader className="text-center pb-4">
              <div className="text-6xl mb-4 animate-bounce-gentle">
                {currentTip.icon}
              </div>
              <CardTitle className="text-2xl text-forest-800 mb-2">
                {currentTip.title}
              </CardTitle>
              <div className="inline-block bg-wheat-500 text-soil-800 px-3 py-1 rounded-full text-sm font-medium">
                {currentTip.category}
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-forest-700 mb-8 leading-relaxed">
                {currentTip.tip}
              </p>
              
              <div className="flex justify-center items-center gap-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={prevTip}
                  className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white"
                >
                  ← Previous
                </Button>
                
                <div className="flex gap-2">
                  {farmingTips.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTipIndex ? 'bg-forest-600' : 'bg-forest-300'
                      }`}
                    />
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={nextTip}
                  className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white"
                >
                  Next →
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FarmingTip;
