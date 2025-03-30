
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const RegistrationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-600 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-emerald-400" />
          </div>
          
          <h1 className="text-3xl font-bold text-yellow-500 mb-1">Welcome to GyanMarg!</h1>
          <p className="text-purple-800 font-semibold mb-1">Sarah</p>
          <p className="text-gray-700 mb-8">
            Your volunteer registration was successful
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">What Happens Next?</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-yellow-400 rounded-full p-2 mr-3 flex items-center justify-center">
                  <span className="font-bold text-yellow-800">1</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">Verification Email</h3>
                  <p className="text-sm text-gray-600">Check your inbox for verification and next steps</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-orange-400 rounded-full p-2 mr-3 flex items-center justify-center">
                  <span className="font-bold text-orange-800">2</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">Profile Setup</h3>
                  <p className="text-sm text-gray-600">Complete your teaching profile and preferences</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-400 rounded-full p-2 mr-3 flex items-center justify-center">
                  <span className="font-bold text-purple-800">3</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">Start Teaching</h3>
                  <p className="text-sm text-gray-600">Browse available sessions and start making an impact</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Registration Details</h2>
            
            <div className="space-y-4 text-left">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email:</h3>
                <p className="text-gray-800">sarah@example.com</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Subjects:</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Mathematics</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Science</Badge>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Availability:</h3>
                <p className="text-gray-800">Weekday Evenings</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <Button 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white" 
              onClick={() => navigate('/dashboard')}
            >
              Go to Dashboard
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full border-emerald-500 text-emerald-600 hover:bg-emerald-50"
              onClick={() => navigate('/')}
            >
              Return to Homepage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
