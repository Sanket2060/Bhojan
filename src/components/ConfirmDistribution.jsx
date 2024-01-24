import React from "react";
import Confirmation from "./Confirmation";
import { toast, ToastContainer } from "react-toastify";

const CompletedDistribution = ({ completedItems }) => {
  const [isConfirmationOpen, setConfirmationOpen] = React.useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(null);

  const openConfirmation = (index) => {
    setSelectedItemIndex(index);
    setConfirmationOpen(true);
  };

  const closeConfirmation = () => {
    setSelectedItemIndex(null);
    setConfirmationOpen(false);
  };

  const onConfirm = () => {
    // Additional logic for handling completion confirmation if needed
    // You can call another function or perform any actions specific to completion
    const completedItem = completedItems[selectedItemIndex];
    // Perform completion action here if needed
    toast.success("Distribution Completed");
    closeConfirmation();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Completed Distributions</h1>
      {completedItems.length === 0 ? (
        <p className="text-gray-500">No completed distributions.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {completedItems.map((item, index) => (
            <div key={index} className="mb-8 p-4 bg-green-100 rounded-md">
              <h2 className="text-lg font-medium text-gray-900">
                {item.title}{" "}
                <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs">
                  {item.plates} Plates
                </span>
              </h2>
              <p>Name: {item.name}</p>
              <p>Location: {item.location}</p>
              <p>Number: {item.number}</p>
              {/* <p>Closing Time: {item.closingTime}</p> */}

              <div className="flex justify-center mt-4">
                {/* Additional button or UI elements specific to completed distributions */}
                {/* <button
                  onClick={() => openConfirmation(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Mark as Incomplete
                </button> */}
              </div>
            </div>
          ))}
        </div>
      )}
      <Confirmation
        isOpen={isConfirmationOpen}
        onClose={closeConfirmation}
        onConfirm={onConfirm}
        message="Confirm completion?"
      />
    </div>
  );
};

export default CompletedDistribution;
