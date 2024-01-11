import React from "react";
import Cities from "../components/Cities";
import FooterSection from "../components/FooterSection";
import GetStartedSection from "../components/GetStartedSection";
import SponsorCard from "../components/SponsorCard";
import StatsContainer from "../components/StatsContainer";
import TeamSection from "../components/TeamSection";
import TimelineForm from "../components/TimelineForm";
import Frame from "../components/Frame";
import Glimpses from "../components/Glimpses";
import Testimonials from "../components/Testimonials";

const Website = () => {
  const scrollToTarget = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="block w-full relative bg-white w-full text-left text-13xl text-gray-100 font-montserrat">
      <Frame scrollToTarget={scrollToTarget}/>
      {/* <GetStartedSection scrollToTarget={scrollToTarget} /> */}
      
      <Glimpses/>
     
      <TimelineForm />
      <Cities />
     
      
      <div className="  bg-white w-full overflow-hidden flex flex-wrap flex-col  items-center justify-center py-16 px-[58px] box-border gap-[72px]">
        <div className="flex flex-wrap flex-col items-center justify-center gap-[40px]">
          <div className=" flex flex-row items-center justify-center">
            <div className="relative tracking-[0.03em] font-semibold">
              Gold Sponsors
            </div>
          </div>
          <div className=" flex flex-wrap flex-col md:flex-row items-center justify-center gap-[72px]">
            <img
              className="relative w-[326px] md:w-[526px] md:h-36 object-cover"
              alt=""
              src="/vistara-logo@2x.png"
            />
            <img
              className="relative w-[454px] h-[131px] object-cover"
              alt=""
              src="/flipster-logo-1@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px]">
          <div className="flex flex-row items-center justify-center">
            <div className="relative tracking-[0.03em] font-semibold">
              Supported by
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-[72px]">
            <img
              className="relative w-32 h-[147px] object-cover"
              alt=""
              src="/10@2x.png"
            />
            <img
              className="relative w-[274px] h-[135px] overflow-hidden  object-cover"
              alt=""
              src="/logo-lightc7278015-1@2x.png"
            />
          </div>
        </div>
      </div>
      <TeamSection />
      
    <Testimonials/>
      <FooterSection scrollToTarget={scrollToTarget} />
    </div>
  );
};

export default Website;
