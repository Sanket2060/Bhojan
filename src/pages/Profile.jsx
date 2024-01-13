import React from "react";

function Username() {
  return "username here";
}

function Name() {
  return "name here";
}

function Contact() {
  return "contact here";
}

function Address() {
  return "address here";
}

function Email() {
  return "email here";
}

export default function Profile() {
  const generateUsers = () => {
    const users = [];
    const n = 1;

    for (let i = 1; i <= n; i++) {
      users.push(
        <div
          key={i}
          class="p-24 md:p-10 bg-amber-600 rounded-lg hover:bg-amber-500 transition duration-300 ease-in-out w-full md:w-auto mt-4"
        >
          <h1 class="text-white text-2xl font-bold mt-4">{Username()}</h1>
          <div class="rounded-full bg-white w-32 h-32 mt-4"></div>
          <div class="flex flex-col mt-4 text-center md:text-left">
            <div class="flex mt-2">
              <p class="text-white text-sm ml-2 md:pr-4">Name: {Name()}</p>
            </div>
            <div class="flex mt-2">
              <p class="text-white text-sm ml-2 md:pr-4">
                Address: {Address()}
              </p>
            </div>
            <div class="flex mt-2">
              <p class="text-white text-sm ml-2 md:pr-4">Email: {Email()}</p>
            </div>
            <div class="flex mt-2">
              <p class="text-white text-sm ml-2 md:pr-4">
                Contact: {Contact()}
              </p>
            </div>
            <button class="bg-white text-purple-500 rounded-lg px-4 py-2 mt-4">
              Edit Profile
            </button>
          </div>
        </div>
      );
    }

    return users;
  };

  return (
    <>
      <div class="bg-purple-500 min-h-screen flex flex-col items-center justify-center">
        {generateUsers()}
      </div>
    </>
  );
}
