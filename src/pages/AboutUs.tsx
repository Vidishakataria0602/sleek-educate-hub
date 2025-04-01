
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Users, BookOpen, GraduationCap, Heart, Target, Award, ArrowLeft } from 'lucide-react';

const AboutUs = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={true} username="User" />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto max-w-5xl text-center">
          <Button
            variant="outline"
            className="mb-8 text-white border-white hover:bg-white/20"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About GyanMarg
          </h1>
          <p className="text-lg mb-6 text-gray-100 max-w-2xl mx-auto">
            Bridging educational gaps through dedicated volunteers and innovative teaching methods
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-purple-700 text-center">Our Story</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-4 text-gray-700">
                GyanMarg was founded in 2018 by a group of passionate educators who saw the increasing 
                educational disparities among students across India. What began as a small initiative with 
                just 5 volunteers in Mumbai has now grown into a nationwide movement with over 500 dedicated 
                teachers and mentors.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Our name, "GyanMarg" (meaning "Path of Knowledge" in Sanskrit), reflects our commitment to 
                creating accessible educational pathways for every student, regardless of their background 
                or financial circumstances.
              </p>
              <p className="text-lg text-gray-700">
                Today, we work with schools, community centers, and online platforms to connect volunteer 
                teachers with students who need additional academic support, creating a more equitable 
                educational landscape for all.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/b9adb92b-96cf-4756-b590-3bb4abe409fb.png" 
                alt="Education Tree" 
                className="rounded-lg shadow-xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-yellow-400 rounded-lg p-8 shadow-lg hover:shadow-xl transition">
              <h2 className="text-2xl font-bold mb-4 text-purple-800">Our Mission</h2>
              <p className="text-purple-900">
                To bridge the educational gap by connecting passionate volunteers with students who need additional support, 
                ensuring quality education is accessible to all regardless of socioeconomic status or geographic location.
              </p>
              
              <div className="mt-8 flex justify-center">
                <div className="bg-white p-3 rounded-full">
                  <Target className="h-12 w-12 text-purple-700" />
                </div>
              </div>
            </div>
            
            <div className="bg-purple-600 rounded-lg p-8 shadow-lg hover:shadow-xl transition">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
              <p className="text-white">
                A world where every student has access to quality education and personalized support, 
                empowering them to reach their full potential and create positive change in their communities.
              </p>
              
              <div className="mt-8 flex justify-center">
                <div className="bg-white p-3 rounded-full">
                  <GraduationCap className="h-12 w-12 text-purple-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition border border-purple-100">
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
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition border border-purple-100">
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
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition border border-purple-100">
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
      
      {/* Impact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">Our Impact</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-700">
            Since our inception, we've made significant strides in democratizing quality education
            across India.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition border border-purple-100">
              <h3 className="text-3xl font-bold text-gyanmarg-purple mb-2">500+</h3>
              <p className="text-gray-600">Volunteer Teachers</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition border border-purple-100">
              <h3 className="text-3xl font-bold text-gyanmarg-purple mb-2">10,000+</h3>
              <p className="text-gray-600">Students Helped</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition border border-purple-100">
              <h3 className="text-3xl font-bold text-gyanmarg-purple mb-2">50,000+</h3>
              <p className="text-gray-600">Teaching Hours</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition border border-purple-100">
              <h3 className="text-3xl font-bold text-gyanmarg-purple mb-2">100+</h3>
              <p className="text-gray-600">Partner Schools</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
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
