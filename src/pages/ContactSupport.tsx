
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Send, MessageCircle, Phone, Mail, HelpCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactSupport = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Support request submitted",
        description: "Our team will get back to you within 24 hours.",
      });
      
      setName('');
      setEmail('');
      setCategory('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={true} username="User" />
      
      <div className="flex-grow py-8 px-4 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto max-w-6xl">
          <Button
            variant="outline"
            className="mb-6 bg-white hover:bg-gray-100"
            onClick={() => navigate('/dashboard')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gyanmarg-purple flex items-center">
                    <MessageCircle className="mr-2 h-6 w-6" />
                    Contact Support
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and our team will get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="category" className="text-sm font-medium">
                        Help Category
                      </label>
                      <Select value={category} onValueChange={setCategory} required>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Technical Issues</SelectItem>
                          <SelectItem value="account">Account Management</SelectItem>
                          <SelectItem value="billing">Donation & Billing</SelectItem>
                          <SelectItem value="volunteer">Volunteer Queries</SelectItem>
                          <SelectItem value="content">Educational Content</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please describe your issue or question in detail..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      <p>Our support team typically responds within 24 hours during business days.</p>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="ml-auto bg-gyanmarg-purple hover:bg-purple-800 text-white"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Submit Request
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div>
              <Card className="shadow-lg bg-gradient-to-br from-purple-600 to-purple-800 text-white">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Get in Touch</CardTitle>
                  <CardDescription className="text-purple-200">
                    Multiple ways to reach our support team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white rounded-full p-2 mr-3">
                      <Mail className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-purple-100">Email Us</h3>
                      <p className="text-white">support@gyanmarg.org</p>
                      <p className="text-purple-200 text-sm">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white rounded-full p-2 mr-3">
                      <Phone className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-purple-100">Call Us</h3>
                      <p className="text-white">+91 (800) 123-4567</p>
                      <p className="text-purple-200 text-sm">
                        Mon-Fri, 9:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white rounded-full p-2 mr-3">
                      <HelpCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-purple-100">Help Center</h3>
                      <p className="text-white">Visit our Knowledge Base</p>
                      <p className="text-purple-200 text-sm">
                        Find answers to common questions
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-purple-700 rounded-lg p-4 mt-6">
                    <h3 className="font-semibold mb-2 text-purple-100">Urgent Issues?</h3>
                    <p className="text-sm text-purple-200 mb-4">
                      For urgent matters requiring immediate attention, please call our dedicated hotline.
                    </p>
                    <Button className="w-full bg-white text-purple-700 hover:bg-gray-100">
                      Priority Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactSupport;
