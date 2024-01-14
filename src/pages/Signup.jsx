import React from 'react'

const Signup = () => {
  return (
   



  <div className="flex justify-center items-center h-screen bg-bgof">
    <div className="w-[450px] h-auto p-20 shadow-xl bg-white rounded-3xl">

      <h1 className="text-center text-3xl font-semibold ">Welcome to Khana</h1>
      <hr className="border w-full h-1 bg-black my-4" />
      <radio>
        <option value="Donator"></option>
        <option value="Orginization"></option>
      </radio>
      <div>
        <label for="username" className="font-normal text-sm ml-2">Username:</label>
        <br/>
        <input type="text"
          className="border-2 w-full h-10 px-2 pl-2  border-radi  mb-1 rounded-xl  p-2 text-sm focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4"
          id="username" placeholder="Enter your Username" required />
      </div>

      <div>
        <label for="email" className="font-normal text-sm ml-2">Email:</label>
        <input type="email"
          className="border-2 w-full h-10 px-2 pl-2  border-radi mb-1 rounded-xl p-2 text-sm focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4"
          id="email" placeholder="Enter your Email" required />
      </div>

      <div>
        <label for="passowrd" className="font-normal text-sm ml-2"> Password:</label>
        <input type="password"
          className="border-2 w-full h-10 px-2 pl-2 border-radi mb-1 rounded-xl focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4 p-2 text-sm"
          id="passowrd " placeholder="Enter your Password" required />
      </div>



      <div className="inline">
        <input type="checkbox" id="terms" className="size-3 align-middle ml-2" />
        <label className="text-xs font-normal">I agreed the terms and condition!
          <a href="" className="underline text-blue-600 ">Read more</a>
        </label>
      </div>

      <div>
        <a href=""><input type="submit" value="Sign up"
            className="align-middle select-none font-sans font-bold  text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full  h-10 w-full mt-1 cursor-pointer"/>
        </a>
      </div>
      <div>
        <h2 className="text-center text-lg font-semibold  mt-1">OR</h2>
      </div>
      <div>
        <a href=""><button
            className="align-middle font-bold font-sans mt-1 p-2 text-center h-10 w-full bg-blue-700 text-white rounded-full focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs">Continue
            with Google</button></a>
      </div>
      <div className="mt-2 flex mx-10">
        <h2 className="  text-sm ">
          Already have an account?
        </h2>
        <a href="login.html" className="underline text-blue-600 text-sm ">Log In</a>
      </div>


    </div>



  </div>





  
  )
}

export default Signup