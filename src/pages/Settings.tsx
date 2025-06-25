import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings as SettingsIcon, User, Bell, Shield, Globe, ArrowLeft } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    priceAlerts: true,
    orderUpdates: true,
    serviceReminders: true
  });

  const [preferences, setPreferences] = useState({
    language: 'english',
    currency: 'inr',
    timezone: 'ist',
    units: 'metric'
  });

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  const handlePreferenceChange = (key: string, value: string) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-wheat-50 to-forest-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <Button variant="ghost" asChild className="text-forest-600 hover:text-forest-800">
            <Link to="/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <SettingsIcon className="h-8 w-8 text-forest-600" />
          <h1 className="text-3xl font-bold text-forest-800">Settings</h1>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 bg-muted rounded-lg">
            <TabsTrigger 
              value="profile" 
              className="flex items-center gap-1 px-2 py-2 text-xs sm:text-sm rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              <User className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Profile</span>
              <span className="sm:hidden">User</span>
            </TabsTrigger>
            <TabsTrigger 
              value="notifications"
              className="flex items-center gap-1 px-2 py-2 text-xs sm:text-sm rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              <Bell className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Notifications</span>
              <span className="sm:hidden">Alerts</span>
            </TabsTrigger>
            <TabsTrigger 
              value="preferences"
              className="flex items-center gap-1 px-2 py-2 text-xs sm:text-sm rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Preferences</span>
              <span className="sm:hidden">Prefs</span>
            </TabsTrigger>
            <TabsTrigger 
              value="security"
              className="flex items-center gap-1 px-2 py-2 text-xs sm:text-sm rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Security</span>
              <span className="sm:hidden">Safe</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name</label>
                    <Input defaultValue="Sateesh Kumar" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input defaultValue="sateesh@farmhub.com" type="email" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input defaultValue="+91 98765 43210" type="tel" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Farm Size</label>
                    <Input defaultValue="25 acres" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium mb-2 block">Address</label>
                    <Input defaultValue="Village Greenfield, District Farming, State 12345" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium mb-2 block">Crop Types</label>
                    <Input defaultValue="Wheat, Rice, Sugarcane" />
                  </div>
                </div>
                <Button className="bg-forest-600 hover:bg-forest-700">
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-forest-800">Email Notifications</h4>
                      <p className="text-sm text-forest-600">Receive updates via email</p>
                    </div>
                    <Switch
                      checked={notifications.emailNotifications}
                      onCheckedChange={(value) => handleNotificationChange('emailNotifications', value)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-forest-800">SMS Notifications</h4>
                      <p className="text-sm text-forest-600">Receive updates via SMS</p>
                    </div>
                    <Switch
                      checked={notifications.smsNotifications}
                      onCheckedChange={(value) => handleNotificationChange('smsNotifications', value)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-forest-800">Push Notifications</h4>
                      <p className="text-sm text-forest-600">Receive browser notifications</p>
                    </div>
                    <Switch
                      checked={notifications.pushNotifications}
                      onCheckedChange={(value) => handleNotificationChange('pushNotifications', value)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-forest-800">Price Alerts</h4>
                      <p className="text-sm text-forest-600">Get notified about crop price changes</p>
                    </div>
                    <Switch
                      checked={notifications.priceAlerts}
                      onCheckedChange={(value) => handleNotificationChange('priceAlerts', value)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-forest-800">Order Updates</h4>
                      <p className="text-sm text-forest-600">Notifications about order status</p>
                    </div>
                    <Switch
                      checked={notifications.orderUpdates}
                      onCheckedChange={(value) => handleNotificationChange('orderUpdates', value)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-forest-800">Service Reminders</h4>
                      <p className="text-sm text-forest-600">Reminders for scheduled services</p>
                    </div>
                    <Switch
                      checked={notifications.serviceReminders}
                      onCheckedChange={(value) => handleNotificationChange('serviceReminders', value)}
                    />
                  </div>
                </div>
                
                <Button className="bg-forest-600 hover:bg-forest-700">
                  Save Notification Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences */}
          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  App Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Language</label>
                    <Select value={preferences.language} onValueChange={(value) => handlePreferenceChange('language', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="hindi">Hindi</SelectItem>
                        <SelectItem value="marathi">Marathi</SelectItem>
                        <SelectItem value="tamil">Tamil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Currency</label>
                    <Select value={preferences.currency} onValueChange={(value) => handlePreferenceChange('currency', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inr">Indian Rupee (₹)</SelectItem>
                        <SelectItem value="usd">US Dollar ($)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Timezone</label>
                    <Select value={preferences.timezone} onValueChange={(value) => handlePreferenceChange('timezone', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ist">India Standard Time</SelectItem>
                        <SelectItem value="utc">UTC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Units</label>
                    <Select value={preferences.units} onValueChange={(value) => handlePreferenceChange('units', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="metric">Metric (kg, acres)</SelectItem>
                        <SelectItem value="imperial">Imperial (lb, acres)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button className="bg-forest-600 hover:bg-forest-700">
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-forest-800 mb-4">Change Password</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Current Password</label>
                      <Input type="password" placeholder="Enter current password" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">New Password</label>
                      <Input type="password" placeholder="Enter new password" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Confirm New Password</label>
                      <Input type="password" placeholder="Confirm new password" />
                    </div>
                    <Button className="bg-forest-600 hover:bg-forest-700">
                      Update Password
                    </Button>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="font-medium text-forest-800 mb-4">Two-Factor Authentication</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-forest-600">Add an extra layer of security to your account</p>
                    </div>
                    <Button variant="outline">
                      Enable 2FA
                    </Button>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="font-medium text-forest-800 mb-4">Account Actions</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      Download Account Data
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-red-600 border-red-600 hover:bg-red-50">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
