import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
const Question = ({ question, description }) => {
  const [extended, setExtended] = useState(false);
  const extenddiv = () => {
    setExtended((prev) => !prev);
  };
  return (
    <div onClick={extenddiv} className="relative mt-[3rem] flex flex-col">
      <div
        className={`relative h-[4rem] break-words whitespace-pre-line flex flex-col items-center justify-center w-[50rem] bg-white rounded-xl ${
          extended
            ? "animate-[extendanim_1s_ease-in-out_forwards]"
            : "animate-[retractanim_1s_ease-in-out_forwards]"
        }`}
      >
        <h3 className="absolute top-4 text-xl lg:text-2xl">{question}</h3>

        <h2
          className={`absolute flex justify-center w-[15rem] lg:w-full lg:left-4 overflow-y-hidden text-xl px-4 text-[#1c1c1c] top-16`}
        >
          {description}
        </h2>
      </div>
      <div
        className={`
          ${
            extended
              ? "animate-[rotatearrow_1s_ease-in-out_forwards]"
              : "animate-[rotatearrowback_1s_ease-in-out_forwards]"
          }
         absolute top-[.3rem] right-4  text-6xl`}
      >
        <BiChevronDown />
      </div>
    </div>
  );
};

export default Question;
