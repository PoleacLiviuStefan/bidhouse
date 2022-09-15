import React from "react";
import Fade from "react-reveal/Fade";
import { BsChevronDoubleDown } from "react-icons/bs";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const Hero = () => {
  return (
    <div
      name="welcome"
      className="relative bg-[url('/public/key2.gif')] bg-cover  flex   shadow: [120px 80px 40px 20px #0ff]  text-white flex-col justify-center items-center w-full h-screen "
    >
      <div className="absolute bg-black bg-opacity-50 w-full h-full" />
      <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent bg-opacity-50 w-full h-[5rem]" />
      <div className="absolute top-0 bg-gradient-to-b from-black to-transparent bg-opacity-50 w-full h-[5rem]" />
      <div className="absolute left-0 bg-gradient-to-r from-black to-transparent bg-opacity-50 w-[5rem] h-full" />
      <Fade delay={300} top>
        <div className="absolute right-0 bg-gradient-to-l from-black to-transparent bg-opacity-50 w-[5rem] h-full" />

        <h1 className="relative w-full  text-white  drop-shadow-orange-500  leading-[5rem] text-center font-bold line text-3xl lg:text-6xl">
          WELCOME TO BIDHOUSE
        </h1>

        <p className="relative top-10 text-[#e0e0e0] text-lg  font-semibold w-[20rem] lg:w-[40rem] text-justify">
          We brought you an NFT project combined with the OG side of business,
          real estate.A unique idea that started from our "locker room talks"
          and now we have an amazing team and community.
        </p>
        <Link
          activeClass="active"
          to="whoweare"
          spy={true}
          smooth={true}
          offset={-200}
          duration={1000}
        >
          <button className="relative shadow-2xl flex z-50 items-center justify-center  top-20 w-[15rem] h-[3rem] text-lg font-semibold  animate-[mouseleft_.4s_ease-in-out_forwards]  rounded-[2rem] hover:animate-[mouseover_.4s_ease-in-out_forwards]">
            ABOUT US{" "}
            <BsChevronDoubleDown className="absolute right-[2rem]  animate-[arrowsanim_1.3s_ease-in-out_infinite]" />
          </button>
        </Link>
        <div className="z-10">
          <div className="waveWrapperInner bgTop">
            <div className="bg-[url('http://front-end-noobs.com/jecko/img/wave-mid.png')]"></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div className="wave waveMiddle"></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div className="wave waveBottom"></div>
          </div>
        </div>
      </Fade>
      <div className="absolute  hidden lg:block bottom-0 left-0 overflow-x-hidden w-full  h-[15rem]">
        <div className="absolute bg-[url('/public/wave2.png')]  bg-cover  w-[250%] h-full transform-[translate3d(0,0,0)] bg-opacity-5 "></div>
        <div className="absolute bg-[url('/public/wave1.png')]  bg-cover animate-[wave_10s_linear_reverse_infinite] w-[200%] bottom-0 bg-opacity-50 h-full transform-[translate3d(0,0,0)] "></div>
        <div className="absolute bg-[url('/public/wave1.png')]  bg-cover w-[200%] animate-[wave_20s_linear_reverse_infinite] delay-[1000] bottom-0 bg-opacity-50 h-full transform-[translate3d(0,0,0)] "></div>
      </div>
      <div className="absolute hidden lg:block bottom-0 bg-gradient-to-t from-[#1c1c1c] to-orange-500 h-[1rem] w-full" />
    </div>
  );
};

export default Hero;
