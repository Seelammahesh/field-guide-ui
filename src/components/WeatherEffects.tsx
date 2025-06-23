
import { useWeatherTheme } from "@/contexts/WeatherThemeContext";

const WeatherEffects = () => {
  const { currentTheme } = useWeatherTheme();

  const renderEffects = () => {
    switch (currentTheme.condition) {
      case 'rainy':
        return (
          <div className="fixed inset-0 pointer-events-none z-10">
            {/* Rain drops */}
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-8 bg-blue-400 opacity-60 animate-[fall_1s_linear_infinite]"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${0.5 + Math.random() * 1}s`
                }}
              />
            ))}
          </div>
        );
      
      case 'snowy':
      case 'cold':
        return (
          <div className="fixed inset-0 pointer-events-none z-10">
            {/* Snow flakes */}
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-80 animate-[snowfall_3s_linear_infinite]"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        );
      
      case 'hot':
        return (
          <div className="fixed inset-0 pointer-events-none z-10">
            {/* Heat waves */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-200/20 to-transparent animate-pulse" />
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-60 animate-[heatwave_2s_ease-in-out_infinite]"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${60 + Math.random() * 40}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        );
      
      case 'sunny':
        return (
          <div className="fixed inset-0 pointer-events-none z-10">
            {/* Sun rays */}
            <div className="absolute top-10 right-10 w-20 h-20">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-8 bg-yellow-400 opacity-50 origin-bottom animate-[sunray_3s_ease-in-out_infinite]"
                  style={{
                    transform: `rotate(${i * 45}deg)`,
                    transformOrigin: '50% 100%',
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      {renderEffects()}
      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes snowfall {
          0% { 
            transform: translateY(-100vh) translateX(0px); 
            opacity: 1;
          }
          100% { 
            transform: translateY(100vh) translateX(50px); 
            opacity: 0;
          }
        }
        
        @keyframes heatwave {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-20px) scale(1.2); 
            opacity: 0.3;
          }
        }
        
        @keyframes sunray {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.1);
          }
        }
      `}</style>
    </>
  );
};

export default WeatherEffects;
