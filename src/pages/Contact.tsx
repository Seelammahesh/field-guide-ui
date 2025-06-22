
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 98765 43210',
      subDetails: 'Mon-Sat 9AM-6PM'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'support@farmhub.com',
      subDetails: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Farm Street, Agricultural District',
      subDetails: 'Punjab, India 144001'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Saturday',
      subDetails: '9:00 AM - 6:00 PM'
    }
  ];

  const faqs = [
    {
      question: 'How do I book a farming service?',
      answer: 'You can book services through our Services page by selecting the service you need and clicking "Book Now".'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, bank transfers, UPI payments, and all major credit/debit cards.'
    },
    {
      question: 'Do you provide services in rural areas?',
      answer: 'Yes, we provide services across rural and urban farming areas. Check our service areas on the Services page.'
    },
    {
      question: 'How can I track my product orders?',
      answer: 'You can track your orders through your Profile page under the Order History section.'
    }
  ];

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
              <a href="/community" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Community</a>
              <a href="/advisor" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Advisors</a>
              <a href="/contact" className="text-forest-800 font-semibold border-b-2 border-forest-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-forest-600 to-forest-700">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Contact us"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-wheat-100 max-w-3xl mx-auto">
            Have questions about our services or products? We're here to help you grow your farming success.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-forest-700">
                  <MessageSquare className="h-6 w-6" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-forest-700 mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="border-forest-200 focus:ring-forest-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-forest-700 mb-2">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="border-forest-200 focus:ring-forest-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-forest-700 mb-2">Phone Number</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="border-forest-200 focus:ring-forest-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-forest-700 mb-2">Subject *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="border-forest-200 focus:ring-forest-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      className="border-forest-200 focus:ring-forest-500"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-forest-600 hover:bg-forest-700">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-forest-700">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-forest-50 transition-colors">
                      <div className="p-2 bg-forest-100 rounded-lg">
                        <IconComponent className="h-5 w-5 text-forest-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-forest-800">{info.title}</h4>
                        <p className="text-forest-700">{info.details}</p>
                        <p className="text-sm text-forest-500">{info.subDetails}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-forest-700">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-forest-300 text-forest-700 hover:bg-forest-50">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us Now
                </Button>
                <Button variant="outline" className="w-full justify-start border-forest-300 text-forest-700 hover:bg-forest-50">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                <Button variant="outline" className="w-full justify-start border-forest-300 text-forest-700 hover:bg-forest-50">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Live Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-forest-700 text-center">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="p-4 rounded-lg border border-forest-200 hover:border-forest-300 transition-colors">
                    <h4 className="font-semibold text-forest-800 mb-2">{faq.question}</h4>
                    <p className="text-forest-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-forest-700">Find Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-forest-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-forest-400 mx-auto mb-2" />
                  <p className="text-forest-600">Interactive map location</p>
                  <p className="text-sm text-forest-500">(Map integration available with location services)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
