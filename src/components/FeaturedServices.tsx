
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Wrench,
  Sprout,
  Wheat,
  Tractor,
  Bug,
  Droplets,
} from "lucide-react";

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      icon: <Wrench className="w-8 h-8 sm:w-10 sm:h-10 text-forest-700" />,
      title: "Sprayer Repairs",
      description: "Professional equipment maintenance and repair",
      price: "From $75/hour",
    },
    {
      id: 2,
      icon: <Sprout className="w-8 h-8 sm:w-10 sm:h-10 text-forest-700" />,
      title: "Cultivation",
      description: "Expert soil preparation and cultivation services",
      price: "From $120/acre",
    },
    {
      id: 3,
      icon: <Wheat className="w-8 h-8 sm:w-10 sm:h-10 text-forest-700" />,
      title: "Harvesting",
      description: "Efficient crop harvesting with modern equipment",
      price: "From $80/acre",
    },
    {
      id: 4,
      icon: <Tractor className="w-8 h-8 sm:w-10 sm:h-10 text-forest-700" />,
      title: "Ploughing",
      description: "Professional field preparation and ploughing",
      price: "From $90/acre",
    },
    {
      id: 5,
      icon: <Bug className="w-8 h-8 sm:w-10 sm:h-10 text-forest-700" />,
      title: "Pest Control",
      description: "Integrated pest management solutions",
      price: "From $45/acre",
    },
    {
      id: 6,
      icon: <Droplets className="w-8 h-8 sm:w-10 sm:h-10 text-forest-700" />,
      title: "Irrigation Setup",
      description: "Modern irrigation system installation",
      price: "From $200/system",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-800 mb-3 sm:mb-4">
            Featured Services
          </h2>
          <p className="text-lg sm:text-xl text-forest-600 max-w-2xl mx-auto leading-relaxed">
            Professional agricultural services to help your farm thrive
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center py-6 sm:py-8 px-4 sm:px-6 bg-white border border-forest-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-3 sm:mb-4">{service.icon}</div>
              <CardHeader className="space-y-2 p-0">
                <CardTitle className="text-lg sm:text-xl text-forest-800">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-forest-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-4 w-full flex flex-col items-center space-y-4">
                <div className="text-sm sm:text-base font-semibold text-soil-600">
                  {service.price}
                </div>
                <Button className="w-full bg-forest-600 hover:bg-forest-700 text-white text-sm sm:text-base" asChild>
                  <Link to={`/services/${service.id}`}>
                    Book Now
                  </Link>
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
