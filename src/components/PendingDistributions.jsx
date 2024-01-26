import React, { useEffect } from "react";
import Button from "./Button";
import Confirmation from "./Confirmation";
import { toast, ToastContainer } from "react-toastify";

const PendingDistributions = ({ pendingItems, onCancelDistribution, onOpenComplete }) => {
  const [isConfirmationOpen, setConfirmationOpen] = React.useState(false);
  const [canceledItemIndex, setCanceledItemIndex] = React.useState(null);

  useEffect(() => {
    console.log("Pending Items:", pendingItems);
  }, [pendingItems]);
  const openConfirmation = (index) => {
    setCanceledItemIndex(index);
    setConfirmationOpen(true);
  };

  const onConfirm = () => {
    const canceledItem = pendingItems[canceledItemIndex];
    onCancelDistribution(canceledItemIndex);
    toast.warning("Distribution Cancelled");
    closeConfirmation();
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
                {item.order ? item.order?.title : item.title}{" "}
                <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs">
                  {item.order
                    ? item.order?.foodForNumberOfPeople
                    : item.foodForNumberOfPeople}{" "}
                  Plates
                </span>
              </h2>
              <p>Name: {item.order ? item.order?.title : item.title}</p>
              <p>Location: {item.order ? item.order?.address : item.address}</p>
              <p>Contact: {item.order ? item.order?.contact : item.contact}</p>
              <p>
                Closing Time:{" "}
                {item.order ? item.order?.closingTime : item.closingTime} hrs
              </p>
              {/* donor ra distributor ma differently code pathako le esto gareko */}

              <div className="flex justify-center mt-4">
                <Button
                  onClick={() => openConfirmation(index)}
                  variant="cancel"
                  text="Cancel"
                />

                <Button
                  onClick={() => onOpenComplete(index)}
                  variant="complete"
                  text="Completed"
                />
              </div>
            </div>
          ))}
        </div>
      )}
      <Confirmation
        // orderId={pendingItems[canceledItemIndex]?.order?._id} //chatgpt code: Pass relevant information        isOpen={isConfirmationOpen}
        onClose={closeConfirmation}
        onConfirm={onConfirm}
        message="Confirm cancellation?"
      />
    </div>
  );
};

export default PendingDistributions;
