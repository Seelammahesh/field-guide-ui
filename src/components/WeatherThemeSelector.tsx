
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useWeatherTheme } from "@/contexts/WeatherThemeContext";
import { Sun, Cloud, CloudRain, Snowflake, Wind, X } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const WeatherThemeSelector = () => {
  const { currentTheme, setTheme, autoTheme, toggleAutoTheme } = useWeatherTheme();
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useIsMobile();

  const themeOptions = [
    { condition: 'sunny' as const, icon: <Sun className="h-4 w-4 sm:h-5 sm:w-5" />, label: 'Sunny', color: 'bg-yellow-500' },
    { condition: 'rainy' as const, icon: <CloudRain className="h-4 w-4 sm:h-5 sm:w-5" />, label: 'Rainy', color: 'bg-blue-500' },
    { condition: 'cloudy' as const, icon: <Cloud className="h-4 w-4 sm:h-5 sm:w-5" />, label: 'Cloudy', color: 'bg-gray-500' },
    { condition: 'snowy' as const, icon: <Snowflake className="h-4 w-4 sm:h-5 sm:w-5" />, label: 'Snowy', color: 'bg-blue-300' },
    { condition: 'windy' as const, icon: <Wind className="h-4 w-4 sm:h-5 sm:w-5" />, label: 'Windy', color: 'bg-gray-400' }
  ];

  if (!isVisible) return null;

  return (
    <Card className={`fixed ${isMobile ? 'top-2 right-2 left-2 w-auto' : 'top-4 right-4 w-80'} z-50 bg-gradient-to-br ${currentTheme.colors.background} border-2 shadow-xl`}>
      <CardHeader className="pb-2 sm:pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className={`flex items-center gap-2 ${currentTheme.colors.accent} text-sm sm:text-base`}>
            🌦️ Weather Theme
          </CardTitle>
          <div className="flex items-center gap-1 sm:gap-2">
            <Badge variant="outline" className={`${currentTheme.colors.accent} text-xs`}>
              {currentTheme.condition}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="h-5 w-5 sm:h-6 sm:w-6 p-0 hover:bg-red-100 hover:text-red-600"
            >
              <X className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm font-medium">Auto Weather Theme</span>
          <Switch checked={autoTheme} onCheckedChange={toggleAutoTheme} />
        </div>
        
        {!autoTheme && (
          <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-3'} gap-2`}>
            {themeOptions.map((option) => (
              <Button
                key={option.condition}
                variant={currentTheme.condition === option.condition ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme(option.condition)}
                className={`flex flex-col items-center gap-1 h-auto py-2 px-2 text-xs ${
                  currentTheme.condition === option.condition ? option.color : ''
                }`}
              >
                {option.icon}
                <span className="text-xs">{option.label}</span>
              </Button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WeatherThemeSelector;
