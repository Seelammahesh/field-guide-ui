
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const WeatherWidget = () => {
  const [zipCode, setZipCode] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const mockWeatherData = {
    current: { temp: 25, condition: 'Sunny', icon: '☀️' },
    forecast: [
      { day: 'Today', temp: 25, icon: '☀️' },
      { day: 'Tomorrow', temp: 23, icon: '⛅' },
      { day: 'Sunday', temp: 21, icon: '🌧️' }
    ]
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-40 w-80 hidden lg:block">
      <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-forest-200">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-forest-700 flex items-center gap-2">
              🌤️ Weather Update
            </CardTitle>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsVisible(false)}
              className="text-forest-600 hover:text-forest-800"
            >
              ✕
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Current Weather */}
          <div className="text-center">
            <div className="text-4xl animate-rotate-sun inline-block">
              {mockWeatherData.current.icon}
            </div>
            <div className="text-2xl font-bold text-forest-700">
              {mockWeatherData.current.temp}°C
            </div>
            <div className="text-forest-600">{mockWeatherData.current.condition}</div>
          </div>

          {/* 3-Day Forecast */}
          <div className="grid grid-cols-3 gap-2">
            {mockWeatherData.forecast.map((day, index) => (
              <div key={index} className="text-center p-2 rounded-lg bg-forest-50">
                <div className="text-xs text-forest-600 font-medium">{day.day}</div>
                <div className="text-lg">{day.icon}</div>
                <div className="text-sm font-semibold text-forest-700">{day.temp}°</div>
              </div>
            ))}
          </div>

          {/* ZIP Code Input */}
          <div className="flex gap-2">
            <Input
              placeholder="Enter ZIP code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="text-sm"
            />
            <Button size="sm" className="bg-forest-600 hover:bg-forest-700">
              Update
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherWidget;
