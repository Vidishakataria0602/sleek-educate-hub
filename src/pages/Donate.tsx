
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Book, BadgeDollarSign } from 'lucide-react';

const Donate = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePresetAmount = (value: string) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const donationAmount = amount || customAmount;
    // In a real app, process the payment here
    navigate('/donation-success');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-purple-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Every Contribution Counts
          </h1>
          <p className="text-lg mb-8">
            Your generosity can transform a student's educational journey
          </p>
          <Button 
            className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-semibold px-6 py-3 rounded-full text-lg"
            onClick={() => {
              const donationForm = document.getElementById('donation-form');
              donationForm?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Donate Now
          </Button>
        </div>
      </section>
      
      {/* Ways to Contribute Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Ways to Contribute</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-orange-500 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BadgeDollarSign className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Donate Money</h3>
              <p className="text-center text-white mb-4">
                Support our programs and help us reach more students
              </p>
              <div className="text-center">
                <Button 
                  className="bg-white text-orange-500 hover:bg-gray-100"
                  onClick={() => {
                    const donationForm = document.getElementById('donation-form');
                    donationForm?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Donate Now
                </Button>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-yellow-400 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Book className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-purple-800">Donate Books</h3>
              <p className="text-center text-purple-800 mb-4">
                Share knowledge through educational materials
              </p>
              <div className="text-center">
                <Button
                  className="bg-white text-yellow-500 hover:bg-gray-100"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-purple-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Volunteer Time</h3>
              <p className="text-center text-white mb-4">
                Dedicate your time to teaching and mentoring
              </p>
              <div className="text-center">
                <Button
                  className="bg-white text-purple-700 hover:bg-gray-100"
                  onClick={() => navigate('/volunteer')}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Donation Form Section */}
      <section id="donation-form" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-lg">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Make a Donation</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Select Amount</label>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <Button
                  type="button"
                  variant={amount === '10' ? 'default' : 'outline'}
                  className={amount === '10' ? 'bg-purple-700' : ''}
                  onClick={() => handlePresetAmount('10')}
                >
                  $10
                </Button>
                <Button
                  type="button"
                  variant={amount === '25' ? 'default' : 'outline'}
                  className={amount === '25' ? 'bg-purple-700' : ''}
                  onClick={() => handlePresetAmount('25')}
                >
                  $25
                </Button>
                <Button
                  type="button"
                  variant={amount === '50' ? 'default' : 'outline'}
                  className={amount === '50' ? 'bg-purple-700' : ''}
                  onClick={() => handlePresetAmount('50')}
                >
                  $50
                </Button>
              </div>
              <div>
                <Input
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className={customAmount ? 'border-purple-700 ring-purple-700' : ''}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Leave a message with your donation"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3"
            >
              Complete Donation
            </Button>
          </form>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Donate;
