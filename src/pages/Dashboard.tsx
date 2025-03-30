
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Award, Users, Clock, Book } from 'lucide-react';

interface User {
  username: string;
  fullName?: string;
  email: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = sessionStorage.getItem('user');
    if (!storedUser) {
      navigate('/signin');
      return;
    }
    
    setUser(JSON.parse(storedUser));
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated username={user.username} />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gyanmarg-gold animate-fade-in">
            Welcome Back, {user.username}!
          </h1>
          <p className="text-xl text-center mb-8 animate-fade-in">
            Continue making a difference in education
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in">
            <Button 
              className="bg-gyanmarg-gold text-gyanmarg-purple hover:bg-opacity-90 text-lg py-6 px-8"
              onClick={() => navigate('/new-session')}
            >
              Resume Teaching
            </Button>
            <Button 
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gyanmarg-purple text-lg py-6 px-8"
              onClick={() => navigate('/schedule')}
            >
              View Schedule
            </Button>
          </div>
        </div>
      </section>
      
      {/* Quick Actions Section */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold mb-6 text-gyanmarg-purple">Quick Actions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="hover:shadow-lg transition">
              <CardContent className="flex flex-col items-center p-6">
                <Calendar className="h-12 w-12 text-gyanmarg-purple mb-4" />
                <Button 
                  className="bg-gyanmarg-purple w-full"
                  onClick={() => navigate('/new-session')}
                >
                  Create New Session
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition">
              <CardContent className="flex flex-col items-center p-6">
                <Award className="h-12 w-12 text-gyanmarg-purple mb-4" />
                <Button 
                  className="bg-gyanmarg-purple w-full"
                  onClick={() => navigate('/achievements')}
                >
                  View Achievements
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition">
              <CardContent className="flex flex-col items-center p-6">
                <Users className="h-12 w-12 text-gyanmarg-purple mb-4" />
                <Button 
                  className="bg-gyanmarg-purple w-full"
                  onClick={() => navigate('/students')}
                >
                  Student Profiles
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Impact Dashboard */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold mb-6 text-gyanmarg-purple">Your Impact Dashboard</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="hover:shadow-lg transition bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-gyanmarg-purple text-center">100+</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Students Taught
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-gyanmarg-purple text-center">1000+</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Teaching Hours
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-gyanmarg-purple text-center">4.9</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Average Rating
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-gyanmarg-purple text-center">12</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Subjects Taught
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Upcoming Sessions */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold mb-6 text-gyanmarg-purple">Upcoming Sessions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Session Card 1 */}
            <Card className="border border-gray-200 hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-mint-card flex items-center justify-center mr-4">
                    <span className="font-bold text-gyanmarg-purple">M</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Mathematics</h3>
                    <p className="text-sm text-gray-600">Grade 8</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4 text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Today, 2:00 PM - 3:30 PM</span>
                </div>
                
                <Button 
                  className="w-full bg-gyanmarg-purple"
                  onClick={() => navigate('/session/1')}
                >
                  Join Session
                </Button>
              </CardContent>
            </Card>
            
            {/* Session Card 2 */}
            <Card className="border border-gray-200 hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-skyblue-card flex items-center justify-center mr-4">
                    <span className="font-bold text-gyanmarg-purple">S</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Science</h3>
                    <p className="text-sm text-gray-600">Grade 9</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4 text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Tomorrow, 2:00 PM - 4:30 PM</span>
                </div>
                
                <Button 
                  className="w-full bg-gyanmarg-purple"
                  onClick={() => navigate('/session/2')}
                >
                  Join Session
                </Button>
              </CardContent>
            </Card>
            
            {/* Session Card 3 */}
            <Card className="border border-gray-200 hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-coral-card flex items-center justify-center mr-4">
                    <span className="font-bold text-gyanmarg-purple">E</span>
                  </div>
                  <div>
                    <h3 className="font-bold">English</h3>
                    <p className="text-sm text-gray-600">Grade 7</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4 text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Thursday, 1:00 PM - 2:30 PM</span>
                </div>
                
                <Button 
                  className="w-full bg-gyanmarg-purple"
                  onClick={() => navigate('/session/3')}
                >
                  Join Session
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
