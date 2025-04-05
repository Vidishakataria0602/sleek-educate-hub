import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Edit, Check, User, AlertTriangle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ChangePasswordDialog from "@/components/ChangePasswordDialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const UserProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    occupation: '',
    bio: '',
    subjects: ['Mathematics', 'Science', 'English'],
    availability: 'Weekday evenings, Weekend afternoons',
    experience: ''
  });
  
  useEffect(() => {
    // Load user data from sessionStorage
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setProfile(prev => ({
        ...prev,
        name: userData.username || userData.fullName || 'User',
        email: userData.email || 'user@example.com',
        phone: userData.phone || '+1 (555) 123-4567',
        location: userData.location || 'Mumbai, India',
        occupation: userData.occupation || 'Teacher',
        bio: userData.bio || 'Passionate about making education accessible to all. I specialize in Mathematics and Science for middle and high school students.',
        experience: userData.experience || '2+ years of teaching experience'
      }));
    }
  }, []);
  
  const handleChange = (e) => { // Removed type annotation
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSave = () => {
    setIsEditing(false);
    
    // Save updated user profile to sessionStorage
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      const updatedUser = {
        ...userData,
        username: profile.name,
        email: profile.email,
        phone: profile.phone,
        location: profile.location,
        occupation: profile.occupation,
        bio: profile.bio,
        experience: profile.experience
      };
      sessionStorage.setItem('user', JSON.stringify(updatedUser));
    }
    
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
      duration: 3000,
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar isAuthenticated={true} username={profile.name.split(' ')[0]} />
      
      <div className="container mx-auto py-8 px-4">
        <Button
          variant="ghost"
          className="mb-4 text-purple-700"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Sidebar */}
          <div className="md:col-span-1">
            <Card className="shadow-md">
              <CardHeader className="text-center bg-gradient-to-br from-blue-600 to-purple-700 rounded-t-lg">
                <div className="mx-auto bg-white rounded-full w-24 h-24 flex items-center justify-center mb-2">
                  <User className="h-12 w-12 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-white">{profile.name}</CardTitle>
                <CardDescription className="text-purple-100 font-medium">
                  Volunteer Teacher
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Email</h4>
                    <p className="text-gray-900">{profile.email}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                    <p className="text-gray-900">{profile.phone}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Location</h4>
                    <p className="text-gray-900">{profile.location}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Teaching Subjects</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {profile.subjects.map(subject => (
                        <Badge key={subject} className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Availability</h4>
                    <p className="text-gray-900">{profile.availability}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => setIsEditing(!isEditing)}
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white"
                >
                  {isEditing ? (
                    <>
                      <Check className="mr-2 h-4 w-4" /> Done Editing
                    </>
                  ) : (
                    <>
                      <Edit className="mr-2 h-4 w-4" /> Edit Profile
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-2">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-700">Profile Details</CardTitle>
                <CardDescription>
                  {isEditing ? 'Edit your personal information below' : 'Your personal information and volunteer details'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {isEditing ? (
                  /* Edit Mode */
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <Input
                          name="name"
                          value={profile.name}
                          onChange={handleChange}
                          className="bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <Input
                          name="email"
                          value={profile.email}
                          onChange={handleChange}
                          className="bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <Input
                          name="phone"
                          value={profile.phone}
                          onChange={handleChange}
                          className="bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <Input
                          name="location"
                          value={profile.location}
                          onChange={handleChange}
                          className="bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
                        <Input
                          name="occupation"
                          value={profile.occupation}
                          onChange={handleChange}
                          className="bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                        <Input
                          name="experience"
                          value={profile.experience}
                          onChange={handleChange}
                          className="bg-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                      <Textarea
                        name="bio"
                        value={profile.bio}
                        onChange={handleChange}
                        className="h-32 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                      <Textarea
                        name="availability"
                        value={profile.availability}
                        onChange={handleChange}
                        className="bg-white"
                      />
                    </div>
                  </div>
                ) : (
                  /* View Mode */
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-purple-800 mb-2">Personal Information</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Full Name</h4>
                            <p className="text-gray-900">{profile.name}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Occupation</h4>
                            <p className="text-gray-900">{profile.occupation}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Bio</h4>
                            <p className="text-gray-700">{profile.bio}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-purple-800 mb-2">Teaching Details</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Experience</h4>
                            <p className="text-gray-900">{profile.experience}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">Teaching Stats</h4>
                            <div className="grid grid-cols-2 gap-4 mt-2">
                              <div className="bg-purple-50 rounded-lg p-3">
                                <p className="text-purple-700 font-semibold text-lg">28</p>
                                <p className="text-gray-600 text-sm">Sessions Completed</p>
                              </div>
                              <div className="bg-purple-50 rounded-lg p-3">
                                <p className="text-purple-700 font-semibold text-lg">45</p>
                                <p className="text-gray-600 text-sm">Students Helped</p>
                              </div>
                              <div className="bg-purple-50 rounded-lg p-3">
                                <p className="text-purple-700 font-semibold text-lg">150</p>
                                <p className="text-gray-600 text-sm">Teaching Hours</p>
                              </div>
                              <div className="bg-purple-50 rounded-lg p-3">
                                <p className="text-purple-700 font-semibold text-lg">4.9</p>
                                <p className="text-gray-600 text-sm">Average Rating</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-purple-800 mb-2">Upcoming Sessions</h3>
                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                        <p className="text-yellow-800">Check your scheduled sessions on the dashboard.</p>
                        <Button variant="link" className="text-purple-700 p-0 mt-1" onClick={() => navigate('/dashboard')}>
                          View your schedule
                        </Button>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-purple-800 mb-2">Account Settings</h3>
                      <div className="space-x-3">
                        <ChangePasswordDialog />
                        
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                              Delete Account
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle className="flex items-center">
                                <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                                Delete Account
                              </AlertDialogTitle>
                              <AlertDialogDescription className="text-gray-700">
                                This action cannot be undone. This will permanently delete your account and remove all your data from our servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction 
                                className="bg-red-600 hover:bg-red-700 text-white"
                                onClick={() => {
                                  // Clear user data from session storage and redirect to home
                                  sessionStorage.removeItem('user');
                                  navigate('/');
                                  toast({
                                    title: "Account deleted",
                                    description: "Your account has been successfully deleted.",
                                  });
                                }}
                              >
                                Delete Account
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              {isEditing && (
                <CardFooter>
                  <div className="w-full flex justify-end">
                    <Button 
                      onClick={handleSave}
                      className="bg-purple-700 hover:bg-purple-800 text-white"
                    >
                      <Save className="mr-2 h-4 w-4" /> Save Changes
                    </Button>
                  </div>
                </CardFooter>
              )}
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UserProfile;