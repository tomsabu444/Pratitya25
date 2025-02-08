import React from "react";
import Navbar from '../components/Navbar';
{/*import Footer from "./components/Footer";*/}
import AnimatedBubbles from '../components/AnimatedBubbles';

const LongTeamCard = ({ name, image }) => (
  <div className="w-[123px] lg:w-[150px] h-[170px] lg:h-[210px] relative">
    <div className="w-[123px] lg:w-[150px] h-[170px] lg:h-[210px] left-0 top-0 absolute bg-white rounded-[15px]" />
    <div className="w-[123px] lg:w-[150px] h-[123px] lg:h-[150px] left-0 top-0 absolute bg-black rounded-tl-[15px] rounded-tr-[15px]" />
    <img 
      src={image} 
      alt={name} 
      className="absolute left-0 top-0 w-[123px] lg:w-[150px] h-[123px] lg:h-[150px] object-cover rounded-tl-[15px] rounded-tr-[15px]" 
    />
    <div className="w-full absolute bottom-[8px] lg:bottom-[10px] text-center text-black text-[20px] lg:text-[24px] font-['Rancho']">
      {name}
    </div>
  </div>
);

const ShortTeamCard = ({ name, image }) => (
  <div className="w-[123px] lg:w-[150px] h-[170px] lg:h-[210px] relative">
    <div className="w-[123px] lg:w-[150px] h-[170px] lg:h-[210px] left-0 top-0 absolute bg-white rounded-[15px]" />
    <div className="w-[123px] lg:w-[150px] h-[123px] lg:h-[150px] left-0 top-0 absolute bg-black rounded-tl-[15px] rounded-tr-[15px]" />
    <img 
      src={image} 
      alt={name} 
      className="absolute left-0 top-0 w-[123px] lg:w-[150px] h-[123px] lg:h-[150px] object-cover rounded-tl-[15px] rounded-tr-[15px]" 
    />
    <div className="w-full absolute bottom-[8px] lg:bottom-[10px] text-center text-black text-[22px] lg:text-[26px] font-['Rancho'] px-1">
      {name}
    </div>
  </div>
);

const StackLongTeamCard = ({ name, image }) => (
  <div className="w-[123px] lg:w-[150px] h-[170px] lg:h-[210px] relative -left-[20px] lg:left-0">
    <div className="w-[123px] lg:w-[150px] h-[170px] lg:h-[210px] left-0 top-0 absolute bg-white rounded-[15px]" />
    <div className="w-[123px] lg:w-[150px] h-[123px] lg:h-[150px] left-0 top-0 absolute bg-black rounded-tl-[15px] rounded-tr-[15px]" />
    <img 
      src={image} 
      alt={name} 
      className="absolute top-0 w-[123px] lg:w-[150px] h-[123px] lg:h-[150px] object-cover rounded-tl-[15px] rounded-tr-[15px]" 
    />
    <div className="w-full absolute bottom-[12px] lg:bottom-[10px] translate-y-[10px] lg:translate-y-[70px] text-center text-black text-[18px] lg:text-[24px] font-['Rancho'] px-1">
      {name}
    </div>
  </div>
);

const StackShortTeamCard = ({ name, image }) => (
  <div className="w-[123px] lg:w-[150px] h-[170px] lg:h-[210px] relative -left-[20px] lg:left-0">
    <div className="w-[123px] lg:w-[150px] h-[170px] lg:h-[210px] left-0 top-0 absolute bg-white rounded-[15px]" />
    <div className="w-[123px] lg:w-[150px] h-[123px] lg:h-[150px] left-0 top-0 absolute bg-black rounded-tl-[15px] rounded-tr-[15px]" />
    <img 
      src={image} 
      alt={name} 
      className="absolute top-0 w-[123px] lg:w-[150px] h-[123px] lg:h-[150px] object-cover rounded-tl-[15px] rounded-tr-[15px]" 
    />
    <div className="w-full absolute bottom-[2px] lg:bottom-[3px] lg:translate-y-[63px] text-center text-black text-[24px] lg:text-[30px] font-['Rancho'] px-1">
      {name}
    </div>
  </div>
);

const TeamPage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <AnimatedBubbles />
      <div className="relative z-10 flex flex-col items-center w-full pb-8">
        <Navbar />
        <div className="text-center text-white text-[36px] lg:text-[50px] font-bold font-camodirt leading-[53.70px] tracking-wider my-32 mx-2">
          Meet the Team
        </div>

        {/*Head Section*/}
        <div className="w-[270px] sm:w-[346px] h-[190px] p-2.5 flex justify-center items-center gap-[83px] mb-16">
          <div className="w-[104px] flex-col justify-center items-center inline-flex">
            <div className="text-center text-white text-[43px] font-bold font-['Poppins'] leading-[38.70px] pl-12 lg:pl-0">
              Head
            </div>
          </div>
          <div className="flex justify-center items-center">
            <ShortTeamCard name="Jishnu Mohan" image="/images/JishnuM.webp" />
          </div>
        </div>

        {/* Container for Subhead and Website Design sections */}
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:w-full lg:max-w-7xl lg:gap-64 lg:mt-32 lg:mb-32">
          {/* Sub heads section */}
          <div className="w-[270px] sm:w-[289px] h-[366px] relative mb-32 mt-24 lg:my-0">
            <div className="w-[123px] h-[366px] left-[184px] top-0 absolute flex-col justify-start items-start gap-[40px] lg:gap-[90px] inline-flex">
              <StackShortTeamCard name="Alwin Roy" image="/images/AlwinR.webp" />
              <StackLongTeamCard name="Abel Eapen Jacob" image="/images/AbelEJ.webp" />
            </div>
            <div className="w-[104px] flex-col justify-center items-center inline-flex my-32 lg:mt-45 lg:translate-y-[45px] pl-5 lg:pl-0">
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

          {/* Website Design Team */}
          <div className="w-[270px] sm:w-[289px] h-[366px] relative mb-32 mt-24 lg:my-0">
            <div className="w-[123px] h-[366px] left-[184px] top-0 absolute flex-col justify-start items-start gap-[40px] lg:gap-[90px] inline-flex">
              <StackLongTeamCard name="Al Haarith Hakkim" image="/images/AlHaarithH.webp" />
              <StackShortTeamCard name="Christie Jiju" image="/images/ChristieJ.webp" />
            </div>
            <div className="w-[104px] flex-col justify-center items-center inline-flex my-32 lg:mt-45 lg:translate-y-[45px] pl-5 lg:pl-0">
              <div 
                className="text-center text-[35px] lg:text-[43px] font-bold font-['Poppins'] leading-[38.70px]" 
                style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
                Website
              </div>
              <div className="text-center text-white text-[35px] lg:text-[43px] font-bold font-['Poppins'] leading-[38.70px my-16]">
                Design
              </div>
            </div>
          </div>
        </div>

        {/*Website Development Team*/}
        <div className="w-[270px] sm:w-[303px] lg:w-[600px] flex flex-col items-center gap-8 my-32">
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
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            <LongTeamCard name="Vimal S Thomas" image="/images/VimalS.webp" />
            <ShortTeamCard name="Megha Rajeev" image="/images/MeghaR.webp" />
            <ShortTeamCard name="Abin Roy" image="/images/AbinR.webp" />
            <LongTeamCard name="Aleena P Mathews" image="/images/AleenaP.webp" />
            <LongTeamCard name="Hari Narayanan" image="/images/HariN.webp" />
            <ShortTeamCard name="Rishikesh Babu" image="/images/RishikeshB.webp" />
          </div>
        </div>

        {/*PR and SEO*/}
        <div className="w-[270px] sm:w-[289px] h-[350px] relative mt-28">
          <div className="w-[123px] h-[366px] left-[166px] top-0 absolute flex-col justify-start items-start gap-[26px] inline-flex">
            <ShortTeamCard name="Tom Sabu" image="/images/TomS.webp" />
          </div>
          <div className="left-0 lg:top-[43px] top-[34px] absolute text-center">
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