import React, { useState, useEffect } from "react";

import { toast, ToastContainer } from "react-toastify";
// import Button from "./Button";
import ReCAPTCHA from "react-google-recaptcha";
import PendingDistributions from "./PendingDistributions";

const DonorForm = ({ onFormSubmit }) => {
  const [showForm, setShowForm] = useState(true);

  const handleCancel = () => {
    setShowForm(false);
  };
  const handleRecaptchaChange = (value) => {
    setCapVal(value);
    console.log("reCAPTCHA value:", value);
  };
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const [capVal, setCapVal] = useState(null);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsRecaptchaLoaded(true);
    }, 2000); // Adjust delay as needed
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    foodItem: "",
    quantity: "",
    expirationTime: "",
  });

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
    onFormSubmit(formData);
    console.log(formData);
    toast.success("Listing Posted");
    // Additional logic if needed after form submission
  };

  const handleButtonClick = () => {
    if (!capVal) {
      console.error("reCAPTCHA validation failed");
      // Simulating server-side verification delay
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      return;
    }
  };

  return (
    <div>
      {showForm ? (
        <>
          <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md">
            <h1 className="text-2xl font-bold mb-4">Publish Listing</h1>
            <form onSubmit={handleSubmit}>
              {/* form components */}
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-semibold text-gray-600"
                >
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
                <label
                  htmlFor="foodItem"
                  className="block text-sm font-semibold text-gray-600"
                >
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
                <label
                  htmlFor="quantity"
                  className="block text-sm font-semibold text-gray-600"
                >
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
                <label
                  htmlFor="expirationTime"
                  className="block text-sm font-semibold text-gray-600"
                >
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
              <div className="flex justify-center items-center ">
                {isRecaptchaLoaded ? (
                  <ReCAPTCHA
                    sitekey="6LeVh08pAAAAAGFv8aKqbVg0H5X5FpZi5XhZPHUo"
                    onChange={handleRecaptchaChange}
                  />
                ) : (
                  <div className="recaptcha-loading">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">
                        Loading reCAPTCHA...
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <ToastContainer />
              {/* Submit Button */}
              <div className="flex justify-center items-center mt-4">
              <button
                className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold "
                disabled={!capVal}
                onClick={() => {
                  if (capVal) {
                  handleButtonClick();
                  } else {
                  console.error("reCAPTCHA validation failed");
                  }
                }}
              >
                Post Listing
              </button>
              </div>
              {/* <Button onClick={handleCancel} variant="cancel" text="Cancel" /> */}
            </form>
          </div>
        </>
      ) : (
        <PendingDistributions onCancel={() => setShowForm(true)} />
      )}
    </div>
  );
};

export default DonorForm;
