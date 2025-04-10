// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import ReCAPTCHA from "react-google-recaptcha";
// import { useSelector } from "react-redux";
// import axios from "axios";

// // import Button from "./Button";

// import { toast, ToastContainer } from "react-toastify";

// function AccordionItem({
//   item,
//   index,
//   expanded,
//   onToggle,
//   onDistribute,
//   getUsersPendingDistributions,
//   retainAllData,
// }) {
//   const [countdown, setCountdown] = useState(5 * 60); // 5 minutes in seconds
//   const [capVal, setCapVal] = useState(null);
//   const userDetails = useSelector((state) => state.auth.userDetails);

//   //activate for recaptcha
//   const handleRecaptchaChange = (value) => {
//     setCapVal(value);
//     console.log("reCAPTCHA value:", value);
//   };
//   const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
//   const [isBlurred, setIsBlurred] = useState(true);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     // Simulate loading delay
//     setTimeout(() => {
//       setIsRecaptchaLoaded(true);
//     }, 2000); // Adjust delay as needed
//   }, []);

//   useEffect(() => {
//     let countdownInterval;

//     if (expanded) {
//       // Start the countdown when the accordion item is expanded
//       countdownInterval = setInterval(() => {
//         setCountdown((prevCountdown) => prevCountdown - 1);
//       }, 1000000);
//       toast.success("Reserved for 5 min");
//     }

//     return () => {
//       clearInterval(countdownInterval);
//     };
//   }, [expanded]);

//   useEffect(() => {
//     // Close the accordion when the countdown reaches 0
//     if (countdown === 0 && expanded) {
//       onToggle(false);
//       toast.warn("Booking Cancelled");
//       toast.error("Booking this item is blocked please try another item");
//     }
//   }, [countdown, index, onToggle]);

//   const handleButtonClick = async () => {
//     // if (!capVal) {
//     console.error("reCAPTCHA validation failed");
//     // Simulating server-side verification delay
//     // await new Promise((resolve) => setTimeout(resolve, 2000));
//     onDistribute(index);
//     onToggle(index);
//     toast.success("Distribution successful!");
//     addDistributorToOrder();
//     // getUsersPendingDistributions();
//     retainAllData();
//     setIsBlurred(false);
//     setShowModal(true);
//     return;
//     // }
//   };

//   // const handleConfirmAction = () => {
//   //   // Only proceed with the action if the state is still true
//   //   if (isSure) {
//   //     onToggle(index);
//   //     onDistribute(index);
//   //     setIsSure(false); // Reset the state after the action is performed
//   //   }
//   // };

//   const containerStyle = {
//     backgroundColor: "bg-white",
//     shadow: "shadow-md",
//   };
//   const handleModalClose = () => {
//     setShowModal(false);
//   };

//   const addDistributorToOrder = async () => {
//     try {
//       const response = await axios.post(
//         "    https://bhojanbd-1.onrender.com/api/v1/order/add-distributor-to-order",
//         {
//           _id: userDetails._id,
//           _orderId: item._id, //yei nai ho sure??
//         },
//         {
//           headers: {
//             "Content-Type": "application/json", //says data at body is at json format
//           },
//           withCredentials: true, // Send cookies with the request
//         }
//       );
//       console.log("Distributor added to order successfully", response);
//       console.log(response.data.data);
//       // setAccordionItems(response.data.data.result);
//       // setActiveListings(response.data);
//     } catch (error) {
//       console.log("Error at listing active orders at donor", error);
//     }
//   };

//   return (
//     <div
//       className={`${expanded ? "bg-green-50  overflow-hidden " : ""}${
//         containerStyle.backgroundColor
//       } ${containerStyle.shadow} ${""}`}
//     >
//       <button
//         className="flex items-center justify-between w-full py-3 px-4 bg-gray-50 hover:bg-gray-200 focus:outline-none focus:ring-0 relative dark:bg-[#1F1A24]"
//         onClick={() => onToggle(index)}
//       >
//         <span className="text-lg font-medium text-gray-900 dark:text-gray-200">
//           {item.address}{" "}
//           <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs">
//             {item.foodForNumberOfPeople} Plates
//           </span>
//         </span>
//         <svg
//           className={`w-4 h-4 ml-2  ${
//             expanded ? "text-indigo-500 rotate-180" : "text-gray-400"
//           }`}
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>
//       {expanded && (
//         <div className="p-4  dark:bg-[#1F1A24] dark:text-gray-50">
//           {/* Content of the accordion item */}
//           <p>Name: {item.title}</p>
//           <p>Location: {item.address}</p>
//           <p>Number: {item.contact}</p>
//           <p>Closing Time: {item.closingTime}</p>

//           <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-200 mt-2 p-2">
//             <p>Listed on: {item.listedOn}</p>
//             <p>
//               Booked for: {Math.floor(countdown / 60)}:{countdown % 60} minutes
//             </p>
//           </div>
//           <div className="flex flex-col sm:flex-row justify-between items-center">
//             {/* {isRecaptchaLoaded ? (
//               <ReCAPTCHA
//                 sitekey="6LeVh08pAAAAAGFv8aKqbVg0H5X5FpZi5XhZPHUo"
//                 onChange={handleRecaptchaChange}
//               />
//             ) : (
//               <div className="recaptcha-loading">
//                 <div className="spinner-border" role="status">
//                   <span className="visually-hidden">Loading reCAPTCHA...</span>
//                 </div>
//               </div>
//              )}  */}

//             <div className="items-end mt-4 sm:mt-0">
//               <button
//                 className="bg-blue-500 text-white py-2 px-4 sm:py-4 sm:px-7 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 cursor-pointer "
//                 // disabled={!capVal}
//                 onClick={() => {
//                   toast.success("Alerted Donor - Pending Distribution");
//                   // if (capVal) {
//                   handleButtonClick();
//                   // } else {
//                   // console.error("reCAPTCHA validation failed");
//                   // }
//                 }}
//               >
//                 I'll distribute
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// AccordionItem.propTypes = {
//   item: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     plates: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     closingTime: PropTypes.string.isRequired,
//     listedOn: PropTypes.string.isRequired,
//   }).isRequired,
//   index: PropTypes.number.isRequired,
//   expanded: PropTypes.bool.isRequired,
//   onToggle: PropTypes.func.isRequired,
//   onDistribute: PropTypes.func.isRequired,
// };

// export default AccordionItem;
