import React, { useState } from "react";
import { FiLock } from "react-icons/fi";
import { ImNewspaper } from "react-icons/im";
import Fade from "react-reveal/Fade";

const Benefits = ({ text, icon, textover }) => {
  const [over, setOver] = useState(false);
  const changeText = () => {
    setOver(true);
  };
  const changeBack = () => {
    setOver(false);
  };
  return (
    <Fade delay={300}>
      <div
        onMouseEnter={changeText}
        onMouseLeave={changeBack}
        className="w-[21rem] mt-4 lg:mt-0   px-2 py-2 h-[13rem] shadow-xl ring-1 ring-yellow-400 rounded-xl flex justify-center items-center "
      >
        <h2
          className={`text-[#d0d0d0] ${
            over
              ? "animate-[appear_.5s_ease-in-out_forwards]"
              : "animate-[dissappear_.5s_ease-in-out_forwards]"
          }   font-semibold text-[1.2rem]`}
        >
          {over ? textover : text}
        </h2>
        <div
          className={`${
            !over && "animate-[dissappear_.5s_ease-in-out_forwards]"
          } relative left-4 text-2xl `}
        >
          {!over && icon}
        </div>
      </div>
    </Fade>
  );
};

export default Benefits;
