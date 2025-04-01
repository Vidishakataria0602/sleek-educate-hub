
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Clock, FileClock } from 'lucide-react';

interface DonationRecord {
  id: number;
  amount: number;
  date: string;
  paymentMethod: string;
  status: 'Completed' | 'Processing' | 'Failed';
}

const DonationHistory = () => {
  const navigate = useNavigate();
  
  const [donations] = useState<DonationRecord[]>([
    {
      id: 1,
      amount: 1000,
      date: '2023-10-15',
      paymentMethod: 'UPI',
      status: 'Completed'
    },
    {
      id: 2,
      amount: 500,
      date: '2023-09-28',
      paymentMethod: 'Card',
      status: 'Completed'
    },
    {
      id: 3,
      amount: 2000,
      date: '2023-08-10',
      paymentMethod: 'Net Banking',
      status: 'Completed'
    }
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuthenticated={true} username="User" />
      
      <div className="flex-grow py-8 px-4 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-lg">
            <CardHeader className="border-b border-gray-200 bg-gray-50">
              <div className="flex items-center">
                <Button
                  variant="outline"
                  className="mr-4"
                  onClick={() => navigate('/dashboard')}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Dashboard
                </Button>
                <CardTitle className="text-xl text-gyanmarg-purple">Your Donation History</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {donations.length > 0 ? (
                <div className="space-y-6">
                  {donations.map((donation) => (
                    <Card key={donation.id} className="hover:shadow-md transition">
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="flex items-center">
                            <div className="bg-purple-100 p-3 rounded-full mr-4">
                              <FileClock className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                              <p className="font-semibold">₹{donation.amount}</p>
                              <p className="text-sm text-gray-500">Date: {donation.date}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center mt-3 md:mt-0">
                            <div className="mr-6">
                              <p className="text-sm text-gray-600">Payment Method</p>
                              <p className="font-medium">{donation.paymentMethod}</p>
                            </div>
                            <div className="mr-6">
                              <p className="text-sm text-gray-600">Status</p>
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                donation.status === 'Completed' 
                                  ? 'bg-green-100 text-green-800' 
                                  : donation.status === 'Processing' 
                                  ? 'bg-yellow-100 text-yellow-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {donation.status}
                              </span>
                            </div>
                            <Button size="sm" variant="outline" className="flex items-center">
                              <Download className="h-4 w-4 mr-1" /> Receipt
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-medium mb-2">No Donation History</h3>
                  <p className="text-gray-500 mb-6">You haven't made any donations yet.</p>
                  <Button onClick={() => navigate('/donate')} className="bg-gyanmarg-purple hover:bg-purple-700">
                    Make Your First Donation
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DonationHistory;
