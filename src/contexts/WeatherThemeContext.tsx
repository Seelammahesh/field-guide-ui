
import React, { createContext, useContext, useState, useEffect } from 'react';

type WeatherCondition = 'sunny' | 'rainy' | 'cloudy' | 'snowy' | 'windy';

interface WeatherTheme {
  name: string;
  condition: WeatherCondition;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    accent: string;
  };
  animations: string[];
}

interface WeatherThemeContextType {
  currentTheme: WeatherTheme;
  themes: Record<WeatherCondition, WeatherTheme>;
  setTheme: (condition: WeatherCondition) => void;
  autoTheme: boolean;
  toggleAutoTheme: () => void;
}

const weatherThemes: Record<WeatherCondition, WeatherTheme> = {
  sunny: {
    name: 'sunny',
    condition: 'sunny',
    colors: {
      primary: 'from-yellow-400 to-orange-500',
      secondary: 'from-orange-300 to-yellow-400',
      background: 'from-yellow-50 to-orange-50',
      accent: 'text-yellow-600'
    },
    animations: ['animate-pulse', 'animate-bounce-gentle']
  },
  rainy: {
    name: 'rainy',
    condition: 'rainy',
    colors: {
      primary: 'from-blue-500 to-indigo-600',
      secondary: 'from-blue-300 to-indigo-400',
      background: 'from-blue-50 to-indigo-50',
      accent: 'text-blue-600'
    },
    animations: ['animate-pulse', 'animate-fade-in']
  },
  cloudy: {
    name: 'cloudy',
    condition: 'cloudy',
    colors: {
      primary: 'from-gray-500 to-slate-600',
      secondary: 'from-gray-300 to-slate-400',
      background: 'from-gray-50 to-slate-50',
      accent: 'text-gray-600'
    },
    animations: ['animate-fade-in', 'animate-scale-in']
  },
  snowy: {
    name: 'snowy',
    condition: 'snowy',
    colors: {
      primary: 'from-blue-200 to-indigo-300',
      secondary: 'from-blue-100 to-indigo-200',
      background: 'from-blue-50 to-indigo-25',
      accent: 'text-blue-500'
    },
    animations: ['animate-bounce-gentle', 'animate-fade-in']
  },
  windy: {
    name: 'windy',
    condition: 'windy',
    colors: {
      primary: 'from-gray-500 to-slate-600',
      secondary: 'from-gray-300 to-slate-400',
      background: 'from-gray-50 to-slate-50',
      accent: 'text-gray-600'
    },
    animations: ['animate-fade-in', 'animate-bounce-gentle']
  }
};

const WeatherThemeContext = createContext<WeatherThemeContextType | undefined>(undefined);

export const WeatherThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentCondition, setCurrentCondition] = useState<WeatherCondition>('sunny');
  const [autoTheme, setAutoTheme] = useState(true);

  // Mock weather API call - in real app, this would fetch actual weather data
  useEffect(() => {
    if (autoTheme) {
      const fetchWeather = () => {
        // Simulate weather conditions based on time of day for demo
        const hour = new Date().getHours();
        if (hour >= 6 && hour < 10) setCurrentCondition('sunny');
        else if (hour >= 10 && hour < 14) setCurrentCondition('sunny');
        else if (hour >= 14 && hour < 18) setCurrentCondition('cloudy');
        else if (hour >= 18 && hour < 22) setCurrentCondition('rainy');
        else setCurrentCondition('windy');
      };

      fetchWeather();
      const interval = setInterval(fetchWeather, 30000); // Update every 30 seconds for demo
      return () => clearInterval(interval);
    }
  }, [autoTheme]);

  const currentTheme = weatherThemes[currentCondition];

  const setTheme = (condition: WeatherCondition) => {
    setCurrentCondition(condition);
    setAutoTheme(false);
  };

  const toggleAutoTheme = () => {
    setAutoTheme(!autoTheme);
  };

  return (
    <WeatherThemeContext.Provider value={{ 
      currentTheme, 
      themes: weatherThemes, 
      setTheme, 
      autoTheme, 
      toggleAutoTheme 
    }}>
      {children}
    </WeatherThemeContext.Provider>
  );
};

export const useWeatherTheme = () => {
  const context = useContext(WeatherThemeContext);
  if (context === undefined) {
    throw new Error('useWeatherTheme must be used within a WeatherThemeProvider');
  }
  return context;
};
