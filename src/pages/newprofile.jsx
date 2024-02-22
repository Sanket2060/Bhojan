import React, { useState } from "react";
import ProfileAccomplishment from "../components/ProfileAccomplishment";
import UserProfileForm from "../components/formforprofile";
import Navbar from "../components/Navbar";

export default function NewProfile() {
  const [imageUrl, setImageUrl] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVjIUVF6oxH5XlftLQ0lIypktQQPooA1Fb2w&usqp=CAU"
  );

  const handleImageClick = () => {
    document.getElementById("profilePicInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  return (
    <div className="h-screen w-screen overflow-auto dark:bg-[#121212] ">
      <Navbar />
      <div className="bg-gradient-to-br from-[#ffd89b] to-[#19547b] p-8 rounded-t-lg shadow-lg h-1/5"></div>

      <div className="grid gap-y-4 relative top-[-3rem]">
        <div className="flex items-center justify-center">
          <div className="w-32 h-32 rounded-lg bg-gray-400 ">
            <input
              id="profilePicInput"
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              onChange={handleFileChange}
            />
            <img
              className="w-32 h-32 rounded-lg cursor-pointer "
              src={imageUrl}
              alt="your profile picture"
              onClick={handleImageClick}
            />
          </div>
        </div>
      </div>
      <div className="grid gap-y-2 text-center mt-2">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white ">
          Mr Bean.
        </h1>
        <p className="text-gray-600 dark:text-white ">@beany</p>
        <div className="flex flex-col justify-center text-gray-600">
          <div className="flex md:flex-row items-center md:gap-10 flex-col justify-center dark:text-white ">
            <span>&#x1F4CD; Birmingham</span>
            <span>&#x1F5D3; Registered Date: 2026/03/45</span>
          </div>
          <div className="flex md:flex-row items-center md:gap-[15rem] flex-col justify-center dark:text-white ">
            <div>&#128231; Email</div>
            <div>&#xf2b9; contact:</div>
          </div>
        </div>

        <hr className="h-0.5 bg-black my-2 md:my-4" />
      </div>
      <div className="flex justify-center gap-5 dark:text-gray-100 ">
        <ProfileAccomplishment
          totalFoodSaved={500}
          ourCommunity={200}
          totalPeopleServed={800}
          totalFoodSavedText="Food Saved"
          ourCommunityText="Rank"
          totalPeopleServedText="People Served"
        />
      </div>
      <div>
        <UserProfileForm />
      </div>
    </div>
  );
}
