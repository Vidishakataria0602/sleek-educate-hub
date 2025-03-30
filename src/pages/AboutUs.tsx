
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Users, BookOpen, GraduationCap, Heart, Target, Award } from 'lucide-react';

const AboutUs = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={true} username="Sarah" />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-emerald-400">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-800">
            About GyanMarg
          </h1>
          <p className="text-lg mb-6 text-gray-800 max-w-2xl mx-auto">
            Empowering students through accessible education and dedicated volunteers
          </p>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-yellow-400 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-purple-800">Our Mission</h2>
              <p className="text-purple-900">
                To bridge the educational gap by connecting passionate volunteers with students who need additional support, 
                ensuring quality education is accessible to all.
              </p>
            </div>
            
            <div className="bg-purple-600 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
              <p className="text-white">
                A world where every student has access to quality education, personalized support, regardless of their 
                socioeconomic backgrounds.
              </p>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <img 
              src="/lovable-uploads/b9adb92b-96cf-4756-b590-3bb4abe409fb.png" 
              alt="Education Tree" 
              className="rounded-lg shadow-xl max-w-md w-full"
            />
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Heart className="h-8 w-8 text-purple-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Compassion</h3>
              <p className="text-gray-600 text-center">
                We approach education with empathy and understanding, recognizing each student's unique journey.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Target className="h-8 w-8 text-purple-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Excellence</h3>
              <p className="text-gray-600 text-center">
                We strive for the highest standards in our teaching methods and educational resources.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Award className="h-8 w-8 text-purple-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Inclusivity</h3>
              <p className="text-gray-600 text-center">
                We believe in equal educational opportunities for all, regardless of background or circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Anjali Sharma</h3>
                <p className="text-purple-700 mb-3">Founder & Director</p>
                <p className="text-gray-600">
                  Former educator with 15+ years of experience in educational policy and innovation.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Rajiv Patel</h3>
                <p className="text-purple-700 mb-3">Head of Volunteers</p>
                <p className="text-gray-600">
                  Passionate about creating meaningful volunteer experiences and community engagement.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Meera Singh</h3>
                <p className="text-purple-700 mb-3">Curriculum Developer</p>
                <p className="text-gray-600">
                  Expert in designing engaging, accessible teaching materials for diverse learning needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-purple-700 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg mb-8">
            Be part of our journey to transform education and empower the next generation
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6"
              onClick={() => navigate('/volunteer')}
            >
              Become a Volunteer
            </Button>
            <Button 
              className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 px-8 py-6"
              onClick={() => navigate('/donate')}
            >
              Support Our Cause
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
