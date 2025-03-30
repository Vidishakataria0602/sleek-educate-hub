import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, User, BookOpen, History, LineChart, MessageSquare } from 'lucide-react';

// Mock student data
const mockStudents = [
  { 
    id: 1, 
    name: "Aiden Smith", 
    grade: 8, 
    age: 14,
    email: "aiden.smith@example.com",
    avatar: "A",
    subjects: ["Mathematics", "Science"], 
    progress: "Excellent", 
    strengthAreas: ["Problem-solving", "Scientific concepts", "Critical thinking"],
    improvementAreas: ["Written communication", "Test preparation"],
    attendance: "95%",
    notes: "Aiden shows exceptional aptitude in mathematical problem-solving. He grasps new concepts quickly and enjoys challenges.",
    sessions: [
      { id: 101, date: "May 15, 2023", subject: "Mathematics", topic: "Algebraic Equations", duration: "60 min", performance: "Excellent" },
      { id: 102, date: "May 10, 2023", subject: "Science", topic: "Cell Structure", duration: "90 min", performance: "Good" },
      { id: 103, date: "May 3, 2023", subject: "Mathematics", topic: "Geometry Basics", duration: "60 min", performance: "Excellent" },
      { id: 104, date: "Apr 25, 2023", subject: "Science", topic: "States of Matter", duration: "60 min", performance: "Excellent" },
    ]
  },
  { 
    id: 2, 
    name: "Bella Johnson", 
    grade: 9, 
    age: 15,
    email: "bella.johnson@example.com",
    avatar: "B",
    subjects: ["English", "History"], 
    progress: "Good", 
    strengthAreas: ["Creative writing", "Historical analysis", "Research skills"],
    improvementAreas: ["Grammar", "Essay structure", "Time management"],
    attendance: "88%",
    notes: "Bella has strong analytical skills when discussing literary works. She shows creativity in her writing assignments.",
    sessions: [
      { id: 201, date: "May 12, 2023", subject: "English", topic: "Shakespeare Works", duration: "60 min", performance: "Good" },
      { id: 202, date: "May 5, 2023", subject: "History", topic: "World War II", duration: "90 min", performance: "Good" },
      { id: 203, date: "Apr 28, 2023", subject: "English", topic: "Essay Writing", duration: "60 min", performance: "Needs improvement" },
      { id: 204, date: "Apr 21, 2023", subject: "History", topic: "Industrial Revolution", duration: "60 min", performance: "Good" },
    ]
  },
  // ...other students
];

const StudentDetail = () => {
  const { id } = useParams();
  const [student, setStudent] = useState<any>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // In a real app, you would fetch the student data based on the ID
    const studentData = mockStudents.find(s => s.id === Number(id));
    setStudent(studentData);
  }, [id]);

  if (!student) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar isAuthenticated username="Teacher" />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading student profile...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated username="Teacher" />
      
      <div className="flex-grow py-8 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <Button
            variant="ghost"
            className="mb-4 text-gyanmarg-purple hover:text-gyanmarg-gold"
            onClick={() => navigate('/students')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Students
          </Button>
          
          <div className="bg-white rounded-lg shadow-md mb-6 p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="mb-4 md:mb-0 md:mr-6">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                  student.progress === 'Excellent' ? 'bg-gyanmarg-gold text-white' :
                  student.progress === 'Good' ? 'bg-green-500 text-white' :
                  'bg-amber-500 text-white'
                }`}>
                  <span className="text-2xl font-bold">{student.avatar}</span>
                </div>
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-3xl font-bold text-gyanmarg-purple">{student.name}</h1>
                <div className="flex flex-col md:flex-row md:items-center text-gray-600 mt-2 space-y-1 md:space-y-0 md:space-x-4">
                  <span>Grade {student.grade}</span>
                  <span className="hidden md:inline">•</span>
                  <span>Age: {student.age}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{student.email}</span>
                </div>
                
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 bg-gyanmarg-purple bg-opacity-10 text-gyanmarg-purple">
                    {student.subjects.join(', ')}
                  </span>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 ${
                    student.progress === 'Excellent' ? 'bg-gyanmarg-gold bg-opacity-10 text-gyanmarg-gold' :
                    student.progress === 'Good' ? 'bg-green-500 bg-opacity-10 text-green-500' :
                    'bg-amber-500 bg-opacity-10 text-amber-500'
                  }`}>
                    {student.progress}
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 bg-blue-500 bg-opacity-10 text-blue-500">
                    {student.attendance} Attendance
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="overview">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="sessions">Session History</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="mr-2 h-5 w-5 text-gyanmarg-purple" /> Strengths
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {student.strengthAreas.map((area: string, idx: number) => (
                        <li key={idx}>{area}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <LineChart className="mr-2 h-5 w-5 text-gyanmarg-purple" /> Areas for Improvement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {student.improvementAreas.map((area: string, idx: number) => (
                        <li key={idx}>{area}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="mr-2 h-5 w-5 text-gyanmarg-purple" /> Subject Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {student.subjects.map((subject: string, idx: number) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-semibold mb-2">{subject}</h3>
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div
                                className={`h-3 rounded-full ${
                                  idx === 0 ? 'bg-gyanmarg-purple' : 'bg-gyanmarg-gold'
                                }`}
                                style={{ width: idx === 0 ? '90%' : '85%' }}
                              />
                            </div>
                            <span className="ml-2 font-medium">{idx === 0 ? '90%' : '85%'}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6 flex justify-center space-x-4">
                <Button 
                  className="bg-gyanmarg-purple"
                  onClick={() => navigate('/new-session')}
                >
                  Schedule a Session
                </Button>
                <Button 
                  variant="outline"
                  className="border-gyanmarg-purple text-gyanmarg-purple hover:bg-gyanmarg-purple hover:text-white"
                  onClick={() => navigate('/students')}
                >
                  Back to All Students
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="sessions">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <History className="mr-2 h-5 w-5 text-gyanmarg-purple" /> Session History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {student.sessions.map((session: any) => (
                      <div key={session.id} className="border-b border-gray-200 pb-4 last:border-0">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <div>
                            <h3 className="font-semibold">{session.subject}: {session.topic}</h3>
                            <p className="text-sm text-gray-600">{session.date} • {session.duration}</p>
                          </div>
                          <div className={`mt-2 md:mt-0 px-3 py-1 rounded-full text-sm font-medium ${
                            session.performance === 'Excellent' ? 'bg-gyanmarg-gold bg-opacity-10 text-gyanmarg-gold' :
                            session.performance === 'Good' ? 'bg-green-500 bg-opacity-10 text-green-500' :
                            'bg-amber-500 bg-opacity-10 text-amber-500'
                          }`}>
                            {session.performance}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notes">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-gyanmarg-purple" /> Teacher's Notes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700">{student.notes}</p>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-semibold mb-3">Add New Note</h3>
                    <textarea
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gyanmarg-purple"
                      rows={4}
                      placeholder="Add your observations about the student's progress..."
                    />
                    <div className="mt-3 flex justify-end">
                      <Button className="bg-gyanmarg-purple">
                        Save Note
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default StudentDetail;
