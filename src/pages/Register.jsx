import React, { useState } from 'react'
import avater from '../assets/User.jpg'

const Register = () => {
  const[name, setName]=useState('');
  const[img,setImg]=useState('');
  const[contno,setContno]=useState('');


  return (
    <div className="flex justify-center items-center h-screen bg-[#f8c9c9]">
    <div className="w-[20rem] md:w-[30rem] p-7 h-auto md:h-auto md:p-20 shadow-xl bg-white rounded-3xl">

      <h1 className="text-center text-3xl font-semibold ">Register to Khana</h1>
      <hr className="border w-full h-1 bg-black my-4"/>

      <div>
        <img src={avater} alt="Avater" id="avtr" className="w-40 h-40 mx-auto rounded-full  "/>
        <label for="image" className="block align-middle select-none font-sans font-bold items-center mx-auto text-center uppercase transition-all  pt-2 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full  h-8 w-44 cursor-pointer"
        >Upload Image</label>
     
     
        
        <input type="file" accept="image/jpeg, inage/jpg, image/png" id="image" name="image" className="hidden " required  
      
        />
      </div>
      <div>
        <label for="username" className="font-normal text-sm ml-2">Username:</label>
        
        <input type="text"
          className="border-2 w-full h-10 px-2 pl-2  border-[#01cc65]  mb-1 rounded-xl  p-2 text-sm focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4"
          id="username"  />
      </div>

      <div>
        <label for="email" className="font-normal text-sm ml-2">Email:</label>
        
        <input type=""
          className="border-2 w-full h-10 px-2 pl-2  border-[#01cc65]  mb-1 rounded-xl  p-2 text-sm focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4"
          id="username" required  />
      </div>
    
      <div>
        <label for="name" className="font-normal text-sm ml-2"> Name:</label>
        
        <input type="text"
          className="border-2 w-full h-10 px-2 pl-2  border-[#01cc65]  mb-1 rounded-xl  p-2 text-sm focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4"
          id="name " name="name"  placeholder="Enter your Name" required />
      </div>

      <div>
        <label for="address" className="font-normal text-sm ml-2">Address:</label>
        <input type="text"
          className="border-2 w-full h-10 px-2 pl-2  border-[#01cc65] mb-1 rounded-xl p-2 text-sm focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4"
          id="address" placeholder="Enter your Address" required />
      </div>

      <div>
        <label for="contno" className="font-normal text-sm ml-2"> Contact Number:</label>
        <input type="password"
          className="border-2 w-full h-10 px-2 pl-2 border-[#01cc65] mb-1 rounded-xl focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4 p-2 text-sm"
          id="contactno" placeholder="Enter your Contact No" required />
      </div>

      


 

      <div>
        <a href=""><input type="submit" value="Register" className="align-middle select-none font-sans font-bold  text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full  h-10 w-full mt-6 cursor-pointer" />
          </a>
      </div>




    </div>



  </div>
  )
}

export default Register