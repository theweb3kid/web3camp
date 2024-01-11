 const FooterSection = ({scrollToTarget}) => {
    return (
      <div className=" top-[5334px]  [background:linear-gradient(-69.18deg,_rgba(130,_92,_246,_0.49),_rgba(130,_92,_246,_0)),_#141238] w-full overflow-hidden flex md:flex-row flex-col items-center justify-center pt-16 px-[49px] pb-6 box-border gap-[327px] text-left text-base text-gray-500 font-montserrat">
        <div className="shrink-0 flex flex-col items-start justify-start gap-[32px] text-xs text-gray-400">
          <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
            <div className="shrink-0 flex flex-col items-start justify-start gap-[8px]">
              <img
                className="cursor-pointer relative w-[187px] h-[33px] object-cover"
                alt=""
                src="/gslogo-white-1@2x.png"
              />
              <img
                className="cursor-pointer relative w-56 h-[65px] object-cover"
                alt=""
                src="/web3camp-logo@2x.png"
              />
            </div>
            <div className="shrink-0 flex flex-col items-start justify-start">
              <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                <div className="cursor-pointer relative [text-decoration:underline] leading-[150%] font-medium">
                  More about us
                </div>
                <div className="relative rounded-3xs bg-gray-400 w-2.5 h-2.5" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-xl">
            <div className="flex flex-row items-start justify-start gap-[48px]">
              <div className="shrink-0 flex flex-col items-start justify-start gap-[16px]">
                <div className="cursor-pointer relative tracking-[-0.01em] leading-[110%] font-medium">
                  Contact Us
                </div>
                <div className="shrink-0 flex flex-col items-start justify-start text-sm">
                  <div className="relative leading-[160%]">{`+91 `}</div>
                  <div className="relative leading-[160%]">
                    mohit@girlscript.tech
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-start justify-start gap-[16px]">
                <div className="relative tracking-[-0.01em] leading-[110%] font-medium">
                  Location
                </div>
                <div className="relative text-sm leading-[160%]">GS Address</div>
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-start justify-start gap-[120px]">
          <div className="shrink-0 flex flex-col items-start justify-start gap-[14px]">
            <div  onClick={()=>scrollToTarget('Home')} className="cursor-pointer shrink-0 flex flex-row items-center justify-center">
              <div className="relative tracking-[0.03em] font-semibold">Home</div>
            </div>
            <div onClick={()=>scrollToTarget('Web3Camp')} className="cursor-pointer shrink-0 flex flex-row items-center justify-center">
              <div className="relative tracking-[0.03em] font-semibold">
                Web3Camp
              </div>
            </div>
            <div  onClick={()=>scrollToTarget('Timeline')} className="cursor-pointer shrink-0 flex flex-row items-center justify-center">
              <div className="relative tracking-[0.03em] font-semibold">
                Timeline
              </div>
            </div>
            <div onClick={()=>scrollToTarget('Curriculum')} className="cursor-pointer shrink-0 flex flex-row items-center justify-center">
              <div className="relative tracking-[0.03em] font-semibold">
                Curriculum
              </div>
            </div>
            <div onClick={()=>scrollToTarget('Team')} className="cursor-pointer shrink-0 flex flex-row items-center justify-center">
              <div className="relative tracking-[0.03em] font-semibold">Team</div>
            </div>
          </div>
          <div className="relative text-xs leading-[140%] font-medium">
            <p className="m-0">© 2023 — Copyright</p>
            <p className="m-0">All Rights reserved</p>
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-start justify-start gap-[14px]">
          <div className="shrink-0 flex flex-row items-center justify-center">
            <div className="relative tracking-[0.03em] font-semibold">
              Connect with us
            </div>
          </div>
          <div className="self-stretch shrink-0 flex flex-row items-end justify-start">
            <div className="shrink-0 flex flex-row items-end justify-start">
              <div className="shrink-0 flex flex-row items-start justify-start gap-[10px]">
                <div className="rounded-21xl bg-lavender w-10 h-10 flex flex-row items-center justify-center">
                  <img
                    className="cursor-pointer relative w-[18.46px] h-[15px] object-cover"
                    alt=""
                    src="/vector@2x.png"
                  />
                </div>
                <div className="rounded-21xl bg-lavender w-10 h-10 flex flex-row items-center justify-center">
                  <img
                    className="cursor-pointer relative w-[18px] h-[18px] object-cover"
                    alt=""
                    src="/vector@2x.png"
                  />
                </div>
                <div className="rounded-21xl bg-lavender w-10 h-10 flex flex-row items-center justify-center">
                  <img
                    className="cursor-pointer relative w-[18px] h-[18px] object-cover"
                    alt=""
                    src="/vector@2x.png"
                  />
                </div>
                <div className="rounded-21xl bg-lavender w-10 h-10 flex flex-row items-center justify-center">
                  <img
                    className="cursor-pointer relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/whatsapp-svg@2x.png"
                  />
                </div>
                <div className="rounded-21xl bg-lavender w-10 h-10 flex flex-row items-center justify-center">
                  <img
                    className="cursor-pointer relative w-[18px] h-[15.19px] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/linkedin-svg@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FooterSection;
  