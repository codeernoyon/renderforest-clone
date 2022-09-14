import React from "react";

const Button = ({ title, className }) => {
  return (
    <>
      <button
        className={`px-6 py-2 rounded-[5px] text-slate-100 font-semibold btn ${className}`}
      >
        <a href="#home">{title}</a>
      </button>
    </>
  );
};

export default Button;
