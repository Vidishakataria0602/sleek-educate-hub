
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Award, Users, Clock, Book, AlertCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface User {
  username: string;
  fullName?: string;
  email: string;
}

interface Session {
  id: number;
  subject: string;
  grade: string;
  time: string;
  icon: string;
  title?: string;
  duration?: string;
  description?: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [sessions, setSessions] = useState<Session[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = sessionStorage.getItem('user');
    if (!storedUser) {
      navigate('/signin');
      return;
    }
    
    setUser(JSON.parse(storedUser));

    // Get sessions from localStorage
    const storedSessions = localStorage.getItem('sessions');
    if (storedSessions) {
      setSessions(JSON.parse(storedSessions));
    }
  }, [navigate]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our newsletter updates soon.",
    });
  };

  const handleViewSchedule = () => {
    // Scroll to upcoming sessions
    const upcomingSessions = document.getElementById('upcoming-sessions');
    if (upcomingSessions) {
      upcomingSessions.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!user) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated username={user.username} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gyanmarg-gold animate-fade-in">
            Welcome Back, {user.username}!
          </h1>
          <p className="text-xl text-center mb-8 animate-fade-in">
            Continue making a difference in education
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in">
            <Button 
              className="bg-gyanmarg-gold text-gyanmarg-purple hover:bg-yellow-500 text-lg py-6 px-8 transition-colors"
              onClick={() => navigate('/new-session')}
            >
              Resume Teaching
            </Button>
            <Button 
              variant="outline"
              className="text-white border-white hover:bg-white/20 hover:text-yellow-300 text-lg py-6 px-8 transition-colors"
              onClick={handleViewSchedule}
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
            <Card className="hover:shadow-lg transition border border-purple-100">
              <CardContent className="flex flex-col items-center p-6">
                <Calendar className="h-12 w-12 text-gyanmarg-purple mb-4" />
                <Button 
                  className="bg-gyanmarg-purple hover:bg-purple-800 w-full transition-colors text-white"
                  onClick={() => navigate('/new-session')}
                >
                  Create New Session
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition border border-purple-100">
              <CardContent className="flex flex-col items-center p-6">
                <Award className="h-12 w-12 text-gyanmarg-purple mb-4" />
                <Button 
                  className="bg-gyanmarg-purple hover:bg-purple-800 w-full transition-colors text-white"
                  onClick={() => navigate('/achievements')}
                >
                  View Achievements
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition border border-purple-100">
              <CardContent className="flex flex-col items-center p-6">
                <Users className="h-12 w-12 text-gyanmarg-purple mb-4" />
                <Button 
                  className="bg-gyanmarg-purple hover:bg-purple-800 w-full transition-colors text-white"
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
            <Card className="hover:shadow-lg transition bg-white border border-purple-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-gyanmarg-purple text-center">100+</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Students Taught
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition bg-white border border-purple-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-gyanmarg-purple text-center">1000+</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Teaching Hours
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition bg-white border border-purple-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-gyanmarg-purple text-center">4.9</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Average Rating
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition bg-white border border-purple-100">
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
      <section id="upcoming-sessions" className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold mb-6 text-gyanmarg-purple">Upcoming Sessions</h2>
          
          {sessions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sessions.map(session => (
                <Card key={session.id} className="border border-gray-200 hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-full ${
                        session.subject === "Mathematics" ? "bg-blue-100" :
                        session.subject === "Science" ? "bg-green-100" :
                        session.subject === "English" ? "bg-yellow-100" :
                        session.subject === "History" ? "bg-red-100" :
                        session.subject === "Geography" ? "bg-purple-100" :
                        "bg-gray-100"
                      } flex items-center justify-center mr-4`}>
                        <span className="font-bold text-gyanmarg-purple">{session.subject[0]}</span>
                      </div>
                      <div>
                        <h3 className="font-bold">{session.title || session.subject}</h3>
                        <p className="text-sm text-gray-600">Grade {session.grade}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4 text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{session.time}</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-gyanmarg-purple hover:bg-purple-800 transition-colors text-white"
                      onClick={() => navigate(`/session/${session.id}`)}
                    >
                      Join Session
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
              <AlertCircle className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2">No Upcoming Sessions</h3>
              <p className="text-gray-600 mb-6">You haven't created any teaching sessions yet.</p>
              <Button 
                className="bg-gyanmarg-purple hover:bg-purple-800 transition-colors text-white"
                onClick={() => navigate('/new-session')}
              >
                Create Your First Session
              </Button>
            </div>
          )}
        </div>
      </section>
      
      <Footer onSubscribe={handleSubscribe} />
    </div>
  );
};

export default Dashboard;
