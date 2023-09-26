import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/login';
import SignUp from './components/pages/signup';
import Home from './components/pages/home';
import Profile from './components/pages/profile';
import Campaigns from './components/pages/campaigns';
import Users from './components/pages/users';
// import { useUser } from './components/context/UserContext';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LandingPage from './components/pages/landingpage';
import AdminLogin from './components/pages/adminlogin';
import TermsAndConditions from './components/pages/termsandconditions';
import PrivacyPolicy from './components/pages/privacypolicy';
import UserHome from './components/pages/userhome';
import UserProfile from './components/pages/userprofile';
import EmailSubscribers from './components/pages/emailsubscribers';
import Contact from './components/pages/contact';

// const PrivateRoute=({children})=>{
//   const [isUserLoggeIn]=useUser();
//   return isUserLoggeIn ? children : <Navigate to="/" replace />
// }
function App() {  
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/campaigns" element={<Campaigns/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/adminlog" element={<AdminLogin/>} />
        <Route path="/userhome" element={<UserHome/>} />
        <Route path="/userprofile" element={<UserProfile/>} />
        <Route path="/termsandconditions" element={<TermsAndConditions/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        <Route path="/emailsub" element={<EmailSubscribers/>} />
        {/* <Route path="/about" element={<PrivateRoute><About/></PrivateRoute>} /> */}

      </Routes>
    </Router>
  );
}

export default App;