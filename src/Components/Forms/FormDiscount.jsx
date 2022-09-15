import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
const FormDiscount = () => {
  const [nftNumber, setNftNumber] = useState(1);
  const [notification, setNotification] = useState(false);

  const addition = () => {
    setNftNumber((prev) => (prev += 1));
  };
  const preventform = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  const substraction = () => {
    if (nftNumber > 1) setNftNumber((prev) => (prev -= 1));
  };
  const sendForm = () => {
    setNotification(true);
  };
  return (
    <div>
      <form
        onSubmit={preventform}
        className="flex flex-col text-black items-center"
      >
        <input
          type="text"
          className="mt-4 text-white border-b-[1px] border-yellow-400 outline-none placeholder:text-white bg-[rgba(255,255,255,0)] w-[25rem] mb-4"
          placeholder="Discord Account"
          required
        ></input>
        <input
          className="mt-4 text-white border-b-[1px] border-yellow-400 outline-none  placeholder:text-white bg-[rgba(255,255,255,0)] w-[25rem] mb-4"
          type="text"
          placeholder="Twitter Account"
          required
        ></input>
        <select className="text-white border-b-[1px] outline-none border-yellow-400 bg-[rgba(255,255,255,0)]">
          <option
            className="bg-[rgba(255,255,255,0)]"
            value="Guaranteed Whitelist"
          >
            Guaranteed Whitelist
          </option>
          <option className="bg-[rgba(255,255,255,0)]" value="Discount 20%">
            Discount 20%
          </option>
          <option className="bg-[rgba(255,255,255,0)]" value="Pay 2 get 3">
            Pay 2 get 3
          </option>
        </select>
        <label className="text-white mt-16">
          How many NFTs you want to mint?
        </label>
        <div className="flex w-[15rem] justify-center">
          <div
            onClick={addition}
            className="text-white px-2 py-2 mr-2 text-2xl"
          >
            +
          </div>
          <input
            className="mt-4 text-xl text-center   border-b-[1px] text-white border-yellow-400 mb-4 bg-[rgba(255,255,255,0)] outline-none w-[4rem]"
            type="number"
            value={nftNumber}
            required
          ></input>
          <div
            onClick={substraction}
            className="text-white px-2 py-2  ml-2 text-3xl"
          >
            -
          </div>
        </div>
        <input
          className="mt-4 border-b-[1px] border-yellow-400  bg-[rgba(255,255,255,0)] placeholder:text-white text-white w-[25rem] outline-none mb-4"
          type="text"
          placeholder="Your wallet adress"
          required
        ></input>
        <input
          type="text"
          className="mt-4 border-b-[1px] border-yellow-400 bg-[rgba(255,255,255,0)] placeholder:text-white text-white w-[25rem] outline-none mb-4"
          placeholder="Signature transaction ID(if you already deposit)"
          required
        ></input>
        <textarea
          className=" text-left border-[1px]  border-yellow-400 bg-[rgba(255,255,255,0)] w-[25rem] placeholder:text-white text-white outline-none mb-4"
          placeholder="If you have something to say,we are listening"
        ></textarea>
        <button
          className="relative rounded-xl font-bold top-10   mb-4 w-[15rem] h-[1.5rem] bg-white text-black hover:bg-yellow-400 hover:text-white"
          type="submit"
          onClick={sendForm}
        >
          SEND
        </button>
      </form>
      <div
        className={`relative ${
          !notification && "hidden"
        } left-[17.5rem] bottom-4 flex justify-center items-center rounded-2xl w-[15rem] bg-white h-[5rem]`}
      >
        <h2 className="text-black font-semibold text-2xl">Form sent</h2>
        <i className="text-4xl ml-4 text-green-400">
          <AiOutlineCheckCircle />
        </i>
      </div>
    </div>
  );
};

export default FormDiscount;
