
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Eye } from 'lucide-react';

const ClassSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  
  // Get the board type from location state
  const boardType = location.state?.board || 'CBSE';

  const handleClassSelect = (classNumber: number) => {
    setSelectedClass(classNumber);
  };

  const handleNext = () => {
    if (selectedClass) {
      navigate('/subject-selection', { 
        state: { 
          board: boardType,
          class: selectedClass 
        } 
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={true}  />
      
      <div className="flex-grow flex items-center justify-center bg-purple-600 p-6">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-2xl font-bold text-center text-yellow-500 mb-2">
              Select Your Class/Standard
            </h1>
            <p className="text-center text-gray-600 mb-6">
              Choose your current academic year to personalize your learning experience
            </p>
            
            {/* Progress Dots */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-purple-700"></div>
                <div className="h-2 w-2 rounded-full bg-purple-700"></div>
                <div className="h-2 w-2 rounded-full bg-gray-300"></div>
              </div>
            </div>
            
            {/* Class Selection Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((classNumber) => {
    const getOrdinal = (num) => {
      if (num === 1) return "1st";
      if (num === 2) return "2nd";
      if (num === 3) return "3rd";
      return `${num}th`;
    };

    return (
      <button
        key={classNumber}
        onClick={() => handleClassSelect(classNumber)}
        className={`w-full aspect-square rounded-full flex flex-col items-center justify-center transition
          ${selectedClass === classNumber 
            ? 'bg-purple-700 text-white' 
            : 'bg-emerald-200 text-purple-900 hover:bg-emerald-300'}`}
      >
        <div className="mb-1">
          <Eye className={`h-5 w-5 ${selectedClass === classNumber ? 'text-white' : 'text-purple-700'}`} />
        </div>
        <span className="font-bold">{getOrdinal(classNumber)}</span>
        <span className="text-xs">Standard</span>
      </button>
    );
  })}
</div>


            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
              <div className="bg-purple-700 h-2 rounded-full" style={{ width: '66%' }}></div>
            </div>
            
            {/* Step Labels */}
            <div className="flex justify-between text-xs text-gray-500 mb-8">
              <span>Board Selection</span>
              <span className="font-medium text-purple-700">Class Selection</span>
              <span>Subject Selection</span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                className="px-6 text-purple-700 border-purple-300"
                onClick={() => navigate('/resources')}
              >
                Back
              </Button>
              <Button
                className={`px-6 ${selectedClass ? 'bg-purple-700 hover:bg-purple-800' : 'bg-purple-400 cursor-not-allowed'}`}
                onClick={handleNext}
                disabled={!selectedClass}
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

export default ClassSelection;
