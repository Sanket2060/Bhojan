import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
// import Button from "./Button";
import ReCAPTCHA from "react-google-recaptcha";
import DistributionTable from "./DistributionTable";

const DonorForm = ({ onFormSubmit, setIsDistribute }) => {
  const [showForm, setShowForm] = useState(true);
  const { register, handleSubmit, formState } = useForm();

  const handleCancel = () => {
    // setShowForm(false);
  };
  const handleRecaptchaChange = (value) => {
    setCapVal(value);
    //console.log("reCAPTCHA value:", value);
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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle form submission
  const handleSubmits = async () => {
    // if (!formData.expirationTime) {
    //   toast.error("Expiration time is required");
    //   return;
    // }

    // // Parse expiration time
    // const [hours, minutes] = formData.expirationTime.split(":");
    // const selectedHours = parseInt(hours, 10);
    // const selectedMinutes = parseInt(minutes, 10);

    // if (isNaN(selectedHours) || isNaN(selectedMinutes)) {
    //   console.error("Invalid expiration time format");
    //   return;
    // }

    // const selectedTimeInMinutes = selectedHours * 60 + selectedMinutes;

    // // Get current time
    // const currentTime = new Date();
    // const currentHours = currentTime.getHours();
    // const currentMinutes = currentTime.getMinutes();
    // const currentTotalMinutes = currentHours * 60 + currentMinutes;

    // // Calculate time difference
    // let timeDifference = selectedTimeInMinutes - currentTotalMinutes;

    // // Handle cases where selected time is on the next day
    // if (timeDifference < 0) {
    //   timeDifference += 24 * 60; // Add 24 hours in minutes
    // }

    // if (isNaN(timeDifference)) {
    //   console.error("Error calculating time difference");
    //   return;
    // }

    // console.log("Time Difference in Minutes:", timeDifference);
    //console.log(formData);
    // e.preventDefault();
    onFormSubmit(formData);
    setFormData({
      title: "",
      foodItem: "",
      quantity: "",
      expirationTime: "",
    });
    if (!formData.title.trim()) {
      toast.error("Title is required");
      return;
    }

    if (!formData.foodItem.trim()) {
      toast.error("Food Item is required");
      return;
    }

    if (
      !formData.quantity ||
      isNaN(formData.quantity) ||
      formData.quantity <= 0
    ) {
      toast.error("Quantity must be a positive number");
      return;
    }
    if (formData.quantity == 69 || formData.expirationTime == 69) {
      toast.error("69 halera funny vaidaina");
      return;
    } else if (formData.quantity == 420 || formData.expirationTime == 420) {
      toast.error("420 halera funny vaidaina");
      return;
    }

    if (!formData.expirationTime) {
      toast.error("Expiration time is required");
      return;
    }
    if (!capVal) {
      toast.error("reCAPTCHA validation failed");
      return;
    }

    try {
      setLoading(true);

      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsDistribute(true);
      setSuccess(true);
      toast.success("Listing Posted Successfully");
    } catch (error) {
      toast.error("Error posting listing");
    } finally {
      setLoading(false);
    }
    toast.success("Listing Posted");
    // Additional logic if needed after form submission
  };

  const createOrder = () => {};

  return (
    <div>
      {showForm ? (
        <>
          <div className="max-w-md mx-auto mt-8 p-10 bg-blue-100 rounded-md dark:bg-[#1F1A24]">
            <h1 className="text-2xl font-bold mb-4 dark:text-gray-100">
              Publish Listing
            </h1>
            <form
              onSubmit={() => {
                // handleSubmit(createOrder)
                handleSubmits();
              }}
            >
              {/* form components */}
              <div className="mb-4">
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
                  className="mt-1 p-2 w-full border rounded-md dark:border-[#181c1c] dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring focus:border-blue-300"
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
                  className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 dark:border-[#181c1c] dark:text-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>

              {/* Quantity Input */}
              <div className="mb-4">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-semibold text-gray-600 dark:border-[#859896] dark:text-gray-100"
                >
                  Quantity (Plates)
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 dark:border-[#181c1c] dark:text-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>

              {/* Expiration Time Input */}
              <div className="mb-4">
                <label
                  htmlFor="expirationTime"
                  className="block text-sm font-semibold text-gray-600 dark:border-[#859896] dark:text-gray-100"
                >
                  Available for Pickup Until (in hrs)
                </label>
                <input
                  type="number"
                  id="expirationTime"
                  name="expirationTime"
                  {...register("expirationTime", {
                    required: "Expiration time is required",
                  })}
                  value={formData.closingTime}
                  className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 dark:border-[#181c1c] dark:text-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                  required
                  onChange={handleInputChange}
                />
                <span className="text-red-500">
                  {formState.errors.expirationTime?.message}
                </span>
              </div>

              <div className="flex justify-center items-center mb-4">
                {/* {localStorage.theme === "dark"
                  ? //console.log("darktheme")
                  : //console.log("lighttheme")} */}
                {isRecaptchaLoaded ? (
                  <ReCAPTCHA
                    sitekey="6LeVh08pAAAAAGFv8aKqbVg0H5X5FpZi5XhZPHUo"
                    onChange={handleRecaptchaChange}
                    theme={localStorage.theme === "dark" ? "light" : "dark"}
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

              <div className="flex justify-center items-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold focus:outline-none focus:ring focus:border-blue-300"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmits();
                    if (capVal) {
                    } else {
                      console.error("reCAPTCHA validation failed");
                    }
                  }}
                >
                  {loading ? (
                    // Simple CSS-based loading spinner
                    <div
                      style={{
                        border: "4px solid rgba(0, 0, 0, 0.1)",
                        borderTop: "4px solid #3498db",
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                        animation: "spin 1s linear infinite",
                      }}
                    ></div>
                  ) : success ? (
                    "✔ Listing Posted!"
                  ) : (
                    "Post Listing"
                  )}
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <DistributionTable onCancel={() => setShowForm(true)} />
      )}
    </div>
  );
};

export default DonorForm;
