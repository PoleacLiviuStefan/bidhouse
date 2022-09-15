import React from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const Footer = () => {
  return (
    <div className=" flex justify-center items-center  relative  lg:top-[20rem] w-full h-[80rem] lg:h-[42rem] bg-[#1c1c1c]">
      <div className="relative flex items-center  justify-end w-[25rem] lg:w-[80rem] h-full ">
        <div className="absolute left-0 lg:left-0 bg-[url('/public/logo.jpg')] bg-cover w-[15rem] h-[5rem]" />
        <p className="absolute font-semibold text-center text-lg lg:text-2xl text-white left-0 top-[45rem] lg:top-[27rem] w-[12rem] lg:w-[15rem] h-[5rem]">
          11.111 NFTs with value in the real life
        </p>
        <div className="relative lg:left-0 left-[7rem] flex flex-col items-end top-[6rem]  justify-center w-[10rem] lg:w-[15rem] h-[30rem]">
          <h2 className="relative text-lg lg:text-xl left-2 text-white font-bold">
            Sections
          </h2>
          <ul className="text-md mt-8 flex flex-col items-start   text-white">
            <li className="mt-2 hover:text-slate-400">
              {" "}
              <Link
                activeClass="active"
                to="welcome"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                Welcome{" "}
              </Link>
            </li>
            <li className="mt-2 hover:text-slate-400">
              {" "}
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-150}
                duration={1000}
              >
                About
              </Link>
            </li>
            <li className="mt-2 hover:text-slate-400">
              {" "}
              <Link
                activeClass="active"
                to="roadmap"
                spy={true}
                smooth={true}
                offset={-550}
                duration={1000}
              >
                Roadmap
              </Link>
            </li>
            <li className="mt-2 hover:text-slate-400">
              {" "}
              <Link
                activeClass="active"
                to="rarity"
                spy={true}
                smooth={true}
                offset={100}
                duration={1000}
              >
                Rarity
              </Link>
            </li>
            <li className="mt-2 hover:text-slate-400">
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
            <li className="mt-2 hover:text-slate-400">
              <Link
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                offset={-200}
                duration={1000}
              >
                Team
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative lg:left-0 left-[-3rem] flex flex-col items-end top-[25rem] lg:top-[6rem]  justify-center w-[10rem] lg:w-[15rem] h-[30rem]">
          <h2 className="relative bottom-16 left-10 text-xl text-white font-bold">
            Social Links
          </h2>
          <ul className="relative text-md bottom-6   text-white">
            <li className="mt-2 hover:text-slate-400">Discord</li>
            <li className="mt-2 hover:text-slate-400">Twitter</li>
            <li className="mt-2 hover:text-slate-400">Instagram</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
