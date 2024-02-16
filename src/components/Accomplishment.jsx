import React, { useState, useEffect, useRef } from "react";
import { PiBowlFoodFill } from "react-icons/pi";
import { BsPeopleFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";

const Accomplishment = ({
  totalFoodSaved: initialTotalFoodSaved,
  ourCommunity: initialOurCommunity,
  totalPeopleServed: initialTotalPeopleServed,
  totalFoodSavedText,
  ourCommunityText,
  totalPeopleServedText,
}) => {
  const [totalFoodSaved, setTotalFoodSaved] = useState(0);
  const [ourCommunity, setOurCommunity] = useState(0);
  const [totalPeopleServed, setTotalPeopleServed] = useState(0);

  const intersectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateValues();
          observer.unobserve(intersectionRef.current);
        }
      },
      { threshold: 0.9 } // Adjust the threshold as needed
    );

    observer.observe(intersectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateValues = () => {
    const animationDuration = 1000; // 0.5 seconds
    const startAnimationTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const progress = Math.min(
        1,
        (currentTime - startAnimationTime) / animationDuration
      );

      setTotalFoodSaved(Math.round(progress * initialTotalFoodSaved));
      setOurCommunity(Math.round(progress * initialOurCommunity));
      setTotalPeopleServed(Math.round(progress * initialTotalPeopleServed));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  return (
    <div
      className="text-center  bg-gradient-to-l from-[#ffafbd] to-[#ffc3a0] dark:bg-gradient-to-l dark:from-[#3a3031] dark:to-[#242120]
     text-[#332163] dark:text-white"
      ref={intersectionRef}
    >
      <div className="p-10">
        {
          //<h2 className="text-3xl font-bold mb-4 pb-10 ">Accomplishments</h2>
        }

        <div className="lg:flex justify-around">
          <div className="flex flex-col">
            <div className="self-center p-5">
              <PiBowlFoodFill size={52} />
            </div>
            <p>{totalFoodSavedText}</p>
            <p className="text-lg font-bold">{totalFoodSaved}</p>
          </div>
          <div className="flex flex-col">
            <div className="self-center p-5">
              <BsPeopleFill size={52} />
            </div>
            <p>{ourCommunityText}</p>
            <p className="text-lg font-bold">{ourCommunity}</p>
          </div>
          <div className="flex flex-col">
            <div className="self-center p-5">
              <FaPeopleCarry size={52} />
            </div>
            <p>{totalPeopleServedText}</p>
            <p className="text-lg font-bold">{totalPeopleServed}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accomplishment;
