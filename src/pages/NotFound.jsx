import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
    
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4 animate__animated animate__shakeX">404</h1>
        <p className="text-2xl text-gray-600 mb-8 animate__animated animate__fadeIn">Page not found</p>
        <Link to="/" className="text-blue-500 hover:underline transition duration-300 animate__animated animate__fadeIn">
          Go back to home
        </Link>
      </div>
    </div>
    </>
  );
};

export default NotFound;
