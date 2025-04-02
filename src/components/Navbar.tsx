
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ChevronDown, User } from 'lucide-react';

interface NavbarProps {
  isAuthenticated?: boolean;
  username?: string;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated = false, username = '' }) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const location = useLocation();
  const [localAuth, setLocalAuth] = useState(isAuthenticated);
  
  // Check session storage for authentication status
  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setLocalAuth(true);
    }
  }, []);

  const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (!localAuth && path !== '/') {
      e.preventDefault();
      setIsAlertOpen(true);
    }
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleLogout = () => {
    // Clear session storage on logout
    sessionStorage.removeItem('user');
    setLocalAuth(false);
    navigate('/');
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
  };

  const handleSwitchAccount = () => {
    toast({
      title: "Switch Account",
      description: "Account switching feature would be implemented here",
    });
  };

  return (
    <nav className="bg-gyanmarg-purple text-white py-3 px-6 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2">
        <img src="/Gyanmarg_logo.png" alt="GyanMarg Logo" className="h-10 w-10 bg-white rounded-full" />
        <Link to="/" className="text-xl font-bold">GyanMarg</Link>
      </div>
      
      <div className="hidden md:flex space-x-6">
        <Link to="/" className={`hover:text-gyanmarg-gold transition ${location.pathname === '/' ? 'text-gyanmarg-gold' : ''}`}>
          Home
        </Link>
        {localAuth && (
          <Link 
            to="/dashboard" 
            className={`hover:text-gyanmarg-gold transition ${location.pathname === '/dashboard' ? 'text-gyanmarg-gold' : ''}`}
          >
            Dashboard
          </Link>
        )}
        <Link 
          to={localAuth ? "/about" : "#"} 
          onClick={(e) => handleNavItemClick(e, "/about")} 
          className={`hover:text-gyanmarg-gold transition ${location.pathname === '/about' ? 'text-gyanmarg-gold' : ''}`}
        >
          About Us
        </Link>
        <Link 
          to={localAuth ? "/volunteer" : "#"} 
          onClick={(e) => handleNavItemClick(e, "/volunteer")} 
          className={`hover:text-gyanmarg-gold transition ${location.pathname === '/volunteer' ? 'text-gyanmarg-gold' : ''}`}
        >
          Volunteer
        </Link>
        <Link 
          to={localAuth ? "/donate" : "#"} 
          onClick={(e) => handleNavItemClick(e, "/donate")} 
          className={`hover:text-gyanmarg-gold transition ${location.pathname === '/donate' ? 'text-gyanmarg-gold' : ''}`}
        >
          Donate
        </Link>
        <Link 
          to={localAuth ? "/resources" : "#"} 
          onClick={(e) => handleNavItemClick(e, "/resources")} 
          className={`hover:text-gyanmarg-gold transition ${location.pathname === '/resources' ? 'text-gyanmarg-gold' : ''}`}
        >
          Resources
        </Link>
      </div>
      
      {localAuth || isAuthenticated ? (
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center space-x-2 cursor-pointer rounded-full p-1 hover:bg-opacity-20 hover:bg-white transition">
                <span className="text-gyanmarg-gold font-medium">Welcome, {username || JSON.parse(sessionStorage.getItem('user') || '{"username": "User"}').username}</span>
                <div className="h-8 w-8 bg-white rounded-full overflow-hidden flex items-center justify-center">
                  <User className="h-6 w-6 text-gyanmarg-purple" />
                </div>
                <ChevronDown className="h-4 w-4 text-gyanmarg-gold" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-white">
              <DropdownMenuItem onClick={handleProfileClick} className="cursor-pointer">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSwitchAccount} className="cursor-pointer">
                Switch Account
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="space-x-3">
          <Button 
            variant="outline" 
            className="bg-gyanmarg-purple text-white hover:bg-purple-800 transition-colors"
            onClick={() => navigate('/signin')}
          >
            Sign In
          </Button>
          <Button 
            className="bg-gyanmarg-gold text-gyanmarg-purple hover:bg-yellow-300 transition-colors"
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
