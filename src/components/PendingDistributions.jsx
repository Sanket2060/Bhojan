import React, { useEffect } from "react";
import Button from "./Button";
import Confirmation from "./Confirmation";
import { toast, ToastContainer } from "react-toastify";

const PendingDistributions = ({
  pendingItems,
  onCancelDistribution,
  isDonorPage,
  onCompleteProp,
}) => {
  const [isConfirmationOpen, setConfirmationOpen] = React.useState(false);
  const [canceledItemIndex, setCanceledItemIndex] = React.useState(null);
  const [isCompleteConfirmationOpen, setCompleteConfirmationOpen] =
    React.useState(false);
  const [completedItemIndex, setCompletedItemIndex] = React.useState(null);

  useEffect(() => {
    console.log("Pending Items:", pendingItems);
  }, []);
  const openCancelConfirmation = (index) => {
    setCanceledItemIndex(index);
    setConfirmationOpen(true);
  };

  const onConfirmCancel = () => {
    // const canceledItem = pendingItems[canceledItemIndex];
    onCancelDistribution(canceledItemIndex);
    toast.warning("Distribution Cancelled");
    closeCancelConfirmation();
    // console.log("cancel called");
  };
  const closeCancelConfirmation = () => {
    setCanceledItemIndex(null);
    setConfirmationOpen(false);
  };

  const handleCompleteClick = (index) => {
    setCompletedItemIndex(index);
    setCompleteConfirmationOpen(true);
  };

  const onConfirmComplete = () => {
    if (onCompleteProp && completedItemIndex !== null) {
      onCompleteProp(pendingItems[completedItemIndex]);
      toast.success("Distribution Completed");
    }
    setCompleteConfirmationOpen(false);
  };

  const closeCompleteConfirmation = () => {
    setCompletedItemIndex(null);
    setCompleteConfirmationOpen(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Pending Distributions</h1>
      {pendingItems.length === 0 ? (
        <p className="text-gray-500">No pending distributions.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pendingItems.map((item, index) => (
            <div
              key={index}
              className="mb-8 p-4 bg-yellow-100 rounded-md relative"
            >
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
              <div className="absolute top-1/3 right-5 transform -translate-y-1/2">
                {isDonorPage && (
                  <Button
                    onClick={() => handleCompleteClick(index)}
                    variant="complete"
                    text=""
                  />
                )}
              </div>

              <div className="flex justify-center mt-4">
                <Button
                  onClick={() => openCancelConfirmation(index)}
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
        onClose={closeCancelConfirmation}
        onConfirm={onConfirmCancel}
        message="Are you sure you want to CANCEL?"
      />
      <Confirmation
        isOpen={isCompleteConfirmationOpen}
        onClose={closeCompleteConfirmation}
        onConfirm={onConfirmComplete}
        message="Is the distribution COMPLETED?"
      />
    </div>
  );
};

export default PendingDistributions;
