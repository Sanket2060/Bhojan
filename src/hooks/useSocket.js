import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";
import { addOrder } from "../features/user/realtimeorderSlice";
import { toast, ToastContainer } from "react-toastify";

export function useSocket(userDetails) {
  const dispatch=useDispatch();
  const socketRef = useRef(null);

  useEffect(() => {
    // only connect if userDetails exist
    if (userDetails && !socketRef.current) {
      socketRef.current = io("http://localhost:9090", {
        query: { userDetails:JSON.stringify(userDetails), id: userDetails._id },
      });

      console.log("Socket connected for:", userDetails);

      socketRef.current.on("new_order",(orderData)=>{
        console.log("Incoming order",orderData?.data?.data);
        dispatch(addOrder(orderData?.data?.data));
        const orderAddress=orderData.data.data.address;
        toast.success(`New donation from ${orderAddress}`);
      })
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
        console.log("Socket disconnected");
      }
    };
  }, [userDetails]);

  return socketRef.current;
}
