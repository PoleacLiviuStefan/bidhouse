import React from "react";
import Fade from "react-reveal/Fade";
const Rarity = () => {
  return (
    <div
      name="rarity"
      className="relative flex flex-col items-center  w-full h-[130rem] bg-[#1c1c1c] top-[65rem]"
    >
      <Fade delay={400} bottom>
        <div>
          <div className="relative top-[19.5rem] bg-[url('/public/Rarity.png')]  rotate-[-4deg] bg-cover w-[21.3rem] h-[3.5rem]" />
        </div>
        <h2 className="relative text-white font-bold top-[18.5rem] text-[3.5rem]">
          OUR RARITY CHART
        </h2>
        <div className="relative top-[30rem] w-full flex justify-center">
          <div className="bg-[url('/public/common.jpg')] mr-4 shadow-2xl bg-cover w-[15rem] h-[17.5rem]" />
          <div className="bg-[url('/public/uncommon.jpg')] ml-4 mr-4 shadow-2xl bg-cover w-[15rem] h-[17.5rem]" />
          <div className="bg-[url('/public/rare.jpg')] ml-4 mr-4 shadow-2xl bg-cover w-[15rem] h-[17.5rem]" />
          <div className="bg-[url('/public/epic.jpg')] ml-4 mr-4 shadow-2xl bg-cover w-[15rem] h-[17.5rem]" />
          <div className="bg-[url('/public/legendary.jpg')] ml-4 mr-4 shadow-2xl bg-cover w-[15rem] h-[17.5rem]" />
          <div className="bg-[url('/public/mythic.jpg')] ml-4 mr-4 shadow-2xl bg-cover w-[15rem] h-[17.5rem]" />
        </div>
      </Fade>
    </div>
  );
};

export default Rarity;
