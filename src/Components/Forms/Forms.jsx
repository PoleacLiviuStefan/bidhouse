import React, { useState } from "react";
import FormDiscount from "./FormDiscount";

const Forms = () => {
  const [showForm, setShowForm] = useState(false);
  const startForm = () => {
    setShowForm(true);
  };
  return (
    <div
      name="forms"
      className="relative top-[50rem] flex flex-col items-center w-full h-[80rem] bg-[#1c1c1c]"
    >
      <div>
        <div className="relative top-[1rem] lg:top-[-.5rem] bg-[url('/public/Benefits.png')]  rotate-[-4deg] bg-cover w-[17rem] h-[2rem] lg:w-[35rem] lg:h-[4.3rem]" />
      </div>
      <h2 className="relative  text-center top-4 lg:top-2 text-xl lg:text-[3.5rem] text-white font-bold">
        BET ON US EARLY AND GET MORE BENEFITS
      </h2>
      <div
        className={`relative flex justify-center items-center top-20 ${
          showForm
            ? "h-[55rem]  w-[25rem]  lg:w-[45rem]"
            : "w-[20rem] h-[15rem] lg:h-[20rem] lg:w-[30rem]"
        } bg-[rgba(255,255,255,0)] shadow-2xl rounded-xl`}
      >
        <h2
          className={`text-white font-semibold ${
            showForm && "hidden"
          }  text-xl lg:text-2xl`}
        >
          DISCOUNT FOR EARLY INVESTORS
        </h2>
        <button
          onClick={startForm}
          className={`absolute ${
            showForm && "hidden"
          }   w-[10rem] lg:w-[15rem] shadow-xl h-[2.5rem] lg:h-[4rem] bg-yellow-500 rounded-xl top-[12rem] text-lg lg:text-2xl text-white `}
        >
          START
        </button>
      </div>
      <div
        className={` ${
          !showForm && "hidden"
        } absolute top-[25rem] w-[50rem] h-[60rem]`}
      >
        <FormDiscount />
      </div>
    </div>
  );
};

export default Forms;
