"use client";

export default function Loading() {
  return (
    <div className="flex space-x-1 items-center">
      {/* <span className="text-xl font-light text-gray-800">Loading</span> */}
      <div className="flex space-x-1">
        <div
          className="w-2 h-2 bg-blue rounded-full animate-bounce"
          style={{ animationDelay: "0ms" }}
        />
        <div
          className="w-2 h-2 bg-blue rounded-full animate-bounce"
          style={{ animationDelay: "150ms" }}
        />
        <div
          className="w-2 h-2 bg-blue rounded-full animate-bounce"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    </div>
  );
}
