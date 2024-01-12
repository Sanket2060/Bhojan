import React, { useState } from 'react';
import Confirmation from "./Confirmation";

const DonorForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    foodItem: '',
    quantity: '',
    expirationTime: '',
  });

  const [isSure, setIsSure] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Additional logic if needed after form submission
  };

  const handleButtonClick = () => {
    setIsSure(true);
  };

  const handleCloseModal = () => {
    setIsSure(false);
  };

  const handleConfirmAction = () => {
    if (isSure) {
      setIsSure(false);
      // Move the form submission logic here
      handleSubmit({ preventDefault: () => {} });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Publish Listing</h1>
      <form onSubmit={handleSubmit}>
        {/* form components */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-semibold text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* Food Item Input */}
        <div className="mb-4">
          <label htmlFor="foodItem" className="block text-sm font-semibold text-gray-600">
            Food Item
          </label>
          <input
            type="text"
            id="foodItem"
            name="foodItem"
            value={formData.foodItem}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* Quantity Input */}
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-semibold text-gray-600">
            Quantity (Plates)
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* Expiration Time Input */}
        <div className="mb-4">
          <label htmlFor="expirationTime" className="block text-sm font-semibold text-gray-600">
            Available until
          </label>
          <input
            type="date"
            id="expirationTime"
            name="expirationTime"
            value={formData.expirationTime}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        {/* Submit Button */}
        <button type="button" onClick={handleButtonClick} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Post Listing
        </button>
        <Confirmation
        isOpen={isSure}
        onClose={handleCloseModal}
        onConfirm={handleConfirmAction}
        message="Confirm post litsing?"
      />
      </form>
    </div>
  );
};


export default DonorForm;
