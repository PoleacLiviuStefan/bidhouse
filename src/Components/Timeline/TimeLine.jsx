import { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import Fade from "react-reveal/Fade";
import "./style.css";

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState(<div></div>);
  const [message2, setMessage2] = useState(<div></div>);
  const [message3, setMessage3] = useState(<div></div>);

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  const someCallback = () => {
    setMessage1(
      <Fade right>
        <div
          className="  flex

w-[55rem]

justify-center
items-center
h-[30rem] 

lg:text-[1.8rem]
relative
left-[2rem]
top-[-4rem]
font-bold"
        >
          <h2 className="titlephase">PHASE 1</h2>
          <span className="subtext">
            $2.5M worth of NFTs will be minted in October.
            <br /> The next step is to buy apartments in Bucharest - Romania and
            rent them.
            <br /> All the profits will go back into the community, which means
            the price of the NFT will skyrocket. <br />
            Note: Real estate is an ever-green market, which is a massive
            benefit for us.
          </span>
        </div>
      </Fade>
    );
    callback();
  };

  const someCallback2 = () => {
    setMessage2(
      <Fade left>
        <div
          className="   flex

          lg:w-[55rem]
         w-[5rem]
          justify-center
          items-center
          h-[30rem]
         text-[1.8rem]
          relative
          left-[-25rem]
         lg:left-[-55rem]
          top-[-4rem]
         font-bold"
        >
          <h2 className="titlephase">PHASE 2</h2>
          <h3 className="subtitlephase ">The crypto forest</h3>
          <span className="subtext">
            <br /> Our goal is to build a place for our community. A place that
            they can call "home"
            <br /> For our crypto enthusiasts and even for tourists
            <br /> On top of that… <br />
            NFT holders could:
            <br /> - Rent our flats for a better price - <br />
            Buy special decorations from our homes -<br /> Enjoy free lodging
            <br />
            For more info about this, check the *BONUS SECTION*
          </span>
        </div>
      </Fade>
    );
  };

  const someCallback3 = () => {
    setMessage3(
      <Fade right>
        <div
          className="  flex

w-[55rem]

justify-center
items-center
h-[30rem] 

lg:text-[1.8rem]
relative
left-[2rem]
top-[-4rem]
font-bold"
        >
          <h2 className="titlephase">PHASE 3</h2>
          <h3 className="subtitlephase">Expansion of our project</h3>
          <span className="subtext">
            <br />
            We will buy apartments all over the world and rent them.
            <br /> Phase 3 is the part where a lot of money starts rolling in.
            <br /> Even the price of one NFT could go up to 10-20x.
            <br />
            Profits from 20+ apartments will go back to you, member of our
            community.
            <br /> Buckle up and prepare for Phase 3 from now on!
          </span>
        </div>
      </Fade>
    );
  };

  useEffect(() => {
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
  }, []);

  return (
    <div name="roadmap" className="wrapper">
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle"></div>
        <div className="message">{message1}</div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />

      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle"></div>
        <div className="message">{message2}</div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />

      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle"></div>
        <div className="message">{message3}</div>
      </div>
    </div>
  );
};

export default function App() {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log(1);
  };

  return (
    <div className="App">
      <Fade delay={400} top>
        <div className="relative flex top-[-12.5rem] w-full h-[5rem] justify-center">
          <div className="relative top-6 lg:top-[-1.5rem] bg-[url('/public/Roadmap.png')]  rotate-[-4deg] bg-cover w-[12rem] h-[1.4rem] lg:w-[25rem]  lg:h-[3rem]" />
        </div>
      </Fade>
      <Fade delay={400} bottom>
        <h2
          className=" text-white
 relative
 bottom-[14.5rem]
 lg:bottom-[15rem]

  lg:text-[3.5rem]
  text-2xl
  w-[15rem]
  lg:w-full
  left-[4.5rem]
  lg:left-0
  font-bold"
        >
          {" "}
          TAKE A LOOT AT OUR ROADMAP
        </h2>
      </Fade>
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#fad20e"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      <div className="stub2">{message}</div>
    </div>
  );
}
