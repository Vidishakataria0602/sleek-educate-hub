
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Star, Clock, BookOpen, Users, Target, Medal, Trophy } from 'lucide-react';

const Achievements = () => {
  const navigate = useNavigate();

  // Mock achievements data
  const achievements = [
    { id: 1, title: "First Session", description: "Conducted your first teaching session", completed: true, icon: <BookOpen className="h-8 w-8 text-gyanmarg-gold" /> },
    { id: 2, title: "Rising Star", description: "Reached a 4.5+ rating from students", completed: true, icon: <Star className="h-8 w-8 text-gyanmarg-gold" /> },
    { id: 3, title: "Dedicated Teacher", description: "Completed 50 hours of teaching", completed: true, icon: <Clock className="h-8 w-8 text-gyanmarg-gold" /> },
    { id: 4, title: "Subject Expert", description: "Taught 5 different subjects", completed: true, icon: <BookOpen className="h-8 w-8 text-gyanmarg-gold" /> },
    { id: 5, title: "Mentor", description: "Taught 100+ students", completed: true, icon: <Users className="h-8 w-8 text-gyanmarg-gold" /> },
    { id: 6, title: "High Achiever", description: "Maintained perfect attendance for 3 months", completed: false, progress: 80, icon: <Target className="h-8 w-8 text-gyanmarg-purple" /> },
    { id: 7, title: "Community Champion", description: "Contributed to 10 educational events", completed: false, progress: 60, icon: <Medal className="h-8 w-8 text-gyanmarg-purple" /> },
    { id: 8, title: "Master Educator", description: "Completed 500 hours of teaching", completed: false, progress: 50, icon: <Trophy className="h-8 w-8 text-gyanmarg-purple" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated username="Teacher" />
      
      <div className="flex-grow py-8 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gyanmarg-purple">Your Achievements</h1>
              <p className="text-gray-600 mt-1">Track your progress as an educator</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <Award className="h-10 w-10 text-gyanmarg-purple mr-3" />
              <div>
                <p className="text-sm text-gray-600">Achievement Rank</p>
                <p className="text-xl font-bold text-gyanmarg-purple">Gold Educator</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className={`hover:shadow-lg transition ${achievement.completed ? 'border-gyanmarg-gold' : ''}`}>
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <div className="mr-4 p-1">
                    {achievement.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{achievement.title}</CardTitle>
                    <CardDescription>{achievement.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  {achievement.completed ? (
                    <div className="flex items-center text-gyanmarg-gold">
                      <Award className="h-5 w-5 mr-2" />
                      <span className="font-semibold">Completed!</span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-semibold">{achievement.progress}%</span>
                      </div>
                      <Progress value={achievement.progress} className="h-2" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              className="bg-gyanmarg-purple"
              onClick={() => navigate('/dashboard')}
            >
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Achievements;
