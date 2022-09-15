import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import Question from "./Question";
import Fade from "react-reveal/Fade";
const FAQ = () => {
  return (
    <div
      name="faq"
      className="relative top-[20rem] flex flex-col items-center w-full h-[90rem] bg-[#1c1c1c]"
    >
      <Fade delay={400}>
        <div>
          <div className="relative top-[0rem] bg-[url('/public/faq.png')]  rotate-[-12deg] bg-cover w-[8rem] h-[3rem] lg:w-[12rem] lg:h-[4.3rem]" />
        </div>
        <h1 className="text-white text-2xl lg:text-[3.5rem] font-bold">
          FREQUENTLY ASKED QUESTIONS
        </h1>
      </Fade>

      <div className="relative flex flex-col items-center top-20">
        <Fade delay={400}>
          <Question
            question="Why did we choose Solana?"
            description={
              <p>
                When you read this, Solana is still one of the fastest and
                greatest Blockchains in the NFT world. Also...the small gas fees
                + higher token appreciation potential make it even better!
              </p>
            }
          />
        </Fade>

        <Fade delay={400}>
          <Question
            question="What is the price of an NFT?"
            description={
              <p>
                One NFT will cost $250 in Solana, 24 hours before the Mint.
                Note: In the section Form you'll get a 20% discount if you are
                an early investor in our project.
              </p>
            }
          />
        </Fade>
        <Fade delay={400}>
          <Question
            question="From which Marketplace can I buy?"
            description={
              <p>
                Check out Magic Eden after our "sell-out"
                <br /> But, but... “When is the mint date?”
                <br /> Join our Discord server and we’ll announce it there.
              </p>
            }
          />
        </Fade>
        <Fade delay={400}>
          <Question
            question="How many pieces we'll mint?"
            description={
              <p>
                Our collection has 11.111 NFTs <br /> Only 10.000 will be
                available
                <br />
                We'll use 1.111 in Marketing Campaigns, Raffles & Giveaways, and
                Social Influencers.
                <br /> Note: Everyone involved in this project from the
                beginning will get rewards.
              </p>
            }
          />
        </Fade>
      </div>
    </div>
  );
};

export default FAQ;
