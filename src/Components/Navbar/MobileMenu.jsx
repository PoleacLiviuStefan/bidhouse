import React, { useState, useEffect } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleMenu = () => {
    setActiveMenu((prev) => !prev);
    setTimeout(() => {
      setShowText(true);
    }, 1000);
    if (activeMenu == false) setShowText(false);
  };
  return (
    <div className="fixed block  lg:hidden z-50  w-[10rem] h-full  ">
      <div className="absolute left-6 top-6 z-50" onClick={handleMenu}>
        <div
          className={`border-[1px] border-black relative h-[4px] w-[1.3rem] ${
            activeMenu ? "bg-black rotate-[45deg] top-[7px]" : "bg-white "
          }`}
        />
        <div
          className={`relative top-[3px]  border-[1px] border-black h-[4px] w-[1.3rem] ${
            activeMenu ? "bg-black rotate-[-45deg]" : "bg-white  "
          }`}
        />
        <div
          className={` relative top-[6px] border-[1px] border-black h-[4px] w-[1.3rem] ${
            activeMenu ? "bg-black hidden" : "bg-white"
          }`}
        />
      </div>
      <div
        className={`absolute left-0 top-0 w-0 h-full  bg-yellow-400 ${
          activeMenu
            ? "block animate-[loadingopen_1s_ease-in-out_forwards]"
            : "hidden"
        }  top-10 text-[#1c1c1c]    text-md font-bold`}
      >
        <ul className={` ${!showText && "hidden"} relative top-16 leading-6 `}>
          <li className={`px-4 whitespace-pre-line py-4`}>
            {" "}
            <Link
              activeClass="active"
              to="welcome"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              WELCOME
            </Link>
          </li>
          <li className="px-4 py-4">
            {" "}
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={1000}
            >
              ABOUT
            </Link>
          </li>
          <li className="px-4 py-4">
            {" "}
            <Link
              activeClass="active"
              to="roadmap"
              spy={true}
              smooth={true}
              offset={-550}
              duration={1000}
            >
              ROADMAP
            </Link>
          </li>
          <li className="px-4 py-4">
            {" "}
            <Link
              activeClass="active"
              to="team"
              spy={true}
              smooth={true}
              offset={-200}
              duration={1000}
            >
              TEAM
            </Link>
          </li>
          <li className="px-4 py-4">
            {" "}
            <Link
              activeClass="active"
              to="rarity"
              spy={true}
              smooth={true}
              offset={100}
              duration={1000}
            >
              RARITY
            </Link>
          </li>
          <li className="px-4 py-4">
            {" "}
            <Link
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              offset={-250}
              duration={1000}
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
