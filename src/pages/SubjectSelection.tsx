
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { 
  BookOpenCheck, 
  ArrowLeft, 
  BookOpen, 
  Download, 
  Home, 
  Sparkles, 
  Calculator, 
  Globe, 
  TestTube,
  Languages,
  Pen,
  FileText,
  History,
  Music
} from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface Book {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface SubjectInfo {
  id: string;
  name: string;
  icon: React.ReactNode;
  books: Book[];
}

const SubjectSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { board, grade } = location.state || { board: 'CBSE', grade: '8' };

  const subjects: SubjectInfo[] = [
    {
      id: 'mathematics',
      name: 'Mathematics',
      icon: <Calculator className="h-10 w-10 text-blue-500" />,
      books: [
        {
          id: 1,
          title: `${board} Mathematics ${grade}`,
          description: `Complete mathematics textbook for grade ${grade} students with exercises and solutions.`,
          icon: <Calculator className="h-6 w-6" />
        },
        {
          id: 2,
          title: 'Mathematics Practice Book',
          description: 'Additional practice problems and worksheets to reinforce mathematical concepts.',
          icon: <BookOpenCheck className="h-6 w-6" />
        }
      ]
    },
    {
      id: 'science',
      name: 'Science',
      icon: <TestTube className="h-10 w-10 text-green-500" />,
      books: [
        {
          id: 3,
          title: `${board} Science ${grade}`,
          description: `General science textbook covering physics, chemistry and biology for grade ${grade} students.`,
          icon: <TestTube className="h-6 w-6" />
        },
        {
          id: 4,
          title: 'Science Lab Manual',
          description: 'Step-by-step instructions for science experiments and activities.',
          icon: <TestTube className="h-6 w-6" />
        }
      ]
    },
    {
      id: 'english',
      name: 'English',
      icon: <Languages className="h-10 w-10 text-yellow-500" />,
      books: [
        {
          id: 5,
          title: `${board} English Reader ${grade}`,
          description: `English literature and language textbook for grade ${grade} students.`,
          icon: <BookOpen className="h-6 w-6" />
        },
        {
          id: 6,
          title: 'English Grammar',
          description: 'Comprehensive guide to English grammar rules with examples and exercises.',
          icon: <BookOpenCheck className="h-6 w-6" />
        }
      ]
    },
    {
      id: 'social-studies',
      name: 'Social Studies',
      icon: <Globe className="h-10 w-10 text-orange-500" />,
      books: [
        {
          id: 7,
          title: `${board} History ${grade}`,
          description: `History textbook covering major events and civilizations for grade ${grade} students.`,
          icon: <History className="h-6 w-6" />
        },
        {
          id: 8,
          title: `${board} Geography ${grade}`,
          description: `Geography textbook with maps and geographic concepts for grade ${grade} students.`,
          icon: <Globe className="h-6 w-6" />
        }
      ]
    },
    {
      id: 'hindi',
      name: 'Hindi',
      icon: <Languages className="h-10 w-10 text-red-500" />,
      books: [
        {
          id: 9,
          title: `${board} Hindi Reader ${grade}`,
          description: `Hindi literature and language textbook for grade ${grade} students.`,
          icon: <BookOpen className="h-6 w-6" />
        },
        {
          id: 10,
          title: 'Hindi Grammar',
          description: 'Comprehensive guide to Hindi grammar rules with examples and exercises.',
          icon: <Pen className="h-6 w-6" />
        }
      ]
    },
    {
      id: 'arts',
      name: 'Arts & Music',
      icon: <Music className="h-10 w-10 text-purple-500" />,
      books: [
        {
          id: 11,
          title: `${board} Arts Education ${grade}`,
          description: `Visual and performing arts textbook for grade ${grade} students.`,
          icon: <FileText className="h-6 w-6" />
        },
        {
          id: 12,
          title: 'Music Appreciation',
          description: 'Introduction to music theory and appreciation, suitable for all grades.',
          icon: <Music className="h-6 w-6" />
        }
      ]
    }
  ];

  const handleReadOnline = (book: Book) => {
    toast({
      title: "Opening Online Reader",
      description: `${book.title} is opening in our online reader.`,
    });
    // In a real app, this would navigate to an online reader page
  };

  const handleDownload = (book: Book) => {
    toast({
      title: "Download Started",
      description: `${book.title} is being downloaded to your device.`,
    });
    // In a real app, this would trigger a file download
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={true} />
      
      <div className="flex-grow py-8 px-4 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="outline"
              className="bg-white hover:bg-gray-100"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Available Resources for Grade {grade}
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subjects.map((subject) => (
              <div key={subject.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="bg-white p-3 rounded-full shadow-md mr-4">
                      {subject.icon}
                    </div>
                    <h2 className="text-xl font-bold text-gyanmarg-purple">{subject.name}</h2>
                  </div>
                </div>
                
                <div className="p-4 space-y-4">
                  {subject.books.map((book) => (
                    <div key={book.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition bg-white">
                      <div className="flex items-start">
                        <div className="bg-gray-100 p-2 rounded-lg mr-3">
                          {book.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-1">{book.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{book.description}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            <HoverCard>
                              <HoverCardTrigger asChild>
                                <Button 
                                  size="sm" 
                                  onClick={() => handleReadOnline(book)}
                                  className="bg-blue-600 hover:bg-blue-700 text-white"
                                >
                                  <BookOpen className="mr-1 h-4 w-4" /> Read Online
                                </Button>
                              </HoverCardTrigger>
                              <HoverCardContent className="w-80">
                                <div className="flex justify-between space-x-4">
                                  <div>
                                    <h4 className="text-sm font-semibold">Online Reader</h4>
                                    <p className="text-sm text-gray-600">
                                      Our interactive reader lets you access materials without downloading.
                                      Take notes, highlight text, and track your progress.
                                    </p>
                                  </div>
                                  <Sparkles className="h-10 w-10 text-blue-500" />
                                </div>
                              </HoverCardContent>
                            </HoverCard>

                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleDownload(book)}
                              className="border-gray-300 text-gray-700 hover:bg-gray-100"
                            >
                              <Download className="mr-1 h-4 w-4" /> Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button 
              className="bg-gyanmarg-gold text-gyanmarg-purple hover:bg-yellow-500 px-6 py-2 text-lg"
              onClick={() => navigate('/dashboard')}
            >
              <Home className="mr-2 h-5 w-5" /> Back to Dashboard
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SubjectSelection;
