import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const SignIn = () => { // Removed React.FC type annotation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignIn = (e) => { // Removed type annotation
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication process
    setTimeout(() => {
      setIsLoading(false);
      // Simple validation
      if (email && password) {
        // For demo purposes, saving user data to sessionStorage
        const username = email.split('@')[0]; // Extract username from email
        sessionStorage.setItem('user', JSON.stringify({ username, email }));
        
        toast({
          title: "Signed in successfully!",
          description: `Welcome back, ${username}!`,
        });
        
        navigate('/dashboard');
      } else {
        toast({
          variant: "destructive",
          title: "Sign in failed",
          description: "Please enter both email and password.",
        });
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Sign in to continue your journey</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input 
                id="email"
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <Link to="/forgot-password" className="text-xs text-gyanmarg-purple hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <Input 
                id="password"
                type="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gyanmarg-purple hover:bg-opacity-90"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            New here? <Link to="/signup" className="text-gyanmarg-purple font-semibold hover:underline">Sign Up</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;