import React from "react";
import Fade from "react-reveal/Fade";
const Rarity = () => {
  return (
    <div
      name="rarity"
      className="relative flex flex-col items-center  w-full h-[200rem] lg:h-[130rem] bg-[#1c1c1c] top-[65rem]"
    >
      <Fade delay={400} bottom>
        <div>
          <div className="relative  top-[18.5rem] bg-[url('/public/Rarity.png')]  rotate-[-4deg] bg-cover w-[10.5rem] h-[1.7rem] lg:w-[21.3rem] lg:h-[3.5rem]" />
        </div>
        <h2 className="relative text-white font-bold top-[18.5rem] text-2xl lg:text-[3.5rem]">
          OUR RARITY CHART
        </h2>
        <div className="relative top-[30rem] w-full flex flex-col lg:flex-row  items-center lg:justify-center">
          <div className="bg-[url('/public/common.jpg')] lg:mr-4 shadow-2xl  bg-cover w-[15rem] h-[17.5rem]" />
          <div className="bg-[url('/public/uncommon.jpg')] lg:ml-4 lg:mr-4 mt-8 lg:mt-0 shadow-2xl bg-cover w-[15rem] h-[17.5rem]" />
          <div className="bg-[url('/public/rare.jpg')] lg:ml-4 lg:mr-4 mt-8 lg:mt-0 shadow-2xl bg-cover w-[15rem] h-[17.5rem]" />
          <div className="bg-[url('/public/epic.jpg')] lg:ml-4 lg:mr-4 mt-8 lg:mt-0 shadow-2xl bg-cover w-[15rem] h-[17.5rem]" />
          <div className="bg-[url('/public/legendary.jpg')] lg:ml-4 lg:mr-4 mt-8 lg:mt-0 shadow-2xl bg-cover w-[15rem] h-[17.5rem]" />
          <div className="bg-[url('/public/mythic.jpg')] lg:ml-4 lg:mr-4 mt-8 lg:mt-0 shadow-2xl bg-cover w-[15rem] h-[17.5rem]" />
        </div>
      </Fade>
    </div>
  );
};

export default Rarity;
