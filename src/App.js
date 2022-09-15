
import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Succesfull from './Components/Succesfullproject/Succesfull';
import WhoWeAre from './Components/WeAreBidHouse/WhoWeAre';
import WhatWeWant from './Components/WhatAndWhoWeAre/WhatWeWant';
import TimeLine from './Components/Timeline/TimeLine';
import FAQ from './Components/FAQ/FAQ';
import Rarity from './Components/Rarity/Rarity';
import Team from './Components/Team/Team';

import { useEffect, useState } from 'react'
import Footer from './Components/Footer/Footer';
import Forms from './Components/Forms/Forms';
import MobileMenu from './Components/Navbar/MobileMenu';
function App() {
  const [loading, setLoading] = useState(true);
  const [loadingLogo, setLoadingLogo] = useState(false);
  const [loadingText, setLoadingText] = useState(false);

  const [opener, setOpener] = useState(false);
  const [secondOpener, setSecondOpener] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500)
    setTimeout(() => {
      setLoadingLogo(true);
    }, 1500)
    setTimeout(() => {
      setLoadingText(true);
    }, 2000)
    setTimeout(() => {
      setOpener(true);
    }, 2500)
    setTimeout(() => {
      setSecondOpener(true);
    }, 3000)
  }, [])
  return (
    <div className='w-full h-[100%] bg-[#1c1c1c]'>

      {
        loading ? <div className='h-screen w-screen bg-[#1c1c1c] flex flex-col justify-center items-center' >
          <h3 className={`relative text-xl mb-10  text-white ${loadingText ? 'animate-[textloadingback_.5s_ease-in-out_forwards]' : 'animate-[textloading_.5s_ease-in-out_forwards]'}`}> YOUR REAL ESTATE NFT</h3>
          <div className={`${loadingLogo && 'animate-[line_1s_linear_forwards]'}ring-2  ring-white rounded-2xl  h-[.5rem] w-[15rem]`} >
            <div className={` h-full bg-white rounded-2xl ${loadingLogo ? 'bg-slate-500 animate-[loadingline2_1s_linear_forwards]' : 'animate-[loadingline_1s_linear_forwards]'}`} />

          </div>
          <div className={`relative ${loadingLogo ? 'animate-[logoloadingback_.5s_ease-in-out_forwards]' : 'animate-[logoloading_.5s_ease-in-out_forwards]'} top-[5rem] bg-[url('/public/logo.jpg')]  bg-cover w-[15rem] h-[5rem]`} />
          <div className={`absolute   ${opener && 'animate-[loadingopen_.5s_linear_forwards]'} bg-gray-700 left-0 h-full  `} />
          <div className={`absolute ${opener && ' animate-[loadingopen_.5s_linear_forwards]'} bg-gray-700 right-0 h-full  `} />
        </div>
          :


          <div>
            <div className={`absolute  z-50 ${secondOpener && 'animate-[loadingshow_.4s_linear_forwards]'} bg-gray-700 left-0 h-full  `} />
            <div className={`absolute ${secondOpener && ' animate-[loadingshow_.4s_linear_forwards]'} bg-gray-700 right-0 h-full z-50 `} />
            <Navbar  />
            <MobileMenu />
            <Hero />
            <WhoWeAre />
            <WhatWeWant />
            <Succesfull />
            <TimeLine />
            <Forms />
            <Team />
            <Rarity />
            <FAQ />
            <Footer />
          </div>
      }
    </div >
  );
}

export default App;
