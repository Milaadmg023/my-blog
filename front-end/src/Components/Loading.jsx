import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center fixed top-0 left-0 z-50 bg-white">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  );
};

export default Loading;
