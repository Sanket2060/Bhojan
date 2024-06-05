import axios from "axios";
import { login, logout } from "./authslice.js";
export const fetchUserData = (navigate) => {
  return async (dispatch, useSelector) => {
    try {
      //console.log("Tried reloading the page");
      const response = await axios.get(
        " https://khana.me/api/v1/getData/getUserDetails",
        {
          withCredentials: true,
        }
      );
      // console.log(response.data.data);
      dispatch(login(response.data.data));
      const userDetails = await useSelector((state) => state.auth.userDetails);
      //console.log("isDonor", userDetails.auth.userDetails.isDonor);
      userDetails.auth.userDetails.isDonor
        ? navigate("/donor")
        : navigate("/volunteer");
    } catch (error) {
      console.log("Error at authAction", error);
      dispatch(logout());
    }
  };
};
