import React from "react";

const Skeleton = () => {
  return (
    <div
      role="status"
      className="max-w-full p-4 space-y-4  rounded shadow animate-pulse dark:divide-gray-700 md:p-6 "
    >
      {[1, 2, 3, 4, 5].map(() => (
        <div className="flex items-center flex-row justify-between gap-4 pb-4">
          <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-600 w-[300px]" />
          <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-700 w-[150px]" />
          <div className="h-4 bg-gray-300 rounded-full dark:bg-gray-700 w-[150px]" />
        </div>
      ))}
    </div>
  );
};
export default Skeleton;
