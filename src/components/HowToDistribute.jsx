import React, { useState, useEffect } from "react";

const HowToDistribute = ({ isReserved, isDistribute }) => {
  const [animationClass, setAnimationClass] = useState("opacity-100");

  useEffect(() => {
    // Add a class to trigger the Tailwind CSS transition when the text changes
    setAnimationClass("opacity-0");

    // Remove the class after the animation duration to reset it for the next change
    const timeoutId = setTimeout(() => {
      setAnimationClass("opacity-100");
    }, 700); // Adjust the duration as needed

    return () => clearTimeout(timeoutId);
  }, [isReserved, isDistribute]);

  let mainText, subText1, subText2;

  if (isDistribute) {
    mainText = "Item scheduled for distribution";
    subText1 = "Please pickup from donor's location";
    subText2 = "You can distribute other listings as well";
  } else if (isReserved) {
    mainText = "Item is reserved for 5 mins";
    subText1 = "Please contact distributor and verify";
    subText2 = "Click 'i'll distribute' to Confirm";
  } else {
    mainText = "How To Distribute";
    subText1 = "Book the item you'd like to distribute";
    subText2 = "Booked item will be reserved for 5 minutes";
  }

  return (
    <div
      className={`rounded transition-opacity duration-1000 ${animationClass}`}
    >
      <h2 className="mx-auto text-[#261750] self-center md:font-extrabold font-bold lg:text-3xl md:text-2xl text-center text-xl relative dark:text-blue-200">
        {mainText}
      </h2>
      <h2 className="mx-auto text-[#261750] self-center lg:text-2xl md:text-xl text-center text-l relative dark:text-blue-200">
        {subText1}
      </h2>
      <h2 className="mx-auto text-[#261750] self-center lg:text-l md:text-l text-center text-m relative dark:text-blue-200">
        {subText2}
      </h2>
    </div>
  );
};

export default HowToDistribute;
