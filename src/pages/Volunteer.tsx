
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Volunteer = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    skills: '',
    availability: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvailabilityChange = (value: string) => {
    setFormData(prev => ({ ...prev, availability: value }));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our newsletter updates soon.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data for registration success page
    sessionStorage.setItem('volunteerData', JSON.stringify(formData));
    navigate('/registration-success');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Be the Change.<br />Volunteer Today!
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our community of passionate educators making a difference in students' lives
          </p>
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 rounded-full text-lg transition-colors"
            onClick={() => {
              const formSection = document.getElementById('join-mission');
              formSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Volunteering
          </Button>
        </div>
      </section>
      
      {/* Why Volunteer Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Why Volunteer with Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-yellow-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <img src="https://www.shutterstock.com/image-photo/impact-word-made-building-blocks-260nw-650985967.jpg" alt="Impact" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Make an Impact</h3>
              <p className="text-center text-gray-800">
                Transform lives through education and create lasting change in your community
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-purple-500 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <img src="https://www.cypherlearning.com/hs-fs/hubfs/blog/business/posts/2022/11/MATRIX-blog-01_4%20Skills%20development%20activities%20for%20real-world%20knowledge%20building-HEADER.png?width=1036&height=500&name=MATRIX-blog-01_4%20Skills%20development%20activities%20for%20real-world%20knowledge%20building-HEADER.png" alt="Skills" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Build Skills</h3>
              <p className="text-center text-white">
                Develop leadership, communication, and teaching abilities
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-purple-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <img src="https://miro.medium.com/v2/resize:fit:1400/1*M-b093jQIpmapIIaxH7N7g.jpeg" alt="Community" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Join Community</h3>
              <p className="text-center text-white">
                Connect with like-minded individuals dedicated to education
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Our Mission Section */}
      <section id="join-mission" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-lg">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Join Our Mission</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
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
            
            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
              <Textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="What skills can you share?"
                required
              />
            </div>
            
            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
              <Select onValueChange={handleAvailabilityChange} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekday_mornings">Weekday Mornings</SelectItem>
                  <SelectItem value="weekday_afternoons">Weekday Afternoons</SelectItem>
                  <SelectItem value="weekday_evenings">Weekday Evenings</SelectItem>
                  <SelectItem value="weekend_mornings">Weekend Mornings</SelectItem>
                  <SelectItem value="weekend_afternoons">Weekend Afternoons</SelectItem>
                  <SelectItem value="weekend_evenings">Weekend Evenings</SelectItem>
                  <SelectItem value="flexible">Flexible Schedule</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 transition-colors"
            >
              Start Making a Difference
            </Button>
            
            <div className="flex justify-center">
              <Button 
                type="button" 
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-50"
                onClick={() => navigate('/dashboard')}
              >
                Back to Dashboard
              </Button>
            </div>
          </form>
        </div>
      </section>
      
      <Footer onSubscribe={handleSubscribe} />
    </div>
  );
};

export default Volunteer;
