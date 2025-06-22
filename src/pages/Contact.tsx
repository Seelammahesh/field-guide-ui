
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, Headphones } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our experts directly",
      value: "(555) 123-FARM",
      availability: "Mon-Sat, 9 AM - 6 PM"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your queries anytime",
      value: "hello@farmhub.com",
      availability: "Response within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      value: "Available on website",
      availability: "Mon-Fri, 10 AM - 5 PM"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our main office location",
      value: "123 Agriculture St, Farm City",
      availability: "By appointment only"
    }
  ];

  const faqs = [
    {
      question: "How do I place an order for products?",
      answer: "You can browse our products page, add items to cart, and checkout. We accept various payment methods and offer secure transactions."
    },
    {
      question: "What areas do you serve for field services?",
      answer: "We provide services across all major agricultural districts. Contact us to check availability in your specific location."
    },
    {
      question: "Do you offer organic farming consultation?",
      answer: "Yes, we have certified organic farming experts who can guide you through the transition process and certification requirements."
    },
    {
      question: "What is your return policy for products?",
      answer: "We offer a 7-day return policy for unopened products. For agricultural chemicals, please check specific return conditions."
    },
    {
      question: "How can I track my service appointment?",
      answer: "After booking a service, you'll receive a confirmation email with tracking details and our expert's contact information."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-wheat-50 to-forest-50">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-forest-700">🌾 FarmHub</Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Home</Link>
              <Link to="/dashboard" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Dashboard</Link>
              <Link to="/products" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Products</Link>
              <Link to="/services" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Services</Link>
              <Link to="/community" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Community</Link>
              <Link to="/advisor" className="text-forest-600 hover:text-forest-800 font-medium transition-colors">Advisors</Link>
              <Link to="/contact" className="text-forest-800 font-semibold border-b-2 border-forest-600">Contact</Link>
            </div>
          </div>
        </div>
      </nav> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-forest-800 mb-4">Get in Touch</h1>
          <p className="text-xl text-forest-600">We're here to help you with all your farming needs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-forest-800">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-forest-700">Your Name</label>
                      <Input
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-forest-700">Email Address</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block text-forest-700">Subject</label>
                    <Input
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block text-forest-700">Message</label>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-forest-600 hover:bg-forest-700 text-lg py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-forest-100 p-3 rounded-lg">
                      <method.icon className="h-6 w-6 text-forest-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-forest-800 mb-1">{method.title}</h3>
                      <p className="text-sm text-forest-600 mb-2">{method.description}</p>
                      <p className="font-medium text-forest-700">{method.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{method.availability}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-forest-600">Find quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-forest-800">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-forest-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-forest-50 rounded-lg p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-forest-800 mb-2">Need Immediate Help?</h2>
            <p className="text-forest-600">Explore these quick options</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild variant="outline" className="h-20 flex-col">
              <Link to="/services">
                <Headphones className="h-6 w-6 mb-2" />
                Book a Service
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex-col">
              <Link to="/community">
                <Users className="h-6 w-6 mb-2" />
                Join Community
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex-col">
              <Link to="/advisor">
                <MessageCircle className="h-6 w-6 mb-2" />
                Expert Advice
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
