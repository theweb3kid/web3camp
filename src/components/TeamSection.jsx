import TeamCard from "./TeamCard";
import React from "react";
import ReactPlayer from "react-player";

const TeamSection = () => {
  return (
    <div id="Team" className="  rounded-lg [background:linear-gradient(-61.43deg,_rgba(130,_92,_246,_0.09),_rgba(130,_92,_246,_0))] w-full flex ">
    <div className=" flex flex-col md:items-start items-center  justify-start md:justify-between gap-8 md:px-28 px-4 w-full max-w-[1440px] py-16 mx-auto text-gray-100 font-montserrat">
      <div className="flex flex-col flex-wrap items-start justify-start gap-8">
        <div className="flex flex-col items-start justify-start gap-4 md:max-w-[430px] h-auto">
          <div className="self-stretch relative tracking-[0.03em] font-semibold">
            Meet our Team
          </div>
        </div>
        <div className=" flex flex-wrap flex-col md:flex-row  items-center justify-center gap-[24px] text-sm font-poppins">
          <TeamCard
            mohitImg="/mohit-img.png"
            mohitVaru="Mohit Varu"
            managingDirector="Managing Director"
            girlscriptFoundation="Girlscript Foundation"
          />
          <TeamCard
            mohitImg="/ojas-image.png"
            mohitVaru="Ojas Rajankar"
            managingDirector="Web3Camp"
            girlscriptFoundation="Mentoring Head"
            propAlignSelf="stretch"
          />
          <TeamCard
            mohitImg="/me1-1@2x.png"
            mohitVaru="Himika Prabhat"
            managingDirector="Program Manager"
            propAlignSelf="stretch"
          />
          <TeamCard
            mohitImg="/image-28@2x.png"
            mohitVaru=" Batchu Thrishna"
            managingDirector="Designer"
            propAlignSelf="stretch"
          />
        </div>
      </div>
      <div className="flex flex-col flex-wrap  md:items-start items-center justify-start gap-8">
      <div className="flex flex-col flex-wrap items-start justify-start gap-4 md:w-[530px] w-[280px] h-auto">
        <div className="relative tracking-[0.03em] font-semibold">
            Message from the Founder
          </div>
        </div>
        <div className=" flex  flex-wrap flex-row items-center justify-center gap-[40px] text-29xl text-black">
          <div className=" rounded-lg bg-white max-w-[600px] min-w-[200px]  md:w-[500px] h-[391px] overflow-hidden ">
            <ReactPlayer
              url="https://youtu.be/W_IB-QJtXOg"
              width="100%"
              height="100%"
            />
          </div>
          <div className=" rounded-lg bg-white overflow-hidden flex flex-col items-center justify-center py-16 px-10 max-w-[600px] min-w-[200px]  md:w-[500px] md:h-[391px] gap-[16px] text-gray-100">
            <div className=" tracking-[0.01em] leading-[130%] font-light inline-block ">
              “We’ll guide you build the projects that raise funds.”
            </div>
            <div className=" flex flex-col items-start justify-start gap-[4px] text-5xl">
              <div className=" tracking-[0.01em] leading-[130%] font-semibold inline-block ">
                Anubha Maneshwar
              </div>
              <div className=" text-xl tracking-[0.01em] font-light inline-block ">
                Founder, Girlscript Foundation
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
