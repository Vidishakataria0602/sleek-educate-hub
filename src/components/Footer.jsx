import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Footer = ({ onSubscribe }) => {
  const { toast } = useToast();
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our newsletter updates soon.",
    });
    
    if (onSubscribe) {
      onSubscribe(e);
    }
  };

  return (
    <footer className="bg-gyanmarg-purple text-white py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-gyanmarg-gold transition">About Us</Link></li>
            <li><Link to="/donate" className="hover:text-gyanmarg-gold transition">Donate</Link></li>
            <li><Link to="/volunteer" className="hover:text-gyanmarg-gold transition">Become a Volunteer</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-white text-gyanmarg-purple p-2 rounded-full hover:bg-gyanmarg-gold transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-white text-gyanmarg-purple p-2 rounded-full hover:bg-gyanmarg-gold transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-white text-gyanmarg-purple p-2 rounded-full hover:bg-gyanmarg-gold transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <form onSubmit={handleSubscribe} className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 rounded-l-full focus:outline-none text-black"
              required
            />
            <Button type="submit" className="bg-gyanmarg-gold hover:bg-yellow-400 text-gyanmarg-purple px-4 py-2 rounded-r-full transition">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      
      <div className="text-center mt-8 pt-4 border-t border-white/20">
        <p>&copy; {new Date().getFullYear()} GyanMarg. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;