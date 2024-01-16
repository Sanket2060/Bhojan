import React from "react";

const WelcomeBack = ({ userName }) => {
  return (
    <div className=" flex flex-col md:font-extrabold font-bold lg:text-4xl md:text-3xl  text-2xl  relative ">
         
    <div className="mx-auto text-[#261750] self-center ">
      Welcome Back,
    </div>
    <div className="mx-auto text-[#ff4c70] self-center">{userName}</div>
 
</div>
  );
};

export default WelcomeBack;
