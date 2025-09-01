import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect, user } = useAuth0();

  return (
    <button
      className="align-middle font-bold font-sans mt-1 p-2 text-center h-10 w-full bg-blue-700 text-white rounded-full focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs"
      onClick={async () => {
        await loginWithRedirect();
        //console.log(user);
      }}
    >
      Continue with Google
    </button>
  );
};

export default LoginButton;
