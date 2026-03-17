import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addOrder } from "../features/user/realtimeorderSlice";

export function useSocket(userDetails) {
  const socketRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userDetails && !socketRef.current) {
      // decide namespace
      const namespace = userDetails.isDonor === false ? "/distributors" : "/";

      socketRef.current = io(`http://localhost:9090${namespace}`, {
        query: {
          userDetails: JSON.stringify(userDetails),
          id: userDetails._id,
        },
      });

      console.log(`Socket connected to namespace "${namespace}" for:`, userDetails);

      // Listen for new orders only if distributor
      if (namespace === "/distributors") {
        socketRef.current.on("new_order", (orderData) => {
          console.log("Incoming order", orderData?.data?.data);
          dispatch(addOrder(orderData?.data?.data));
          const orderAddress = orderData?.data?.data?.address;
          toast.info(`New donation from ${orderAddress}`);

        // Play beep sound repeatedly for 5 seconds
        const audio = new Audio("/beep.mp3");
        audio.loop = true;
        audio.play().catch((err) => {
          console.log("Autoplay prevented:", err);
        });
        // Stop after 2 seconds
        setTimeout(() => {
          audio.pause();
          audio.currentTime = 0; // reset to start
        }, 2000);

            });
      }
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
        console.log("Socket disconnected");
      }
    };
  }, [userDetails, dispatch]);

  return socketRef.current;
}
