import React from "react";

export default function Confirmation(props) {
  const { isOpen, onClose, onConfirm, message } = props;

  if (!isOpen) {
    return <></>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="relative bg-white p-6 rounded-md">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {/* need to replace the 'X' with close icon */}X
        </button>
        <p className="text-black">{message}</p>
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            No
          </button>
          <button
            onClick={() => {
              onClose();
              onConfirm();
            }}
            className="bg-blue-500 hover:bg-blue-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
