import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/pages/login';
import SignUp from './components/pages/signup';
import Home from './components/pages/home';
import Profile from './components/pages/profile';
import Campaigns from './components/pages/campaigns';
import Users from './components/pages/users';
import { useUser } from './components/context/UserContext';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PrivateRoute=({children})=>{
  const [isUserLoggeIn]=useUser();
  return isUserLoggeIn ? children : <Navigate to="/" replace />
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/campaigns" element={<Campaigns/>} />
        <Route path="/users" element={<Users/>} />
        {/* <Route path="/about" element={<PrivateRoute><About/></PrivateRoute>} /> */}

      </Routes>
    </Router>
  );
}

export default App;