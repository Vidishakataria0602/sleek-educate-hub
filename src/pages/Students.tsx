
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Search, BookOpen, ArrowRight } from 'lucide-react';

// Mock student data
const mockStudents = [
  { id: 1, name: "Aiden Smith", grade: 8, subjects: ["Mathematics", "Science"], sessions: 12, avatar: "A", progress: "Excellent", lastSession: "2 days ago" },
  { id: 2, name: "Bella Johnson", grade: 9, subjects: ["English", "History"], sessions: 8, avatar: "B", progress: "Good", lastSession: "1 week ago" },
  { id: 3, name: "Carlos Rodriguez", grade: 7, subjects: ["Science", "Geography"], sessions: 15, avatar: "C", progress: "Excellent", lastSession: "Yesterday" },
  { id: 4, name: "Diana Chen", grade: 10, subjects: ["Mathematics", "Computer Science"], sessions: 10, avatar: "D", progress: "Needs improvement", lastSession: "3 days ago" },
  { id: 5, name: "Ethan Williams", grade: 6, subjects: ["English"], sessions: 5, avatar: "E", progress: "Good", lastSession: "2 weeks ago" },
  { id: 6, name: "Fiona Miller", grade: 8, subjects: ["Mathematics"], sessions: 7, avatar: "F", progress: "Excellent", lastSession: "Yesterday" },
];

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentView, setCurrentView] = useState('all');
  const navigate = useNavigate();
  
  const filteredStudents = mockStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         student.subjects.some(subj => subj.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (currentView === 'all') return matchesSearch;
    if (currentView === 'recent') return matchesSearch && (student.lastSession === 'Yesterday' || student.lastSession === '2 days ago');
    if (currentView === 'needsHelp') return matchesSearch && student.progress === 'Needs improvement';
    
    return matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated username="Teacher" />
      
      <div className="flex-grow py-8 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gyanmarg-purple flex items-center">
                <Users className="mr-2 h-8 w-8" /> Student Profiles
              </h1>
              <p className="text-gray-600 mt-1">Manage and track your students' progress</p>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name or subject..."
                className="pl-10 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <Tabs defaultValue="all" value={currentView} onValueChange={setCurrentView}>
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Students</TabsTrigger>
              <TabsTrigger value="recent">Recently Taught</TabsTrigger>
              <TabsTrigger value="needsHelp">Needs Help</TabsTrigger>
            </TabsList>
            
            <TabsContent value={currentView}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStudents.length > 0 ? (
                  filteredStudents.map(student => (
                    <Card key={student.id} className="hover:shadow-lg transition cursor-pointer" onClick={() => navigate(`/student/${student.id}`)}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                            student.progress === 'Excellent' ? 'bg-gyanmarg-gold text-white' :
                            student.progress === 'Good' ? 'bg-green-500 text-white' :
                            'bg-amber-500 text-white'
                          }`}>
                            <span className="text-lg font-bold">{student.avatar}</span>
                          </div>
                          <div>
                            <CardTitle>{student.name}</CardTitle>
                            <p className="text-sm text-gray-500">Grade {student.grade}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <BookOpen className="h-4 w-4 mr-2 text-gyanmarg-purple" />
                            <span>{student.subjects.join(', ')}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <span className="mr-2">Sessions:</span>
                            <span className="font-semibold">{student.sessions}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <span className="mr-2">Progress:</span>
                            <span className={`font-semibold ${
                              student.progress === 'Excellent' ? 'text-gyanmarg-purple' :
                              student.progress === 'Good' ? 'text-green-500' :
                              'text-amber-500'
                            }`}>
                              {student.progress}
                            </span>
                          </div>
                          <div className="flex items-center text-sm">
                            <span className="mr-2">Last session:</span>
                            <span>{student.lastSession}</span>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex justify-end">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-gyanmarg-purple hover:text-gyanmarg-gold"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/student/${student.id}`);
                            }}
                          >
                            View Profile <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-12">
                    <p className="text-gray-500">No students found matching your search criteria.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Students;
