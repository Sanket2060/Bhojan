import React, { useState, useEffect, useRef } from "react";
import { PiBowlFoodFill } from "react-icons/pi";
import { BsPeopleFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";

const ProfileAccomplishment = ({
  totalFoodSaved: initialTotalFoodSaved,
  ourCommunity: initialOurCommunity,
  totalPeopleServed: initialTotalPeopleServed,
  totalPoints,
  rankText,
  totalPeopleServedText,
  rank
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
      className="text-center
     text-[#332163] dark:text-gray-100"
      ref={intersectionRef}
    >
      <div className="p-10">
        {
          //<h2 className="text-3xl font-bold mb-4 pb-10 ">Accomplishments</h2>
        }

        <div className="flex flex-row justify-center gap-4">
          <div className="flex flex-col m-auto text-sm">
            <div className="flex flex-col m-auto">
              <p className="text-lg font-bold">{totalPeopleServed*5}</p>
              <p>{totalPoints}</p>
            </div>
          </div>
          <div className="flex flex-col m-auto">
            <p className="text-lg font-bold">{rank}</p>
            <p>{rankText}</p>
          </div>
          <div className="flex flex-col m-auto">
            <p className="text-lg font-bold">{totalPeopleServed}</p>
            <p>{totalPeopleServedText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAccomplishment;
