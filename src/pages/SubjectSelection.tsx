
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, BookOpen, FileText, History, Globe, Laptop, Download } from 'lucide-react';

const SubjectSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the board type and class from location state
  const boardType = location.state?.board || 'CBSE';
  const classNumber = location.state?.class || 8;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={true} username="Sarah" />
      
      <div className="flex-grow bg-purple-50 py-8">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-purple-700 mb-2">
              Available Books for {boardType}, Standard {classNumber}th
            </h1>
            <p className="text-center text-gray-600 mb-6">
              Access and download your curriculum materials
            </p>
            
            {/* Search Bar */}
            <div className="mb-8">
              <Input 
                placeholder="Search by title, author, or subject..." 
                className="bg-emerald-50 border-emerald-200 focus:border-emerald-300"
              />
            </div>
            
            {/* Books List */}
            <div className="space-y-4">
              {/* Mathematics Book */}
              <div className="flex items-center border border-gray-100 rounded-lg p-4 hover:bg-purple-50 transition">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Calculator className="h-8 w-8 text-purple-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-purple-800">Mathematics Fundamentals</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>By: Sarah Johnson</span>
                    <span className="mx-2">•</span>
                    <span className="text-purple-700">Mathematics</span>
                  </div>
                </div>
                <div className="flex flex-col items-end mr-4">
                  <span className="text-xs text-gray-500">210 pages</span>
                  <span className="text-xs text-gray-500">12.5 MB</span>
                </div>
                <Button className="flex-shrink-0 bg-orange-500 hover:bg-orange-600">
                  <Download className="h-4 w-4 mr-1" /> Download Now
                </Button>
              </div>
              
              {/* Science Book */}
              <div className="flex items-center border border-gray-100 rounded-lg p-4 hover:bg-purple-50 transition">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <BookOpen className="h-8 w-8 text-purple-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-purple-800">Science - A Comprehensive Guide</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>By: Prof. Michael Chen</span>
                    <span className="mx-2">•</span>
                    <span className="text-purple-700">Science</span>
                  </div>
                </div>
                <div className="flex flex-col items-end mr-4">
                  <span className="text-xs text-gray-500">350 pages</span>
                  <span className="text-xs text-gray-500">15.2 MB</span>
                </div>
                <Button className="flex-shrink-0 bg-orange-500 hover:bg-orange-600">
                  <Download className="h-4 w-4 mr-1" /> Download Now
                </Button>
              </div>
              
              {/* English Book */}
              <div className="flex items-center border border-gray-100 rounded-lg p-4 hover:bg-purple-50 transition">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <FileText className="h-8 w-8 text-purple-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-purple-800">English Literature & Grammar</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>By: Dr. Emily Williams</span>
                    <span className="mx-2">•</span>
                    <span className="text-purple-700">English</span>
                  </div>
                </div>
                <div className="flex flex-col items-end mr-4">
                  <span className="text-xs text-gray-500">250 pages</span>
                  <span className="text-xs text-gray-500">10.8 MB</span>
                </div>
                <Button className="flex-shrink-0 bg-orange-500 hover:bg-orange-600">
                  <Download className="h-4 w-4 mr-1" /> Download Now
                </Button>
              </div>
              
              {/* History Book */}
              <div className="flex items-center border border-gray-100 rounded-lg p-4 hover:bg-purple-50 transition">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <History className="h-8 w-8 text-purple-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-purple-800">History Through Ages</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>By: Prof. Robert Brown</span>
                    <span className="mx-2">•</span>
                    <span className="text-purple-700">Social Studies</span>
                  </div>
                </div>
                <div className="flex flex-col items-end mr-4">
                  <span className="text-xs text-gray-500">290 pages</span>
                  <span className="text-xs text-gray-500">14.2 MB</span>
                </div>
                <Button className="flex-shrink-0 bg-orange-500 hover:bg-orange-600">
                  <Download className="h-4 w-4 mr-1" /> Download Now
                </Button>
              </div>
              
              {/* Geography Book */}
              <div className="flex items-center border border-gray-100 rounded-lg p-4 hover:bg-purple-50 transition">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Globe className="h-8 w-8 text-purple-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-purple-800">Geography - Our World</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>By: Dr. Lisa Anderson</span>
                    <span className="mx-2">•</span>
                    <span className="text-purple-700">Social Studies</span>
                  </div>
                </div>
                <div className="flex flex-col items-end mr-4">
                  <span className="text-xs text-gray-500">245 pages</span>
                  <span className="text-xs text-gray-500">17.8 MB</span>
                </div>
                <Button className="flex-shrink-0 bg-orange-500 hover:bg-orange-600">
                  <Download className="h-4 w-4 mr-1" /> Download Now
                </Button>
              </div>
              
              {/* Computer Science Book */}
              <div className="flex items-center border border-gray-100 rounded-lg p-4 hover:bg-purple-50 transition">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Laptop className="h-8 w-8 text-purple-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-purple-800">Computer Science Basics</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>By: Prof. David Miller</span>
                    <span className="mx-2">•</span>
                    <span className="text-purple-700">Computer Science</span>
                  </div>
                </div>
                <div className="flex flex-col items-end mr-4">
                  <span className="text-xs text-gray-500">180 pages</span>
                  <span className="text-xs text-gray-500">25 MB</span>
                </div>
                <Button className="flex-shrink-0 bg-orange-500 hover:bg-orange-600">
                  <Download className="h-4 w-4 mr-1" /> Download Now
                </Button>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between items-center">
              <Button
                variant="outline"
                className="px-6 text-emerald-600 border-emerald-300"
                onClick={() => navigate('/class-selection')}
              >
                Back to Class Selection
              </Button>
              
              <span className="text-sm text-gray-500">6 books available</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SubjectSelection;
