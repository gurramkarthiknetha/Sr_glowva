import React from "react";

export default function favourite() {
  return (
    <div className="w-full flex justify-center items-center py-16">
      <div className="bg-white shadow-lg rounded-3xl px-8 py-12 min-w-[350px] text-center">
        <h1 className="text-3xl font-bold mb-4">Favorites</h1>
        <div className="space-y-6">
          <div className="border-b pb-2">
            <div className="font-semibold">Glowva Face Serum</div>
            <div className="text-gray-400 text-sm">
              Brightens and hydrates skin
            </div>
          </div>
          <div className="border-b pb-2">
            <div className="font-semibold">SPF 50+ Sunscreen</div>
            <div className="text-gray-400 text-sm">Daily sun protection</div>
          </div>
          <div className="border-b pb-2">
            <div className="font-semibold">Night Repair Cream</div>
            <div className="text-gray-400 text-sm">Repairs skin overnight</div>
          </div>
        </div>
      </div>
    </div>
  );
}