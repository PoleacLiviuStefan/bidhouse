import React from "react";
import TeamCard from "./TeamCard";
import TeamMembers from "./TeamMembers";
import Fade from "react-reveal/Fade";
const Team = () => {
  return (
    <div
      name="team"
      className="relative flex flex-col items-center  w-full h-[145rem] lg:h-[90rem] bg-[#1c1c1c] top-[50rem]"
    >
      <Fade delay={400} right>
        <div>
          <div className="relative lg:top-0 top-[0.2rem] bg-[url('/public/team.png')]  rotate-[-4deg] bg-cover w-[8rem] h-[1.8rem] lg:w-[17rem] lg:h-[4rem]" />
        </div>
      </Fade>
      <Fade delay={400} left>
        <h1 className="text-center text-white   text-2xl lg:text-[3.5rem] font-bold">
          THE PEOPLE WHO MADE IT ALL POSSIBLE
        </h1>
      </Fade>
      <Fade delay={400} bottom>
        <div className="relative lg:left-32 top-[10rem] grid grid-cols-2 left-5 w-[25rem] lg:w-[80rem]">
          <TeamCard
            img="bg-[url('/public/avatar1.jpg')]"
            name="CRISTIAN87"
            position="Founder"
            discord=""
            twitter=""
          />
          <TeamCard
            img="bg-[url('/public/avatar2.jpg')]"
            name="LIVON"
            position="Founder"
            discord=""
            twitter=""
          />
        </div>
      </Fade>
      <Fade delay={400} top>
        <div className="relative top-[20rem] grid grid-cols-2 lg:flex lg:flex-row   lg:w-[100rem]">
          <TeamMembers
            img="bg-[url('/public/avatar1.jpg')]"
            name="Team Member Name"
            role="Role"
            discord=""
            twitter=""
          />{" "}
          <TeamMembers
            img="bg-[url('/public/avatar1.jpg')]"
            name="Team Member Name"
            role="Role"
            discord=""
            twitter=""
          />
          <TeamMembers
            img="bg-[url('/public/avatar1.jpg')]"
            name="Team Member Name"
            role="Role"
            discord=""
            twitter=""
          />
          <TeamMembers
            img="bg-[url('/public/avatar1.jpg')]"
            name="Team Member Name"
            role="Role"
            discord=""
            twitter=""
          />
          <TeamMembers
            img="bg-[url('/public/avatar1.jpg')]"
            name="Team Member Name"
            role="Role"
            discord=""
            twitter=""
          />
          <TeamMembers
            img="bg-[url('/public/avatar1.jpg')]"
            name="Team Member Name"
            role="Role"
            discord=""
            twitter=""
          />
          <TeamMembers
            img="bg-[url('/public/avatar1.jpg')]"
            name="Team Member Name"
            role="Role"
            discord=""
            twitter=""
          />
          <TeamMembers
            img="bg-[url('/public/avatar1.jpg')]"
            name="Team Member Name"
            role="Role"
            discord=""
            twitter=""
          />
        </div>
      </Fade>
    </div>
  );
};

export default Team;
