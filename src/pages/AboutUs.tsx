
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, Target, Award, ArrowLeft } from 'lucide-react';

const AboutUs = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={true} username="User" />
      
      {/* Hero Section */}
      <section className="py-16 px-4 blue-purple-gradient">
        <div className="container mx-auto max-w-5xl text-center">
          <Button
            variant="outline"
            className="mb-8 text-white border-white hover:bg-white/20 absolute left-6 top-24"
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
          <h2 className="text-3xl font-bold mb-8 text-indigo-700 text-center">Our Story</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-4 text-gray-700">
                GyanMarg began as a <span className="font-semibold text-purple-700">college field project</span> with a vision to make quality education accessible to underprivileged students. What started as an academic initiative soon evolved into a <span className="font-semibold text-purple-700">mission-driven platform</span> aimed at bridging the socio-economic education gap by connecting students with volunteers, donors, and NGOs.
              </p>
              <p className="text-lg mb-4 text-gray-700">
                Our dedicated team—<span className="font-semibold text-indigo-600">Vidisha Kataria, Ishjyot Kaur, Bhoomi Chabaria, and Prachi Lund</span>—collaborated to design a structured, user-friendly platform that facilitates <span className="font-semibold text-indigo-600">volunteer teaching, resource donations, and digital learning opportunities</span>. With a strong commitment to social impact, we strive to empower students by providing them with the tools and resources they need to succeed.
              </p>
              <p className="text-lg text-gray-700">
                At GyanMarg, we believe that <span className="font-semibold text-purple-700">education is the key to a better future</span>, and through technology and community-driven efforts, we are working towards creating an inclusive, equitable learning environment for all.
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
            <div className="bg-indigo-500 rounded-lg p-8 shadow-lg hover:shadow-xl transition text-white">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p>
                To bridge the educational gap by connecting passionate volunteers with students who need additional support, 
                ensuring quality education is accessible to all regardless of socioeconomic status or geographic location.
              </p>
              
              <div className="mt-8 flex justify-center">
                <div className="bg-white p-3 rounded-full">
                  <Target className="h-12 w-12 text-indigo-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-purple-600 rounded-lg p-8 shadow-lg hover:shadow-xl transition text-white">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p>
                A world where every student has access to quality education and personalized support, 
                empowering them to reach their full potential and create positive change in their communities.
              </p>
              
              <div className="mt-8 flex justify-center">
                <div className="bg-white p-3 rounded-full">
                  <GraduationCap className="h-12 w-12 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-700">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition border border-indigo-100">
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Heart className="h-8 w-8 text-indigo-600" />
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
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Excellence</h3>
              <p className="text-gray-600 text-center">
                We strive for the highest standards in our teaching methods and educational resources.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition border border-indigo-100">
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Award className="h-8 w-8 text-indigo-600" />
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
      
      {/* CTA Section */}
      <section className="py-16 px-4 blue-purple-gradient text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg mb-8">
            Be part of our journey to transform education and empower the next generation
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-6"
              onClick={() => navigate('/volunteer')}
            >
              Become a Volunteer
            </Button>
            <Button 
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-6"
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
