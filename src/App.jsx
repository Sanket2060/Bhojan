  import React from "react";
  import { Routes, Route } from "react-router-dom";
  import Donor from "./pages/Donor";
  import Volunteer from "./pages/Volunteer";
  import NotFound from "./pages/NotFound";
  import LandingPage from "./pages/LandingPage";

  const App = () => {
    return (
      <div>
        <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/donor" element={<Donor />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  };
  export default App;