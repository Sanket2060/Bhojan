import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/user/authSlice";
import LoginButton from "../components/auth0login";
import LogoutButton from "../components/auth0logout";
const Login = () => {
  const { register, handleSubmit, formState } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState();
  const loginUser = async ({ email, password }) => {
    //console.log("At login");
    //console.log("Email and password:", email, password);
    try {
      const response = await axios.post(
        "   https://khana.me/api/v1/users/login",
        {
          email,
          password,
        },
        {
          withCredentials: true, // Include credentials (cookies) in the request
        }
      );
      //console.log(response);
      //console.log("Response.data.data.isDonor", response.data.data.isDonor);
      dispatch(login(response.data.data));
      if (response) {
        //also store user's data at redux toolkit
        if (response.data.data.isDonor) {
          navigate("/donor");
        } else {
          navigate("/volunteer");
        }
      }
      // navigate(`/register/${response.data.data.username}/${response.data.data.email}/${params.userId}`);
    } catch (error) {
      setLoader(false);
      //console.log(error);
      //console.log("Error:", error.response.data.message);
      setError(error.response.data.message);
    }
  };

  // const resetError = () => {
  //   // Reset the error state
  //   setError("");
  // };

  const onSubmit = async (data) => {
    setError("");
    setLoader(true);
    //console.log("At first step");
    // Check if there's an error before calling registerUser
    // if (formState.isValid) {   //what does .isValid do->checks if all validations are true or not provided to react form hooks(validate:)
    //console.log("The form was valid");
    // resetError();
    try {
      handleSubmit(loginUser)(data); //??
    } catch (error) {
      // Handle any errors here
      console.error("Form submission error:", error);
      setLoader(false);
      setError("Please try again");
      // }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#330000]  ">
      <div className="overflow-hidden  h-screen w-full">
        <div className="h-[80vw] overflow-clip left-[-30vw] top-[-50vw] absolute bg-[#73605B] rounded-full w-[80vw]"></div>
      </div>
      <div className=" w-[100vw] h-screen justify-between sm:w-[28rem] pt-[15vh] p-10  sm:h-[40rem]  sm:p-20 shadow-xl z-10 absolute bg-[rgba(255,255,255,.96)] sm:rounded-3xl">
        <h1 className="text-center text-3xl  font-semibold ">
          Log In to Khana
        </h1>
        <hr className="border w-full h-1 bg-black my-4" />
        <div>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission
              // resetError();
              handleSubmit(onSubmit)(e);
            }}
          >
            <div>
              <label for="email" className="font-normal text-sm ml-2">
                Email:
              </label>
              <input
                type="email"
                className="border-2 w-full h-10 px-2 pl-2  border-[#01cc65] mb-1 rounded-xl p-2 text-sm focus:outline-none focus:ring-0 focus:border-gray-300 focus:text-gray-900 focus:border-4"
                id="email"
                placeholder="Enter your Email"
                required
                {...register(
                  "email"
                  // , {
                  //   required: true,
                  //   validate: {
                  //     matchPattern: (value)=>
                  //     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || setError("Enter a valid email address")
                  //   }
                  // }
                )}
              />
            </div>

            <div>
              <label for="password" className="font-normal text-sm ml-2">
                {" "}
                Password:
              </label>
              <input
                type="password"
                className="border-2 w-full h-10 px-2 pl-2 border-[#01cc65] mb-1 rounded-xl focus:outline-none focus:ring-0 focus:border-gray-300 focus:text-gray-900 p-2 text-sm focus:border-4"
                id="password "
                placeholder="Enter your Password"
                required
                {...register(
                  "password"
                  // ,{required:true}
                )}
              />
            </div>
            <div>
              <a href="forgetpassword.html" className="font-medium text-xs">
                Forget Password?
              </a>
            </div>

            <div>
              <button
                type="submit"
                value="login"
                className="align-middle select-none  font-bold  text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] cursor-pointer active:shadow-none rounded-full  h-10 w-full mt-1"
              >
                Login
              </button>
            </div>
          </form>
          <div>
            <h2 className="text-center text-lg font-semibold  mt-1">OR</h2>
          </div>
          <div>
            {/* <a href=""> */}
            {/* <button className="align-middle font-bold font-sans mt-1 p-2 text-center h-10 w-full bg-blue-700 text-white rounded-full focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs"> */}
            <LoginButton />
            {/* Continue with Google */}
            {/* </button> */}
            {/* </a> */}
          </div>
          <div className="mt-3 sm:flex justify-center  text-center ">
            <h2 className="  text-sm mt-1">Don't have an Account!</h2>

            <Link to="../signup" className="ml-1">
              <button href="" className="underline text-blue-600 ">
                <h2 className="text-sm">Sign up</h2>
              </button>
            </Link>
          </div>
          <div className="mt-10 -8 pb-10 p-2 rounded-md  text-sm font-light text-red-600 flex">
            {error}
          </div>
          {loader ? (
            <div className="mt-10 -8 pb-10 p-2 rounded-md  text-sm font-light text-red-600 flex">
              {error}
              <div className=" fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div class="loader "></div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <div className="overflow-hidden relative h-screen w-full ">
        <div className="h-[80vw] overflow-clip absolute right-[-30vw] bottom-[-50vw] bg-[#D09683] rounded-full w-[80vw]"></div>
      </div>
    </div>
  );
};

export default Login;
