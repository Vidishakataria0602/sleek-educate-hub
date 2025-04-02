
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const Donate = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePresetAmount = (value: string) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount('');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our newsletter updates soon.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const donationAmount = amount || customAmount;
    
    if (!donationAmount) {
      toast({
        title: "Amount required",
        description: "Please select or enter a donation amount",
        variant: "destructive"
      });
      return;
    }

    if (!paymentMethod) {
      toast({
        title: "Payment method required",
        description: "Please select a payment method",
        variant: "destructive"
      });
      return;
    }
    
    // Store donation details for the success page
    sessionStorage.setItem('donationDetails', JSON.stringify({
      amount: donationAmount,
      name: fullName,
      email: email,
      message: message,
      paymentMethod: paymentMethod
    }));
    
    navigate('/donation-success');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Every Contribution Counts
          </h1>
          <p className="text-lg mb-8">
            Your generosity can transform a student's educational journey
          </p>
          <Button 
            className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-semibold px-6 py-3 rounded-full text-lg transition-colors"
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
                <img src="https://static.vecteezy.com/system/resources/thumbnails/003/417/762/small_2x/line-icon-for-give-money-vector.jpg" alt="Donate Money" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Donate Money</h3>
              <p className="text-center text-white mb-4">
                Support our programs and help us reach more students
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-yellow-400 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookIcon className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-purple-800">Donate Books</h3>
              <p className="text-center text-purple-800 mb-4">
                Share knowledge through educational materials
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-purple-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Volunteer Time</h3>
              <p className="text-center text-white mb-4">
                Dedicate your time to teaching and mentoring
              </p>
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
              <label className="block text-sm font-medium text-gray-700 mb-4">Select Amount*</label>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <Button
                  type="button"
                  variant={amount === '500' ? 'default' : 'outline'}
                  className={amount === '500' ? 'bg-purple-700' : ''}
                  onClick={() => handlePresetAmount('500')}
                >
                  ₹500
                </Button>
                <Button
                  type="button"
                  variant={amount === '1000' ? 'default' : 'outline'}
                  className={amount === '1000' ? 'bg-purple-700' : ''}
                  onClick={() => handlePresetAmount('1000')}
                >
                  ₹1000
                </Button>
                <Button
                  type="button"
                  variant={amount === '2000' ? 'default' : 'outline'}
                  className={amount === '2000' ? 'bg-purple-700' : ''}
                  onClick={() => handlePresetAmount('2000')}
                >
                  ₹2000
                </Button>
              </div>
              <div>
                <Input
                  placeholder="Enter custom amount in ₹"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className={customAmount ? 'border-purple-700 ring-purple-700' : ''}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
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
              <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">Payment Method*</label>
              <Select onValueChange={setPaymentMethod} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="card">Credit/Debit Card</SelectItem>
                  <SelectItem value="net_banking">Net Banking</SelectItem>
                  <SelectItem value="upi">UPI</SelectItem>
                  <SelectItem value="gpay">Google Pay</SelectItem>
                  <SelectItem value="phonepe">PhonePe</SelectItem>
                </SelectContent>
              </Select>
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
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 transition-colors"
            >
              Complete Donation
            </Button>
            
            <div className="flex justify-center">
              <Button 
                type="button" 
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-50"
                onClick={() => navigate('/dashboard')}
              >
                Back to Dashboard
              </Button>
            </div>
          </form>
        </div>
      </section>
      
      <Footer onSubscribe={handleSubscribe} />
    </div>
  );
};

// Import icons at the bottom to avoid issues with imports
import { Book as BookIcon, Clock as ClockIcon } from 'lucide-react';

export default Donate;
