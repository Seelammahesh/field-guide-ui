
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown } from 'lucide-react';

const CropPrices = () => {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-800 mb-4">Current Crop Prices</h2>
          <p className="text-xl text-forest-600 mb-2">
            Real-time market prices to help you make informed decisions
          </p>
          <p className="text-sm text-forest-500">
            Last updated: {new Date().toLocaleString()}
          </p>
        </div>

        <Card className="bg-white shadow-xl border-forest-200">
          <CardHeader>
            <CardTitle className="text-forest-700 flex items-center gap-2">
              📈 Market Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-forest-200">
                    <th className="text-left py-4 px-2 font-semibold text-forest-700">Crop</th>
                    <th className="text-left py-4 px-2 font-semibold text-forest-700">Current Price</th>
                    <th className="text-left py-4 px-2 font-semibold text-forest-700">24h Change</th>
                    <th className="text-left py-4 px-2 font-semibold text-forest-700">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {cropData.map((crop, index) => (
                    <tr key={index} className="border-b border-forest-100 hover:bg-forest-50 transition-colors">
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{crop.icon}</span>
                          <span className="font-medium text-forest-700">{crop.crop}</span>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <span className="font-bold text-forest-800">{crop.price}</span>
                      </td>
                      <td className="py-4 px-2">
                        <Badge 
                          variant={crop.trend === 'up' ? 'default' : 'destructive'}
                          className={crop.trend === 'up' ? 'bg-forest-600' : 'bg-red-600'}
                        >
                          {crop.change}
                        </Badge>
                      </td>
                      <td className="py-4 px-2">
                        {crop.trend === 'up' ? (
                          <ArrowUp className="w-5 h-5 text-forest-600" />
                        ) : (
                          <ArrowDown className="w-5 h-5 text-red-600" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CropPrices;
