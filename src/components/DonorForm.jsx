import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
// import Button from "./Button";
import ReCAPTCHA from "react-google-recaptcha";
import PendingDistributions from "./PendingDistributions";

const DonorForm = ({ onFormSubmit }) => {
  const [showForm, setShowForm] = useState(true);
  const { register, handleSubmit, formState } = useForm();

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
  const handleSubmits = () => {
    console.log(formData);
    // e.preventDefault();
    onFormSubmit(formData);
    setFormData({
      title: "",
      foodItem: "",
      quantity: "",
      expirationTime: "",
    });
    try {
    } catch (error) {}
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

  const createOrder = () => {};

  return (
    <div>
      {showForm ? (
        <>
          <div className="max-w-md mx-auto mt-8 p-4 bg-gray-50 rounded-md dark:bg-[#1F1A24]  ">
            <h1 className="text-2xl font-bold mb-4 dark:text-gray-100 ">
              Publish Listing
            </h1>
            <form
              onSubmit={() => {
                // handleSubmit(createOrder)
                handleSubmits();
              }}
            >
              {/* form components */}
              <div className="mb-4 ">
                <label
                  htmlFor="title"
                  className="block text-sm font-semibold text-gray-600 dark:text-gray-100"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border-collapse rounded-md dark:bg-gray-700 dark:text-gray-100"
                  required
                />
              </div>

              {/* Food Item Input */}
              <div className="mb-4">
                <label
                  htmlFor="foodItem"
                  className="block text-sm font-semibold text-gray-600 dark:text-gray-100"
                >
                  Food Item
                </label>
                <input
                  type="text"
                  id="foodItem"
                  name="foodItem"
                  value={formData.foodItem}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border-collapse rounded-md dark:bg-gray-700 dark:text-gray-100"
                  required
                />
              </div>

              {/* Quantity Input */}
              <div className="mb-4">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-semibold text-gray-600 dark:text-gray-100 "
                >
                  Quantity (Plates)
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full  border-collapse rounded-md dark:bg-gray-700 dark:text-gray-100"
                  required
                />
              </div>

              {/* Expiration Time Input */}
              <div className="mb-4">
                <label
                  htmlFor="expirationTime"
                  className="block text-sm font-semibold text-gray-600 dark:text-gray-100"
                >
                  Available until
                </label>
                <input
                  type="date"
                  id="expirationTime"
                  name="expirationTime"
                  value={formData.expirationTime}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full  border-collapse rounded-md dark:bg-gray-700 dark:text-gray-100"
                  required
                />
              </div>
              <div className="flex justify-center items-center  ">
                {localStorage.theme === "dark"
                  ? console.log("darktheme")
                  : console.log("lighttheme")}
                {isRecaptchaLoaded ? (
                  <ReCAPTCHA
                    sitekey="6LeVh08pAAAAAGFv8aKqbVg0H5X5FpZi5XhZPHUo"
                    onChange={handleRecaptchaChange}
                    theme={localStorage.theme === "dark" ? "dark" : "light"}
                  />
                ) : (
                  <div className="recaptcha-loading">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden dark:text-gray-400">
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
                  type="submit"
                  className="bg-blue-500 text-white  px-6 py-3 rounded-full text-lg font-semibold "
                  // disabled={!capVal}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmits();
                    handleButtonClick();

                    // if (capVal) {
                    // } else {
                    // console.error("reCAPTCHA validation failed");
                    // }
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
