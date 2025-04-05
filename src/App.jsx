
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import NewSession from "./pages/NewSession";
import Achievements from "./pages/Achievements";
import Students from "./pages/Students";
import StudentDetail from "./pages/StudentDetail";
import NotFound from "./pages/NotFound";
import Volunteer from "./pages/Volunteer";
import Donate from "./pages/Donate";
import DonationSuccess from "./pages/DonationSuccess";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import AboutUs from "./pages/AboutUs";
import Resources from "./pages/Resources";
import ClassSelection from "./pages/ClassSelection";
import SubjectSelection from "./pages/SubjectSelection";
import UserProfile from "./pages/UserProfile";
import DonationHistory from "./pages/DonationHistory";
import ContactSupport from "./pages/ContactSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new-session" element={<NewSession />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/students" element={<Students />} />
          <Route path="/student/:id" element={<StudentDetail />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donation-success" element={<DonationSuccess />} />
          <Route path="/donation-history" element={<DonationHistory />} />
          <Route path="/contact-support" element={<ContactSupport />} />
          <Route path="/registration-success" element={<RegistrationSuccess />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/class-selection" element={<ClassSelection />} />
          <Route path="/subject-selection" element={<SubjectSelection />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
