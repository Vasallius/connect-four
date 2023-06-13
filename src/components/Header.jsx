/* eslint-disable react/prop-types */
// import React from "react";
export function Header({ menuClick, Logo, restartClick }) {
  return (
    <header className="flex w-[632px] justify-between mb-[17px] relative">
      <button
        onClick={menuClick}
        className="font-bold flex items-center justify-center rounded-[20px] bg-iris text-xs font-spacegrotesk text-white w-[86px] h-[39px] hover:bg-coral-pink"
      >
        MENU
      </button>
      <img src={Logo} alt="" />
      <button
        onClick={restartClick}
        className=" font-bold flex items-center justify-center rounded-[20px] bg-iris text-xs font-spacegrotesk text-white w-[108px] h-[39px] hover:bg-coral-pink"
      >
        RESTART
      </button>
    </header>
  );
}
