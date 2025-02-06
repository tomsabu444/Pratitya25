import React from "react";
import Navbar from '../components/Navbar';
{/*import Footer from "./components/Footer";*/}
import AnimatedBubbles from '../components/AnimatedBubbles';



const TeamPage = () => {
  return (
    <div className="relative w-full min-h-screen">
    <AnimatedBubbles />
    <div className="relative z-10 flex flex-col items-center w-full pb-8">
      <Navbar />
        <div className="text-center text-white text-[38px] font-bold font-camodirt leading-[53.70px] tracking-wider my-32 mx-2">
          Meet the Team
        </div>
        <div className="w-[346px] h-[190px] p-2.5 justify-end items-center gap-[83px] inline-flex mb-16">
          <div className="w-[104px] flex-col justify-center items-center inline-flex">
            <div className="text-center text-white text-[43px] font-bold font-['Poppins'] leading-[38.70px]">
              Head
            </div>
          </div>
          <div className="w-[123px] h-[170px] relative">
            <div className="w-[123px] h-[170px] left-0 top-0 absolute bg-white rounded-[15px]" />
            <div className="w-[123px] h-[123px] left-0 top-0 absolute bg-black rounded-tl-[15px] rounded-tr-[15px]" />
            <div className="w-full absolute bottom-[12px] text-center text-black text-[17px] font-normal font-['Poppins']">
              Jishnu Mohan
            </div>
            <img src="/images/JishnuM.jpg" alt="Placeholder" className="absolute left-0 top-0 w-[123px] h-[123px] object-cover rounded-tl-[15px] rounded-tr-[15px]" />
          </div>
        </div>

        {/*Sub heads section*/}
        <div className="w-[289px] h-[366px] relative mb-32 mt-24">
          <div className="w-[123px] h-[366px] left-[184px] top-0 absolute flex-col justify-start items-start gap-[26px] inline-flex">
          <div className="w-[123px] h-[170px] relative">
              <div className="w-[123px] h-[170px] left-0 top-0 absolute bg-white rounded-[15px]" />
              <div className="w-[123px] h-[123px] left-0 top-0 absolute bg-black rounded-tl-[15px] rounded-tr-[15px]" />
              <div className="w-full absolute bottom-[12px] text-center text-black text-[18px] font-['Poppins']">
                Alwin Roy
              </div>
              <img src="/images/AlwinR.jpg" alt="Alwin Roy" className="absolute left-0 top-0 w-[123px] h-[123px] object-cover rounded-tl-[15px] rounded-tr-[15px]" />
            </div>
            <div className="w-[123px] h-[170px] relative">
              <div className="w-[123px] h-[170px] left-0 top-0 absolute bg-white rounded-[15px]" />
              <div className="w-[123px] h-[123px] left-0 top-0 absolute bg-black rounded-tl-[15px] rounded-tr-[15px]" />
              <div className="w-full absolute bottom-[0.5px] text-center text-black text-[16px] font-['Poppins']">
                Abel Eapen Jacob
              </div>
              <img src="/images/AbelEJ.jpg" alt="Abel Eapen Jacob" className="absolute left-0 top-0 w-[123px] h-[123px] object-cover rounded-tl-[15px] rounded-tr-[15px]" />
            </div>
          </div>
          <div className="w-[104px] flex-col justify-center items-center inline-flex my-32">
            <div 
              className="text-center text-[43px] font-bold font-['Poppins'] leading-[38.70px]" 
              style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
              Sub
            </div>
            <div className="text-center text-white text-[43px] font-bold font-['Poppins'] leading-[38.70px my-16]">
              Heads
            </div>
          </div>
        </div>

        {/*Website Design Team*/}
        <div className="w-[289px] h-[366px] relative mb-32 mt-24">
          <div className="w-[123px] h-[366px] left-[184px] top-0 absolute flex-col justify-start items-start gap-[26px] inline-flex">
          <div className="w-[123px] h-[170px] relative">
              <div className="w-[123px] h-[170px] left-0 top-0 absolute bg-white rounded-[15px]" />
              <div className="w-[123px] h-[123px] left-0 top-0 absolute bg-black rounded-tl-[15px] rounded-tr-[15px]" />
              <div className="w-full absolute bottom-[0.5px] text-center text-black text-[16px] font-['Poppins']">
                Al Haarith Hakkim
              </div>
              <img src="/images/AlHaarithH.jpg" alt="Al Haarith Hakkim" className="absolute left-0 top-0 w-[123px] h-[123px] object-cover rounded-tl-[15px] rounded-tr-[15px]" />
            </div>
            <div className="w-[123px] h-[170px] relative">
              <div className="w-[123px] h-[170px] left-0 top-0 absolute bg-white rounded-[15px]" />
              <div className="w-[123px] h-[123px] left-0 top-0 absolute bg-black rounded-tl-[15px] rounded-tr-[15px]" />
              <div className="w-full absolute bottom-[10px] text-center text-black text-[16px] font-['Poppins']">
                Christie Jiju
              </div>
              <img src="/images/ChristieJ.jpg" alt="Christie Jiju" className="absolute left-0 top-0 w-[123px] h-[123px] object-cover rounded-tl-[15px] rounded-tr-[15px]" />
            </div>
          </div>
          <div className="w-[104px] flex-col justify-center items-center inline-flex my-32">
            <div 
              className="text-center text-[43px] font-bold font-['Poppins'] leading-[38.70px]" 
              style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
              Website
            </div>
            <div className="text-center text-white text-[43px] font-bold font-['Poppins'] leading-[38.70px my-16]">
              Design
            </div>
          </div>
        </div>

        {/*Wesbite Development Team*/}
        <div className="w-[303px] flex flex-col items-center gap-8 my-32">
          <div className="flex-col justify-center items-center inline-flex">
            <div 
              className="text-center text-[43px] font-bold font-['Poppins'] leading-[38.70px]" 
              style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
              Website
            </div>
            <div className="text-center text-white text-[43px] font-bold font-['Poppins'] leading-[38.70px] mb-8">
              Development
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-12">
            <div className="w-[123px] h-[170px] relative">
              <div className="w-[123px] h-[170px] left-0 top-0 absolute bg-white rounded-[15px]" />
              <div className="w-[123px] h-[123px] left-0 top-0 absolute bg-black rounded-tl-[15px] rounded-tr-[15px]" />
              <div className="w-full absolute bottom-[0.5px] text-center text-black text-[16px] font-['Poppins']">
                Vimal S Thomas
              </div>
              <img src="/images/VimalS.jpg" alt="Vimal S Thomas" className="absolute left-0 top-0 w-[123px] h-[123px] object-cover rounded-tl-[15px] rounded-tr-[15px]" />
            </div>
            <div className="w-[123px] h-[170px] relative">
              <div className="w-[123px] h-[170px] left-0 top-0 absolute bg-white rounded-[15px]" />
              <div className="w-[123px] h-[123px] left-0 top-0 absolute bg-black rounded-tl-[15px] rounded-tr-[15px]" />
              <div className="w-full absolute bottom-[11px] text-center text-black text-[16px] font-normal font-['Poppins']">
                Megha Rajeev
              </div>
              <img src="/images/MeghaR.jpg" alt="Megha Rajeev" className="absolute left-0 top-0 w-[123px] h-[123px] object-cover rounded-tl-[15px] rounded-tr-[15px]" />
            </div>
            <div className="w-[123px] h-[170px] relative">
              <div className="w-[123px] h-[170px] left-0 top-0 absolute bg-white rounded-[15px]" />
              <div className="w-[123px] h-[123px] left-0 top-0 absolute bg-black rounded-tl-[15px] rounded-tr-[15px]" />
              <div className="w-full absolute bottom-[0.5px] text-center text-black text-[16px] font-normal font-['Poppins']">
                Aleena P Mathews
              </div>
              <img src="/images/AleenaP.jpg" alt="Placeholder" className="absolute left-0 top-0 w-[123px] h-[123px] object-cover rounded-tl-[15px] rounded-tr-[15px]" />
            </div>
            <div className="w-[123px] h-[170px] relative">
              <div className="w-[123px] h-[170px] left-0 top-0 absolute bg-white rounded-[15px]" />
              <div className="w-[123px] h-[123px] left-0 top-0 absolute bg-black rounded-tl-[15px] rounded-tr-[15px]" />
              <div className="w-full absolute bottom-[11px] text-center text-black text-[16px] font-normal font-['Poppins']">
                Abin Roy
              </div>
              <img src="/images/AbinR.jpg" alt="Abin Roy" className="absolute left-0 top-0 w-[123px] h-[123px] object-cover rounded-tl-[15px] rounded-tr-[15px]" />
            </div>
            <div className="w-[123px] h-[170px] relative">
              <div className="w-[123px] h-[170px] left-0 top-0 absolute bg-white rounded-[15px]" />
              <div className="w-[123px] h-[123px] left-0 top-0 absolute bg-black rounded-tl-[15px] rounded-tr-[15px]" />
              <div className="w-full absolute bottom-[0.5px] text-center text-black text-[16px] font-normal font-['Poppins']">
                Hari Narayanan
              </div>
              <img src="/placeholder.jpg" alt="Placeholder" className="absolute left-0 top-0 w-[123px] h-[123px] object-cover rounded-tl-[15px] rounded-tr-[15px]" />
            </div>
            <div className="w-[123px] h-[170px] relative">
              <div className="w-[123px] h-[170px] left-0 top-0 absolute bg-white rounded-[15px]" />
              <div className="w-[123px] h-[123px] left-0 top-0 absolute bg-black rounded-tl-[15px] rounded-tr-[15px]" />
              <div className="w-full absolute bottom-[10px] text-center text-black text-[16px] font-normal font-['Poppins']">
                Rishikesh Babu
              </div>
              <img src="/images/RishikeshB.jpg" alt="Rishikesh Babu" className="absolute left-0 top-0 w-[123px] h-[123px] object-cover rounded-tl-[15px] rounded-tr-[15px]" />
            </div>
          </div>
        </div>

        {/*PR and SEO*/}
        <div className="w-[289px] h-[366px] relative my-28">
          <div className="w-[123px] h-[366px] left-[166px] top-0 absolute flex-col justify-start items-start gap-[26px] inline-flex">
          <div className="w-[123px] h-[170px] relative">
              <div className="w-[123px] h-[170px] left-0 top-0 absolute bg-white rounded-[15px]" />
              <div className="w-[123px] h-[123px] left-0 top-0 absolute bg-black rounded-tl-[15px] rounded-tr-[15px]" />
              <div className="w-full absolute bottom-[10px] text-center text-black text-[17px] font-['Poppins']">
                Tom Sabu
              </div>
              <img src="/images/TomS.jpg" alt="Tom Sabu" className="absolute left-0 top-0 w-[123px] h-[123px] object-cover rounded-tl-[15px] rounded-tr-[15px]" />
            </div>
            <div className="w-[123px] h-[170px] relative">
              <div className="w-[123px] h-[170px] left-0 top-0 absolute bg-white rounded-[15px]" />
              <div className="w-[123px] h-[123px] left-0 top-0 absolute bg-black rounded-tl-[15px] rounded-tr-[15px]" />
              <div className="w-full absolute bottom-[12px] text-center text-black text-[17px] font-normal font-['Poppins']">
                Jishnu Mohan
              </div>
              <img src="/images/JishnuM.jpg" alt="Placeholder" className="absolute left-0 top-0 w-[123px] h-[123px] object-cover rounded-tl-[15px] rounded-tr-[15px]" />
            </div>
          </div>
          <div className="left-0 top-[126px] absolute text-center">
            <span className="text-[43px] font-bold font-['Poppins'] leading-[38.70px]" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
              PR<br/>
            </span>
            <span className="text-[43px] font-bold font-['Poppins'] leading-[38.70px] text-white">
              &<br/>
            </span>
            <span className="text-[43px] font-bold font-['Poppins'] leading-[38.70px]" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
              SEO
            </span>
          </div>
        </div>
        {/*<Footer/>*/}
      </div>
      <style jsx>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default TeamPage;