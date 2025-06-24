import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  User,
  Package,
  Calendar,
  Users,
  TrendingUp,
  Settings,
  Bell,
  Plus,
  Eye,
  BarChart3,
  Home,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from '@/hooks/use-mobile';
import Profile from "./Profile";
import Orders from "./Orders";
import Bookings from "./Bookings";
import Community from "./Community";
import CropPricesPage from "./CropPricesPage";
import SettingsPage from "./Settings";

const Dashboard = () => {
  const userName = "Sateesh";
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");
  const isMobile = useIsMobile();

  const sidebarItems = [
    { title: "Dashboard", key: "dashboard", icon: Home },
    { title: "Profile", key: "profile", icon: User },
    { title: "Orders", key: "orders", icon: Package },
    { title: "Bookings", key: "bookings", icon: Calendar },
    { title: "Community", key: "community", icon: Users },
    { title: "Crop Prices", key: "crop-prices", icon: TrendingUp },
    { title: "Settings", key: "settings", icon: Settings },
  ];

  const recentActivity = [
    {
      action: "Ordered Fertilizer NPK 20-20-20",
      time: "2 hours ago",
      type: "order",
    },
    { action: "Booked Harvesting Service", time: "1 day ago", type: "booking" },
    { action: "Checked Wheat Prices", time: "2 days ago", type: "view" },
    {
      action: "Updated Profile Information",
      time: "3 days ago",
      type: "profile",
    },
    { action: "Ordered Pesticide Spray", time: "4 days ago", type: "order" },
    {
      action: "Joined Community Discussion",
      time: "5 days ago",
      type: "community",
    },
    { action: "Booked Soil Testing", time: "1 week ago", type: "booking" },
  ];

  const recentOrders = [
    {
      product: "NPK Fertilizer 50kg",
      status: "Delivered",
      deliveryDate: "Dec 18, 2024",
    },
    {
      product: "Pesticide Spray 5L",
      status: "In Transit",
      deliveryDate: "Dec 22, 2024",
    },
    {
      product: "Organic Manure 100kg",
      status: "Processing",
      deliveryDate: "Dec 25, 2024",
    },
    {
      product: "Seeds - Wheat Variety",
      status: "Confirmed",
      deliveryDate: "Dec 28, 2024",
    },
  ];

  const ongoingServices = [
    { service: "Field Harvesting", progress: 60, status: "In Progress" },
    { service: "Soil Testing", progress: 25, status: "Started" },
    { service: "Irrigation Setup", progress: 90, status: "Almost Done" },
  ];

  const recommendations = [
    { name: "Premium Seeds", price: "$45", image: "🌱" },
    { name: "Organic Fertilizer", price: "$32", image: "🌿" },
    { name: "Pest Control Kit", price: "$28", image: "🐛" },
  ];

  const count: number = 2;

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <Profile />;
      case "orders":
        return <Orders />;
      case "bookings":
        return <Bookings />;
      case "community":
        return <Community />;
      case "crop-prices":
        return <CropPricesPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return (
          <div className="space-y-4 sm:space-y-6">
            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <Button className="bg-forest-600 hover:bg-forest-700 text-white p-3 sm:p-4 lg:p-6 h-auto justify-start text-left" asChild>
                <Link to="/services">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-semibold text-sm sm:text-base truncate">Book a Service</div>
                    <div className="text-xs sm:text-sm opacity-90 truncate">
                      Schedule farm services
                    </div>
                  </div>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-forest-300 text-forest-700 hover:bg-forest-50 p-3 sm:p-4 lg:p-6 h-auto justify-start text-left"
                asChild
              >
                <Link to="/products">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-semibold text-sm sm:text-base truncate">View Products</div>
                    <div className="text-xs sm:text-sm opacity-70 truncate">Browse our catalog</div>
                  </div>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-forest-300 text-forest-700 hover:bg-forest-50 p-3 sm:p-4 lg:p-6 h-auto justify-start text-left sm:col-span-2 lg:col-span-1"
                onClick={() => setActiveSection("crop-prices")}
              >
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="font-semibold text-sm sm:text-base truncate">Check Crop Prices</div>
                  <div className="text-xs sm:text-sm opacity-70 truncate">Market updates</div>
                </div>
              </Button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
              {/* Main Content Area */}
              <div className="xl:col-span-2 space-y-4 sm:space-y-6">
                {/* Recent Activity */}
                <Card className="border-forest-200 shadow-sm">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="text-forest-800 flex items-center gap-2 text-base sm:text-lg">
                      <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-3 sm:px-6">
                    <div className="space-y-2 sm:space-y-3">
                      {recentActivity.slice(0, isMobile ? 4 : 6).map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-forest-50 transition-colors"
                        >
                          <div
                            className={`w-2 h-2 rounded-full flex-shrink-0 ${
                              activity.type === "order"
                                ? "bg-forest-500"
                                : activity.type === "booking"
                                ? "bg-soil-500"
                                : activity.type === "community"
                                ? "bg-wheat-500"
                                : "bg-forest-300"
                            }`}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-forest-800 font-medium text-sm sm:text-base line-clamp-2">
                              {activity.action}
                            </p>
                            <p className="text-forest-600 text-xs sm:text-sm">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Orders */}
                <Card className="border-forest-200 shadow-sm">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="text-forest-800 flex items-center justify-between text-base sm:text-lg">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 sm:w-5 sm:h-5" />
                        Recent Orders
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setActiveSection("orders")}
                        className="text-xs sm:text-sm px-2 sm:px-3"
                      >
                        View All
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-3 sm:px-6">
                    <div className="space-y-3">
                      {recentOrders.slice(0, isMobile ? 3 : 4).map((order, index) => (
                        <div key={index} className="p-3 border border-forest-200 rounded-lg">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                            <div className="min-w-0 flex-1">
                              <h4 className="font-medium text-forest-800 text-sm sm:text-base truncate">{order.product}</h4>
                              <p className="text-forest-600 text-xs sm:text-sm">{order.deliveryDate}</p>
                            </div>
                            <Badge
                              variant={
                                order.status === "Delivered"
                                  ? "default"
                                  : order.status === "In Transit"
                                  ? "secondary"
                                  : "outline"
                              }
                              className={`text-xs shrink-0 ${
                                order.status === "Delivered"
                                  ? "bg-forest-100 text-forest-700"
                                  : order.status === "In Transit"
                                  ? "bg-soil-100 text-soil-700"
                                  : "border-wheat-300 text-wheat-700"
                              }`}
                            >
                              {order.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Ongoing Services */}
                <Card className="border-forest-200 shadow-sm">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="text-forest-800 flex items-center justify-between text-base sm:text-lg">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                        Service Progress
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setActiveSection("bookings")}
                        className="text-xs sm:text-sm px-2 sm:px-3"
                      >
                        View All
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-3 sm:px-6">
                    <div className="space-y-3 sm:space-y-4">
                      {ongoingServices.map((service, index) => (
                        <div key={index} className="p-3 sm:p-4 border border-forest-200 rounded-lg">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                            <h4 className="font-medium text-forest-800 text-sm sm:text-base">{service.service}</h4>
                            <span className="text-xs sm:text-sm text-forest-600 self-start sm:self-auto">{service.status}</span>
                          </div>
                          <Progress value={service.progress} className="h-2 mb-1" />
                          <p className="text-xs sm:text-sm text-forest-600">{service.progress}% Complete</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Content */}
              <div className="space-y-4 sm:space-y-6">
                {/* Quick Stats */}
                <Card className="border-forest-200 shadow-sm">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="text-forest-800 text-base sm:text-lg">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="px-3 sm:px-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-forest-600 text-sm sm:text-base">Active Orders</span>
                        <span className="font-semibold text-forest-800 text-sm sm:text-base">3</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-forest-600 text-sm sm:text-base">Pending Services</span>
                        <span className="font-semibold text-forest-800 text-sm sm:text-base">2</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-forest-600 text-sm sm:text-base">Farm Size</span>
                        <span className="font-semibold text-forest-800 text-sm sm:text-base">25 acres</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card className="border-forest-200 shadow-sm">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="text-forest-800 text-base sm:text-lg">Recommended for You</CardTitle>
                  </CardHeader>
                  <CardContent className="px-3 sm:px-6">
                    <div className="space-y-2 sm:space-y-3">
                      {recommendations.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border border-forest-200 rounded-lg hover:bg-forest-50 transition-colors">
                          <span className="text-lg sm:text-xl">{item.image}</span>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-forest-800 text-sm sm:text-base truncate">{item.name}</h4>
                            <p className="text-forest-600 text-xs sm:text-sm">{item.price}</p>
                          </div>
                          <Button size="sm" variant="outline" className="text-xs sm:text-sm px-2 sm:px-3 shrink-0">Add</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-wheat-50 to-forest-50">
        <Sidebar className="border-r border-forest-200">
          <SidebarHeader className="p-3 sm:p-4 lg:p-6 border-b border-forest-200">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-forest-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm lg:text-lg">🌾</span>
              </div>
              <div>
                <h2 className="font-bold text-forest-800 text-sm sm:text-base">FarmHub</h2>
                <p className="text-xs sm:text-sm text-forest-600">Dashboard</p>
              </div>
            </Link>
          </SidebarHeader>

          <SidebarContent className="p-2 sm:p-3 lg:p-4">
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => setActiveSection(item.key)}
                    className={`hover:bg-forest-100 rounded-lg transition-colors w-full ${
                      activeSection === item.key ? 'bg-forest-100 text-forest-800' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 w-full">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-forest-600 flex-shrink-0" />
                      <span className="text-forest-700 font-medium text-sm sm:text-base truncate">
                        {item.title}
                      </span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1 min-w-0">
          <header className="sticky top-0 z-10 bg-white border-b border-forest-200 p-3 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <SidebarTrigger className="text-forest-600 hover:bg-forest-100" />
              <div className="flex-1 min-w-0">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-forest-800 truncate">
                  Welcome back, {userName}! 👋
                </h1>
                <p className="text-forest-600 text-sm sm:text-base truncate">
                  Here's what's happening on your farm today
                </p>
              </div>

              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <Button variant="outline" size="sm" asChild className="border-forest-300 text-forest-700 hover:bg-forest-50 hidden sm:flex">
                  <Link to="/">
                    <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm">Home</span>
                  </Link>
                </Button>

                <div className="relative inline-block">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-forest-300 text-forest-700 hover:bg-forest-50 p-2 sm:p-3"
                    onClick={() => navigate("/notification")}
                  >
                    <Bell className="w-3 h-3 sm:w-4 sm:h-4" />
                    {!isMobile && <span className="ml-1 sm:ml-2 text-xs sm:text-sm">Notifications</span>}
                  </Button>

                  {count > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full shadow-md">
                      {count > 99 ? "99+" : count}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </header>

          <main className="p-3 sm:p-4 lg:p-6 overflow-y-auto max-h-[calc(100vh-80px)]">
            {renderContent()}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
