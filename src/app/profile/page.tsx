import React from "react";

export default function profile() {
  return (
    <div className="w-full flex justify-center items-center py-16">
      <div className="bg-white shadow-lg rounded-3xl px-8 py-12 min-w-[350px] text-center">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <div className="mb-4">
          <div className="font-semibold text-lg">Jane Doe</div>
          <div className="text-gray-500">jane.doe@email.com</div>
        </div>
        <div className="text-left text-gray-700">
          <div className="mb-2">
            <span className="font-semibold">Address:</span> 123 Main St, Springfield
          </div>
          <div className="mb-2">
            <span className="font-semibold">Phone:</span> (555) 123-4567
          </div>
          <div>
            <span className="font-semibold">Member since:</span> Jan 2023
          </div>
        </div>
      </div>
    </div>
  );
}