
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { BookOpen, BookOpen as BookIcon } from 'lucide-react';

const Resources = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={true} username="Sarah" />
      
      <div className="flex-grow flex items-center justify-center bg-purple-600 p-6">
        <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-2xl font-bold text-center text-yellow-500 mb-6">
              Select Your Educational Board
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Choose your board to get personalized learning resources
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* CBSE Board */}
              <button
                onClick={() => navigate('/class-selection', { state: { board: 'CBSE' } })}
                className="bg-orange-500 text-white rounded-lg p-6 hover:bg-orange-600 transition flex flex-col items-center"
              >
                <div className="bg-white rounded-full p-3 mb-3">
                  <BookIcon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-1">CBSE Board</h3>
                <p className="text-sm text-orange-100 text-center">Central Board of Secondary Education</p>
              </button>
              
              {/* State Board */}
              <button
                onClick={() => navigate('/class-selection', { state: { board: 'Maharashtra' } })}
                className="bg-yellow-400 text-purple-900 rounded-lg p-6 hover:bg-yellow-500 transition flex flex-col items-center"
              >
                <div className="bg-white rounded-full p-3 mb-3">
                  <BookOpen className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="font-bold text-lg mb-1">State Board</h3>
                <p className="text-sm text-purple-900 text-center">State Board of Secondary Education</p>
              </button>
            </div>

            <div className="mt-8 flex justify-between">
              <Button
                variant="outline"
                className="px-6 text-purple-700 border-purple-300"
                onClick={() => navigate('/dashboard')}
              >
                Back
              </Button>
              <Button
                disabled
                className="px-6 bg-purple-700 opacity-50 cursor-not-allowed"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Resources;
