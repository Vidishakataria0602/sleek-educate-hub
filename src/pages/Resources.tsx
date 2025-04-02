
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, ArrowLeft } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Resources = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);

  const handleBoardSelect = (board: string) => {
    setSelectedBoard(board);
  };

  const handleNextClick = () => {
    if (selectedBoard) {
      navigate('/class-selection', { state: { board: selectedBoard } });
    } else {
      toast({
        title: "Selection Required",
        description: "Please select an educational board to continue",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={true} />
      
      <div className="flex-grow flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 p-6">
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
                onClick={() => handleBoardSelect('CBSE')}
                className={`${
                  selectedBoard === 'CBSE' 
                    ? 'ring-4 ring-orange-300 bg-orange-600' 
                    : 'bg-orange-500 hover:bg-orange-600'
                } text-white rounded-lg p-6 transition flex flex-col items-center`}
              >
                <div className="bg-white rounded-full p-3 mb-3">
                  <GraduationCap className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-1">CBSE Board</h3>
                <p className="text-sm text-orange-100 text-center">Central Board of Secondary Education</p>
              </button>
              
              {/* State Board */}
              <button
                onClick={() => handleBoardSelect('Maharashtra')}
                className={`${
                  selectedBoard === 'Maharashtra' 
                    ? 'ring-4 ring-yellow-300 bg-yellow-500' 
                    : 'bg-yellow-400 hover:bg-yellow-500'
                } text-purple-900 rounded-lg p-6 transition flex flex-col items-center`}
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
                className="px-6 text-purple-700 border-purple-300 hover:bg-purple-50"
                onClick={() => navigate('/dashboard')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button
                className={`px-6 bg-purple-700 hover:bg-purple-800 transition-colors ${!selectedBoard ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleNextClick}
                disabled={!selectedBoard}
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
