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
import { MdMenu } from "react-icons/md";
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

const Dashboard = () => {
  const userName = "Sateesh";
  const navigate = useNavigate();

  const sidebarItems = [
    { title: "Profile", icon: User, url: "/profile" },
    { title: "Orders", icon: Package, url: "/orders" },
    { title: "Bookings", icon: Calendar, url: "/bookings" },
    { title: "Community", icon: Users, url: "/community" },
    { title: "Crop Prices", icon: TrendingUp, url: "/crop-prices" },
    { title: "Settings", icon: Settings, url: "/settings" },
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

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-wheat-50 to-forest-50">
        <Sidebar className="border-r border-forest-200">
          <SidebarHeader className="p-6 border-b border-forest-200">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-forest-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌾</span>
              </div>
              <div>
                <h2 className="font-bold text-forest-800">FarmHub</h2>
                <p className="text-sm text-forest-600">Dashboard</p>
              </div>
            </Link>
          </SidebarHeader>

          <SidebarContent className="p-4">
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-forest-100 rounded-lg transition-colors"
                  >
                    <Link to={item.url} className="flex items-center gap-3 p-3">
                      <item.icon className="w-5 h-5 text-forest-600" />
                      <span className="text-forest-700 font-medium">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1">
          <header className="sticky top-0 z-10 bg-white border-b border-forest-200 p-4">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-forest-600 hover:bg-forest-100" />
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-forest-800">
                  Welcome back, {userName}! 👋
                </h1>
                <p className="text-forest-600">
                  Here's what's happening on your farm today
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" asChild className="border-forest-300 text-forest-700 hover:bg-forest-50">
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Home
                  </Link>
                </Button>

                <div className="relative inline-block">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-forest-300 text-forest-700 hover:bg-forest-50"
                    onClick={() => navigate("/notification")}
                  >
                    <Bell className="w-4 h-4 mr-2" />
                    Notifications
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

          <main className="p-6 space-y-6">
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="bg-forest-600 hover:bg-forest-700 text-white p-6 h-auto justify-start" asChild>
                <Link to="/services">
                  <Plus className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">Book a Service</div>
                    <div className="text-sm opacity-90">
                      Schedule farm services
                    </div>
                  </div>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-forest-300 text-forest-700 hover:bg-forest-50 p-6 h-auto justify-start"
                asChild
              >
                <Link to="/products">
                  <Eye className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">View Products</div>
                    <div className="text-sm opacity-70">Browse our catalog</div>
                  </div>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-forest-300 text-forest-700 hover:bg-forest-50 p-6 h-auto justify-start"
                asChild
              >
                <Link to="/crop-prices">
                  <BarChart3 className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">Check Crop Prices</div>
                    <div className="text-sm opacity-70">Market updates</div>
                  </div>
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content Area */}
              <div className="lg:col-span-2 space-y-6">
                {/* Recent Activity */}
                <Card className="border-forest-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-forest-800 flex items-center gap-2">
                      <Bell className="w-5 h-5" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentActivity.map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-forest-50 transition-colors"
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              activity.type === "order"
                                ? "bg-forest-500"
                                : activity.type === "booking"
                                ? "bg-soil-500"
                                : activity.type === "community"
                                ? "bg-wheat-500"
                                : "bg-forest-300"
                            }`}
                          />
                          <div className="flex-1">
                            <p className="text-forest-800 font-medium">
                              {activity.action}
                            </p>
                            <p className="text-forest-600 text-sm">
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
                  <CardHeader>
                    <CardTitle className="text-forest-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Package className="w-5 h-5" />
                        Recent Orders
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/orders">View All</Link>
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-forest-200">
                            <th className="text-left p-3 font-semibold text-forest-700">
                              Product
                            </th>
                            <th className="text-left p-3 font-semibold text-forest-700">
                              Status
                            </th>
                            <th className="text-left p-3 font-semibold text-forest-700">
                              Delivery
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentOrders.map((order, index) => (
                            <tr
                              key={index}
                              className="border-b border-forest-100 hover:bg-forest-50"
                            >
                              <td className="p-3 text-forest-800">
                                {order.product}
                              </td>
                              <td className="p-3">
                                <Badge
                                  variant={
                                    order.status === "Delivered"
                                      ? "default"
                                      : order.status === "In Transit"
                                      ? "secondary"
                                      : "outline"
                                  }
                                  className={
                                    order.status === "Delivered"
                                      ? "bg-forest-100 text-forest-700"
                                      : order.status === "In Transit"
                                      ? "bg-soil-100 text-soil-700"
                                      : "border-wheat-300 text-wheat-700"
                                  }
                                >
                                  {order.status}
                                </Badge>
                              </td>
                              <td className="p-3 text-forest-600">
                                {order.deliveryDate}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                {/* Ongoing Services */}
                <Card className="border-forest-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-forest-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Service History
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/bookings">View All</Link>
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {ongoingServices.map((service, index) => (
                        <div key={index} className="p-4 border border-forest-200 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium text-forest-800">{service.service}</h4>
                            <span className="text-sm text-forest-600">{service.status}</span>
                          </div>
                          <Progress value={service.progress} className="h-2" />
                          <p className="text-sm text-forest-600 mt-1">{service.progress}% Complete</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Content */}
              <div className="space-y-6">
                {/* Quick Stats */}
                <Card className="border-forest-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-forest-800">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-forest-600">Active Orders</span>
                        <span className="font-semibold text-forest-800">3</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-forest-600">Pending Services</span>
                        <span className="font-semibold text-forest-800">2</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-forest-600">Farm Size</span>
                        <span className="font-semibold text-forest-800">25 acres</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card className="border-forest-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-forest-800">Recommended for You</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recommendations.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 border border-forest-200 rounded-lg hover:bg-forest-50 transition-colors">
                          <span className="text-2xl">{item.image}</span>
                          <div className="flex-1">
                            <h4 className="font-medium text-forest-800">{item.name}</h4>
                            <p className="text-forest-600">{item.price}</p>
                          </div>
                          <Button size="sm" variant="outline">Add</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
