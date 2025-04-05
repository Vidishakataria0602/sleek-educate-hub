import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const RegistrationSuccess = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null); // Removed type annotation

  useEffect(() => {
    const storedData = sessionStorage.getItem('volunteerData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  // Map availability codes to readable text
  const getAvailabilityText = (code) => { // Removed type annotation
    const map = {
      'weekday_mornings': 'Weekday Mornings',
      'weekday_afternoons': 'Weekday Afternoons',
      'weekday_evenings': 'Weekday Evenings', 
      'weekend_mornings': 'Weekend Mornings',
      'weekend_afternoons': 'Weekend Afternoons',
      'weekend_evenings': 'Weekend Evenings',
      'flexible': 'Flexible Schedule'
    };
    return map[code] || code;
  };

  // Extract subject skills from the skills text
  const getSkills = () => {
    if (!userData?.skills) return [];
    
    // This is a simplified approach - in a real app, you'd use a more robust method
    const commonSubjects = [
      'Mathematics', 'Science', 'English', 'History', 
      'Geography', 'Physics', 'Chemistry', 'Biology'
    ];
    
    return commonSubjects.filter(subject => 
      userData.skills.toLowerCase().includes(subject.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-600 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-emerald-400" />
          </div>
          
          <h1 className="text-3xl font-bold text-yellow-500 mb-1">Welcome to GyanMarg!</h1>
          <p className="text-purple-800 font-semibold mb-1">{userData?.fullName || 'Volunteer'}</p>
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
                <p className="text-gray-800">{userData?.email || 'email@example.com'}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Subjects:</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {getSkills().length > 0 ? (
                    getSkills().map((skill, index) => (
                      <Badge key={index} className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                        {skill}
                      </Badge>
                    ))
                  ) : (
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                      General Teaching
                    </Badge>
                  )}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Availability:</h3>
                <p className="text-gray-800">
                  {userData ? getAvailabilityText(userData.availability) : 'Flexible Schedule'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <Button 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-colors" 
              onClick={() => navigate('/dashboard')}
            >
              Go to Dashboard
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition-colors"
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