import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReCAPTCHA from "react-google-recaptcha";
import { useSelector } from "react-redux";
import axios from "axios";
// import Button from "./Button";
import { MapPin, Phone, Clock, User } from "react-feather";
import { toast, ToastContainer } from "react-toastify";
import Confirmation from "./Confirmation";
import { FaBowlFood } from "react-icons/fa6";

function AccordionItem({
  item,
  index,
  expanded,
  onToggle,
  onDistribute,
  getUsersPendingDistributions,
  retainAllData,
}) {
  const [countdown, setCountdown] = useState(5 * 60);

  const [capVal, setCapVal] = useState(null);
  const userDetails = useSelector((state) => state.auth.userDetails);

  //activate for recaptcha
  const handleRecaptchaChange = (value) => {
    setCapVal(value);
    // console.log("reCAPTCHA value:", value);
  };
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsRecaptchaLoaded(true);
    }, 2000); // Adjust delay as needed
  }, []);

  useEffect(() => {
    let countdownInterval;

    if (expanded) {
      // Start the countdown when the accordion item is expanded
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      toast.success("Reserved for 5 min");
    }

    return () => {
      setCountdown(5 * 60);
    };
  }, [expanded]);

  useEffect(() => {
    // Close the accordion when the countdown reaches 0
    if (countdown === 0 && expanded) {
      onToggle(false);
      toast.warn("Booking Cancelled");
      toast.error("Booking this item is blocked please try another item");
    }
  }, [countdown, index, onToggle]);

  const handleButtonClick = async () => {
    if (!capVal) {
      console.error("reCAPTCHA validation failed");
      toast.error("reCAPTCHA validation failed");
      // Simulating server-side verification delay
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      // onToggle(index);
    } else onDistribute(index);
    // onToggle(index);
    // toast.success("Distribution successful!");
    await addDistributorToOrder();
    console.log("Distribution successful!");

    // getUsersPendingDistributions();
    retainAllData();
    toast.success("Alerted Donor - Pending Distribution");
    return;
  };

  // const handleConfirmAction = () => {
  //   // Only proceed with the action if the state is still true
  //   if (isSure) {
  //     onToggle(index);
  //     onDistribute(index);
  //     setIsSure(false); // Reset the state after the action is performed
  //   }
  // };

  const containerStyle = {
    backgroundColor: "bg-white",
    shadow: "shadow-md",
  };
  const formatDateTime = (createdAt) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    const formattedDate = new Date(createdAt).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  const closingTimeWithCountdown = (createdAt, closingTimeInHours) => {
    const closingTimeInMilliseconds = closingTimeInHours * 60 * 60 * 1000;

    // Convert createdAt to a Date object
    const itemCreatedAt = new Date(createdAt);

    // Calculate the closing date by adding closing time to createdAt
    const closingDate = new Date(
      itemCreatedAt.getTime() + closingTimeInMilliseconds
    );

    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };

    const formattedClosingDate = closingDate.toLocaleDateString(
      "en-US",
      options
    );

    // Calculate the remaining countdown time
    const countdown1 = Math.max(
      0,
      Math.floor((closingDate.getTime() - Date.now()) / 1000)
    );

    return { formattedClosingDate, countdown1 };
  };
  const { formattedClosingDate, countdown1 } = closingTimeWithCountdown(
    item.createdAt,
    item.closingTime
  );

  const addDistributorToOrder = async () => {
    try {
      const response = await axios.post(
        "   http://localhost:9005/api/v1/order/add-distributor-to-order",
        {
          _id: userDetails._id,
          _orderId: item._id, //yei nai ho sure??
        },
        {
          headers: {
            "Content-Type": "application/json", //says data at body is at json format
          },
          withCredentials: true, // Send cookies with the request
        }
      );
      //console.log("Distributor added to order successfully", response);
      // console.log(response.data.data);
      // setAccordionItems(response.data.data.result);
      // setActiveListings(response.data);
    } catch (error) {
      //console.log("Error at listing active orders at donor", error);
    }
  };

  const contact = item.order ? item.order.contact : item.contact;
  const maskContact = (contact) => {
    return "●●●●●●●●●●";
  };
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return (
    <div
      className={`${expanded ? "bg-green-50  overflow-hidden " : ""}${
        containerStyle.backgroundColor
      } ${containerStyle.shadow} ${""}`}
    >
      {/* {expanded && ( */}
      <div
        className={`p-4 dark:bg-[#1F1A24] dark:text-gray-50 ${
          countdown1 === 0 ? "bg-red-100" : ""
        }`}
      >
        {/* Content of the accordion item */}
        <div className="bg-white dark:bg-[#1F1A24] p-4 rounded-md shadow-md relative">
          <p className="text-lg text-center pb-2 border-b font-semibold text-gray-800 dark:text-gray-200">
            {item.title}
          </p>
          <div className="mt-2">
            <p className="flex items-center text-gray-600 dark:text-gray-300 m-1">
              <FaBowlFood className="mr-3" /> Food Item:{" "}
              {item.order ? item.order.foodItems : item.foodItems}
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="mr-2" /> Location:{" "}
              {item.order ? item.order.address : item.address}
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-300">
              <User className="mr-2" /> Plates: {item.foodForNumberOfPeople}
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-300 ">
              <Phone className="mr-2" />
              Contact:
              <p
                className=" items-center text-gray-600 dark:text-gray-300 inline-flex"
                style={{
                  filter: !expanded ? "blur(5px)" : "none",
                }}
              >
                {!expanded ? maskContact(contact) : contact}
              </p>
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-300">
              <Clock className="mr-2" /> Closes at:{" "}
              {countdown1 === 0 ? (
                "closed"
              ) : (
                <>
                  {formattedClosingDate} (in {Math.floor(countdown1 / 3600)}:
                  {Math.floor((countdown1 % 3600) / 60)}:{countdown1 % 60}{" "}
                  minutes)
                </>
              )}
            </p>
          </div>
          <div className="flex justify-between flex-col sm:flex-row">
            {expanded && (
              <>
                <button
                  className="md:absolute p-3 md:top-1/2 md:right-4 md:transform md:-translate-y-1/2 md:py-3 md:px-6 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-0 dark:bg-red-600 dark:hover:bg-red-700"
                  onClick={() => setConfirmationOpen(true)}
                >
                  Cancel booking
                </button>
                <Confirmation
                  isOpen={confirmationOpen}
                  onClose={() => setConfirmationOpen(false)}
                  onConfirm={() => {
                    setConfirmationOpen(false);
                    onToggle(index);
                  }}
                  message={`Cancel booking of "${item.title}"?`}
                />
              </>
            )}
            {!expanded && (
              <>
                <button
                  className="md:absolute p-3 md:top-1/2 md:right-4 md:transform md:-translate-y-1/2 md:py-3 md:px-6  bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-0 dark:bg-gray-600 dark:hover:bg-gray-700"
                  onClick={() => setConfirmationOpen(true)}
                >
                  Book distribution
                </button>
                <Confirmation
                  isOpen={confirmationOpen}
                  onClose={() => setConfirmationOpen(false)}
                  onConfirm={() => {
                    setConfirmationOpen(false);
                    onToggle(index);
                  }}
                  message={`Book distribution for "${item.title}"?`}
                />
              </>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-200 mt-2 p-2 s">
          <p>Listed on: {formatDateTime(item.createdAt)}</p>
          {expanded && (
            <p>
              Booked for: {Math.floor(countdown / 60)}:{countdown % 60} minutes
            </p>
          )}
        </div>
        {expanded && (
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {isRecaptchaLoaded ? (
              <ReCAPTCHA
                sitekey="6LeVh08pAAAAAGFv8aKqbVg0H5X5FpZi5XhZPHUo"
                onChange={handleRecaptchaChange}
              />
            ) : (
              <div className="recaptcha-loading">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading reCAPTCHA...</span>
                </div>
              </div>
            )}

            <div className="items-end mt-4 sm:mt-0">
              <button
                className="bg-blue-500 text-white py-2 px-4 sm:py-4 sm:px-7 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 cursor-pointer"
                // disabled={!capVal}
                onClick={() => {
                  if (capVal) {
                    handleButtonClick();
                  } else {
                    console.error("reCaptcha validation failed");
                    toast.error("reCaptcha validation failed");
                  }
                }}
              >
                Confirm distribution
              </button>
            </div>
          </div>
        )}
      </div>
      {/* )} */}
    </div>
  );
}

AccordionItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    plates: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    closingTime: PropTypes.string.isRequired,
    listedOn: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  expanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDistribute: PropTypes.func.isRequired,
};

export default AccordionItem;
