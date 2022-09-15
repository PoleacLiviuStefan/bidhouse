import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Benefits from "./Benefits";
import { FiLock } from "react-icons/fi";
import { ImNewspaper } from "react-icons/im";
import { HiOutlineTicket } from "react-icons/hi";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Link } from "react-scroll";
import Slide from "react-reveal/Slide";
const WhoWeAre = () => {
  const [imgPosition, setImgPosition] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setImgPosition(!imgPosition);
      console.log(imgPosition);
    }, 10000);
    return () => clearInterval(interval);
  });
  return (
    <div
      name="about"
      className="relative  bg-cover top-[12rem] flex justify-center text-white w-full h-[115rem] lg:h-[100rem]"
    >
      <div
        name="whoweare"
        className="flex left-[22rem] lg:left-2 relative flex-col  "
      >
        <Fade delay={300} bottom>
          <div className="relative ">
            <div className="relative top-2 bg-[url('/public/About.png')]  rotate-[-4deg] bg-cover w-[13rem] h-[1.5rem] lg:h-[2.7rem] lg:w-[25rem]" />
          </div>
          <h1 className="text-3xl lg:text-[3.5rem] font-bold">
            WE ARE BID<span className="text-yellow-400">HOUSE </span>
          </h1>
          <h2 className="relative  text-[#d6d6d6] top-4 font-bold lg:w-full w-[20rem] text-xl lg:text-[1.6rem]">
            You will become a piece of our project, a part owner
          </h2>
        </Fade>
        <p className="relative top-14 text-[#d0d0d0] w-[20rem] lg:w-[50rem] font-semibold text-[1.4rem]">
          We intend to buy apartments all around the world for the NFT holder's
          benefits. <br />
          <br />
          NFTs gained popularity throughout the internet and have spread like
          wildfire. They starting to take off even in business areas.
          <br />
          <br />
          Real estate is one of them. Our vision is to upgrade the world of real
          estate and bring the decentralised systems to life.
          <br /> <br /> We see our NFTs as keys to a great future. That future
          is possible with the power of our community.
          <br />
          <br /> Also… here are some other benefits:
        </p>
        <div className="flex flex-col lg:grid lg:grid-cols-3 w-[65rem] h-[41rem] relative top-36">
          <Benefits
            textover="If someone lists our NFTs below the mint price we will buy them within 48h.

Using the Hot Wallet we'll list them at a fixed price.

You'll see the real power of our community!"
            text="FLOOR PRICE SECURED"
            icon={<FiLock />}
          />
          <Benefits
            textover="Legendary and Mythical NFT holders will be able to have free access to our flats all around the world.
This process will take place through a booking system on our website."
            text="FREE ACCESS"
            icon={<AiOutlineCheckCircle />}
          />
          <Benefits
            textover="Behind every action, there will be a real company that allows us to buy real assets for our community.
Every wallet that has an NFT from our collection will take profits and become part owner of the project."
            text="100% TRANSPARENCY"
            icon={<FiLock />}
          />
          <Benefits
            textover="We will develop a staking platform with monthly profits.

Stake your NFTs & Earn passive income."
            text="STAKING"
            icon={<FiLock />}
          />
          <Benefits
            textover="We strongly believe in equality of opportunity for all community members. Everyone will take profits based on how many NFTs they hold. 1 NFT = 1 share"
            text="RARITY"
            icon={<BsQuestionCircle />}
          />
          <Benefits
            textover="Every NFT owner of the previous collections will be whitelisted for future collections."
            text="WHITELIST"
            icon={<ImNewspaper />}
          />
          <Benefits
            textover="Every 2 Sundays our holders will have a chance to win NFTs from Solana Top Projects"
            text="RAFFLES"
            icon={<HiOutlineTicket />}
          />
          <Benefits
            textover="Every 2 Sundays our holders will have a chance to win up to 10 Solana"
            text="SOLANA AIRDROPS"
            icon={<FiLock />}
          />
          <Benefits
            textover="

Every month a member of our community will get a free NFT from our collections."
            text="GIVEAWAYS"
            icon={<FiLock />}
          />
        </div>
        <Slide delay={300} left>
          <div className="relative left-4  lg:left-[22rem] top-[11rem]">
            <h2 className="relative text-[#d6d6d6] left-14 top-4 font-bold text-[1.6rem]">
              THAT'S NOT ALL
            </h2>
            <Link
              activeClass="active"
              to="whatwewant"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              <button className="relative shadow-2xl flex z-10 items-center justify-center top-10  w-[20rem] h-[3rem] text-lg font-semibold  animate-[mouseleft_.4s_ease-in-out_forwards]  rounded-[2rem] hover:animate-[mouseover_.4s_ease-in-out_forwards]">
                COUNTINUE READING
                <BsChevronDoubleDown className="absolute right-[2rem]  animate-[arrowsanim_1.3s_ease-in-out_infinite]" />
              </button>
            </Link>
          </div>
        </Slide>
      </div>
      <div className="lg:grid hidden grid-cols-2 left-10 h-[40rem] relative top-[7rem]  w-[35rem]">
        <div
          className={`relative rounded-xl animate-[changelt_10s_linear_infinite]
             
          }  shadow-2xl ${
            imgPosition
              ? "bg-[url('/public/photo1.png')]"
              : "bg-[url('/public/photo2.png')]"
          }  bg-cover w-[15rem] h-[17rem]`}
        />
        <div
          className={`relative rounded-xl  animate-[changert_10s_linear_infinite_forwards]
            
           shadow-2xl ${
             imgPosition
               ? "bg-[url('/public/photo2.png')]"
               : "bg-[url('/public/photo1.png')]"
           } right-0 bg-cover w-[15rem] h-[17rem]`}
        />
        <div
          className={`relative ${
            imgPosition
              ? "bg-[url('/public/photo3.png')]"
              : "bg-[url('/public/photo4.png')]"
          } left-0 rounded-xl animate-[changelb_10s_linear_infinite_forwards] shadow-2xl  bg-cover w-[15rem] h-[17rem]`}
        />
        <div
          className={`relative ${
            imgPosition
              ? "bg-[url('/public/photo4.png')]"
              : "bg-[url('/public/photo3.png')]"
          } rounded-xl animate-[changerb_10s_linear_infinite_forwards]    shadow-2xl  bg-cover w-[15rem] h-[17rem]`}
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
