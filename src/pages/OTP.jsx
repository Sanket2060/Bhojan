import React from 'react'

const OTP = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#f8c9c9]">
    <div className="w-[20rem]  md:w-[28rem] h-auto py-10 p-5 md:p-20 shadow-xl bg-white rounded-3xl">

      <h1 className="text-center text-3xl font-semibold ">OTP Verification</h1>
      <hr className="border w-full h-1 bg-black my-2" />

      

      <h2 className="font-normal text-sm md:mx-2">Enter the OTP to Verify:</h2>
      <div >

       
        <input type="number" min="0" max="9" className="w-full h-10  mx-1.5 p-1 mt-2 border-[#01cc65] border-solid border-2 rounded-lg focus:outline-none focus:ring-0 focus:border-gray-300 focus:text-gray-900 focus:border-4 shadow-md "  placeholder="0" />
        
          

      </div>
      <br/>
      
      <div>
        <a href=""><input type="submit"
            className="align-middle select-none font-sans font-bold  text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full  h-10 w-full mt-1 cursor-pointer" /></a>
      </div>
      <div className="flex mt-3">
        <h2 className="text-sm">Didn't get an OTP?</h2>
        <div className="flex ml-1">
        <a href="" className="underline text-blue-600 text-sm">Resend!</a>

        </div>
      </div>




    </div>



   </div>
   
  )
}

export default OTP