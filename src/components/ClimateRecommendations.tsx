
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useWeatherTheme } from "@/contexts/WeatherThemeContext";
import { Droplets, Sun, Cloud, Snowflake, Thermometer, Wind, Bug, Sprout } from "lucide-react";
import { Link } from "react-router-dom";

const ClimateRecommendations = () => {
  const { currentTheme } = useWeatherTheme();

  const getRecommendations = () => {
    switch (currentTheme.condition) {
      case 'rainy':
        return {
          icon: <Droplets className="h-6 w-6 text-blue-600" />,
          title: "Rainy Season Recommendations",
          pesticides: [
            { name: "Copper Fungicide", purpose: "Prevents fungal diseases", price: "₹299" },
            { name: "Bordeaux Mixture", purpose: "Controls blight & mildew", price: "₹199" },
            { name: "Mancozeb", purpose: "Broad spectrum fungicide", price: "₹249" }
          ],
          tips: [
            "Apply fungicides before rain to prevent diseases",
            "Ensure proper drainage in fields",
            "Monitor for increased pest activity"
          ]
        };
      case 'hot':
        return {
          icon: <Thermometer className="h-6 w-6 text-red-600" />,
          title: "Hot Weather Recommendations",
          pesticides: [
            { name: "Neem Oil", purpose: "Natural pest control", price: "₹179" },
            { name: "Spinosad", purpose: "Controls thrips & caterpillars", price: "₹349" },
            { name: "Imidacloprid", purpose: "Systemic insecticide", price: "₹279" }
          ],
          tips: [
            "Apply pesticides during cooler hours",
            "Increase irrigation frequency",
            "Watch for heat stress in crops"
          ]
        };
      case 'cold':
        return {
          icon: <Wind className="h-6 w-6 text-cyan-600" />,
          title: "Cold Weather Recommendations",
          pesticides: [
            { name: "Paraffin Oil", purpose: "Winter spray for scale insects", price: "₹229" },
            { name: "Sulfur Dust", purpose: "Controls mites & powdery mildew", price: "₹149" },
            { name: "Bacillus thuringiensis", purpose: "Biological control", price: "₹199" }
          ],
          tips: [
            "Protect plants from frost damage",
            "Reduce pesticide applications",
            "Focus on preventive measures"
          ]
        };
      case 'sunny':
        return {
          icon: <Sun className="h-6 w-6 text-yellow-600" />,
          title: "Sunny Weather Recommendations",
          pesticides: [
            { name: "Chlorpyrifos", purpose: "Controls soil insects", price: "₹319" },
            { name: "Deltamethrin", purpose: "Broad spectrum insecticide", price: "₹259" },
            { name: "2,4-D", purpose: "Selective herbicide", price: "₹189" }
          ],
          tips: [
            "Apply early morning or late evening",
            "Monitor soil moisture levels",
            "Watch for increased insect activity"
          ]
        };
      default:
        return {
          icon: <Cloud className="h-6 w-6 text-gray-600" />,
          title: "General Recommendations",
          pesticides: [
            { name: "Neem Oil", purpose: "Organic pest control", price: "₹179" },
            { name: "Copper Sulfate", purpose: "Fungal control", price: "₹159" },
            { name: "Malathion", purpose: "General insecticide", price: "₹209" }
          ],
          tips: [
            "Follow integrated pest management",
            "Regular field monitoring",
            "Use weather-based spraying"
          ]
        };
    }
  };

  const recommendations = getRecommendations();

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${currentTheme.colors.background}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            {recommendations.icon}
            <h2 className={`text-3xl font-bold ${currentTheme.colors.accent}`}>
              {recommendations.title}
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Climate-specific pesticide recommendations based on current weather conditions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recommended Pesticides */}
          <div className="lg:col-span-2">
            <Card className={`bg-gradient-to-br ${currentTheme.colors.secondary} border-0 shadow-lg`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bug className="h-5 w-5" />
                  Recommended Pesticides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recommendations.pesticides.map((pesticide, index) => (
                    <Card key={index} className="bg-white/80 hover:bg-white transition-colors">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-forest-800 mb-2">{pesticide.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{pesticide.purpose}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            {pesticide.price}
                          </Badge>
                          <Button size="sm" variant="outline" asChild>
                            <Link to="/products">View</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Weather Tips */}
          <div>
            <Card className={`bg-gradient-to-br ${currentTheme.colors.primary} text-white border-0 shadow-lg`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sprout className="h-5 w-5" />
                  Weather Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {recommendations.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white border-white/30" asChild>
                  <Link to="/services">Book Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClimateRecommendations;
