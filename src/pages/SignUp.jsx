import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const SignUp = () => { // Removed React.FC type annotation
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignUp = (e) => { // Removed type annotation
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate account creation process
    setTimeout(() => {
      setIsLoading(false);
      
      // Simple validation
      if (fullName && email && password && confirmPassword && agreeTerms) {
        if (password !== confirmPassword) {
          toast({
            variant: "destructive",
            title: "Passwords do not match",
            description: "Please check your passwords and try again.",
          });
          return;
        }
        
        // For demo purposes, saving user data to sessionStorage
        const username = fullName.split(' ')[0]; // Use first name as username
        sessionStorage.setItem('user', JSON.stringify({ username, fullName, email }));
        
        toast({
          title: "Account created successfully!",
          description: `Welcome to GyanMarg, ${username}!`,
        });
        
        navigate('/dashboard');
      } else {
        toast({
          variant: "destructive",
          title: "Sign up failed",
          description: "Please fill in all fields and agree to the terms.",
        });
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Join GyanMarg</CardTitle>
          <CardDescription>Start making a difference today</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium">Full Name</label>
              <Input 
                id="fullName"
                type="text" 
                placeholder="Enter your full name" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required 
              />
            </div>
            
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
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <Input 
                id="password"
                type="password" 
                placeholder="Create a password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</label>
              <Input 
                id="confirmPassword"
                type="password" 
                placeholder="Confirm your password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={agreeTerms} 
                onCheckedChange={() => setAgreeTerms(!agreeTerms)} 
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link to="/terms" className="text-gyanmarg-purple hover:underline">
                  Terms and Conditions
                </Link>
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gyanmarg-purple hover:bg-opacity-90"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Already have an account? <Link to="/signin" className="text-gyanmarg-purple font-semibold hover:underline">Sign In</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;