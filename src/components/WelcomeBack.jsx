import React from "react";

const WelcomeBack = ({ userName }) => {
  return (
    <div className="text-center md:font-extrabold font-bold lg:text-3xl md:text-2xl  text-xl  relative  bg-gray-100  w-[100%]  rounded-tr-[40%]   rounded-tl-[50%] lg:rounded-tr-[50%] lg:rounded-tl-[90%]  ">
         
    <div className="mx-auto text-[#261750] self-center ">
      Welcome Back,
    </div>
    <div className="mx-auto text-[#ff4c70] self-center">{userName}</div>
 
</div>

  );
};

export default WelcomeBack;
