//can be combined with howtodistribute
import React, { useState, useEffect } from "react";

const HowToDonate = ({ isDistribute }) => {
  const [animationClass, setAnimationClass] = useState("opacity-100");

  useEffect(() => {
    // Add a class to trigger the Tailwind CSS transition when the text changes
    setAnimationClass("opacity-0");

    // Remove the class after the animation duration to reset it for the next change
    const timeoutId = setTimeout(() => {
      setAnimationClass("opacity-100");
    }, 700); // Adjust the duration as needed

    return () => clearTimeout(timeoutId);
  }, [isDistribute]);

  let mainText, subText1, subText2;

  if (isDistribute) {
    mainText = "Item scheduled for distribution";
    subText1 = "Interested volunteer will contact you";
    subText2 = "(You can fill the for again for multiple donations)";
  } else {
    mainText = "How To Donate";
    subText1 = "Fill the form and click 'post listing'";
    subText2 = "It's that easy!!!";
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

export default HowToDonate;
