import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from "@/components/ui/use-toast";
import { Calendar as CalendarIcon, Clock, Users, ArrowLeft } from 'lucide-react';

const NewSession = () => {
  const [sessionTitle, setSessionTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('60');
  const [description, setDescription] = useState('');
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e) => { // Removed type annotation
    e.preventDefault();
    
    // Create a new session object
    const newSession = {
      id: Date.now(),
      subject: subject,
      grade: grade,
      time: `${date} at ${time}`,
      icon: subject.toLowerCase(),
      title: sessionTitle,
      duration: duration,
      description: description
    };
    
    // Get existing sessions from localStorage or create empty array
    const existingSessions = JSON.parse(localStorage.getItem('sessions') || '[]');
    
    // Add new session to the array
    const updatedSessions = [...existingSessions, newSession];
    
    // Save to localStorage
    localStorage.setItem('sessions', JSON.stringify(updatedSessions));
    
    toast({
      title: "Session created!",
      description: `Your ${subject} session has been scheduled.`,
    });
    
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated username="Teacher" />
      
      <div className="flex-grow py-8 px-4 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto max-w-3xl">
          <Button
            variant="outline"
            className="mb-4 bg-white hover:bg-gray-100"
            onClick={() => navigate('/dashboard')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
          
          <h1 className="text-3xl font-bold mb-6 text-white">Create New Teaching Session</h1>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Session Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="sessionTitle" className="text-sm font-medium">Session Title</label>
                  <Input 
                    id="sessionTitle"
                    value={sessionTitle}
                    onChange={(e) => setSessionTitle(e.target.value)}
                    placeholder="e.g., Introduction to Algebra"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Select value={subject} onValueChange={setSubject} required>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Mathematics">Mathematics</SelectItem>
                        <SelectItem value="Science">Science</SelectItem>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="History">History</SelectItem>
                        <SelectItem value="Geography">Geography</SelectItem>
                        <SelectItem value="ComputerScience">Computer Science</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="grade" className="text-sm font-medium">Grade Level</label>
                    <Select value={grade} onValueChange={setGrade} required>
                      <SelectTrigger id="grade">
                        <SelectValue placeholder="Select a grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(10)].map((_, i) => (
                          <SelectItem key={i} value={(i + 1).toString()}>
                            Grade {i + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium">Date</label>
                    <div className="relative">
                      <CalendarIcon className="h-4 w-4 absolute top-3 left-3 text-gray-400" />
                      <Input 
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="time" className="text-sm font-medium">Start Time</label>
                    <div className="relative">
                      <Clock className="h-4 w-4 absolute top-3 left-3 text-gray-400" />
                      <Input 
                        id="time"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="duration" className="text-sm font-medium">Duration (minutes)</label>
                    <Select value={duration} onValueChange={setDuration} required>
                      <SelectTrigger id="duration">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="45">45 minutes</SelectItem>
                        <SelectItem value="60">60 minutes</SelectItem>
                        <SelectItem value="90">90 minutes</SelectItem>
                        <SelectItem value="120">120 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">Session Description</label>
                  <Textarea 
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe what you'll be teaching in this session..."
                    rows={4}
                    required
                  />
                </div>
                
                <div className="flex justify-end space-x-4">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => navigate('/dashboard')}
                    className="hover:bg-gray-100"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-gyanmarg-purple hover:bg-purple-800"
                  >
                    Create Session
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewSession;