
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useWeatherTheme } from "@/contexts/WeatherThemeContext";
import { Sun, Cloud, CloudRain, Snowflake, Thermometer, Wind, X } from "lucide-react";

const WeatherThemeSelector = () => {
  const { currentTheme, setTheme, autoTheme, toggleAutoTheme } = useWeatherTheme();
  const [isVisible, setIsVisible] = useState(true);

  const themeOptions = [
    { condition: 'sunny' as const, icon: <Sun className="h-5 w-5" />, label: 'Sunny', color: 'bg-yellow-500' },
    { condition: 'rainy' as const, icon: <CloudRain className="h-5 w-5" />, label: 'Rainy', color: 'bg-blue-500' },
    { condition: 'cloudy' as const, icon: <Cloud className="h-5 w-5" />, label: 'Cloudy', color: 'bg-gray-500' },
    { condition: 'snowy' as const, icon: <Snowflake className="h-5 w-5" />, label: 'Snowy', color: 'bg-blue-300' },
    { condition: 'hot' as const, icon: <Thermometer className="h-5 w-5" />, label: 'Hot', color: 'bg-red-500' },
    { condition: 'cold' as const, icon: <Wind className="h-5 w-5" />, label: 'Cold', color: 'bg-cyan-500' }
  ];

  if (!isVisible) return null;

  return (
    <Card className={`fixed top-4 right-4 z-50 w-80 bg-gradient-to-br ${currentTheme.colors.background} border-2 shadow-xl`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className={`flex items-center gap-2 ${currentTheme.colors.accent}`}>
            🌦️ Weather Theme
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className={currentTheme.colors.accent}>
              {currentTheme.condition}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="h-6 w-6 p-0 hover:bg-red-100 hover:text-red-600"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Auto Weather Theme</span>
          <Switch checked={autoTheme} onCheckedChange={toggleAutoTheme} />
        </div>
        
        {!autoTheme && (
          <div className="grid grid-cols-3 gap-2">
            {themeOptions.map((option) => (
              <Button
                key={option.condition}
                variant={currentTheme.condition === option.condition ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme(option.condition)}
                className={`flex flex-col items-center gap-1 h-auto py-2 ${
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
