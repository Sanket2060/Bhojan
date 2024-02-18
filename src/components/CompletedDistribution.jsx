import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CompletedDistribution = ({ completedItems=[] }) => {
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const itemsToShow = showMore ? completedItems : completedItems.slice(0, 4);

  const handleShowMoreClick = () => {
    setShowMore(true);
  };

  const handleShowLessClick = () => {
    setShowMore(false);
  };
  useEffect(()=>{
    console.log("All completed orders for user",itemsToShow);
  },[itemsToShow])
  

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Completed Distributions</h1>
      {itemsToShow && itemsToShow.length === 0 ? (
        <p className="text-gray-500">No completed distributions.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {itemsToShow.map((item, index) => 
          (
            <div key={index} className="mb-8 p-4 bg-green-100 rounded-md">
              <h2 className="text-lg font-medium text-gray-900">
                {item.order?.title || item.title}{" "}
                <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs">
                  {item.order?.foodForNumberOfPeople || item.foodForNumberOfPeople} Plates
                </span>
              </h2>
              <p>Name: {item.order?.title || item.title}</p>
              <p>Location: {item.order?.address || item.address}</p>
              <p>Number: {item.order?.contact || item.contact}</p>
            </div>
          ))}
        </div>
      )}

      {completedItems.length > 4 && (
        <div className="mt-4 flex items-center justify-center">
          {showMore ? (
            <button
              onClick={handleShowLessClick}
              className="flex items-center space-x-2 bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
            >
              <IoIosArrowUp />
              <span>Show Less</span>
            </button>
          ) : (
            <button
              onClick={handleShowMoreClick}
              className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              <IoIosArrowDown />
              <span>Show More</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CompletedDistribution;
