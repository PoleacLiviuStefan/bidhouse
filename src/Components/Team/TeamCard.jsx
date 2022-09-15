import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
const TeamCard = ({ img, name, position, discord, twitter }) => {
  return (
    <div className="relative rounded-3xl shadow-sm  w-[25rem] h-[40rem] bg-yellow-400 ring-4 ring-yellow-600 ">
      <div className="relative top-20 items-center flex flex-col">
        <div
          className={`${img}  shadow-2xl bg-cover w-[20rem] h-[20rem] rounded-[10rem]`}
        ></div>
        <h2 className="relative text-3xl top-10  text-[#1c1c1c] font-bold">
          {name}
        </h2>
        <h3 className="relative top-10 text-xl text-[#1c1c1c] font-semibold">
          {position}
        </h3>
        <div className="flex">
          <div className="relative flex justify-center items-center text-4xl  mr-4 top-20  w-[4rem] h-[4rem] rounded-[4rem] bg-white ring-2 shadow-md ring-black">
            <a href={discord}>
              <FaDiscord />
            </a>
          </div>
          <div className="relative flex justify-center items-center text-4xl ml-4 top-20  w-[4rem] h-[4rem] rounded-[4rem] bg-white ring-2 shadow-md ring-black">
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
