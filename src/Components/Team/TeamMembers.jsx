import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
const TeamMembers = ({ img, name, role, discord, twitter }) => {
  return (
    <div className="relative lg:mt-0 mt-4 ml-4 mr-4 shadow-xl ring-2 ring-yellow-600 bg-yellow-400 rounded-2xl h-[15rem] w-[8rem] lg:h-[22rem]  lg:w-[20rem]">
      <div className="relative flex top-10 flex-col items-center">
        <div
          className={` ${img} bg-cover  rounded-[10rem] h-[4rem] w-[4rem] lg:h-[10rem]  lg:w-[10rem]`}
        />
        <h2 className="relative text-center  text-lg lg:text-xl top-2 font-semibold text-black">
          {name}
        </h2>
        <h3 className="relative top-2 text-md lg:text-lg  font-semibold text-[#1c1c1c]">
          {role}
        </h3>
        <div className="flex">
          <div className="relative flex justify-center items-center text-2xl  mr-4 top-4 w-[2rem] h-[2rem] rounded-[4rem] bg-white ring-2 shadow-md ring-black">
            <a href={discord}>
              <FaDiscord />
            </a>
          </div>
          <div className="relative flex justify-center items-center text-2xl ml-4 top-4  w-[2rem] h-[2rem] rounded-[4rem] bg-white ring-2 shadow-md ring-black">
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

export default TeamMembers;
