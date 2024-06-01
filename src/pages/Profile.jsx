import React, { useState, useEffect } from "react";
import avatar from "../assets/profilepic.jpg";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ProfileAccomplishment from "../components/ProfileAccomplishment";
import axios from "axios";
import { TbPhotoEdit } from "react-icons/tb";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
const Profile = () => {
  const { register, handleSubmit, formState } = useForm();
  const params = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const [rank, setRank] = useState("-");

  useEffect(() => {
    const getUsersRank = async () => {
      try {
        if (userDetails) {
          const endpoint = userDetails.isDonor
            ? "  https://khana.me/api/v1/getData/getDonorsRank"
            : "  https://khana.me/api/v1/getData/getDistributorsRank";
          console.log("userDetails.username", userDetails?.username);
          const response = await axios.post(endpoint, {
            username: userDetails?.username,
          });
          console.log("response", response);
          const rankValue = response.data.data.rank;
          if (rankValue > 10) {
            setRank("-");
          } else {
            setRank(rankValue);
          }
        }
      } catch (error) {
        console.error("Error fetching user's rank:", error);
      }
    };

    getUsersRank();
  }, [userDetails]);

  useEffect(() => {
    console.log("rank", rank);
  }, [rank]);

  return (
    <div className="dark:bg-[#121212]">
      <Navbar />
      <div className="flex justify-center items-center ">
        <div className="bg-gradient-to-b from-cyan-400 absolute w-screen h-[40vh]  top-24"></div>
        <div className="w-[100vw] justify-between scroll-pt-40 sm:w-[48rem] mt-40 mb-20 sm:p-20 md:shadow-xl z-10 bg-[rgba(255,255,255,.9)] sm:rounded-3xl dark:bg-[#1F1A24]">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)(e);
            }}
          >
            <div className="mb-4 relative">
              <img
                src={userDetails?.avatar}
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
                  //console.log(e.target.value);
                }}
                {...register("profilepic", {
                  validate: {
                    // ... (previous code)
                  },
                })}
              />
            </div>

            <div className="relative top-[-10rem] md:top-[-12rem] flex flex-col p-2">
              <h1 className="text-3xl font-bold p-2 self-center dark:text-gray-200">
                {userDetails?.name}
              </h1>
              <h2 className="text-xl self-center dark:text-gray-400">
                @{userDetails?.username}
              </h2>
            </div>
            <div className="relative top-[-8rem]">
              <ProfileAccomplishment
                totalFoodSaved={500}
                ourCommunity={1000}
                totalPeopleServed={userDetails?.numberOfPeopleFeed}
                totalPoints="Total Points"
                rankText="Rank"
                rank={rank}
                totalPeopleServedText="People Served"
              />
            </div>
            <div className="relative top-[-6rem] p-4 md:p-0">
              <div>
                <label
                  for="name"
                  className="font-normal text-sm ml-2 dark:text-gray-50"
                >
                  Name:
                </label>

                <input
                  type="text"
                  className="border-2 w-full h-10 px-2 pl-2  border-[#01cc65]  mb-1 rounded-xl  p-2 text-sm focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4 dark:bg-gray-800 dark:border-gray-800 dark:focus:border-gray-700 dark:text-gray-50"
                  id="name "
                  name="name"
                  value={userDetails?.name}
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
                  className="font-normal text-sm ml-2 dark:text-gray-50"
                >
                  Username:
                </label>
                <input
                  type="text"
                  value={userDetails.username}
                  readOnly={!isEditing}
                  className="border-2 w-full h-10 px-2 pl-2 border-[#01cc65] mb-1 rounded-xl p-2 text-sm focus:outline-none focus:ring-0 focus:border-gray-300 focus:text-gray-900 focus:border-4 dark:bg-gray-800 dark:border-gray-800 dark:focus:border-gray-700 dark:text-gray-50"
                />
              </div>

              <div>
                <label
                  for="email"
                  className="font-normal text-sm ml-2 dark:text-gray-50"
                >
                  Email:
                </label>

                <input
                  type=""
                  value={userDetails.email}
                  readOnly={!isEditing}
                  className="border-2 w-full h-10 px-2 pl-2  border-[#01cc65]  mb-1 rounded-xl  p-2 text-sm focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4 dark:bg-gray-800 dark:border-gray-800 dark:focus:border-gray-700 dark:text-gray-50"
                  id="username"
                  required
                />
              </div>

              <div>
                <label
                  for="address"
                  className="font-normal text-sm ml-2 dark:text-gray-50"
                >
                  Address:
                </label>
                <input
                  type="text"
                  className="border-2 w-full h-10 px-2 pl-2  border-[#01cc65] mb-1 rounded-xl p-2 text-sm focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4 dark:bg-gray-800 dark:border-gray-800 dark:focus:border-gray-700 dark:text-gray-50"
                  id="address"
                  value={userDetails.address}
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
                  className="font-normal text-sm ml-2 dark:text-gray-50"
                >
                  {" "}
                  Contact Number:
                </label>
                <input
                  type="number"
                  className="border-2 w-full h-10 px-2 pl-2 border-[#01cc65] mb-1 rounded-xl focus:outline-none focus:ring-0  focus:border-gray-300 focus:text-gray-900 focus:border-4 p-2 text-sm dark:bg-gray-800 dark:border-gray-800 dark:focus:border-gray-700 dark:text-gray-50"
                  id="contactno"
                  value={userDetails.contact}
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
                <button
                  type="button"
                  onClick={() => setIsEditing(!isEditing)}
                  className="align-middle select-none font-bold text-center transition-all text-sm bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full h-10 w-full mt-6 cursor-pointer dark:bg-[#452e82]"
                >
                  {isEditing ? "Cancel" : "Edit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Profile;
