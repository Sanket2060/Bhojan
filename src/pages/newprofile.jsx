import React, { useState } from "react";

export default function NewProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-b from-white to-gray-700 ">
      <div className="h-3/4 w-[45%] shadow-lg overflow-auto rounded- hover:shadow-2xl">
        <div className="bg-gradient-to-br from-[#9618F7] to-[#A3C9E2] p-8 rounded-t-lg shadow-lg h-1/5"></div>
        <div className="grid gap-y-4 relative top-[-3rem]">
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gray-400">
              <a href="#">
                <img
                  className="rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVjIUVF6oxH5XlftLQ0lIypktQQPooA1Fb2w&usqp=CAU"
                  alt="your profile picture"
                />
              </a>
            </div>
          </div>
          <div className="grid gap-y-4 text-center mt-4">
            <h1 className="text-2xl font-bold text-gray-800">
              {isEditing ? <input type="text" /> : "Mr Bean."}
            </h1>
            <p className="text-gray-600">
              @{isEditing ? <input type="text" /> : "beany"}
            </p>
            <div className="flex justify-center text-gray-600">
              <div className="flex gap-9 pl-24">
                <span>
                  &#x1F4CD; {isEditing ? <input type="text" /> : "birmingham"}
                </span>
                <span>
                  &#x1F5D3; registerd date:
                  {isEditing ? <input type="text" /> : "2026/03/45"}
                </span>
              </div>
            </div>
            <hr className="h-0.5 bg-black" />
          </div>
          <div className="flex justify-center gap-5 ">
            <div className="grid gap-y-2">
              <h3 className="mx-auto font-bold">450</h3>
              <span text-gray-600>achievement</span>
            </div>
            <div className="grid gap-y-2">
              <h3 className="mx-auto font-bold"> 25</h3>
              <span text-gray-600>activity</span>
            </div>
            <div className="grid gap-y-2">
              <h3 className="mx-auto font-bold">34</h3>
              <span text-gray-600>progress</span>
            </div>
          </div>
          <div className="text-center">
            <p>
              {isEditing ? (
                <input type="text" />
              ) : (
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia delectus minus fugiat ex sint dignissimos voluptates rerum ea maiores incidunt quis suscipit dicta tempora facere magni, blanditiis consequatur doloribus ipsam!"
              )}
            </p>
          </div>
          <div className="text-center space-x-4">
            {isEditing ? (
              <>
                <button className="align-middle bg-violet-900 select-none font-bold py-2 px-6 text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl bg-[261750] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full">
                  Save
                </button>
                <button
                  onClick={handleCancelClick}
                  className="align-middle bg-red-500 select-none font-bold py-2 px-6 text-center transition-all text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={handleEditClick}
                className="align-middle bg-violet-900 select-none font-bold py-2 px-6 text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl bg-[261750] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full"
              >
                Edit
              </button>
            )}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
