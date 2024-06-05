import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProfileForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const params = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // const [userUpload,setUserUpload]=useState(avater);
  const registerUser = async ({ name, address, contactno, profilepic }) => {
    // console.log("name, address, contactno, profilepic", name, address, contactno, profilepic);
    //console.log("registerUser function called");
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
        "   http://localhost:9005/api/v1/users/complete-registration",
        formData,
        {
          withCredentials: true, // Include credentials (cookies) in the request
        }
      );

      //console.log(response);
      setError("");
      //console.log(response.data.data.isDonor);
      if (response.data.data.isDonor) {
        navigate("/donor");
      } else {
        navigate("/volunteer");
      }
    } catch (error) {
      //console.log("Error:", error);
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
    //console.log("At first step");
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
    <>
      {isEditing && (
        <div className="flex justify-center items-center md:h-[74vh] md:w-[80%] m-auto relative shadow-2xl overflow-hidden dark:bg-[#282828]">
          <form
            className="max-w-96 "
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              resetError();
              handleSubmit(onSubmit)(e);
            }}
          >
            <div className="relative p-4 md:p-0 grid gap-y-2">
              <div>
                <label
                  for="name"
                  className="font-normal text-sm ml-2 dark:text-white"
                >
                  Name:
                </label>

                <input
                  type="text"
                  className="border-2 w-full h-10 px-2 pl-2  border-gray-300  mb-1 rounded-xl  p-2 text-sm focus:outline-none focus:ring-0  focus:border-[#01cc65] focus:text-gray-900 focus:border-4"
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
                <label
                  htmlFor="username"
                  className="font-normal text-sm ml-2 dark:text-white"
                >
                  Username:
                </label>
                <input
                  type="text"
                  value={params.username}
                  readOnly={!isEditing}
                  className="border-2 w-full h-10 px-2 pl-2 border-gray-300 mb-1 rounded-xl p-2 text-sm focus:outline-none focus:ring-0 focus:border-[#01cc65] focus:text-gray-900 focus:border-4"
                />
              </div>

              <div>
                <label
                  for="email"
                  className="font-normal text-sm ml-2 dark:text-white"
                >
                  Email:
                </label>

                <input
                  type=""
                  value={params.email}
                  readOnly={!isEditing}
                  className="border-2 w-full h-10 px-2 pl-2  border-gray-300  mb-1 rounded-xl  p-2 text-sm focus:outline-none focus:ring-0  focus:border-[#01cc65] focus:text-gray-900 focus:border-4"
                  id="username"
                  required
                />
              </div>

              <div>
                <label
                  for="address"
                  className="font-normal text-sm ml-2 dark:text-white"
                >
                  Address:
                </label>
                <input
                  type="text"
                  className="border-2 w-full h-10 px-2 pl-2  border-gray-300 mb-1 rounded-xl p-2 text-sm focus:outline-none focus:ring-0  focus:border-[#01cc65] focus:text-gray-900 focus:border-4"
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
                <label
                  for="contno"
                  className="font-normal text-sm ml-2 dark:text-white"
                >
                  {" "}
                  Contact Number:
                </label>
                <input
                  type="number"
                  className="border-2 w-full h-10 px-2 pl-2 border-gray-300 mb-1 rounded-xl focus:outline-none focus:ring-0  focus:border-[#01cc65] focus:text-gray-900 focus:border-4 p-2 text-sm"
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
                  className="font-normal text-sm border-2  mt-6 w-full h-10  pl-2 border-gray-300  mb-1 rounded-xl focus:outline-none focus:ring-0  focus:border-[#01cc65] focus:text-gray-900 focus:border-4 "
                >
                  <option value="">Select option to continue</option>
                  <option value="Organization">Organization</option>
                  <option value="Individual">Individual</option>
                </select>
              </div>
            </div>
            <div className="flex gap-36 mt-[15px]">
              <button
                type="submit"
                value="Register"
                onClick={() => setIsEditing(false)}
                className="align-middle bg-violet-900 select-none font-bold py-2 px-6 text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl bg-[261750] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="align-middle bg-red-500 select-none font-bold py-2 px-6 text-center transition-all text-xl shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full text-white"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="text-center space-x-4">
        {!isEditing && (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="align-middle bg-violet-900 select-none font-bold py-2 px-6 text-center transition-all text-xl shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full text-white"
          >
            Edit
          </button>
        )}
      </div>
    </>
  );
};

export default UserProfileForm;
