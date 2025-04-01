
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Users, FileText } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our newsletter updates soon.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gyanmarg-gold">
              Empower Young Minds with GyanMarg
            </h1>
            <p className="text-lg mb-6">
              Join our thriving education movement to create a brighter future for all
            </p>
            <div className="flex space-x-4">
              <Button 
                className="bg-gyanmarg-gold text-gyanmarg-purple hover:bg-yellow-400 px-8 py-6 rounded-full font-semibold text-lg transition-colors duration-300"
                onClick={() => navigate('/signup')}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white/20 hover:text-yellow-300 px-8 py-6 rounded-full font-semibold text-lg transition-colors duration-300"
                onClick={() => navigate('/about')}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&h=450" 
              alt="Students Learning"
              className="rounded-lg shadow-xl animate-fade-in"
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gyanmarg-purple">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition mint-card animate-fade-in">
              <div className="circle-icon bg-white text-gyanmarg-purple">
                <Users size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Volunteer</h3>
              <p className="text-center text-gray-700">
                Share your knowledge and make a difference in students' lives
              </p>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=300&h=200" 
                alt="Volunteer Teaching"
                className="rounded-lg mt-4 mx-auto"
              />
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition skyblue-card animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="circle-icon bg-white text-gyanmarg-purple">
                <BookOpen size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Donate</h3>
              <p className="text-center text-gray-700">
                Support our mission and empower education with resources
              </p>
              <img 
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=300&h=200" 
                alt="Supporting Education"
                className="rounded-lg mt-4 mx-auto"
              />
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition coral-card animate-fade-in" style={{animationDelay: "0.4s"}}>
              <div className="circle-icon bg-white text-gyanmarg-purple">
                <FileText size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Access Resources</h3>
              <p className="text-center text-gray-700">
                Utilize our comprehensive educational resources anytime
              </p>
              <img 
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=300&h=200" 
                alt="Study Resources"
                className="rounded-lg mt-4 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gyanmarg-purple">Our Impact</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-gyanmarg-purple mb-2">500+</h3>
              <p className="text-gray-600">Volunteers</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-gyanmarg-purple mb-2">10,000+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-gyanmarg-purple mb-2">50,000+</h3>
              <p className="text-gray-600">Hours Taught</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-gyanmarg-purple mb-2">100+</h3>
              <p className="text-gray-600">Partner Schools</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer onSubscribe={handleSubscribe} />
    </div>
  );
};

export default Index;
