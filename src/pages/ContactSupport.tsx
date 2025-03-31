
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, HeadphonesIcon, MessageCircle, Mail, Phone } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactSupport = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support Request Received",
      description: "We'll get back to you as soon as possible!",
    });
    // In a real app, submit the form data to a server
    setTimeout(() => navigate('/dashboard'), 2000);
  };
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our newsletter updates soon.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={true} username="User" />
      
      <div className="flex-grow py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center mb-8">
            <Button
              variant="outline"
              className="mr-4 text-purple-700 border-purple-300 hover:bg-purple-50"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-purple-700">Contact Support</h1>
              <p className="text-gray-600">We're here to help with any questions or issues</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-purple-700 mb-6 flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name*</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
                    <Select onValueChange={handleCategoryChange} required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select issue category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="donation">Donation Related</SelectItem>
                        <SelectItem value="account">Account Related</SelectItem>
                        <SelectItem value="technical">Technical Issue</SelectItem>
                        <SelectItem value="volunteer">Volunteer Related</SelectItem>
                        <SelectItem value="resources">Learning Resources</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject*</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your issue or question in detail"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 transition-colors"
                  >
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-6 flex items-center">
                  <HeadphonesIcon className="mr-2 h-5 w-5" />
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <Mail className="h-5 w-5 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">support@gyanmarg.org</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <Phone className="h-5 w-5 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM IST</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-700 p-6 rounded-lg shadow-md text-white">
                <h2 className="text-xl font-semibold mb-4">FAQs</h2>
                <ul className="space-y-3">
                  <li className="hover:text-yellow-300 transition-colors cursor-pointer">
                    How do I update my profile?
                  </li>
                  <li className="hover:text-yellow-300 transition-colors cursor-pointer">
                    Can I cancel my donation?
                  </li>
                  <li className="hover:text-yellow-300 transition-colors cursor-pointer">
                    How to join as a volunteer?
                  </li>
                  <li className="hover:text-yellow-300 transition-colors cursor-pointer">
                    Trouble accessing resources?
                  </li>
                </ul>
                <Button 
                  className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-purple-900 transition-colors"
                  onClick={() => navigate('/faq')}
                >
                  View All FAQs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer onSubscribe={handleSubscribe} />
    </div>
  );
};

export default ContactSupport;
