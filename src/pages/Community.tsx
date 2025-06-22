
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, MessageSquare, ThumbsUp, ThumbsDown, Search, Trophy, User, Calendar } from 'lucide-react';

const Community = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const forumCategories = [
    { id: 'crop-diseases', name: 'Crop Diseases', icon: '🦠', posts: 45 },
    { id: 'weather-impacts', name: 'Weather Impacts', icon: '🌦️', posts: 32 },
    { id: 'market-trends', name: 'Market Trends', icon: '📈', posts: 28 },
    { id: 'equipment', name: 'Equipment & Tools', icon: '🚜', posts: 22 },
    { id: 'organic-farming', name: 'Organic Farming', icon: '🌱', posts: 38 }
  ];

  const forumPosts = [
    {
      id: 1,
      title: 'Best practices for wheat rust prevention?',
      author: 'Farmer_Raj',
      category: 'crop-diseases',
      replies: 12,
      upvotes: 24,
      lastPost: '2 hours ago',
      content: 'I\'ve been seeing early signs of wheat rust in my fields. What are the most effective prevention methods?',
      isHot: true
    },
    {
      id: 2,
      title: 'Impact of recent rainfall on cotton crops',
      author: 'CottonKing',
      category: 'weather-impacts',
      replies: 8,
      upvotes: 15,
      lastPost: '4 hours ago',
      content: 'The unexpected heavy rains last week have affected my cotton plantation. Looking for advice on recovery.',
      isHot: false
    },
    {
      id: 3,
      title: 'Fertilizer prices trending upward - alternatives?',
      author: 'GreenThumb_Singh',
      category: 'market-trends',
      replies: 18,
      upvotes: 31,
      lastPost: '6 hours ago',
      content: 'Has anyone noticed the sharp increase in NPK fertilizer prices? What alternatives are you using?',
      isHot: true
    },
    {
      id: 4,
      title: 'Tractor maintenance tips for monsoon season',
      author: 'MachineGuru',
      category: 'equipment',
      replies: 6,
      upvotes: 22,
      lastPost: '1 day ago',
      content: 'Sharing some essential maintenance tips to keep your tractors running smoothly during monsoon.',
      isHot: false
    },
    {
      id: 5,
      title: 'Organic pesticide recipes that actually work',
      author: 'OrganicFarmer_Priya',
      category: 'organic-farming',
      replies: 25,
      upvotes: 42,
      lastPost: '1 day ago',
      content: 'After years of experimentation, here are my top 5 homemade organic pesticide recipes.',
      isHot: true
    }
  ];

  const topContributors = [
    { name: 'Farmer_Raj', posts: 156, reputation: 2340, avatar: '👨‍🌾' },
    { name: 'GreenThumb_Singh', posts: 134, reputation: 2180, avatar: '🧑‍🌾' },
    { name: 'OrganicFarmer_Priya', posts: 128, reputation: 2050, avatar: '👩‍🌾' },
    { name: 'CottonKing', posts: 98, reputation: 1890, avatar: '👨‍🌾' },
    { name: 'MachineGuru', posts: 87, reputation: 1756, avatar: '🔧' }
  ];

  const filteredPosts = forumPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-wheat-50 to-forest-50 font-montserrat">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
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
              <a href="/community" className="text-forest-800 font-semibold border-b-2 border-forest-600">Community</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-forest-600 to-forest-700">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Farmer community"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Farmer Community</h1>
          <p className="text-xl text-wheat-100 max-w-3xl mx-auto">
            Connect, share knowledge, and learn with fellow farmers from around the region.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-forest-700">
                  <Search className="h-5 w-5" />
                  Search Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Search discussions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-forest-200 focus:ring-forest-500"
                />
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-forest-700">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'ghost'}
                  className={`w-full justify-start ${selectedCategory === 'all' ? 'bg-forest-600 hover:bg-forest-700' : ''}`}
                  onClick={() => setSelectedCategory('all')}
                >
                  All Topics
                </Button>
                {forumCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'ghost'}
                    className={`w-full justify-between ${selectedCategory === category.id ? 'bg-forest-600 hover:bg-forest-700' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="flex items-center gap-2">
                      <span>{category.icon}</span>
                      {category.name}
                    </span>
                    <Badge variant="secondary" className="text-xs">{category.posts}</Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-forest-700">
                  <Trophy className="h-5 w-5" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {topContributors.map((contributor, index) => (
                  <div key={contributor.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-forest-50">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{contributor.avatar}</span>
                      <div className="flex-1">
                        <div className="font-medium text-forest-800">{contributor.name}</div>
                        <div className="text-xs text-forest-600">{contributor.posts} posts • {contributor.reputation} rep</div>
                      </div>
                    </div>
                    {index < 3 && (
                      <Badge className={`text-xs ${
                        index === 0 ? 'bg-yellow-100 text-yellow-800' :
                        index === 1 ? 'bg-gray-100 text-gray-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        #{index + 1}
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Create Post Button */}
            <div className="mb-6">
              <Button className="bg-forest-600 hover:bg-forest-700">
                <MessageSquare className="h-4 w-4 mr-2" />
                Start New Discussion
              </Button>
            </div>

            {/* Forum Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-forest-800 hover:text-forest-600 cursor-pointer">
                            {post.title}
                          </h3>
                          {post.isHot && (
                            <Badge className="bg-red-100 text-red-800 text-xs">🔥 Hot</Badge>
                          )}
                        </div>
                        <p className="text-forest-600 mb-3 line-clamp-2">{post.content}</p>
                        <div className="flex items-center gap-4 text-sm text-forest-500">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            {post.replies} replies
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.lastPost}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-2 ml-4">
                        <Button variant="ghost" size="sm" className="flex flex-col h-auto p-2">
                          <ThumbsUp className="h-4 w-4" />
                          <span className="text-xs">{post.upvotes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="flex flex-col h-auto p-2">
                          <ThumbsDown className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" className="border-forest-300 text-forest-700 hover:bg-forest-50">
                Load More Discussions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
