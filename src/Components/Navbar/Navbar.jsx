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
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import Slide from "react-reveal/Slide";
const Navbar = () => {
  return (
    <div className="fixed hidden lg:block flex justify-center items-center z-50 w-full h-[5rem] backdrop-blur-sm text-white">
      <Slide duration={1000} delay={1000} top>
        <div className="relative bg-[#1c1c1c] top-4 flex justify-around z-50 w-[95%] h-[5.5rem] rounded-[3rem] ring-[1px] ring-yellow-400">
          <div className="flex w-full h-full ">
            <Link
              activeClass="active"
              to="welcome"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              <div className="relative  left-12 top-[2px] bg-[url('/public/logo.jpg')] z-10  bg-orange-500 bg-cover h-[5rem] rounded-[6rem] w-[15rem] " />
            </Link>
            <div className="relative left-24 flex w-[13rem] justify-around items-center text-3xl">
              <a className=" hover:text-yellow-400">
                <BsTwitter />
              </a>
              <a className=" hover:text-yellow-400">
                <BsInstagram />
              </a>
              <a className=" hover:text-yellow-400">
                <FaDiscord />
              </a>
            </div>
          </div>

          <div className="relative right-10 flex justify-between items-center h-full w-[40rem]">
            <Link
              activeClass="active"
              to="welcome"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              <a className="hover:text-yellow-400 font-semibold">WELCOME</a>
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={1000}
            >
              <a className="hover:text-yellow-400  font-semibold"> ABOUT</a>
            </Link>
            <Link
              activeClass="active"
              to="roadmap"
              spy={true}
              smooth={true}
              offset={-550}
              duration={1000}
            >
              <a className="hover:text-yellow-400  font-semibold"> ROADMAP</a>
            </Link>{" "}
            <Link
              activeClass="active"
              to="team"
              spy={true}
              smooth={true}
              offset={-200}
              duration={1000}
            >
              <a className="hover:text-yellow-400 font-semibold">TEAM</a>
            </Link>
            <Link
              activeClass="active"
              to="rarity"
              spy={true}
              smooth={true}
              offset={100}
              duration={1000}
            >
              <a className="hover:text-yellow-400  font-semibold">RARITY</a>
            </Link>
            <Link
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              offset={-250}
              duration={1000}
            >
              <a className="hover:text-yellow-400  font-semibold"> FAQ</a>
            </Link>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Navbar;
