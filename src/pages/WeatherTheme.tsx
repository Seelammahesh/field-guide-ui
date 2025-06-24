
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, Cloud, CloudRain, Snowflake, Wind, Eye, Check } from 'lucide-react';
import { useWeatherTheme } from '@/contexts/WeatherThemeContext';
import WeatherEffects from '@/components/WeatherEffects';

const WeatherTheme = () => {
  const { currentTheme, setTheme, themes } = useWeatherTheme();
  const [selectedTheme, setSelectedTheme] = useState(currentTheme.name);

  useEffect(() => {
    setSelectedTheme(currentTheme.name);
  }, [currentTheme]);

  const handleThemeChange = (themeName: string) => {
    setSelectedTheme(themeName);
    // Type assertion since we know themeName is a valid key
    const validThemeName = themeName as keyof typeof themes;
    setTheme(validThemeName);
  };

  const getThemeIcon = (themeName: string) => {
    switch (themeName) {
      case 'sunny':
        return <Sun className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-500" />;
      case 'rainy':
        return <CloudRain className="w-8 h-8 sm:w-12 sm:h-12 text-blue-500" />;
      case 'snowy':
        return <Snowflake className="w-8 h-8 sm:w-12 sm:h-12 text-blue-300" />;
      case 'windy':
        return <Wind className="w-8 h-8 sm:w-12 sm:h-12 text-gray-500" />;
      default:
        return <Cloud className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />;
    }
  };

  const getThemeDescription = (themeName: string) => {
    switch (themeName) {
      case 'sunny':
        return 'Bright and cheerful theme with warm golden tones and animated sun rays';
      case 'rainy':
        return 'Cool and refreshing theme with animated rainfall effects';
      case 'snowy':
        return 'Clean and crisp theme with gentle snowfall animations';
      case 'windy':
        return 'Dynamic theme with swaying elements and wind effects';
      default:
        return 'Default cloudy theme with subtle animations';
    }
  };

  return (
    <div className={`min-h-screen ${currentTheme.colors.background} relative overflow-hidden`}>
      {/* Weather Effects */}
      <WeatherEffects />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-800 mb-3 sm:mb-4">
            Weather Themes
          </h1>
          <p className="text-lg sm:text-xl text-forest-600 max-w-3xl mx-auto leading-relaxed">
            Transform your FarmHub experience with dynamic weather-based themes that adapt the interface to match different weather conditions
          </p>
        </div>

        {/* Current Theme Preview */}
        <div className="mb-8 sm:mb-12">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center gap-3 mb-3">
                {getThemeIcon(currentTheme.name)}
                <Badge className="px-3 py-1 text-sm font-medium bg-forest-600 text-white">
                  Current Theme
                </Badge>
              </div>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-forest-800 capitalize">
                {currentTheme.name} Theme
              </CardTitle>
              <CardDescription className="text-base sm:text-lg text-forest-600 max-w-2xl mx-auto">
                {getThemeDescription(currentTheme.name)}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="text-xs sm:text-sm">
                  Background Effects
                </Badge>
                <Badge variant="outline" className="text-xs sm:text-sm">
                  Dynamic Colors
                </Badge>
                <Badge variant="outline" className="text-xs sm:text-sm">
                  Animated Elements
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Theme Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {Object.entries(themes).map(([themeName, theme]) => (
            <Card
              key={themeName}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 bg-white/80 backdrop-blur-sm ${
                selectedTheme === themeName
                  ? 'border-forest-600 shadow-xl scale-105'
                  : 'border-gray-200 hover:border-forest-400'
              }`}
              onClick={() => handleThemeChange(themeName)}
            >
              <CardHeader className="text-center pb-3 sm:pb-4">
                <div className="flex justify-center mb-3 sm:mb-4 relative">
                  {getThemeIcon(themeName)}
                  {selectedTheme === themeName && (
                    <div className="absolute -top-1 -right-1 bg-forest-600 rounded-full p-1">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-forest-800 capitalize mb-1 sm:mb-2">
                  {themeName}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm text-forest-600 leading-relaxed">
                  {getThemeDescription(themeName)}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Color Preview */}
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="flex gap-1 sm:gap-2">
                    {theme.colors.background.split(' ').slice(-3).map((color, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 border-white shadow-sm bg-gradient-to-br ${
                          color.includes('yellow') ? 'from-yellow-300 to-yellow-500' :
                          color.includes('blue') ? 'from-blue-300 to-blue-500' :
                          color.includes('cyan') ? 'from-cyan-300 to-cyan-500' :
                          'from-gray-300 to-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                  <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-forest-600">
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Visual Effects</span>
                  </div>
                </div>

                {/* Apply Button */}
                <Button
                  className={`w-full text-xs sm:text-sm transition-all duration-300 ${
                    selectedTheme === themeName
                      ? 'bg-forest-600 hover:bg-forest-700 text-white'
                      : 'bg-gray-100 hover:bg-forest-600 hover:text-white text-forest-600'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleThemeChange(themeName);
                  }}
                >
                  {selectedTheme === themeName ? 'Applied' : 'Apply Theme'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Theme Information */}
        <div className="mt-8 sm:mt-12">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-forest-800 text-center">
                How Weather Themes Work
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center p-3 sm:p-4">
                  <Sun className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-500 mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-bold text-sm sm:text-base text-forest-800 mb-1 sm:mb-2">Sunny</h3>
                  <p className="text-xs sm:text-sm text-forest-600">Warm golden colors with animated sun rays</p>
                </div>
                <div className="text-center p-3 sm:p-4">
                  <CloudRain className="w-8 h-8 sm:w-12 sm:h-12 text-blue-500 mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-bold text-sm sm:text-base text-forest-800 mb-1 sm:mb-2">Rainy</h3>
                  <p className="text-xs sm:text-sm text-forest-600">Cool blue tones with falling raindrops</p>
                </div>
                <div className="text-center p-3 sm:p-4">
                  <Snowflake className="w-8 h-8 sm:w-12 sm:h-12 text-blue-300 mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-bold text-sm sm:text-base text-forest-800 mb-1 sm:mb-2">Snowy</h3>
                  <p className="text-xs sm:text-sm text-forest-600">Crisp white theme with gentle snowfall</p>
                </div>
                <div className="text-center p-3 sm:p-4">
                  <Wind className="w-8 h-8 sm:w-12 sm:h-12 text-gray-500 mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-bold text-sm sm:text-base text-forest-800 mb-1 sm:mb-2">Windy</h3>
                  <p className="text-xs sm:text-sm text-forest-600">Dynamic gray theme with wind effects</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WeatherTheme;
