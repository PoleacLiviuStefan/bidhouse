import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const WhatWeWant = () => {
  return (
    <div
      name="whatwewant"
      className="relative  bg-cover top-[25rem] flex flex-col items-center text-white w-full h-[80rem]"
    >
      {" "}
      <div className="flex justify-center items-center w-full h-[30rem]">
        <Fade delay={300} left>
          {" "}
          <h1 className="relative left-0 mr-2  w-[10rem] lg:w-[40rem] text-xl lg:text-4xl font-bold">
            OUR INTENTION WITH THE PROJECT?
          </h1>
        </Fade>
        <p className="relative left-2 lg:right-12 w-[12rem] lg:w-[47rem] text-left">
          <Fade delay={500} right>
            <h2 className="text-xl lg:text-2xl font-semibold">
              We want to bring the Solana Chain into the real estate of
              Bucharest
            </h2>
          </Fade>
          <Fade delay={300} right>
            <span className="relative  text-xl">
              <span className="relative top-2 text-[#cacaca] text-xl">
                <br />
                After that, gift our community with profits.
                <br />
              </span>
              <span className="relative top-4">
                <span className="text-yellow-500">100% </span> of Profit goes
                into the community <br />
              </span>

              <span className="relative top-6">
                <span className="text-yellow-500">75% </span> into Solana
                Airdrops, NFT raffles and giveaways. <br />
              </span>
              <span className="absolute top-[2.6rem] shadow-xl left-[-1rem]  h-[25rem] lg:h-[10rem] bg-yellow-400 w-[3px]" />
              <span className="relative top-8">
                <span className="text-yellow-500">25%</span> will go to our
                community's wallet Check the section "Benefits" to discover the
                utility of our NFTs.
              </span>
            </span>
          </Fade>
        </p>
        <span className="absolute  top-[35rem] lg:top-[30rem] h-[2px]  bg-yellow-400 w-full" />
      </div>
      <div className="flex justify-center items-center w-full h-[30rem]">
        <Fade delay={300} left>
          <h1 className="relative left-0 lg:left-40  w-[10rem] lg:w-[50rem] text-xl lg:text-4xl font-bold">
            WHO ARE WE?
          </h1>
        </Fade>
        <p className="relative top-[5rem] lg:top-0 right-0 lg:right-12  w-[12rem] lg:w-[47rem] text-left">
          <Fade delay={300} top>
            <h2 className="text-xl lg:text-2xl font-semibold">
              A team with perfected skills in the following domains
            </h2>
          </Fade>
          <Fade delay={300}>
            <span className=" text-[#cacaca] text-xl">
              <br />
              <button className="w-[8rem] h-[2rem] mr-4  rounded-xl">
                Accounting
                <span className="absolute top-[9.2rem] lg:top-[4.1rem] shadow-xl left-[0.5rem] lg:left-[0rem]  h-[1.5rem] bg-yellow-400 w-[3px]" />
              </button>

              <button className="w-[8rem] h-[2rem] mr-4  rounded-xl">
                Real Estate
                <span className="absolute top-[11.2rem] lg:top-[4.1rem] shadow-xl left-[0.5rem] lg:left-[9.25rem]  h-[1.5rem] bg-yellow-400 w-[3px]" />
              </button>
              <button className="relative left-4 w-[8rem] text-left  lg:w-[16rem] h-[2rem]  rounded-xl">
                Business Management
                <span className="absolute left-[-.5rem] lg:left-[-.9rem] top-[.5rem] lg:top-[.3rem] shadow-xl lg:left-[19.1rem] h-[3.2rem] lg:h-[1.5rem] bg-yellow-400 w-[3px]" />
              </button>
              <span className="absolute shadow-xl top-[18.7rem] lg:top-[7.6rem] left-[.3rem] lg:left-[-1rem] h-[10rem]  lg:h-[3rem] bg-yellow-400 w-[3px]" />
              <span className="relative top-12 left-4 lg:left-0 lg:top-6">
                <br />
                Also, more than
                <span className="text-yellow-500"> 25 people </span> provide
                value to the community and interact with them daily on Social
                Media.
              </span>
            </span>
          </Fade>
        </p>

        <span className="absolute top-[70rem] lg:top-[60rem] h-[2px] bg-yellow-400 w-full" />
      </div>
    </div>
  );
};

export default WhatWeWant;
