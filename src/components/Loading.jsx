import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center bg-black min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  );
}

export default Loading;
