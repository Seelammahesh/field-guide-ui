
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import PlantDiseases from "./pages/PlantDiseases";
import Advisor from "./pages/Advisor";
import AdvisorDetail from "./pages/AdvisorDetail";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Notifications from "./pages/Notifications";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Bookings from "./pages/Bookings";
import CropPricesPage from "./pages/CropPricesPage";
import Settings from "./pages/Settings";
import Payment from "./pages/Payment";
import OrderConfirmation from "./pages/OrderConfirmation";
import WeatherTheme from "./pages/WeatherTheme";
import { WeatherThemeProvider } from "./contexts/WeatherThemeContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <WeatherThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
         <Navbar/>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/weather-theme" element={<WeatherTheme />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/community" element={<Community />} />
            <Route path="/plant-diseases" element={<PlantDiseases />} />
            <Route path="/advisor" element={<Advisor />} />
            <Route path="/advisor/:id" element={<AdvisorDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/notification" element={<Notifications />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/crop-prices" element={<CropPricesPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </WeatherThemeProvider>
  </QueryClientProvider>
);

export default App;
