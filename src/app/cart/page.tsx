import React from "react";

export default function cart() {
  return (
    <div className="w-full flex justify-center items-center py-16">
      <div className="bg-white shadow-lg rounded-3xl px-8 py-12 min-w-[350px] text-center">
        <h1 className="text-3xl font-bold mb-4">Cart</h1>
        <div className="space-y-6">
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <div className="font-semibold">Glowva Face Serum</div>
              <div className="text-gray-400 text-sm">Qty: 2</div>
            </div>
            <div className="font-bold">$24.00</div>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <div className="font-semibold">Hydrating Cleanser</div>
              <div className="text-gray-400 text-sm">Qty: 1</div>
            </div>
            <div className="font-bold">$12.00</div>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <div className="font-semibold">SPF 50+ Sunscreen</div>
              <div className="text-gray-400 text-sm">Qty: 1</div>
            </div>
            <div className="font-bold">$15.00</div>
          </div>
        </div>
        <div className="mt-8 text-lg font-bold">Total: $75.00</div>
      </div>
    </div>
  );
}