import TimeLine from "./TimeLine";

const TimelineForm = () => {
  return (
    <div  id="Timeline" className="  [background:linear-gradient(-69.18deg,_rgba(130,_92,_246,_0.49),_rgba(130,_92,_246,_0)),_#141238] w-auto  flex  flex-col items-center justify-start py-16 px-28 box-border gap-[40px] text-left text-13xl text-white font-montserrat">
      <div className="flex flex-col items-start justify-center gap-[24px] md:overflow-hidden overflow-x-auto overflow-y-hidden w-[310px] md:w-auto">
        <div className="relative tracking-[0.03em] font-semibold ">Timeline</div>
        <div className="relative w-[1160px] h-[173px] text-sm text-darkslateblue-200 font-poppins">
          <div className="absolute top-[0px] left-[34px] flex flex-row items-start justify-start gap-[48px]">
            <TimeLine
              eventDate="Sep 1, 2023"
              registrationDate="Call for Organizers and Ambassadors"
            />
            <TimeLine
              eventDate="Sep 15, 2023"
              registrationDate="Call for Sponsors"
            />
            <TimeLine
              eventDate="Oct 1, 2023"
              registrationDate="Attendees Registration"
            />
            <TimeLine
              eventDate="Oct 10, 2023"
              registrationDate="Promotions, Registration, & Pop-up events"
            />
            <TimeLine
              eventDate="Nov 1 - Jan 31, 2024"
              registrationDate="Bootcamps"
            />
          </div>
          <div className="absolute top-[64px] left-[0px] w-[1160px] h-5">
            <div className="absolute top-[9.5px] left-[-0.5px] box-border w-[94px] h-px border-t-[1px] border-solid border-white" />
            <div className="absolute top-[9.5px] left-[144.5px] box-border w-[182px] h-px border-t-[1px] border-solid border-white" />
            <div className="absolute top-[9.5px] left-[377.5px] box-border w-[177px] h-px border-t-[1px] border-solid border-white" />
            <div className="absolute top-[9.5px] left-[605.5px] box-border w-[177px] h-px border-t-[1px] border-solid border-white" />
            <div className="absolute top-[9.5px] left-[833.5px] box-border w-[177px] h-px border-t-[1px] border-solid border-white" />
            <div className="absolute top-[9.5px] left-[1061.5px] box-border w-[99px] h-px border-t-[1px] border-solid border-white" />
            <img
              className="absolute top-[0px] left-[109px] w-5 h-5 object-cover"
              alt=""
              src="/dot@2x.png"
            />
            <img
              className="absolute top-[0px] left-[342px] w-5 h-5 object-cover"
              alt=""
              src="/dot@2x.png"
            />
            <img
              className="absolute top-[0px] left-[570px] w-5 h-5 object-cover"
              alt=""
              src="/dot@2x.png"
            />
            <img
              className="absolute top-[0px] left-[798px] w-5 h-5 object-cover"
              alt=""
              src="/dot@2x.png"
            />
            <img
              className="absolute top-[0px] left-[1026px] w-5 h-5 object-cover"
              alt=""
              src="/dot@2x.png"
            />
          </div>
        </div>
      </div>
      <div id="Curriculum" className="flex flex-col items-start justify-start gap-[40px]">
        <div className="md:w-[1029px]  flex flex-row items-start justify-start">
          <div className="relative tracking-[0.03em] font-semibold">
            Curriculum
          </div>
        </div>
        <div className="md:w-[833px]  flex flex-row items-start justify-start text-sm text-darkslateblue-100 font-poppins">
          <div className="rounded-lg box-border md:w-[833px] flex flex-col items-start justify-start pt-8 px-6 pb-6 relative gap-[15px] border-[1px] border-solid border-white">
            <div className="self-stretch flex flex-col md:flex-row items-start justify-start gap-[15px] z-[0]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
                <div className="self-stretch rounded-lg bg-white box-border h-[58px] flex flex-col items-start justify-center py-2 px-4 border-[1px] border-solid border-white">
                  <div className="relative tracking-[0.03em] font-semibold">
                    <p className="m-0">{`Evolution and Need of Web3 : `}</p>
                    <p className="m-0">30 Min</p>
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-center py-2 px-4 gap-[3px] border-[1px] border-solid border-white">
                  <div className="relative tracking-[0.03em] font-semibold">
                    Web3 Buzzwords: 30 Min
                  </div>
                  <div className="relative text-xs tracking-[0.03em]">
                    [NFTs, Rollups, DAO, Crypto, DeFi]
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-center py-2 px-4 border-[1px] border-solid border-white">
                  <div className="relative tracking-[0.03em] font-semibold inline-block w-[360px]">{`Making your first crypto transaction via exchanges, wallets, & NFT marketplaces: 30 Min`}</div>
                </div>
                <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-center py-2 px-4 border-[1px] border-solid border-white">
                  <div className="relative tracking-[0.03em] font-semibold inline-block w-[360px]">
                    <p className="m-0">{`Introduction to Solidity and Smart Contracts: `}</p>
                    <p className="m-0">45 Min</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
                <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-center py-2 px-4 gap-[3px] border-[1px] border-solid border-white">
                  <div className="relative tracking-[0.03em] font-semibold">
                    <span>Introduction to Blockchain Technology</span>
                    <span className="text-xs">:</span>
                    <span>{` 30 Min `}</span>
                  </div>
                  <div className="relative text-xs tracking-[0.03em]">
                    [Bitcoin, Ethereum, Distributed Ledger Technology]
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-center py-2 px-4 gap-[3px] border-[1px] border-solid border-white">
                  <div className="relative tracking-[0.03em] font-semibold">{`Introduction to DeFi & Use Cases: 30 Min`}</div>
                  <div className="relative text-xs tracking-[0.03em]">
                    [Dex, Cex, Lend Borrow, Trading, Investments]
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-center py-2 px-4 border-[1px] border-solid border-white">
                  <div className="relative tracking-[0.03em] font-semibold inline-block w-[360px]">
                    Launch Your Own ERC20 Token within Minutes: 30 Min
                  </div>
                </div>
                <div className="self-stretch rounded-lg bg-white flex flex-col items-start justify-center py-2 px-4 border-[1px] border-solid border-white">
                  <div className="relative tracking-[0.03em] font-semibold inline-block w-[360px]">
                    Develop your first Smart Contract and push your code to
                    GitHub: 120 Min
                  </div>
                </div>
              </div>
            </div>
            <div className="my-0 mx-[!important] absolute top-[-20px] left-[24px] rounded-lg [background:linear-gradient(-30.63deg,_rgba(130,_92,_246,_0.49),_rgba(130,_92,_246,_0)),_#fff] w-[180px] flex flex-row items-center justify-center py-2 px-4 box-border z-[1]">
              <div className="relative tracking-[0.03em] font-semibold">
                Day 01
              </div>
            </div>
            <div className="my-0 mx-[!important] absolute top-[-20px] left-[228px] rounded-lg bg-white box-border w-[180px] flex flex-row items-center justify-center py-2 px-4 z-[2] border-[1px] border-solid border-white">
              <div className="relative tracking-[0.03em] font-semibold">
                Day 02
              </div>
            </div>
            <div className="relative box-border md:w-[399px] h-px z-[3] border-t-[1px] border-solid border-white" />
            <div className="rounded-lg box-border md:w-[180px] flex flex-row items-center justify-center py-2 px-4 z-[4] text-white border-[1px] border-solid border-white">
              <div className="relative tracking-[0.03em] font-semibold">
                Optional
              </div>
            </div>
            <div className="self-stretch rounded-lg box-border  flex flex-col items-start justify-center py-2 px-4 gap-[4px] z-[5] text-white border-[1px] border-solid border-white">
              <div className="self-stretch relative tracking-[0.03em] font-semibold">
                Sponsor Slot [2 slots of 30 min each of 1 60 min slot]: 60 Min
              </div>
              <div className="self-stretch relative tracking-[0.03em] font-semibold">
                Sponsor Slot [2 slots of 30 min each of 1 60 min slot]: 60 Min
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineForm;