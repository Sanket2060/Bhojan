import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlankPage = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <div className="bg-red-200 rounded-full w-[120%]"></div>
      </div>
      <Footer />
    </>
  );
};

export default BlankPage;
