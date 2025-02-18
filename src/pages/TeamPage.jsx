import React, { useEffect, useLayoutEffect } from "react";
import AnimatedBubbles from "../components/AnimatedBubbles";
const LongTeamCard = ({ name, image }) => (
  <div className="w-[123px] lg:w-[150px] h-[170px] lg:h-[210px] relative">
    <div className="w-[123px] lg:w-[150px] h-[170px] lg:h-[210px] left-0 top-0 absolute bg-white rounded-[15px]" />
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
const jmUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/team_img%2FJishnuM.webp?alt=media&token=42c43f54-4de8-43c8-81f4-394ce6e727c9";
const awUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/team_img%2FAlwinR.webp?alt=media&token=554e9914-9a5d-4c51-981e-154bd333d154";
const abUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/team_img%2FAbelEJ.webp?alt=media&token=ea9ab58d-49ad-43f3-861a-b3c551bcfdf5";
const abnUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/team_img%2FAbinR.webp?alt=media&token=13f61581-6b56-42da-ad4c-e5d6101594f6";
const ahUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/team_img%2FAlHaarithH.webp?alt=media&token=e05e61c1-bc5b-4099-b6e6-92b8e35ea8ec";
const vmUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/team_img%2FVimalS.webp?alt=media&token=26c69788-23eb-4101-b3d6-a1762477f1e1";
const chrUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/team_img%2FChristieJ.webp?alt=media&token=24a7ec0a-c236-4ea4-996d-1eb859eeb65b";
const rhUrl ="https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/team_img%2FRishikeshB.webp?alt=media&token=ae8df796-16f0-4ab2-b6af-672feea3c03c";
const hrUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/team_img%2FHariN.webp?alt=media&token=6935f418-f26f-433b-9fbd-3be96da9a5c5";
const alUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/team_img%2FAleenaP.webp?alt=media&token=20d02c99-64a9-4334-bf18-fda01211d6a7";
const tmUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/team_img%2FTomS.webp?alt=media&token=d998f848-6409-4849-b5ef-ef3a7f479f18";
const jUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/team_img%2Fbdeeba99-4bec-4a35-97da-fe21d4685db3.webp?alt=media&token=268a3129-71a6-4c36-b9f6-68714be30c6e";
const mghUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/team_img%2FMeghaR.webp?alt=media&token=370682b8-1c87-48a0-99b0-a666d4b2a193";


const ShortTeamCard = ({ name, image }) => (
  <div className="w-[123px] lg:w-[150px] h-[170px] lg:h-[210px] relative">
    <div className="w-[123px] lg:w-[150px] h-[170px] lg:h-[210px] left-0 top-0 absolute bg-white rounded-[15px]" />
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
    <div className="w-full absolute bottom-[12px] lg:bottom-[10px] translate-y-[10px] lg:translate-y-[90px] text-center text-black text-[18px] lg:text-[24px] font-['Rancho'] px-1">
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
    <div className="w-full absolute bottom-[2px] lg:bottom-[3px] lg:translate-y-[83px] text-center text-black text-[24px] lg:text-[30px] font-['Rancho'] px-1">
      {name}
    </div>
  </div>
);

const TeamPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.willChange = "opacity, transform";
            entry.target.classList.add("fade-in");

            setTimeout(() => {
              entry.target.style.willChange = "auto";
            }, 600);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    document.querySelectorAll(".fade-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <AnimatedBubbles />
      <div className="relative z-10 flex flex-col items-center w-full">
        {/*<Navbar />*/}
        <div className="fade-section pt-10 text-center text-white text-2xl lg:text-5xl font-bold font-agraham leading-[53.70px] tracking-wider my-32 mx-2">
          Meet the Team
        </div>

        {/*Head Section*/}
        <div className="fade-section w-[270px] sm:w-[346px] h-[190px] p-2.5 flex justify-center items-center gap-[83px] mb-16">
          <div className="w-[104px] flex-col justify-center items-center inline-flex">
            <div className="text-center text-white text-[43px] font-bold font-['Poppins'] leading-[38.70px] pl-12 lg:pl-0">
              Head
            </div>
          </div>
          <div className="flex justify-center items-center">
            <ShortTeamCard name="Jishnu Mohan" image={jmUrl} />
          </div>
        </div>

        {/* Container for Subhead and Website Design sections */}
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:w-full lg:max-w-7xl lg:gap-64 lg:mt-32 lg:mb-32">
          {/* Sub heads section */}
          <div className="fade-section w-[270px] sm:w-[289px] h-[366px] relative mb-32 mt-24 lg:my-0">
            <div className="w-[123px] h-[366px] left-[184px] top-0 absolute flex-col justify-start items-start gap-[40px] lg:gap-[130px] inline-flex">
              <StackShortTeamCard name="Alwin Roy" image={awUrl} />
              <StackLongTeamCard name="Abel Eapen Jacob" image={abUrl} />
            </div>
            <div className="w-[104px] flex-col justify-center items-center inline-flex my-32 lg:mt-45 translate-y-[10px] lg:translate-y-[55px] pl-5 lg:pl-0">
              <div
                className="text-center text-[43px] font-bold font-['Poppins'] leading-[38.70px]"
                style={{ WebkitTextStroke: "1px white", color: "transparent" }}
              >
                Sub
              </div>
              <div className="text-center text-white text-[43px] font-bold font-['Poppins'] leading-[38.70px my-16]">
                Heads
              </div>
            </div>
          </div>

          {/* Website Design Team */}
          <div className="fade-section w-[270px] sm:w-[289px] h-[366px] relative my-12 lg:my-0">
            <div className="w-[123px] h-[366px] left-[184px] top-0 absolute flex-col justify-start items-start gap-[40px] lg:gap-[130px] inline-flex">
              <StackLongTeamCard name="Al Haarith Hakkim" image={ahUrl} />
              <StackShortTeamCard name="Christie Jiju" image={chrUrl} />
            </div>
            <div className="w-[104px] flex-col justify-center items-center inline-flex my-32 lg:mt-65 translate-y-[10px] lg:translate-y-[55px] pl-5 lg:pl-0">
              <div
                className="text-center text-[35px] lg:text-[43px] font-bold font-['Poppins'] leading-[38.70px]"
                style={{ WebkitTextStroke: "1px white", color: "transparent" }}
              >
                Website
              </div>
              <div className="text-center text-white text-[35px] lg:text-[43px] font-bold font-['Poppins'] leading-[38.70px my-16]">
                Design
              </div>
            </div>
          </div>
        </div>

        {/*Website Development Team*/}
        <div className="fade-section w-[270px] sm:w-[303px] lg:w-[1200px] flex flex-col lg:items-start items-center gap-8 my-32 lg:mt-32 lg:mb-24">
          {/* Title and first row container */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 w-full">
            {/* Title */}
            <div className="flex-col justify-center items-center inline-flex lg:w-[200px] lg:translate-x-[290px]">
              <div
                className="text-center text-[43px] font-bold font-['Poppins'] leading-[38.70px]"
                style={{ WebkitTextStroke: "1px white", color: "transparent" }}
              >
                Website
              </div>
              <div className="text-center text-white text-[43px] font-bold font-['Poppins'] leading-[38.70px] mb-8">
                Development
              </div>
            </div>

            {/* First row of cards */}
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-6 lg:gap-x-16 lg:ml-20 lg:translate-x-[290px]">
              <LongTeamCard name="Vimal S Thomas" image={vmUrl} />
              <ShortTeamCard name="Megha Rajeev" image={mghUrl} />
            </div>
          </div>

          {/* Second row of cards */}
          <div className="grid grid-cols-2 lg:grid-cols-none lg:flex lg:flex-row lg:justify-center lg:gap-16 gap-x-12 gap-y-12 lg:mt-8 w-full">
            <ShortTeamCard name="Abin Roy" image={abnUrl} />
            <LongTeamCard name="Aleena P Mathews" image={alUrl} />
            <LongTeamCard name="Hari Narayanan" image={hrUrl} />
            <ShortTeamCard name="Rishikesh Babu" image={rhUrl} />
          </div>
        </div>

        {/*PR and SEO*/}
        <div className="fade-section w-[270px] sm:w-[289px] h-[550px] relative my-18 lg:mb-6">
          <div className="w-[123px] h-[500px] left-[166px] top-0 absolute flex-col justify-start items-start gap-[40px] inline-flex">
            <div className="w-[123px] lg:w-[150px] h-[170px] lg:h-[210px] relative -left-[20px] lg:left-0 lg:translate-y-[120px] lg:translate-x-[70px] translate-y-[200px]">
              <div className="w-[123px] lg:w-[150px] h-[170px] lg:h-[210px] left-0 top-0 absolute bg-white rounded-[15px]" />
              <img
                src={jUrl}
                alt="Justin"
                className="absolute top-0 w-[123px] lg:w-[150px] h-[123px] lg:h-[150px] object-cover rounded-tl-[15px] rounded-tr-[15px]"
              />
              <div className="w-full absolute bottom-[2px] lg:bottom-[3px] lg:translate-y-[0.1px] text-center text-black text-[24px] lg:text-[30px] font-['Rancho'] px-1">
              Justin Thomas
              </div>
            </div>
          </div>

          <div className="w-[123px] h-[500px] left-[166px] top-0 absolute flex-col justify-start items-start gap-[40px] inline-flex">
            <div className="w-[123px] lg:w-[150px] h-[170px] lg:h-[210px] relative -left-[20px] lg:left-0 lg:translate-y-[120px] lg:translate-x-[-130px]">
              <div className="w-[123px] lg:w-[150px] h-[170px] lg:h-[210px] left-0 top-0 absolute bg-white rounded-[15px]" />
              <img
                src={tmUrl}
                alt="Tom Sabu"
                className="absolute top-0 w-[123px] lg:w-[150px] h-[123px] lg:h-[150px] object-cover rounded-tl-[15px] rounded-tr-[15px]"
              />
              <div className="w-full absolute bottom-[2px] lg:bottom-[3px] lg:translate-y-[0.1px] text-center text-black text-[24px] lg:text-[30px] font-['Rancho'] px-1">
                Tom Sabu
              </div>
            </div>
          </div>
          <div className="left-0 lg:top-[170px] top-[130px] absolute text-center lg:translate-x-[-130px]">
            <span
              className="text-[43px] font-bold font-['Poppins'] leading-[38.70px]"
              style={{ WebkitTextStroke: "1px white", color: "transparent" }}
            >
              PR
              <br />
            </span>
            <span className="text-[43px] font-bold font-['Poppins'] leading-[38.70px] text-white">
              &<br/>
            </span>
            <span className="text-[43px] font-bold font-['Poppins'] leading-[38.70px]" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
              SEO
            </span>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .fade-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          // Use transform-gpu to force GPU acceleration
          transform: translateY(20px) translateZ(0);
          -webkit-transform: translateY(20px) translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          perspective: 1000;
          -webkit-perspective: 1000;
        }

        .fade-section.fade-in {
          opacity: 1;
          transform: translateY(0) translateZ(0);
          -webkit-transform: translateY(0) translateZ(0);
        }

        @media (max-width: 768px) {
          .fade-section {
            // Simpler animation for mobile
            transition: opacity 0.4s ease;
            transform: none;
            -webkit-transform: none;
          }

          .fade-section.fade-in {
            transform: none;
            -webkit-transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default TeamPage;
