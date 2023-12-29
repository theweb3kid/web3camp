import Navbar from "./Navbar";
import SponsorCard from "./SponsorCard";
import StatsContainer from "./StatsContainer";
const GetStartedSection = ({ scrollToTarget }) => {
  return (
    <>
      <div
        id="Home"
        className=" [background:linear-gradient(-43.03deg,_rgba(130,_92,_246,_0.49),_rgba(130,_92,_246,_0)),_#141238] w-full  flex flex-col items-center justify-center py-[54px]  box-border gap-[40px] text-left text-base text-white font-montserrat"
      >
        <img
          className=" my-0 mx-[!important]   h-[673px] object-cover hidden z-[0]"
          alt=""
          src="/rectangle-51@2x.png"
        />
        <Navbar scrollToTarget={scrollToTarget} />
        <div className=" my-0 mx-[!important]  rounded-[50%] [background:linear-gradient(-87.27deg,_rgba(130,_92,_246,_0.2),_rgba(130,_92,_246,_0))] [filter:blur(40px)]  h-auto z-[1]" />
        <div className="rounded-lg [backdrop-filter:blur(32px)] flex flex-col  items-center justify-start py-14 px-10 gap-[48px]  font-bitter md:w-[727px]">
          <div className="shrink-0 flex flex-col items-center justify-start gap-[16px]">
            <div className="relative tracking-[0.03em] uppercase">
              girlscript Presents
            </div>
            <b className="relative text-21xl tracking-[0.03em] leading-[122.5%] inline-block font-montserrat text-center ">
              <span>{`Get Started in Web3.0 with `}</span>
              <span>20,000+ Learners</span>
            </b>
          </div>
          <div className="shrink-0 flex flex-col  md:flex-row items-start justify-center gap-[48px] text-lg font-open-sans">
            <div className="rounded-lg bg-mediumslateblue-100 shrink-0 flex flex-row items-start justify-start py-4 px-6">
              <b className="relative tracking-[0.03em]">Register now</b>
            </div>
            <div className="rounded-lg bg-white shrink-0 flex flex-row items-start justify-start py-4 px-6 text-mediumslateblue-100">
              <b className="relative tracking-[0.03em]">Partner with us</b>
            </div>
          </div>
        </div>
        <div className=" top-[100px] left-[0%] flex-wrap flex items-center flex-col justify-center ">
          <div className=" my-0 mx-[!important]  text-138xl tracking-[0.03em] font-extrabold text-center opacity-[0.03] z-[4]">
            Web3Camp
          </div>
          <div className="relative top-[100px] rounded-3xl bg-white shadow-[0px_4px_32px_rgba(0,_0,_0,_0.08)] overflow-hidden flex flex-col flex-wrap md:flex-row items-center justify-center py-6 px-4 md:px-10 gap-4 md:gap-8">
            <img
              className="relative w-[146px] h-10 md:w-[146px] md:h-10 object-cover mb-4 md:mb-0"
              alt=""
              src="/vistara-logo@2x.png"
            />
            <img
              className="relative w-[111px] h-8 md:w-[111px] md:h-8 object-cover mb-4 md:mb-0"
              alt=""
              src="/flipster-logo-1@2x.png"
            />
            <img
              className="relative w-14 h-16 md:w-14 md:h-16 object-cover mb-4 md:mb-0"
              alt=""
              src="/10@2x.png"
            />
            <img
              className="relative w-[107px] h-[53px] md:w-[107px] md:h-[53px] overflow-hidden shrink-0 object-cover mb-4 md:mb-0"
              alt=""
              src="/logo-lightc7278015-1@2x.png"
            />
            <img
              className="relative w-[187px] h-[33px] md:w-[187px] md:h-[33px] object-cover mb-4 md:mb-0"
              alt=""
              src="/gs-logo-black@2x.png"
            />
            <img
              className="relative w-[138px] h-10 md:w-[138px] md:h-10 object-cover"
              alt=""
              src="/web3camp-logo@2x.png"
            />
          </div>
        </div>
      </div>
      <div className=" relative bg-gradient-to-b from-rgba(130,92,246,0.09) to-rgba(130,92,246,0) md:bg-white w-[400px] md:w-full h-auto md:min-h-[1151px] overflow-hidden flex-wrap flex flex-col items-center justify-center md:pt-[120px] md:px-4 lg:px-28 pb-20 pt-4 mx-auto box-border">
        <div
          id="Web3Camp"
          className="flex flex-col items-centerflex-wrap justify-start md:justify-between gap-8 w-full max-w-[1210px] mx-auto"
        >
          <div className="flex flex-col items-start justify-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col items-start justify-start gap-4 md:max-w-[480px]">
              <div className="self-stretch relative tracking-[0.03em] font-semibold">
                What is Web3Camp?
              </div>
              <div className="relative text-base tracking-[0.02em] leading-[24px] font-light font-poppins">
                <p className="m-0">
                  The GirlScript Foundation's WEB3CAMP initiative aims to
                  increase global awareness of technological breakthroughs and
                  opportunities. Our objective is to present and prepare our
                  community for the future of the internet by holding web3
                  bootcamps around the globe. Women and underrepresented groups
                  will be given priority in this bootcamp, with 50% of the spots
                  reserved.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Our vision is to introduce and prepare our community for the
                  future of the internet by conducting global boot camps on web3
                  technology.
                </p>
              </div>
            </div>

            <img
              className="relative w-full md:w-[606px] h-auto md:h-[374px] object-cover"
              alt=""
              src="/images@2x.png"
            />
          </div>

          <StatsContainer />
          <SponsorCard />
        </div>
      </div>
      
      
    </>
  );
};

export default GetStartedSection;
