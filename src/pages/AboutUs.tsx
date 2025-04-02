
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

const AboutUs = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={true} username="User" />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-5xl text-center relative">
          
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About GyanMarg
          </h1>
          <p className="text-lg mb-6 text-gray-100 max-w-2xl mx-auto">
            Bridging educational gaps through dedicated volunteers and innovative teaching methods
          </p>
        </div>
      </section>
      
      {/* About Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl prose prose-lg">
          <div className="mb-12">
            <p className="text-lg text-gray-700">
              At GyanMarg, we are on a mission to make <strong>quality education accessible</strong> to underprivileged students by bridging the gap between learners, volunteers, and donors through a structured, digital platform. Our goal is to empower students by providing them with the necessary resources and mentorship to thrive academically, regardless of their socio-economic background.
            </p>
            
            <p className="text-lg text-gray-700 mt-4">
              We recognize the challenges in the education sector—students lack access to learning materials, NGOs need dedicated volunteers, and individuals who want to help often struggle to find the right platform. GyanMarg addresses these issues by creating a <strong>seamless, transparent, and impactful ecosystem</strong> that connects all stakeholders in education.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-purple-700">What We Offer</h2>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2"></span>
                <span><strong>For Students:</strong> Access free educational resources and mentorship from volunteer teachers.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2"></span>
                <span><strong>For Volunteers:</strong> Teach and mentor students, making a real impact on their education.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2"></span>
                <span><strong>For Donors:</strong> Contribute books, learning materials, or funds to support education initiatives.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2"></span>
                <span><strong>For NGOs & Community Centers:</strong> Partner with volunteers and donors to enhance learning opportunities.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2"></span>
                <span><strong>Seamless Collaboration:</strong> A digital platform that simplifies participation and contribution.</span>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-purple-300 p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4 text-purple-700">Our Vision</h2>
              <p className="text-gray-700">
                To create an <strong>inclusive and equitable learning ecosystem</strong> where every student, regardless of background, has access to quality education and growth opportunities.
              </p>
            </div>
            
            <div className="bg-blue-300 p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4 text-blue-700">Our Mission</h2>
              <p className="text-gray-700">
                To bridge educational disparities by connecting students, volunteers, and donors through a <strong>technology-driven</strong> platform that fosters learning, collaboration, and long-term impact.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-700">Meet Our Team</h2>
            <p className="text-lg text-gray-700">
              GyanMarg was founded as a <strong>college field project</strong> by a team of passionate individuals dedicated to making a difference in education. <strong>Vidisha Kataria, Ishjyot Kaur, Bhoomi Chabaria, and Prachi Lund</strong> came together with the vision of leveraging technology to <strong>eliminate barriers to learning</strong> and create a <strong>sustainable impact</strong> on underprivileged communities.
            </p>
            
            <p className="text-lg text-gray-700 mt-4">
              We are committed to growing GyanMarg into a leading platform for <strong>educational accessibility and volunteer-driven learning</strong>. Join us in making education a right, not a privilege! 
            </p>
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
