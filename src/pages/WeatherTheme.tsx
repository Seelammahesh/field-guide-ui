
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useWeatherTheme } from "@/contexts/WeatherThemeContext";
import { Sun, Cloud, CloudRain, Snowflake, Thermometer, Wind, Palette, Settings, Eye } from "lucide-react";

const WeatherTheme = () => {
  const { currentTheme, setTheme, autoTheme, toggleAutoTheme } = useWeatherTheme();
  const [previewMode, setPreviewMode] = useState(false);

  const themeOptions = [
    { 
      condition: 'sunny' as const, 
      icon: <Sun className="h-8 w-8" />, 
      label: 'Sunny', 
      color: 'bg-yellow-500',
      description: 'Bright and warm weather with clear skies',
      effects: 'Animated sun rays and warm color palette'
    },
    { 
      condition: 'rainy' as const, 
      icon: <CloudRain className="h-8 w-8" />, 
      label: 'Rainy', 
      color: 'bg-blue-500',
      description: 'Wet weather with falling raindrops',
      effects: 'Animated rainfall and cool blue tones'
    },
    { 
      condition: 'cloudy' as const, 
      icon: <Cloud className="h-8 w-8" />, 
      label: 'Cloudy', 
      color: 'bg-gray-500',
      description: 'Overcast sky with gentle atmosphere',
      effects: 'Soft gray tones and calm ambiance'
    },
    { 
      condition: 'snowy' as const, 
      icon: <Snowflake className="h-8 w-8" />, 
      label: 'Snowy', 
      color: 'bg-blue-300',
      description: 'Cold weather with falling snowflakes',
      effects: 'Animated snowfall and winter colors'
    },
    { 
      condition: 'hot' as const, 
      icon: <Thermometer className="h-8 w-8" />, 
      label: 'Hot', 
      color: 'bg-red-500',
      description: 'Very warm weather with heat effects',
      effects: 'Heat wave animation and warm red palette'
    },
    { 
      condition: 'cold' as const, 
      icon: <Wind className="h-8 w-8" />, 
      label: 'Cold', 
      color: 'bg-cyan-500',
      description: 'Chilly weather with crisp atmosphere',
      effects: 'Cool cyan tones and refreshing feel'
    }
  ];

  const handleThemeSelect = (condition: any) => {
    setTheme(condition);
    if (previewMode) {
      setTimeout(() => setPreviewMode(false), 3000); // Auto-disable preview after 3 seconds
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentTheme.colors.background} transition-all duration-1000`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palette className="h-12 w-12 text-forest-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-forest-800">
              Weather Themes
            </h1>
          </div>
          <p className="text-xl text-forest-600 max-w-3xl mx-auto">
            Customize your FarmHub experience with dynamic weather-based themes. 
            Watch as the interface adapts to different weather conditions with beautiful animations and colors.
          </p>
        </div>

        {/* Current Theme Status */}
        <Card className="mb-8 border-2 border-forest-200 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-full ${currentTheme.condition === 'sunny' ? 'bg-yellow-500' : 
                  currentTheme.condition === 'rainy' ? 'bg-blue-500' :
                  currentTheme.condition === 'cloudy' ? 'bg-gray-500' :
                  currentTheme.condition === 'snowy' ? 'bg-blue-300' :
                  currentTheme.condition === 'hot' ? 'bg-red-500' : 'bg-cyan-500'} text-white`}>
                  {themeOptions.find(t => t.condition === currentTheme.condition)?.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Currently Active</h2>
                  <p className="text-forest-600">
                    {themeOptions.find(t => t.condition === currentTheme.condition)?.label} Theme
                  </p>
                </div>
              </div>
              <Badge variant="outline" className={`text-lg px-4 py-2 ${currentTheme.colors.accent} border-forest-600`}>
                {autoTheme ? '🤖 Auto Mode' : '🎨 Manual Mode'}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-forest-700 mb-2">
                  {themeOptions.find(t => t.condition === currentTheme.condition)?.description}
                </p>
                <p className="text-sm text-forest-600">
                  Effects: {themeOptions.find(t => t.condition === currentTheme.condition)?.effects}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <span className="text-sm font-medium">Auto Weather Theme</span>
                  <Switch checked={autoTheme} onCheckedChange={toggleAutoTheme} />
                </div>
                <Button
                  variant="outline"
                  onClick={() => setPreviewMode(!previewMode)}
                  className="border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  {previewMode ? 'Exit Preview' : 'Preview Mode'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Auto Theme Info */}
        {autoTheme && (
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500 rounded-full">
                  <Settings className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800">Auto Theme Active</h3>
                  <p className="text-blue-600 text-sm">
                    The theme automatically changes based on current weather conditions and time of day. 
                    Turn off auto mode to manually select your preferred theme.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Theme Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themeOptions.map((option) => (
            <Card 
              key={option.condition}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 ${
                currentTheme.condition === option.condition 
                  ? 'border-forest-600 bg-forest-50 shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-forest-400 bg-white/80 backdrop-blur-sm'
              }`}
              onClick={() => !autoTheme && handleThemeSelect(option.condition)}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto p-6 rounded-full ${option.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {option.icon}
                </div>
                <CardTitle className="text-xl font-bold text-forest-800">
                  {option.label}
                </CardTitle>
                <CardDescription className="text-forest-600">
                  {option.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <Badge 
                    variant="outline" 
                    className={`mb-2 ${currentTheme.condition === option.condition ? 'bg-forest-600 text-white' : ''}`}
                  >
                    {option.effects}
                  </Badge>
                </div>
                
                {!autoTheme ? (
                  <Button
                    variant={currentTheme.condition === option.condition ? "default" : "outline"}
                    className={`w-full ${
                      currentTheme.condition === option.condition 
                        ? 'bg-forest-600 hover:bg-forest-700' 
                        : 'border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleThemeSelect(option.condition);
                    }}
                  >
                    {currentTheme.condition === option.condition ? '✓ Active' : 'Select Theme'}
                  </Button>
                ) : (
                  <Button variant="ghost" disabled className="w-full text-gray-500">
                    Auto Mode Active
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Preview Mode Notice */}
        {previewMode && (
          <Card className="mt-8 bg-orange-50 border-orange-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-center gap-2 text-orange-700">
                <Eye className="h-5 w-5" />
                <span className="font-medium">Preview Mode Active - Themes will automatically revert in 3 seconds</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Features Info */}
        <Card className="mt-12 bg-gradient-to-r from-forest-50 to-wheat-50 border-forest-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-forest-800 text-center">
              🌟 Theme Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-forest-700 text-lg">Visual Effects</h3>
                <ul className="space-y-2 text-forest-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Animated rainfall for rainy weather
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Snowfall animation for winter themes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    Sun rays for bright sunny days
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Heat wave effects for hot weather
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-forest-700 text-lg">Smart Features</h3>
                <ul className="space-y-2 text-forest-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Automatic weather-based theme switching
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Manual theme override option
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Smooth transitions between themes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                    Responsive design across all devices
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WeatherTheme;
