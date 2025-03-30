
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';

interface NavbarProps {
  isAuthenticated?: boolean;
  username?: string;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated = false, username = '' }) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (!isAuthenticated && path !== '/') {
      e.preventDefault();
      setIsAlertOpen(true);
    }
  };

  return (
    <nav className="bg-gyanmarg-purple text-white py-3 px-6 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2">
        <img src="/placeholder.svg" alt="GyanMarg Logo" className="h-10 w-10 bg-white rounded-full" />
        <Link to="/" className="text-xl font-bold">GyanMarg</Link>
      </div>
      
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-gyanmarg-gold transition">Home</Link>
        <Link 
          to={isAuthenticated ? "/about" : "#"} 
          onClick={(e) => handleNavItemClick(e, "/about")} 
          className="hover:text-gyanmarg-gold transition"
        >
          About Us
        </Link>
        <Link 
          to={isAuthenticated ? "/volunteer" : "#"} 
          onClick={(e) => handleNavItemClick(e, "/volunteer")} 
          className="hover:text-gyanmarg-gold transition"
        >
          Volunteer
        </Link>
        <Link 
          to={isAuthenticated ? "/donate" : "#"} 
          onClick={(e) => handleNavItemClick(e, "/donate")} 
          className="hover:text-gyanmarg-gold transition"
        >
          Donate
        </Link>
        <Link 
          to={isAuthenticated ? "/resources" : "#"} 
          onClick={(e) => handleNavItemClick(e, "/resources")} 
          className="hover:text-gyanmarg-gold transition"
        >
          Resources
        </Link>
      </div>
      
      {isAuthenticated ? (
        <div className="flex items-center space-x-2">
          <span className="text-gyanmarg-gold font-medium">Welcome back, {username}</span>
          <img src="/placeholder.svg" alt="User Profile" className="h-8 w-8 bg-white rounded-full" />
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-gyanmarg-purple"
            onClick={() => navigate('/dashboard')}
          >
            Dashboard
          </Button>
        </div>
      ) : (
        <div className="space-x-3">
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-gyanmarg-purple"
            onClick={() => navigate('/signin')}
          >
            Sign In
          </Button>
          <Button 
            className="bg-gyanmarg-gold text-gyanmarg-purple hover:bg-opacity-90"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </Button>
        </div>
      )}

      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Authentication Required</AlertDialogTitle>
            <AlertDialogDescription>
              You need to sign up or sign in to access this feature.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => navigate('/signup')}>Sign Up</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </nav>
  );
};

export default Navbar;
