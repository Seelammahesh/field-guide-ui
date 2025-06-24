
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const CropPrices = () => {
  const isMobile = useIsMobile();
  
  const cropData = [
    { 
      crop: 'Wheat', 
      price: '$6.45/bushel', 
      change: '+2.3%', 
      trend: 'up',
      icon: '🌾'
    },
    { 
      crop: 'Corn', 
      price: '$4.89/bushel', 
      change: '-1.1%', 
      trend: 'down',
      icon: '🌽'
    },
    { 
      crop: 'Rice', 
      price: '$13.20/cwt', 
      change: '+0.8%', 
      trend: 'up',
      icon: '🍚'
    },
    { 
      crop: 'Soybeans', 
      price: '$11.75/bushel', 
      change: '+1.5%', 
      trend: 'up',
      icon: '🫘'
    },
    { 
      crop: 'Cotton', 
      price: '$0.73/lb', 
      change: '-0.5%', 
      trend: 'down',
      icon: '🌿'
    },
    { 
      crop: 'Barley', 
      price: '$5.20/bushel', 
      change: '+0.3%', 
      trend: 'up',
      icon: '🌾'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-forest-800 mb-3 sm:mb-4">Current Crop Prices</h2>
          <p className="text-base sm:text-lg lg:text-xl text-forest-600 mb-2">
            Real-time market prices to help you make informed decisions
          </p>
          <p className="text-xs sm:text-sm text-forest-500">
            Last updated: {new Date().toLocaleString()}
          </p>
        </div>

        <Card className="bg-white shadow-xl border-forest-200">
          <CardHeader className="p-3 sm:p-4 lg:p-6">
            <CardTitle className="text-forest-700 flex items-center gap-2 text-base sm:text-lg">
              📈 Market Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 sm:p-4 lg:p-6">
            {isMobile ? (
              <div className="space-y-3">
                {cropData.map((crop, index) => (
                  <div key={index} className="p-3 border border-forest-200 rounded-lg hover:bg-forest-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{crop.icon}</span>
                        <span className="font-medium text-forest-700 text-sm">{crop.crop}</span>
                      </div>
                      {crop.trend === 'up' ? (
                        <ArrowUp className="w-4 h-4 text-forest-600" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-forest-800 text-sm">{crop.price}</span>
                      <Badge 
                        variant={crop.trend === 'up' ? 'default' : 'destructive'}
                        className={`text-xs ${crop.trend === 'up' ? 'bg-forest-600' : 'bg-red-600'}`}
                      >
                        {crop.change}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-forest-200">
                      <th className="text-left py-3 sm:py-4 px-2 font-semibold text-forest-700 text-sm sm:text-base">Crop</th>
                      <th className="text-left py-3 sm:py-4 px-2 font-semibold text-forest-700 text-sm sm:text-base">Current Price</th>
                      <th className="text-left py-3 sm:py-4 px-2 font-semibold text-forest-700 text-sm sm:text-base">24h Change</th>
                      <th className="text-left py-3 sm:py-4 px-2 font-semibold text-forest-700 text-sm sm:text-base">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cropData.map((crop, index) => (
                      <tr key={index} className="border-b border-forest-100 hover:bg-forest-50 transition-colors">
                        <td className="py-3 sm:py-4 px-2">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-lg sm:text-2xl">{crop.icon}</span>
                            <span className="font-medium text-forest-700 text-sm sm:text-base">{crop.crop}</span>
                          </div>
                        </td>
                        <td className="py-3 sm:py-4 px-2">
                          <span className="font-bold text-forest-800 text-sm sm:text-base">{crop.price}</span>
                        </td>
                        <td className="py-3 sm:py-4 px-2">
                          <Badge 
                            variant={crop.trend === 'up' ? 'default' : 'destructive'}
                            className={`text-xs sm:text-sm ${crop.trend === 'up' ? 'bg-forest-600' : 'bg-red-600'}`}
                          >
                            {crop.change}
                          </Badge>
                        </td>
                        <td className="py-3 sm:py-4 px-2">
                          {crop.trend === 'up' ? (
                            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-forest-600" />
                          ) : (
                            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CropPrices;
