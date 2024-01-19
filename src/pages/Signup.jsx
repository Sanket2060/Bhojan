import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
const Signup = () => {
  const {register,handleSubmit}=useForm();
  const [error,setError]=useState("");
  const navigate=useNavigate();
  const params = useParams();
  const [selectedTab, setSelectedTab] = useState('Donator');
  const [userId,setUserId]=useState(Number);
  const authenticate = async ({ username, email, password }) => {
    try {
      console.log(email, password);
      // api/users/register
      // send register data
      const response = await axios.post('http://localhost:9005/api/v1/users/register', {
        username,
        email,
        password,
        isDonor: selectedTab === 'Donator' ? true : false,
      });
  
      // handle success
      console.log(response.data);
      setUserId(response.data.data.userId);
      console.log(response.data.data.userId);
  
      // Navigate to OTP page with the userId
      navigate(`/otp/${response.data.data.userId}`);
    } catch (error) {
      // handle error
      console.log(error.message);
      // Set error state to display the error message
      setError(error.message);
    }
  };
  

  useEffect(()=>{
    console.log("Error is:",error);
  },[error])

  useEffect(()=>{
    setError("");
  },[])


  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="align-middle">
    <div className="flex justify-center items-center h-screen bg-[#f8c9c9]">
      <div className="w-[20rem] md:w-[30rem] p-7 h-auto md:h-auto md:p-20 shadow-xl bg-white rounded-3xl">
        <h1 className="text-center text-3xl font-semibold">Welcome to Khana</h1>
        <hr className="border w-full h-1 bg-black my-4" />
      <form action="" onSubmit={handleSubmit(authenticate)}>
        <div className="flex pb-5">
          <label
            htmlFor="donator"
            className={`flex-1 rounded-t-xl ${
              selectedTab === 'Donator' ? 'border-t-2 border-l-2 border-r-2 border-gray-400 ' : 'border-t-2 border-l-2 border-r-2 border-transparent bg-gray-200'
            }`}
          >
            <input
              type="radio"
              id="donator"
              name="radio"
              value="Donator"
              className="hidden"
              checked={selectedTab === 'Donator'}
              onChange={() => handleTabClick('Donator')}
            />
            <div className={`py-2 px-4 cursor-pointer text-center transition-all duration-300 focus:outline-none`}>
              Donator
            </div>
          </label>
          <label
            htmlFor="volunteer"
            className={`flex-1 rounded-t-xl ${
              selectedTab === 'Volunteer' ? 'border-t-2 border-l-2 border-r-2 border-gray-400 ' : 'border-t-2 border-l-2 border-r-2 border-transparent bg-gray-200' 
              
            }`}
          >
            <input
              type="radio"
              id="volunteer"
              name="radio"
              value="Volunteer"
              className="hidden"
              checked={selectedTab === 'Volunteer'}
              onChange={() => handleTabClick('Volunteer')}
            />
            <div className={`py-2 px-4 cursor-pointer text-center transition-all duration-300 focus:outline-none`}>
              Volunteer
            </div>
          </label>
        </div>

        <div>
          <label htmlFor="username" className="font-normal text-sm ml-2">
            Username:
          </label>
          <br />
          <input
            type="text"
            className="border-2 w-full h-10 px-2 pl-2  border-[#01cc65]  mb-1 rounded-xl  p-2 text-sm focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4"
            id="username"
            placeholder="Enter your Username"
            required
            {...register('username',{
              required:true,
              validate:{
                matchPattern:(value)=>
                /^[a-zA-Z0-9]{1,8}$/.test(value) || setError("Username should be shorter")           
              }
              })}
          />
        </div>

        <div>
          <label htmlFor="email" className="font-normal text-sm ml-2">
            Email:
          </label>
          <input
            type="email"
            // value=""
            className="border-2 w-full h-10 px-2 pl-2  border-[#01cc65] mb-1 rounded-xl p-2 text-sm focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4"
            id="email"
            placeholder="Enter your Email"
            required
            {...register('email', {
              required: true,
              validate: {
                matchPattern: (value)=>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || setError("Enter a valid email address") 
              }
            })}
          />
        </div>

        <div>
          <label htmlFor="password" className="font-normal text-sm ml-2">
            Password:
          </label>
          <input
            type="password"
            className="border-2 w-full h-10 px-2 pl-2 border-[#01cc65] mb-1 rounded-xl focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4 p-2 text-sm"
            id="password"
            placeholder="Enter your Password"
            required
            {...register('password', {
              required: true,
              validate: {
              matchPattern: (value)=> 
              /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/.test(value) ||
              setError('Password must contain at least 8 characters, including letters and numbers.')
              }
            })}
          />
        </div>

        <div className="inline">
          <input type="checkbox" id="terms" className="size-3 align-middle ml-2"  required/>
          <label className="text-xs sm:text-sm font-normal ml-1">
            I agree to the terms and conditions!
            
          </label>
        </div>

        <div>
          <a href="/">
            <button
              type="submit"
              value="Sign up"
              className="align-middle select-none font-sans font-bold  text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full  h-10 w-full mt-1 cursor-pointer"
            >Sign up</button>
          </a>
        </div>

        <div>
          <h2 className="text-center text-lg font-semibold  mt-1">OR</h2>
        </div>

        <div>
          <a href="/">
            <button
              className="align-middle font-bold font-sans mt-1 p-2 text-center h-10 w-full bg-blue-700 text-white rounded-full focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs"
            >
              Continue with Google
            </button>
          </a>
        </div>

        <div className="mt-2 md:flex text-center md:mx-10">
          <h2 className="  text-sm text-center sm:">Already have an account?</h2>
          <div className="md:flex ml-1">
          <a href="" className="underline text-blue-600 text-sm">Login</a>

          </div>
        </div>
        </form>
      <div className='pt-5'>Error:{error}</div>
      </div>
    </div>
    </div>
  );
};

export default Signup;
