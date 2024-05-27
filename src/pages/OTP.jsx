import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const OTP = () => {
  const params = useParams(); // Extract userId from the URL
  const navigate = useNavigate();
  const [loader, setLoader] = useState();
  const [error, setError] = useState("");
  // Use the userId parameter here, e.g., for fetching user-specific OTP data
  console.log("userId from OTP:", params.userId);
  const [userOTP, setUserOTP] = useState();
  // const verifyOTP = async () => {
  //   const response = await axios.post('   https://api.khana.me/api/v1/users/verify-otp', {
  //     userId: params.userId,
  //     userOTP

  //   })
  //   console.log(response);
  // }

  const verifyOTP = async () => {
    try {
      setLoader(true);
      const response = await axios.post(
        "   https://api.khana.me/api/v1/users/verify-otp",
        {
          userId: params.userId,
          userOTP: userOTP,
          // .trim()
        }
      );
      console.log(response);
      navigate(
        `/register/${response.data.data.username}/${response.data.data.email}/${params.userId}`
      );
    } catch (error) {
      setLoader(false);
      console.log("Error:", error.response.data.message);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#f8c9c9]">
      <div className="overflow-hidden  h-screen w-full">
        <div className="h-[80vw] overflow-clip left-[-30vw] top-[-50vw] absolute bg-pink-100 rounded-full w-[80vw]"></div>
      </div>
      <div className=" w-[100vw] h-screen justify-between sm:w-[28rem] pt-[15vh] p-10  sm:h-[28rem]  sm:p-20 shadow-xl z-10 absolute bg-[rgba(255,255,255,.8)] sm:rounded-3xl">
        <h1 className="text-center text-3xl font-semibold ">
          OTP Verification
        </h1>
        <hr className="border w-full h-1 bg-black my-2" />

        <h2 className="font-normal text-sm md:mx-2">
          Enter the OTP to Verify:
        </h2>
        <div>
          <input
            // id=''
            type="number"
            min="0"
            max="9"
            maxLength={6}
            className="w-full h-10  mx-1.5 p-1 mt-2 border-[#01cc65] border-solid border-2 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 focus:text-gray-900 focus:border-4 shadow-md "
            placeholder=""
            onChange={(e) => setUserOTP(e.target.value)}
          />
        </div>
        <br />

        <div>
          <button
            type="submit"
            onClick={verifyOTP}
            className="align-middle select-none font-sans font-bold  text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full  h-10 w-full mt-1 cursor-pointer"
          >
            Submit OTP
          </button>
        </div>
        <div className="flex mt-3 justify-center">
          <h2 className="text-sm ">Didn't get an OTP?</h2>
          <div className="flex ml-1">
            <a href="" className="underline text-blue-600 text-sm">
              Resend!
            </a>
          </div>
        </div>
        <div className="Error mt-10 -8 pb-10 p-2 rounded-md  text-sm font-light text-red-600">
          {error}
        </div>
        {loader ? (
          <div className="mt-10 -8 pb-10 p-2 rounded-md  text-sm font-light text-red-600 flex">
            <div className=" fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              <div class="loader "></div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="overflow-hidden relative h-screen w-full ">
        <div className="h-[80vw] overflow-clip absolute right-[-30vw] bottom-[-50vw] bg-yellow-100 rounded-full w-[80vw]"></div>
      </div>
    </div>
  );
};

export default OTP;
