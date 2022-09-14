import React from "react";

const PopUpCard = ({ topItem, items, bottomItem }) => {
  return (
    <div className="py-4 bg-slate-50 shadow-xl  rounded-md">
      {/* ----==== Top Area ====----- */}
      <div className="px-5 border-b-2 pb-3 border-b-slate-300">
        <div className="flex items-center px-4 py-3 rounded-lg hover:bg-slate-200 transition duration-500">
          <div
            className={`flex justify-center items-center p-1 rounded-xl mr-5 ${topItem.backGround} `}
          >
            <span>{topItem.img}</span>
          </div>
          <span>{topItem.title}</span>
        </div>
      </div>
      {/* -----===== Nav Item =====----- */}
      <ul className="pl-10 pr-5">
        {items.map((item, index) => (
          <li
            key={index}
            className="my-3 relative hover:translate-x-2 transition duration1000 ease-in-out"
          >
            <a href="#home">{item.title}</a>
          </li>
        ))}
      </ul>
      {/* -----===== Bottom Item =====----- */}
      <div className="flex items-center space-x-3 text-blue-700 pl-10 relative hover:translate-x-2 transition duration1000 ease-in-out">
        <span>{bottomItem.title}</span>
        <span className="!text-blue-700">{bottomItem.icon}</span>
      </div>
    </div>
  );
};

export default PopUpCard;
