import React from "react";
import Button from "./Button";
import Confirmation from "./Confirmation"; // Corrected import

const PendingDistributions = ({ pendingItems, onCancelDistribution }) => {
  const [isConfirmationOpen, setConfirmationOpen] = React.useState(false);
  const [canceledItemIndex, setCanceledItemIndex] = React.useState(null);

  const openConfirmation = (index) => {
    setCanceledItemIndex(index);
    setConfirmationOpen(true);
  };

  const closeConfirmation = () => {
    setCanceledItemIndex(null);
    setConfirmationOpen(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Pending Distributions</h1>
      {pendingItems.length === 0 ? (
        <p className="text-gray-500">No pending distributions.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pendingItems.map((item, index) => (
            <div key={index} className="mb-8 p-4 bg-yellow-100 rounded-md">
              <h2 className="text-lg font-medium text-gray-900">
                {item.title}{" "}
                <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs">
                  {item.plates} Plates
                </span>
              </h2>
              <p>Name: {item.name}</p>
              <p>Location: {item.location}</p>
              <p>Number: {item.number}</p>
              <p>Closing Time: {item.closingTime}</p>

              <div className="flex justify-center mt-4">
                <Button
                  onClick={() => openConfirmation(index)}
                  variant="cancel"
                  text="Cancel"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      <Confirmation
        isOpen={isConfirmationOpen}
        onClose={closeConfirmation}
        onConfirm={() => {
          onCancelDistribution(canceledItemIndex);
        }}
        message="Confirm cancellation?"
      />
    </div>
  );
};

export default PendingDistributions;
