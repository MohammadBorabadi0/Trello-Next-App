"use client";

import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FocusEventHandler, useState } from "react";
import AvatarComponent from "./Avatar";

const RightSection = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isShow2, setIsShow2] = useState(false);

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.type === "focus") {
      setIsFocus(true);
    } else {
      setIsFocus(false);
    }
    console.log(e);
  };

  return (
    <section
      className={`flex items-center gap-3 text-white ${
        isFocus ? "text-black" : "text-white"
      }`}
    >
      <div
        className={`${
          isFocus ? "bg-white text-black" : "hover-link"
        } border border-gray-400 flex items-center gap-2 px-2 py-1 rounded-md`}
      >
        <BiSearchAlt2 className="mt-1" />
        <input
          type="search"
          className="bg-transparent placeholder-white outline-none"
          placeholder="Search"
          onFocus={onFocus}
        />
      </div>
      <span
        onClick={() => {
          setIsShow(!isShow);
          setIsShow2(false);
        }}
        className="text-white text-xl p-1 rounded-full hover-link cursor-pointer"
      >
        <MdOutlineNotifications />
      </span>
      <span
        onClick={() => {
          setIsShow2(!isShow2);
          setIsShow(false);
        }}
        className="text-white text-xl p-1 rounded-full hover-link cursor-pointer"
      >
        <AiOutlineQuestionCircle />
      </span>
      <AvatarComponent name="Mohammad Borabadi" />
    </section>
  );
};

export default RightSection;
