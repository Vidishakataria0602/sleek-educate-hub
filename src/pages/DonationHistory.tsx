
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Receipt, Calendar } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const DonationHistory = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // In a real app, this would come from an API
  const donations = [
    {
      id: 'DON-1234',
      date: '2023-06-10',
      amount: '₹2000',
      paymentMethod: 'Credit Card',
      status: 'Completed'
    },
    {
      id: 'DON-1235',
      date: '2023-03-22',
      amount: '₹500',
      paymentMethod: 'UPI',
      status: 'Completed'
    },
    {
      id: 'DON-1236',
      date: '2022-12-10',
      amount: '₹1000',
      paymentMethod: 'Google Pay',
      status: 'Completed'
    }
  ];

  // Get the latest donation from session storage if available
  const storedDonation = sessionStorage.getItem('donationDetails');
  let latestDonation = null;
  
  if (storedDonation) {
    const donationData = JSON.parse(storedDonation);
    const today = new Date().toISOString().split('T')[0];
    
    latestDonation = {
      id: `DON-${Math.floor(Math.random() * 10000)}`,
      date: today,
      amount: `₹${donationData.amount}`,
      paymentMethod: donationData.paymentMethod === 'card' ? 'Credit/Debit Card' : 
                     donationData.paymentMethod === 'net_banking' ? 'Net Banking' : 
                     donationData.paymentMethod === 'upi' ? 'UPI' : 
                     donationData.paymentMethod === 'gpay' ? 'Google Pay' : 
                     'PhonePe',
      status: 'Completed'
    };
  }
  
  const allDonations = latestDonation ? [latestDonation, ...donations] : donations;
  
  const handleDownloadReceipt = (id: string) => {
    toast({
      title: "Receipt Downloaded",
      description: `Receipt for donation ${id} has been downloaded.`
    });
  };
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our newsletter updates soon.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={true} username="User" />
      
      <div className="flex-grow py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-purple-700">Donation History</h1>
              <p className="text-gray-600">Thank you for your continued support!</p>
            </div>
            <Button
              variant="outline"
              className="text-purple-700 border-purple-300 hover:bg-purple-50"
              onClick={() => navigate('/dashboard')}
              startIcon={<ArrowLeft className="mr-2 h-4 w-4" />}
            >
              Back to Dashboard
            </Button>
          </div>
          
          <Card className="mb-8 border-purple-100">
            <CardHeader>
              <CardTitle className="text-xl">Your Donation Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-purple-700">
                    {allDonations.length}
                  </p>
                  <p className="text-gray-600">Total Donations</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-yellow-600">
                    {allDonations.reduce((total, donation) => {
                      const amount = parseInt(donation.amount.replace('₹', '')) || 0;
                      return total + amount;
                    }, 0).toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}
                  </p>
                  <p className="text-gray-600">Total Amount</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-orange-600">10</p>
                  <p className="text-gray-600">Students Supported</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <h2 className="text-xl font-semibold text-purple-700 mb-4">Recent Donations</h2>
          
          <div className="space-y-4 mb-8">
            {allDonations.map((donation) => (
              <Card key={donation.id} className="hover:shadow-md transition border-purple-100">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="bg-purple-100 p-3 rounded-full mr-4">
                        <Receipt className="h-5 w-5 text-purple-700" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{donation.id}</p>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>
                            {new Date(donation.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
                      <div className="bg-gray-50 rounded-lg px-4 py-2 text-center min-w-[100px]">
                        <p className="text-sm text-gray-600">Amount</p>
                        <p className="font-bold text-purple-700">{donation.amount}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg px-4 py-2 text-center md:min-w-[150px]">
                        <p className="text-sm text-gray-600">Method</p>
                        <p className="font-semibold text-gray-800">{donation.paymentMethod}</p>
                      </div>
                      <div className="md:ml-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-purple-700 border-purple-300 hover:bg-purple-50"
                          onClick={() => handleDownloadReceipt(donation.id)}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Receipt
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer onSubscribe={handleSubscribe} />
    </div>
  );
};

export default DonationHistory;
