import React, { useState } from "react";

const Input = ({ icon, className }) => {
  const [value, setValue] = useState("");
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className="text-[20px] text-gray-500">{icon}</span>
      <input
        className="outline-none bg-transparent w-full"
        placeholder="Enter Your Email"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
