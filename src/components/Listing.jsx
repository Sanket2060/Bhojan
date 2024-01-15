import React, { useState, useRef } from "react";
import User from "../assets/Catring.jpg";
import Accomplishment from "../components/Accomplishment.jsx";
import AccordionItem from "./AccordionItem"; // Import AccordionItem component
import PendingDistributions from "../components/PendingDistributions";
import WelcomeBack from "../components/WelcomeBack";
import Footer from "../components/Footer";

const Listing = ({ ActiveListings, onViewDetailsClick }) => {
  const [selectedContributor, setSelectedContributor] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);
  const [pendingItems, setPendingItems] = useState([]);

  const handleCancelDistribution = (index) => {
    const canceledItem = pendingItems[index];

    // Move the canceled item back to active listings
    setPendingItems((prevItems) => [...prevItems, canceledItem]);

    // Remove the item from pending distribution
    setPendingItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const pendingListingsRef = useRef(null);

  const handleDistribute = (index) => {
    const selectedOpportunity = ActiveListings[index];

    // Create a new distributed item
    const distributedItem = {
      ...selectedOpportunity,
      distributedBy: "userName", // Replace with the actual username
      distributionTime: new Date().toLocaleString(),
    };
 const updatedActiveListings = ActiveListings.filter((_, i) => i !== index);
    // Remove the distributed item from active listings
    setExpandedItem(null);

    // Add the item to pending distribution
    setPendingItems((prevItems) => [...prevItems, distributedItem]);

    // Scroll to the "Pending Listings" section
    pendingListingsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleToggle = (index) => {
    setExpandedItem((prevExpandedItem) =>
      prevExpandedItem === index ? null : index
    );
  };

  return (
    <div className="flex flex-col bg-gray-100 pt-10">
      {ActiveListings.map((contributor, index) => (
        <div
          key={index}
          className={`wrapper flex flex-col items-center lg:flex-row justify-between ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
          style={{
            width: "100%",
          }}
        >
          <div className="lg:w-[32rem] w-[100%]">
            <div className="border-orange-300 border-4 rounded-full w-[100%] h-[100%] relative left-0">
              <img
                className="object-cover rounded-full"
                src={User}
                alt="Contributor"
              />
            </div>
          </div>
          <div className={`lg:w-8/12 ${index % 2 === 0 ? "lg:text-left" : "lg:text-right"}`}>
            {selectedContributor === index ? (
              <AccordionItem
                key={index}
                item={contributor}
                index={index}
                expanded={true} // Expanded by default
                onToggle={() => setSelectedContributor(null)} // Close on click
                onDistribute={() => handleDistribute(index)} // Implement your distribute function
              />
            ) : (
              <div className="p-3">
                <div className="text-2xl text-[#ff4c70] font-bold">
                  {contributor.companyName}
                </div>
                <div className="text-xl text-grey-600">
                  {contributor.location}
                </div>
                <button
                  className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md"
                  onClick={() => {
                    setSelectedContributor(index);
                    onViewDetailsClick(contributor); // Pass the contributor details to the parent component
                  }}
                >
                  View Details
                </button>
                <p className="text-xs">This will book the item for 5 mins.</p>
              </div>
            )}
          </div>
        </div>
      ))}
      {pendingItems.length > 0 && (
        <div ref={pendingListingsRef} id="PendingListings" className="mt-10">
          <PendingDistributions
            pendingItems={pendingItems}
            onCancelDistribution={handleCancelDistribution}
          />
        </div>
      )}
    </div>
  );
};

export default Listing;
