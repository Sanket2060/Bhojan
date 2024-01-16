import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import Donor from "./pages/Donor";
import Volunteer from "./pages/Volunteer";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import OTP from "./pages/OTP";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <Register/>
      
    </div>
  );
};

export default App;
