import React, { useEffect, useState } from "react";
import avatar from "../assets/profilepic.jpg";
import profilepic from "../assets/profilepic.jpg";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../features/user/authSlice";
const Register = () => {
  const { register, handleSubmit, formState, watch } = useForm();
  const { errors } = formState;
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState();
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [userProvidedImage, setUserProvidedImage] = useState();
  const [base64, setBase64] = useState();
  // const [userUpload,setUserUpload]=useState(avater);
  const registerUser = async ({ name, address, contactno, profilepic }) => {
    // console.log("name, address, contactno, profilepic", name, address, contactno, profilepic);
    // console.log("registerUser function called");
    try {
      setLoader(true);
      const formData = new FormData();
      formData.append("userId", params.userId);
      formData.append("name", name);
      if (!profilepic || !profilepic[0]) {
        console.log("No image provided by user");
        // Fetch the image, convert to Blob, then to File
        const response = await fetch(avatar);
        const blob = await response.blob();

        // Extracting the filename from the URL
        const urlParts = avatar.split("/");
        const filename = urlParts[urlParts.length - 1];

        // Creating a File object
        const file = new File([blob], filename, { type: blob.type });

        formData.append("avatar", file);
        // formData.append("avatar", avatar); // Provide the default image  //image pathako namiley jasto xa
      } else {
        formData.append("avatar", profilepic[0]);
      }
      formData.append("address", address);
      formData.append("contact", contactno);
      formData.append(
        "isOrganization",
        selectedOption === "Organization" ? true : false
      );
      console.log("form data:", formData);
      const response = await axios.post(
        "     https://api.khana.me/api/v1/users/complete-registration",
        formData,
        {
          withCredentials: true, // Include credentials (cookies) in the request
        }
      );

      console.log(response);
      setError("");
      // console.log(response.data.data.isDonor);
      dispatch(login(response.data.data));
      if (response.data.data.isDonor) {
        navigate("/donor");
      } else {
        navigate("/volunteer");
      }
    } catch (error) {
      setLoader(false);
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

  const [image, setImage] = useState(`${avatar}`);
  const onImageChange = (event) => {
    // console.log("On Image Change");
    if (event.target.files && event.target.files[0]) {
      // console.log("image is being changed");
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  useEffect(() => {
    console.log(watch("profilepic"));
    const imageFile = watch("profilepic");
    setImage(imageFile[0]?.name);
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64string = reader.result;
      setBase64(base64string);
      console.log(base64);
    };

    if (imageFile) {
      const blob = new Blob([imageFile[0]], { type: imageFile[0]?.type });
      // console.log(blob);
      reader.readAsDataURL(blob);
    }

    console.log(imageFile[0]);
    //  console.log(imageFile?.File?.name);
    setImage(base64);
  });
  // console.log(image);

  return (
    <div className="flex justify-center items-center h-screen  bg-[#73605B]">
      <div className="overflow-hidden  h-screen w-full">
        <div className="h-[80vw] overflow-clip left-[-30vw] top-[-50vw] absolute bg-gray-300 rounded-full w-[80vw]"></div>
      </div>
      <div className="w-[100vw]  justify-between sm:w-[30rem] pt-[15vh] p-10 h-screen sm:max-h-[50rem]  sm:p-20 shadow-xl z-10 absolute bg-[rgba(255,255,255,.96)] sm:rounded-3xl overflow-auto">
        <h1 className="text-center text-3xl font-semibold ">
          Register to Khana
        </h1>
        <hr className="border w-full h-1 bg-black my-4" />
        <form action="" onSubmit={handleSubmit(registerUser)}>
          <div>
            <img
              //  src={userUpload}
              src={image?.length > 100 ? image : profilepic}
              alt="profilepic"
              id="profilepic"
              className="w-40 h-40 mx-auto my-3 rounded-full  "
            />
            <label
              htmlFor="image"
              className="block align-middle select-none  items-center mx-auto text-center transition-all mb-4 p-2 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full   w-40 cursor-pointer"
            >
              Upload Image
            </label>

            <input
              type="file"
              accept="image/jpeg, image/jpg, image/png"
              id="image"
              className="hidden"
              // name="image"
              // console.log(e.target.value);
              // setUserUpload(e.target.value)
              {...register("profilepic", {})}
            />
          </div>
          <div>
            <label for="username" className="font-normal text-sm ml-2">
              Username:
            </label>

            <input
              type="text"
              value={params.username}
              readOnly
              className="border-2 w-full h-10 px-2 pl-2  border-[#01cc65]  mb-1 rounded-xl  p-2 text-sm focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4"
              id="username"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-normal text-sm ml-2">
              Email:
            </label>

            <input
              type=""
              value={params.email}
              readOnly
              className="border-2 w-full h-10 px-2 pl-2  border-[#01cc65]  mb-1 rounded-xl  p-2 text-sm focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4"
              id="username"
              required
            />
          </div>

          <div>
            <label for="name" className="font-normal text-sm ml-2">
              {" "}
              Name:
            </label>

            <input
              type="text"
              className="border-2 w-full h-10 px-2 pl-2  border-[#01cc65]  mb-1 rounded-xl  p-2 text-sm focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4"
              id="name "
              name="name"
              placeholder="Enter your Name"
              required
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Z][a-zA-Z ]*$/,
                  message:
                    "Name should start with a capital letter and shouldn't contain any special characters",
                },
              })}
            />
            <p>{errors.name?.message}</p>
          </div>

          <div>
            <label for="address" className="font-normal text-sm ml-2">
              Address:
            </label>
            <input
              type="text"
              className="border-2 w-full h-10 px-2 pl-2  border-[#01cc65] mb-1 rounded-xl p-2 text-sm focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4"
              id="address"
              placeholder="Enter your Address"
              required
              {...register("address", {
                required: "Address is required",
                pattern: {
                  value: /^[a-zA-Z0-9 ,.-]*$/,
                  message:
                    "Address should only contain letters, numbers, spaces, and these characters: ,.-",
                },
              })}
            />
            <p>{errors.address?.message}</p>
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
              placeholder="Enter your Contact No"
              required
              // {...register("contactno", {
              //   required: true,
              //   validate: {
              //     matchPattern: (value) =>
              //       /^9\d{9}$/.test(value) ||
              //       setError("Please enter a valid phone number"),
              //   },
              // })}
              {...register("contactno", {
                required: "Contact number is required",
                pattern: {
                  value: /^9\d{9}$/,
                  message:
                    "Please enter a valid phone number starting with 9 and having 10 digits in total",
                },
              })}
            />
            <p>{errors.contactno?.message}</p>
          </div>
          <div>
            <select
              value={selectedOption}
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
              type="submit"
              value="Register"
              className="align-middle select-none  font-bold  text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full  h-10 w-full mt-6 cursor-pointer"
            >
              Register
            </button>
          </div>
        </form>

        {/* <div className="Error mt-8  p-2 rounded-md  text-sm font-light text-red-600">
          {error}
        </div> */}
        {loader ? (
          <div className="mt-10 -8 pb-10 p-2 rounded-md  text-sm font-light text-red-600 flex">
            <div class="loader "></div>
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
export default Register;
