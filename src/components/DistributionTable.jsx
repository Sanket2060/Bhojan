import React, { useEffect, useState } from "react";
import Button from "./Button";
import Confirmation from "./Confirmation";
import { toast, ToastContainer } from "react-toastify";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import axios from "axios";

const DistributionTable = ({
  pendingItems,
  onCancelDistribution,
  isDonorPage,
  isCompletedTable,
  onCompleteProp,
  cancelOrder,
  completeOrder,
  allCompletedOrdersForDonor,
  getCompletedOrders,
  currentActiveListings,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const [isConfirmationOpen, setConfirmationOpen] = React.useState(false);
  const [canceledItemIndex, setCanceledItemIndex] = React.useState(null);
  const [isCompleteConfirmationOpen, setCompleteConfirmationOpen] =
    React.useState(false);
  const [completedItemIndex, setCompletedItemIndex] = React.useState(null);
  const [cancellingItemOrderId, setCancellingItemOrderId] = useState("");
  const [completingItemOrderId, setCompletingItemOrderId] = useState("");
  //visibility on mobile
  const [showDetails, setShowDetails] = useState(false);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const [expandedItemIndex, setExpandedItemIndex] = useState(null);

  // useEffect(() => {
  //   console.log("Pending Items:", pendingItems);
  // }, [pendingItems]);

  const openConfirmation = (index) => {
    setCanceledItemIndex(index);
    setConfirmationOpen(true);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(pendingItems.length / itemsPerPage);
  const visibleItems = pendingItems.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredItems = visibleItems.filter((item) => {
    const itemTitle = item.title || (item.order && item.order.title);
    const itemLocation = item.address || (item.order && item.order.address);

    if (!itemTitle || !itemLocation) {
      console.error("Invalid item or item title/location:", item);
      return false;
    }

    return (
      itemTitle.toLowerCase().includes(searchTerm.toLowerCase()) &&
      itemLocation.toLowerCase().includes(locationFilter.toLowerCase())
    );
  });

  const sortItems = (option) => {
    if (option === sortOption) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortOption(option);
      setSortDirection("asc");
    }
  };

  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOption === "plates") {
      const aPlates = a.order
        ? a.order.foodForNumberOfPeople
        : a.foodForNumberOfPeople;
      const bPlates = b.order
        ? b.order.foodForNumberOfPeople
        : b.foodForNumberOfPeople;
      return sortDirection === "asc" ? aPlates - bPlates : bPlates - aPlates;
    } else if (sortOption === "closingTime") {
      const aClosingTime = a.order ? a.order.closingTime : a.closingTime;
      const bClosingTime = b.order ? b.order.closingTime : b.closingTime;
      return sortDirection === "asc"
        ? aClosingTime - bClosingTime
        : bClosingTime - aClosingTime;
    } else {
      return 0;
    }
  });

  const onConfirmCancel = () => {
    onCancelDistribution(canceledItemIndex);
    toast.warning("Distribution Cancelled");
    closeCancelConfirmation();
    cancelOrder(cancellingItemOrderId);
  };

  const closeCancelConfirmation = () => {
    setCanceledItemIndex(null);
    setConfirmationOpen(false);
  };

  const handleCompleteClick = async (index, orderId) => {
    //console.log("HandleCompleteClick");
    //console.log("orderId", orderId);
    setCompletedItemIndex(index);
    setCompleteConfirmationOpen(true); //confirmation box kholna ko lagi
    // await completeOrder(orderId);   //yesma matra ho id chaini
  };

  const onConfirmComplete = async () => {
    if (onCompleteProp && completedItemIndex !== null) {
      try {
        const response = await axios.post(
          `  http://localhost:9005/api/v1/order/completed-order-for-donor`,
          {
            _orderId: completingItemOrderId,
          },
          {
            withCredentials: true, // Include credentials (cookies) in the request
          }
        );
        //console.log(response);
      } catch (error) {
        //console.log("Can't complete order for donor", error);
      }
      try {
        await getCompletedOrders();
        await currentActiveListings();
      } catch (error) {
        //console.log("Data fetched yet can't bring changes to ui", error);
      }
      onCompleteProp(pendingItems[completedItemIndex]); //yo narakhe yo vanda pailako item lai complete gariraxa
      toast.success("Distribution Completed");
    }
    setCompleteConfirmationOpen(false);
  };

  const closeCompleteConfirmation = () => {
    setCompletedItemIndex(null);
    setCompleteConfirmationOpen(false);
  };
  const handleSearchTitle = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchLocation = (e) => {
    setLocationFilter(e.target.value);
  };

  useEffect(() => {
    //console.log("Completing item order id changed");
    //console.log("value after changing order id", completingItemOrderId);
  }, [completingItemOrderId]);

  return (
    <div
      className={isCompletedTable ? " dark:bg-[#1F1A24]" : " dark:bg-[#1F1A24]"}
    >
      <hr className="w-full h-1 bg-gray-300 border-0 rounded-md dark:bg-gray-700" />
      <h1 className="text-3xl font-bold m-4 mt-10 text-[#261750] dark:text-[#7c58de] text-center">
        {isCompletedTable
          ? "Completed Distributions"
          : isDonorPage
          ? "Active Listings"
          : "Pending Distributions"}
      </h1>
      <div className="flex items-center mb-4"></div>
      {visibleItems.length === 0 ? (
        <p className="text-gray-500 text-center pb-5">
          {isCompletedTable
            ? "⭐No completed distributions yet.⭐"
            : "⭐ No food scheduled for distribution. ⭐"}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-4 py-5 px-3">
            <div>
              <input
                type="text"
                id="title"
                placeholder="Search by Title"
                value={searchTerm}
                onChange={handleSearchTitle}
                className="border border-gray-300 dark:border-gray-500 rounded-md py-1 px-2 w-full dark:bg-[#555f71] dark:text-[#ffffff]"
              />
            </div>

            <div>
              <input
                type="text"
                id="location"
                placeholder="Search by Location"
                value={locationFilter}
                onChange={handleSearchLocation}
                className="border border-gray-300 dark:border-gray-500 rounded-md py-1 px-2 w-full dark:bg-[#555f71] dark:text-[#ffffff]"
              />
            </div>
          </div>
          <div className="p-3">
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
              }}
              className="table-auto rounded-xl"
            >
              <thead
                style={{ background: "#cee3fd" }}
                className="dark:bg-[#121a28] border-blue-200  dark:border-gray-700 "
              >
                <tr className="dark:bg-[#211328] dark:text-[#fdfdfd] ">
                  <th className="py-4 px-4 text-center ">Title</th>
                  {isMobile && isCompletedTable && (
                    <th className="py-2 px-4 text-center">
                      <div className="inline-flex">
                        <button onClick={() => sortItems("plates")}>
                          <div className="inline-flex">
                            <span className="mr-2">Plates</span>
                            {sortOption === "plates" &&
                            sortDirection === "asc" ? (
                              <FaSortUp />
                            ) : (
                              <FaSortDown />
                            )}
                          </div>
                        </button>
                      </div>
                    </th>
                  )}
                  {!isMobile && (
                    <>
                      <th className="py-2 px-4 text-center">
                        <div className="inline-flex">
                          <button onClick={() => sortItems("plates")}>
                            <div className="inline-flex">
                              <span className="mr-2">Plates</span>
                              {sortOption === "plates" &&
                              sortDirection === "asc" ? (
                                <FaSortUp />
                              ) : (
                                <FaSortDown />
                              )}
                            </div>
                          </button>
                        </div>
                      </th>
                      <th className="py-2 px-4 text-center">Food item</th>
                      <th className="py-2 px-4 text-center">
                        <div className="inline-flex items-center">
                          <span>
                            <FaMapMarkerAlt />
                          </span>
                          <span className="ml-2">Location</span>
                        </div>
                      </th>

                      <th className="py-2 px-4 text-center">
                        <div className="inline-flex items-center">
                          <span>
                            <FaPhoneAlt />
                          </span>
                          <span className="ml-2">Contact</span>{" "}
                        </div>
                      </th>
                    </>
                  )}
                  {!isCompletedTable && (
                    <th className="py-2 px-4 text-center">
                      <button onClick={() => sortItems("closingTime")}>
                        <div className="inline-flex items">
                          <span className="mr-2">Closing Time</span>
                          {sortOption === "closingTime" &&
                          sortDirection === "asc" ? (
                            <span>
                              <FaSortUp />
                            </span>
                          ) : (
                            <span>
                              <FaSortDown />
                            </span>
                          )}
                        </div>
                      </button>
                    </th>
                  )}
                  {!isCompletedTable && (
                    <th className="py-2 px-4 text-center">Actions</th>
                  )}
                  {isMobile && isCompletedTable && (
                    <th className="py-2 px-4 text-center">Actions</th>
                  )}
                </tr>
              </thead>

              <tbody className="text-center w-full">
                {sortedItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <tr
                      className={`border-b ${
                        index % 2 === 0
                          ? "bg-gray-100 dark:bg-[#212633] border-gray-200 dark:border-gray-700 dark:text-white"
                          : "bg-white dark:bg-[#252d3d] border-gray-200 dark:border-gray-800 dark:text-white"
                      } ${
                        expandedItemIndex === index
                          ? "bg-green-200 dark:bg-[#4a2e64]"
                          : ""
                      }`}
                    >
                      <td
                        className="py-4 px-4 font-bold text-gray-800 dark:text-gray-200"
                        style={{
                          overflowX: "auto",
                          maxWidth: "150px",
                          wordBreak: "break-word",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {item.order ? item.order.title : item.title}
                      </td>

                      {!isMobile && (
                        <td className="py-4 px-4 ">
                          <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs">
                            {item.order
                              ? item.order.foodForNumberOfPeople
                              : item.foodForNumberOfPeople}
                            Plates
                          </span>
                        </td>
                      )}

                      {isMobile && isCompletedTable && (
                        <td className="py-4 px-4 ">
                          <span className="bg-blue-400 text-white px-2 py-1 rounded-full text-xs">
                            {item.order
                              ? item.order.foodForNumberOfPeople
                              : item.foodForNumberOfPeople}
                            Plates
                          </span>
                        </td>
                      )}

                      {!isMobile && (
                        <>
                          <td
                            className="py-4 px-4 font-bold text-gray-800 dark:text-gray-200"
                            style={{
                              overflowX: "auto",
                              maxWidth: "150px",
                              wordBreak: "break-word",
                              whiteSpace: "pre-line",
                            }}
                          >
                            {item.order ? item.order.foodItems : item.foodItems}
                          </td>

                          <td className="py-4 px-4 text-gray-800 dark:text-gray-200">
                            {item.order ? item.order.address : item.address}
                          </td>
                          <td className="py-4 px-4 text-gray-800 dark:text-gray-200">
                            {item.order ? item.order.contact : item.contact}
                          </td>
                        </>
                      )}
                      {!isCompletedTable && (
                        <td className="py-4 px-4 text-gray-800 dark:text-gray-200">
                          {item.order
                            ? `${item.order.closingTime} hrs`
                            : `${item.closingTime} hrs`}
                        </td>
                      )}
                      {/* {!isCompletedTable && (
                        <> */}
                      <td className="py-4 px-4 flex space-x-2  ">
                        {!isMobile && !isCompletedTable && (
                          <>
                            {isDonorPage && (
                              <Button
                                onClick={() => {
                                  setCompletingItemOrderId(
                                    item.order ? item.order._id : item._id
                                  );
                                  handleCompleteClick(index);
                                }}
                                variant="complete"
                              />
                            )}
                            <Button
                              onClick={() => {
                                openConfirmation(index);
                                setCancellingItemOrderId(
                                  item.order ? item.order._id : item._id
                                );
                              }}
                              variant="cancel"
                              text="Cancel"
                            />
                          </>
                        )}
                        {isMobile && (
                          <Button
                            onClick={() =>
                              setExpandedItemIndex(
                                expandedItemIndex === index ? null : index,
                                setShowDetails(!showDetails)
                              )
                            }
                            variant="viewDetail"
                            text={showDetails ? "Hide Details" : "View Details"}
                          />
                        )}
                      </td>
                      {/* </>
                      )} */}
                    </tr>
                    {expandedItemIndex === index && (
                      <tr>
                        <td colSpan="7">
                          <div className="border border-gray-300 dark:border-gray-700 dark:text-white shadow-sm p-6 px-6 py-6 text-left">
                            {isDonorPage ? (
                              <span>
                                <p>
                                  <p className="font-bold inline-flex mr-2">
                                    Name:
                                  </p>
                                  {item.order.title}
                                </p>
                                <p>
                                  <p className="font-bold inline-flex mr-2">
                                    Plates:
                                  </p>
                                  {item.order.foodForNumberOfPeople}
                                </p>
                                <p>
                                  <p className="font-bold inline-flex mr-2">
                                    Location:
                                  </p>
                                  {item.order.address}
                                </p>
                                <p>
                                  <p className="font-bold inline-flex mr-2">
                                    Contact:
                                  </p>
                                  {item.order.contact}
                                </p>
                              </span>
                            ) : (
                              <span>
                                <p>
                                  <p className="font-bold inline-flex mr-2">
                                    Name:
                                  </p>
                                  {item.foodItems}
                                </p>
                                <p>
                                  <p className="font-bold inline-flex mr-2">
                                    Plates:
                                  </p>
                                  {item.foodForNumberOfPeople}
                                </p>
                                <p>
                                  <p className="font-bold inline-flex mr-2">
                                    Location:
                                  </p>
                                  {item.address}
                                </p>
                                <p>
                                  <p className="font-bold inline-flex mr-2">
                                    Contact:
                                  </p>
                                  {item.contact}
                                </p>
                              </span>
                            )}
                          </div>
                          <div className="mt-4 pb-4 flex justify-center gap-4 ">
                            <div className="self-center">
                              {isDonorPage && (
                                <Button
                                  onClick={() => {
                                    setCompletingItemOrderId(
                                      item.order ? item.order._id : item._id
                                    );
                                    handleCompleteClick(index);
                                  }}
                                  variant="complete"
                                  text=""
                                />
                              )}
                            </div>
                            <div className="self-center">
                              <Button
                                onClick={() => {
                                  openConfirmation(index);
                                  setCancellingItemOrderId(
                                    item.order ? item.order._id : item._id
                                  );
                                }}
                                variant="cancel"
                                text="Cancel"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {pendingItems.length > itemsPerPage && (
        <div className="mt-4 flex items-center justify-between pb-5 px-5">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center space-x-1 bg-blue-500 text-white py-1 px-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 sm:py-2 sm:px-4"
          >
            <IoIosArrowBack />
            <span className="hidden sm:inline">Previous Page</span>
          </button>
          <span className="text-gray-500">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center space-x-1 bg-blue-500 text-white py-1 px-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 sm:py-2 sm:px-4"
          >
            <span className="hidden sm:inline">Next Page</span>
            <IoIosArrowForward />
          </button>
        </div>
      )}
      <Confirmation
        isOpen={isConfirmationOpen}
        onClose={closeCancelConfirmation}
        onConfirm={() => {
          onConfirmCancel();
        }}
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
export default DistributionTable;
