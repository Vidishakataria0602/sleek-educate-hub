
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, PieChart, Users } from 'lucide-react';

const DonationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-600 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-emerald-400" />
          </div>
          
          <h1 className="text-3xl font-bold text-purple-700 mb-1">Thank You!</h1>
          <p className="text-gray-700 mb-6">
            Your donation of $50 has been received.<br />
            Your generosity will help transform student lives through education.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">What Happens Next?</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-yellow-400 rounded-full p-2 mr-3">
                  <Mail className="h-5 w-5 text-yellow-800" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">Confirmation Email</h3>
                  <p className="text-sm text-gray-600">You'll receive a detailed receipt in your inbox shortly</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-orange-400 rounded-full p-2 mr-3">
                  <PieChart className="h-5 w-5 text-orange-800" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">Impact Sharing</h3>
                  <p className="text-sm text-gray-600">We'll send you a periodic email about how your donation is making a difference</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-400 rounded-full p-2 mr-3">
                  <Users className="h-5 w-5 text-purple-800" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">Join Our Community</h3>
                  <p className="text-sm text-gray-600">Connect with other supporters and see the impact we're making together</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <Button 
              className="w-full bg-purple-700 hover:bg-purple-800 text-white" 
              onClick={() => navigate('/')}
            >
              Return to Homepage
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50"
            >
              View Your Donation History
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-gray-600">
            Need help? <a href="#" className="text-purple-600 hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationSuccess;
