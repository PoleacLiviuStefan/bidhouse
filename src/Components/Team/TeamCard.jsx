import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
const TeamCard = ({ img, name, position, discord, twitter }) => {
  return (
    <div className="relative rounded-3xl shadow-sm w-[10rem] h-[18rem] lg:w-[25rem] lg:h-[40rem] bg-yellow-400 ring-4 ring-yellow-600 ">
      <div className="relative top-2 lg:top-20 items-center flex flex-col">
        <div
          className={`${img}  shadow-2xl bg-cover w-[8rem] h-[8rem] lg:w-[20rem] lg:h-[20rem] rounded-[10rem]`}
        ></div>
        <h2 className="relative text-xl lg:text-3xl top-10  text-[#1c1c1c] font-bold">
          {name}
        </h2>
        <h3 className="relative top-10 text-md lg:text-xl text-[#1c1c1c] font-semibold">
          {position}
        </h3>
        <div className="flex">
          <div className="relative flex justify-center items-center text-xl lg:text-4xl mr-2  lg:mr-4 top-14 lg:top-20  w-[2rem] h-[2rem] lg:w-[4rem] lg:h-[4rem] rounded-[4rem] bg-white ring-2 shadow-md ring-black">
            <a href={discord}>
              <FaDiscord />
            </a>
          </div>
          <div className="relative flex justify-center items-center text-xl lg:text-4xl lg:ml-4 ml-2 top-14 lg:top-20  w-[2rem] h-[2rem] lg:w-[4rem] lg:h-[4rem] rounded-[4rem] bg-white ring-2 shadow-md ring-black">
            <a href={twitter}>
              {" "}
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
