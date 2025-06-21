
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const InteractiveMap = () => {
  const serviceProviders = [
    { id: 1, name: 'Green Valley Equipment', type: 'Equipment Rental', distance: '2.3 miles' },
    { id: 2, name: 'Farm Supply Co.', type: 'Supplies Store', distance: '1.8 miles' },
    { id: 3, name: 'AgriTech Services', type: 'Repair Services', distance: '3.1 miles' },
    { id: 4, name: 'Organic Solutions', type: 'Organic Products', distance: '4.2 miles' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-wheat-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-800 mb-4">Find Nearby Services</h2>
          <p className="text-xl text-forest-600">
            Locate service providers and suppliers in your area
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <Card className="bg-white shadow-xl border-forest-200">
            <CardHeader>
              <CardTitle className="text-forest-700 flex items-center gap-2">
                🗺️ Interactive Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-forest-100 rounded-lg h-80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-forest-200 to-forest-300"></div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-forest-700 font-medium">Interactive Map View</p>
                  <p className="text-forest-600 text-sm mt-2">Click pins to view provider details</p>
                </div>
                {/* Mock pins */}
                <div className="absolute top-20 left-16 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg animate-bounce-gentle"></div>
                <div className="absolute top-32 right-20 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
                <div className="absolute bottom-24 left-24 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                <div className="absolute bottom-16 right-16 w-4 h-4 bg-yellow-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>
            </CardContent>
          </Card>

          {/* Service Providers List */}
          <Card className="bg-white shadow-xl border-forest-200">
            <CardHeader>
              <CardTitle className="text-forest-700 flex items-center gap-2">
                📍 Nearby Providers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {serviceProviders.map((provider) => (
                  <div key={provider.id} className="p-4 border border-forest-200 rounded-lg hover:bg-forest-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-forest-700">{provider.name}</h3>
                      <span className="text-sm text-forest-500">{provider.distance}</span>
                    </div>
                    <p className="text-forest-600 mb-3">{provider.type}</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-forest-600 hover:bg-forest-700 text-white">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="border-forest-600 text-forest-600">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
