import React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import NewProfile from "./pages/newprofile";
import ProtectedRoute from "./pages/Protected";
import HelpUs from "./pages/HelpUs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "./features/user/authslice.js";
import { fetchUserData } from "./features/user/authActions.js";
const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const accessTokenm = document.cookie;
    console.log(accessTokenm);
    const accessToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="));
    const refreshToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("refreshToken="));

    if (accessToken && refreshToken) {
      dispatch(fetchUserData(navigate));
    } else {
      dispatch(logout());
      // Make sure to add server-side logout logic here
    }
  }, [dispatch]); // Ensure dispatch is defined and accessible
  return (
    <div>
      {/* ToastContainer for Toastify */}
      <ToastContainer />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route
          path="/donor"
          element={
            <ProtectedRoute authentication={true}>
              <Donor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/volunteer"
          element={
            <ProtectedRoute authentication={true}>
              <Volunteer />
            </ProtectedRoute>
          }
        />
        {/* <ProtectedRoute path="/donor" element={<Donor />} /> */}
        {/* <ProtectedRoute path="/volunteer" element={<Volunteer />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route
          path="/newprofile"
          element={
            <ProtectedRoute>
              <NewProfile />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/otp" element={<OTP />} /> */}
        <Route path="/otp/:userId" element={<OTP />} />
        <Route
          path="/register/:username/:email/:userId"
          element={<Register />}
        />
        <Route path="/helpus" element={<HelpUs />} />

        <Route path="/otp/:userId" element={<OTP />} />
        <Route
          path="/register/:username/:email/:userId"
          element={<Register />}
        />
      </Routes>
    </div>
  );
};

export default App;
