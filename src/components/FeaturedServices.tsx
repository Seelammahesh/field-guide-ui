
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturedServices = () => {
  const services = [
    {
      icon: '🚜',
      title: 'Sprayer Repairs',
      description: 'Professional equipment maintenance and repair services',
      price: 'From $75/hour'
    },
    {
      icon: '🌱',
      title: 'Cultivation',
      description: 'Expert soil preparation and cultivation services',
      price: 'From $120/acre'
    },
    {
      icon: '🌾',
      title: 'Harvesting',
      description: 'Efficient crop harvesting with modern equipment',
      price: 'From $80/acre'
    },
    {
      icon: '🚜',
      title: 'Ploughing',
      description: 'Professional field preparation and ploughing',
      price: 'From $90/acre'
    },
    {
      icon: '🌿',
      title: 'Pest Control',
      description: 'Integrated pest management solutions',
      price: 'From $45/acre'
    },
    {
      icon: '💧',
      title: 'Irrigation Setup',
      description: 'Modern irrigation system installation',
      price: 'From $200/system'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-800 mb-4">Featured Services</h2>
          <p className="text-xl text-forest-600 max-w-2xl mx-auto">
            Professional agricultural services to help your farm thrive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-forest-200 bg-white">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:animate-bounce-gentle">
                  {service.icon}
                </div>
                <CardTitle className="text-forest-700">{service.title}</CardTitle>
                <CardDescription className="text-forest-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-soil-600 font-semibold mb-4">{service.price}</div>
                <Button className="w-full bg-forest-600 hover:bg-forest-700 text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
