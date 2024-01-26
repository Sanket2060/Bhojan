import React, { useState,useEffect } from "react";
import profilepic from "../assets/devImages/default.jpg";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ProfileAccomplishment from "../components/ProfileAccomplishment";
import axios from "axios";
import { TbPhotoEdit } from "react-icons/tb";
import {  useSelector } from "react-redux";
const Profile = () => {
  const { register, handleSubmit, formState } = useForm();
  const params = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const userDetails=useSelector((state)=>state.auth.userDetails);
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
    number: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
       if (userDetails) {
         const response = await axios.post(
           `http://localhost:9005/api/v1/getData/getdetailsfromname`,{
             name:userDetails?.name
           }
         );
 
         const user = response.data.data;
         console.log(user)
         setUserData({
           name: user.name,
           username: user.username,
           email: user.email,
           address: user.address,
           number: user.contact,
         });
       }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  // const [userUpload,setUserUpload]=useState(avater);
  const registerUser = async ({ name, address, contactno, profilepic }) => {
    // console.log("name, address, contactno, profilepic", name, address, contactno, profilepic);
    console.log("registerUser function called");
    try {
      const formData = new FormData();
      formData.append("userId", params.userId);
      formData.append("name", name);
      if (!profilepic || !profilepic[0]) {
        formData.append("avatar", avatar); // Provide the default image
      } else {
        formData.append("avatar", profilepic[0]);
      }
      formData.append("address", address);
      formData.append("contact", contactno);
      formData.append(
        "isOrganization",
        selectedOption === "Organization" ? true : false
      );

      const response = await axios.post(
        "http://localhost:9005/api/v1/users/complete-registration",
        formData,
        {
          withCredentials: true, // Include credentials (cookies) in the request
        }
      );

      console.log(response);
      setError("");
      console.log(response.data.data.isDonor);
      if (response.data.data.isDonor) {
        navigate("/donor");
      } else {
        navigate("/volunteer");
      }
    } catch (error) {
      console.log("Error:", error);
      // console.log("Error message:", error.response.data.message);
      // setError(error.response.data.message);
    }
  };

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
  };

  const resetError = () => {
    // Reset the error state
    setError("");
  };

  const onSubmit = async (data) => {
    console.log("At first step");
    // Check if there's an error before calling registerUser
    if (formState.isValid) {
      //what does .isValid do??
      resetError();
      try {
        await handleSubmit(registerUser)(data);
      } catch (error) {
        // Handle any errors here
        console.error("Form submission error:", error);
      }
    }
  };

  

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-gradient-to-b from-cyan-400 absolute w-screen h-[40vh] top-0"></div>
      <div className="w-[100vw] justify-between scroll-pt-40 sm:w-[48rem] mt-40 mb-20 sm:p-20 md:shadow-xl z-10 bg-[rgba(255,255,255,.9)] sm:rounded-3xl">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            resetError();
            handleSubmit(onSubmit)(e);
          }}
        >
          {/* <div className="mb-4">
            <img
              src={profilepic}
              alt="profilepic"
              id="profilepic"
              className="w-40 h-40 mx-auto my-3 rounded-full relative shadow-2xl
               top-[-10rem] self-center"
            />
            <label
              htmlFor="image"
              className="block align-middle select-none top-[-9rem] relative items-center mx-auto text-center transition-all p-2 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full w-40 cursor-pointer"
            >
              Upload Image
            </label>

            <input
              type="file"
              accept="image/jpeg, image/jpg, image/png"
              id="image"
              className="hidden"
              onChange={(e) => {
                console.log(e.target.value);
              }}
              {...register("profilepic", {
                validate: {
                  validFileFormat: (value) => {
                    // Custom validation logic for file format
                    if (value && value.length > 0) {
                      const allowedFormats = ["jpg", "jpeg", "png"];
                      const fileExtension = value[0]?.name
                        .split(".")
                        .pop()
                        .toLowerCase();
                      return (
                        allowedFormats.includes(fileExtension) ||
                        "Invalid file format"
                      );
                    }
                    return true; // No file provided, so no validation needed
                  },
                  maxFileSize: (value) => {
                    // Custom validation logic for file size (in bytes)
                    if (value && value.length > 0) {
                      const maxSize = 1024 * 1024 * 5; // 5 MB
                      return (
                        value[0]?.size <= maxSize ||
                        "File size exceeds the limit (5 MB)"
                      );
                    }
                    return true; // No file provided, so no validation needed
                  },
                },
              })}
            />
          </div> */}
          <div className="mb-4 relative">
            <img
              src={profilepic}
              alt="profilepic"
              id="profilepic"
              className="w-40 h-40 mx-auto border-4 border-yellow-200 my-3 rounded-full relative shadow-2xl top-[-7rem] md:top-[-10rem] self-center"
            />

            <div className="bg-gray-200 w-[30px] h-[30px] border-2 border-gray-600 relative mx-auto bottom-[10rem]  left-[3rem]  md:bottom-[14rem]  md:left-[4rem] rounded-full">
              <label htmlFor="image" className=" cursor-pointer">
                <TbPhotoEdit size={27} color="black" className="p-1" />
              </label>
            </div>

            <input
              type="file"
              accept="image/jpeg, image/jpg, image/png"
              id="image"
              className="hidden"
              onChange={(e) => {
                console.log(e.target.value);
              }}
              {...register("profilepic", {
                validate: {
                  // ... (previous code)
                },
              })}
            />
          </div>

          <div className="relative top-[-10rem] md:top-[-12rem] flex flex-col p-2">
            <h1 className="text-3xl font-bold p-2 self-center">
              {params.name}Suraj Adhikari
            </h1>
            <h2 className="text-xl self-center">@username{params.username}</h2>
          </div>
          <div className="relative top-[-8rem]">
            <ProfileAccomplishment
              totalFoodSaved={500}
              ourCommunity={200}
              totalPeopleServed={800}
              totalFoodSavedText="Food Saved"
              ourCommunityText="Rank"
              totalPeopleServedText="People Served"
            />
          </div>
          <div className="relative top-[-6rem] p-4 md:p-0">
            <div>
              <label for="name" className="font-normal text-sm ml-2">
                Name:
              </label>

              <input
                type="text"
                className="border-2 w-full h-10 px-2 pl-2  border-[#01cc65]  mb-1 rounded-xl  p-2 text-sm focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4"
                id="name "
                name="name"
                value={params.name}
                readOnly={!isEditing}
                required
                {...register("name", {
                  required: true,
                  validate: {
                    matchPattern: (value) =>
                      /^[A-Z][a-zA-Z ]*$/.test(value) ||
                      setError(
                        "Name should start with capital and shouldn't contain any special characters"
                      ),
                  },
                })}
              />
            </div>

            <div>
              <label htmlFor="username" className="font-normal text-sm ml-2">
                Username:
              </label>
              <input
                type="text"
                value={params.username}
                readOnly={!isEditing}
                className="border-2 w-full h-10 px-2 pl-2 border-[#01cc65] mb-1 rounded-xl p-2 text-sm focus:outline-none focus:ring-0 focus:border-gray-300 focus:text-gray-900 focus:border-4"
              />
            </div>

            <div>
              <label for="email" className="font-normal text-sm ml-2">
                Email:
              </label>

              <input
                type=""
                value={params.email}
                readOnly={!isEditing}
                className="border-2 w-full h-10 px-2 pl-2  border-[#01cc65]  mb-1 rounded-xl  p-2 text-sm focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4"
                id="username"
                required
              />
            </div>

            <div>
              <label for="address" className="font-normal text-sm ml-2">
                Address:
              </label>
              <input
                type="text"
                className="border-2 w-full h-10 px-2 pl-2  border-[#01cc65] mb-1 rounded-xl p-2 text-sm focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4"
                id="address"
                value={params.address}
                readOnly={!isEditing}
                required
                {...register("address", {
                  required: true,
                  validate: {
                    matchPattern: (value) =>
                      /^[a-zA-Z0-9 ,.-]*$/.test(value) ||
                      setError("Address should be valid"),
                  },
                })}
              />
            </div>

            <div>
              <label for="contno" className="font-normal text-sm ml-2">
                {" "}
                Contact Number:
              </label>
              <input
                type="number"
                className="border-2 w-full h-10 px-2 pl-2 border-[#01cc65] mb-1 rounded-xl focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4 p-2 text-sm"
                id="contactno"
                value={params.number}
                readOnly={!isEditing}
                required
                {...register("contactno", {
                  required: true,
                  validate: {
                    matchPattern: (value) =>
                      /^9\d{9}$/.test(value) ||
                      setError("Please enter a valid phone number"),
                  },
                })}
              />
            </div>
            <div>
              <select
                value={selectedOption}
                readOnly={!isEditing}
                onChange={handleSelectChange}
                className="font-normal text-sm border-2  mt-6 w-full h-10  pl-2 border-[#01cc65] mb-1 rounded-xl focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4 "
              >
                <option value="">Select option to continue</option>
                <option value="Organization">Organization</option>
                <option value="Individual">Individual</option>
              </select>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setIsEditing(!isEditing)}
                className="align-middle select-none font-bold text-center transition-all text-sm bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full h-10 w-full mt-6 cursor-pointer"
              >
                {isEditing ? "Cancel" : "Edit"}
              </button>
              <button
                type="submit"
                value="Register"
                readOnly={!isEditing}
                className="align-middle select-none  font-bold  text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full  h-10 w-full mt-6 cursor-pointer"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Profile;
