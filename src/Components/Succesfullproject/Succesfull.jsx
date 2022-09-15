import React from "react";
import Fade from "react-reveal/Fade";
const Succesfull = () => {
  return (
    <div className="relative bg-[#1c1c1c]  top-[20rem] h-[120rem] w-full flex flex-col items-center text-white">
      <div className="relative flex flex-col items-center">
        <Fade delay={300} bottom>
          <h2 className="lg:w-full lg:text-6xl w-[17rem]  text-center text-2xl  font-bold">
            WHY THE PROJECT WILL BE{" "}
            <span className="text-yellow-400">SUCCESSFUL? </span>
          </h2>
        </Fade>
        <p className="relative top-[15rem] left-[0rem] lg:left-0 lg:leading-[8rem] text-lg lg:text-2xl">
          <Fade delay={300} bottom>
            <div className="relative flex shadow-xl justify-center items-center text-[#c9c9c9] h-[5rem] w-[32rem] lg:h-[5rem] lg:w-[70rem] bg-[#141414] ">
              Because our NFTs have value in the Real World
            </div>
          </Fade>
          <br />
          <Fade delay={300}>
            <div className="relative px-20 shadow-xl mt-36 lg:mt-0 whitespace-normal flex justify-center items-center text-[#c9c9c9] h-[5rem] w-[32rem] lg:h-[5rem] lg:w-[70rem] bg-[#141414]">
              Our community owns flats from which every holder can benefit
            </div>
          </Fade>
        </p>
      </div>
      <div className="relative flex top-[40rem] flex-col items-center">
        <Fade delay={300} bottom>
          <h2 className="text-center text-2xl lg:text-6xl  w-[20rem] lg:w-full font-bold">
            WHICH IS OUR
            <span className="text-yellow-400">STARTING POINT? </span>
          </h2>
          <h2 className="relative lg:w-full text-center w-[20rem] top-10 text-xl lg:text-3xl text-[#979797]">
            In the <span className="text-yellow-400">Metaverse </span>, the
            answer is the
            <span className="text-yellow-400"> Solana blockchain</span>
          </h2>
        </Fade>
        <p className="relative top-[15rem] left-[0rem] lg:left-0 lg:leading-[8rem] text-lg lg:text-2xl">
          <Fade delay={300} bottom>
            <div className="relative  px-20 lg:px-0 flex shadow-xl justify-center items-center text-[#c9c9c9] h-[5rem] w-[32rem] lg:h-[5rem] lg:w-[70rem] bg-[#141414]">
              As for the real world, it all begins in Bucharest, Romania
            </div>
          </Fade>
          <br />
          <Fade delay={300}>
            <div className="relative px-20 shadow-xl mt-36 lg:mt-0 whitespace-normal flex justify-center items-center text-[#c9c9c9] h-[5rem] w-[32rem] lg:h-[5rem] lg:w-[70rem] bg-[#141414]">
              From there on we will expand our vision and assets as a community
              all over the world
            </div>
          </Fade>
        </p>
      </div>
    </div>
  );
};

export default Succesfull;
