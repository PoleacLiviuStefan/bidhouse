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
        <div className="relative top-[1rem] bg-[url('/public/Benefits.png')]  rotate-[-4deg] bg-cover w-[35rem] h-[4.3rem]" />
      </div>
      <h2 className="relative top-2 text-[3.5rem] text-white font-bold">
        BET ON US EARLY AND GET MORE BENEFITS
      </h2>
      <div
        className={`relative flex justify-center items-center top-20 ${
          showForm ? "h-[50rem] w-[45rem]" : "h-[20rem] w-[30rem]"
        } bg-[rgba(255,255,255,0)] shadow-2xl rounded-xl`}
      >
        <h2
          className={`text-white font-semibold ${
            showForm && "hidden"
          }  text-2xl`}
        >
          DISCOUNT FOR EARLY INVESTORS
        </h2>
        <button
          onClick={startForm}
          className={`absolute ${
            showForm && "hidden"
          }   w-[15rem] shadow-xl h-[4rem] bg-yellow-500 rounded-xl top-[12rem] text-2xl text-white `}
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
