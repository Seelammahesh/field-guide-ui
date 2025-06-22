
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Camera, Stethoscope, Leaf, Bug, Droplets, ShoppingCart } from 'lucide-react';

const PlantDiseases = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const diseases = [
    {
      id: 1,
      name: 'Wheat Rust',
      crop: 'wheat',
      category: 'fungal',
      severity: 'high',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      symptoms: ['Orange-red pustules on leaves', 'Yellowing of affected areas', 'Reduced grain quality'],
      treatment: 'Apply fungicide spray containing propiconazole',
      prevention: 'Use resistant varieties, proper crop rotation',
      products: ['Fungicide Pro', 'Rust Guard Spray']
    },
    {
      id: 2,
      name: 'Bacterial Blight',
      crop: 'rice',
      category: 'bacterial',
      severity: 'medium',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      symptoms: ['Water-soaked lesions', 'Yellow halos around spots', 'Leaf wilting'],
      treatment: 'Copper-based bactericide application',
      prevention: 'Avoid overhead irrigation, use certified seeds',
      products: ['Copper Shield', 'Bacteria Stop']
    },
    {
      id: 3,
      name: 'Aphid Infestation',
      crop: 'cotton',
      category: 'pest',
      severity: 'medium',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      symptoms: ['Small green insects on leaves', 'Stunted plant growth', 'Honeydew secretion'],
      treatment: 'Insecticidal soap or neem oil spray',
      prevention: 'Encourage beneficial insects, regular monitoring',
      products: ['Neem Guard', 'Aphid Away']
    },
    {
      id: 4,
      name: 'Powdery Mildew',
      crop: 'tomato',
      category: 'fungal',
      severity: 'low',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      symptoms: ['White powdery coating on leaves', 'Leaf curling', 'Reduced photosynthesis'],
      treatment: 'Sulfur-based fungicide spray',
      prevention: 'Improve air circulation, avoid overhead watering',
      products: ['Sulfur Pro', 'Mildew Stop']
    },
    {
      id: 5,
      name: 'Root Rot',
      crop: 'sugarcane',
      category: 'fungal',
      severity: 'high',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      symptoms: ['Brown, mushy roots', 'Stunted growth', 'Yellowing leaves'],
      treatment: 'Soil drenching with fungicide',
      prevention: 'Improve drainage, avoid overwatering',
      products: ['Root Guard', 'Fungal Shield']
    },
    {
      id: 6,
      name: 'Cutworm Damage',
      crop: 'corn',
      category: 'pest',
      severity: 'medium',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      symptoms: ['Cut seedlings at soil level', 'Chewed leaves', 'Visible caterpillars'],
      treatment: 'Bt-based insecticide application',
      prevention: 'Remove crop debris, use collar barriers',
      products: ['Cutworm Killer', 'Bt Guardian']
    }
  ];

  const featuredDisease = diseases[0]; // Wheat Rust as featured

  const crops = ['all', 'wheat', 'rice', 'cotton', 'tomato', 'sugarcane', 'corn'];
  const categories = ['all', 'fungal', 'bacterial', 'pest', 'viral'];

  const filteredDiseases = diseases.filter(disease => {
    const matchesSearch = disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         disease.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCrop = selectedCrop === 'all' || disease.crop === selectedCrop;
    const matchesCategory = selectedCategory === 'all' || disease.category === selectedCategory;
    return matchesSearch && matchesCrop && matchesCategory;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-orange-100 text-orange-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'fungal': return <Droplets className="h-4 w-4" />;
      case 'bacterial': return <Stethoscope className="h-4 w-4" />;
      case 'pest': return <Bug className="h-4 w-4" />;
      default: return <Leaf className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-wheat-50 to-forest-50 font-montserrat">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-forest-700">🌾 FarmHub</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Home</a>
              <a href="/dashboard" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Dashboard</a>
              <a href="/products" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Products</a>
              <a href="/services" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Services</a>
              <a href="/plant-diseases" className="text-forest-800 font-semibold border-b-2 border-forest-600">Plant Diseases</a>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-forest-600 to-forest-700">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Plant disease solutions"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Plant Disease Solutions</h1>
          <p className="text-xl text-wheat-100 max-w-3xl mx-auto">
            Identify and treat crop diseases effectively with our comprehensive database and expert guidance.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Disease of the Week */}
        <Card className="mb-8 bg-gradient-to-r from-forest-50 to-wheat-50 border-forest-200">
          <CardHeader>
            <CardTitle className="text-2xl text-forest-700 flex items-center gap-2">
              🏆 Disease of the Week
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <img
                  src={featuredDisease.image}
                  alt={featuredDisease.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-forest-800">{featuredDisease.name}</h3>
                  <Badge className={getSeverityColor(featuredDisease.severity)}>
                    {featuredDisease.severity.toUpperCase()} RISK
                  </Badge>
                </div>
                <p className="text-forest-600">
                  <strong>Prevention:</strong> {featuredDisease.prevention}
                </p>
                <p className="text-forest-600">
                  <strong>Treatment:</strong> {featuredDisease.treatment}
                </p>
                <Button className="bg-forest-600 hover:bg-forest-700">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Shop Treatment Products
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Search */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-forest-700">
                    <Search className="h-5 w-5" />
                    Search Diseases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    placeholder="Search by disease or symptom..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-forest-200 focus:ring-forest-500"
                  />
                </CardContent>
              </Card>

              {/* Symptom Checker */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-forest-700">
                    <Stethoscope className="h-5 w-5" />
                    Symptom Checker
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <select className="w-full p-2 border border-forest-200 rounded-lg focus:ring-2 focus:ring-forest-500">
                    <option>Select primary symptom</option>
                    <option>Yellowing leaves</option>
                    <option>Brown spots</option>
                    <option>Wilting</option>
                    <option>Stunted growth</option>
                    <option>Insect damage</option>
                  </select>
                  <select className="w-full p-2 border border-forest-200 rounded-lg focus:ring-2 focus:ring-forest-500">
                    <option>Select affected part</option>
                    <option>Leaves</option>
                    <option>Stem</option>
                    <option>Roots</option>
                    <option>Fruits</option>
                    <option>Flowers</option>
                  </select>
                  <Button className="w-full bg-forest-600 hover:bg-forest-700">
                    Diagnose Disease
                  </Button>
                </CardContent>
              </Card>

              {/* Image Upload */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-forest-700">
                    <Camera className="h-5 w-5" />
                    AI Disease ID
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-forest-300 rounded-lg p-6 text-center">
                    <Camera className="h-12 w-12 text-forest-400 mx-auto mb-2" />
                    <p className="text-forest-600 mb-2">Upload plant photo</p>
                    <p className="text-xs text-forest-500">AI-powered disease identification coming soon</p>
                  </div>
                </CardContent>
              </Card>

              {/* Filters */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-forest-700">
                    <Filter className="h-5 w-5" />
                    Filters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">Crop Type</label>
                    <select
                      value={selectedCrop}
                      onChange={(e) => setSelectedCrop(e.target.value)}
                      className="w-full p-2 border border-forest-200 rounded-lg focus:ring-2 focus:ring-forest-500"
                    >
                      {crops.map(crop => (
                        <option key={crop} value={crop}>
                          {crop === 'all' ? 'All Crops' : crop.charAt(0).toUpperCase() + crop.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">Disease Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full p-2 border border-forest-200 rounded-lg focus:ring-2 focus:ring-forest-500"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Disease Database */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-forest-700">Disease Database</h2>
              <p className="text-forest-600">{filteredDiseases.length} diseases found</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDiseases.map((disease) => (
                <Card key={disease.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <img
                      src={disease.image}
                      alt={disease.name}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-forest-800">{disease.name}</h3>
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(disease.category)}
                        <Badge className={getSeverityColor(disease.severity)}>
                          {disease.severity}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-forest-700">Crop:</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {disease.crop}
                        </Badge>
                      </div>
                      <div>
                        <span className="font-medium text-forest-700">Symptoms:</span>
                        <ul className="text-forest-600 mt-1 text-xs">
                          {disease.symptoms.slice(0, 2).map((symptom, index) => (
                            <li key={index}>• {symptom}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="font-medium text-forest-700">Treatment:</span>
                        <p className="text-forest-600 text-xs mt-1">{disease.treatment}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        View Details
                      </Button>
                      <Button size="sm" className="flex-1 bg-forest-600 hover:bg-forest-700 text-xs">
                        <ShoppingCart className="h-3 w-3 mr-1" />
                        Shop Products
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" className="border-forest-300 text-forest-700 hover:bg-forest-50">
                Load More Diseases
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDiseases;
