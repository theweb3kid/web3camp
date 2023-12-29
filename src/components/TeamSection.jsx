import TeamCard from "./TeamCard";

const TeamSection = () => {
  return (
    <div id="Team" className="  rounded-lg [background:linear-gradient(-61.43deg,_rgba(130,_92,_246,_0.09),_rgba(130,_92,_246,_0))] w-full flex flex-col items-center justify-center py-16 px-28 box-border gap-[80px] text-left text-13xl text-gray-100 font-montserrat">
      <div className="flex flex-col items-start justify-start gap-[40px]">
        <div className=" flex flex-row items-center justify-center">
          <div className="relative tracking-[0.03em] font-semibold">
            Meet our Team
          </div>
        </div>
        <div className=" flex flex-col md:flex-row  items-center justify-center gap-[24px] text-sm font-poppins">
          <TeamCard
            mohitImg="/mohit-img@2x.png"
            mohitVaru="Mohit Varu"
            managingDirector="Managing Director"
            girlscriptFoundation="Girlscript Foundation"
          />
          <TeamCard
            mohitImg="/ojas-image@2x.png"
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
      <div className="flex flex-col  items-center justify-center gap-[40px] w-[400px] md:w-[680px]">
        <div className=" flex flex-row items-center justify-center">
          <div className="relative tracking-[0.03em] font-semibold">
            Message from the Founder
          </div>
        </div>
        <div className=" flex flex-col md:flex-row items-center justify-center gap-[40px] text-29xl text-black">
          <div className="relative rounded-lg bg-white w-[400px] md:w-[680px]  h-[391px] overflow-hidden ">
            <div className="absolute top-[calc(50%_-_30.5px)] left-[calc(50%_-_69px)] tracking-[0.01em] leading-[130%] font-light">
              Video
            </div>
          </div>
          <div className=" rounded-lg bg-white overflow-hidden flex flex-col items-center justify-center py-16 px-10  w-[400px] md:w-[680px] gap-[16px] text-gray-100">
            <div className="relative tracking-[0.01em] leading-[130%] font-light inline-block md:w-[456px]">
              “We’ll guide you build the projects that raise funds.”
            </div>
            <div className=" flex flex-col items-start justify-start gap-[4px] text-5xl">
              <div className="relative tracking-[0.01em] leading-[130%] font-semibold inline-block md:w-[456px]">
                Anubha Maneshwar
              </div>
              <div className="relative text-xl tracking-[0.01em] font-light inline-block md:w-[456px]">
                Founder, Girlscript Foundation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;