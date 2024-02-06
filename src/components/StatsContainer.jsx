const StatsContainer = () => {
    return (
      // <div className="self-stretch flex flex-wrap flex-col items-center  justify-start gap-[24px] text-left text-13xl text-gray-100 font-montserrat">
      //   <div className="relative tracking-[0.03em] font-semibold">
      <div className="self-stretch flex flex-wrap flex-col items-start justify-start gap-[24px] px-28 py-16 text-left text-13xl text-gray-100 font-montserrat">
      <div className="self-stretch relative tracking-[0.03em] font-semibold">
          Web3Camp 2022 Stats
        </div>
        <div className="rounded-3xl bg-white shadow-[6px_0px_40px_rgba(0,_0,_0,_0.1),_0px_6px_40px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-wrap flex-col md:flex-row items-center justify-start py-6 px-10 gap-[88px] text-45xl text-mediumslateblue-100 font-source-sans-pro">
          <div className="w-[107px] flex flex-col items-center justify-start">
            <div className="relative tracking-[0.03em] font-semibold">60</div>
            <b className="relative text-base tracking-[0.03em] inline-block text-center w-[107px]">
              <p className="m-0">Cities |</p>
              <p className="m-0">Bootcamps</p>
            </b>
          </div>
          <div className="shrink-0 flex flex-col items-center justify-start">
            <div className="relative tracking-[0.03em] font-semibold">50%</div>
            <b className="relative text-base tracking-[0.03em] inline-block text-center w-[188px]">
              <p className="m-0">{`Underrepresented `}</p>
              <p className="m-0">groups</p>
            </b>
          </div>
          <div className="w-[107px] flex flex-col items-center justify-start">
            <div className="relative tracking-[0.03em] font-semibold">15K</div>
            <b className="relative text-base tracking-[0.03em] text-center">
              <p className="m-0">Total</p>
              <p className="m-0">Attendees</p>
            </b>
          </div>
          <div className="shrink-0 flex flex-col items-center justify-start">
            <div className="relative tracking-[0.03em] font-semibold">1M+</div>
            <b className="relative text-base tracking-[0.03em] text-center">
              <p className="m-0">{`Social Media `}</p>
              <p className="m-0">Outreach</p>
            </b>
          </div>
          <div className="shrink-0 flex flex-col items-center justify-start">
            <div className="relative tracking-[0.03em] font-semibold">50K+</div>
            <b className="self-stretch relative text-base tracking-[0.03em] text-center">
              <p className="m-0">{`Offline `}</p>
              <p className="m-0">Outreach</p>
            </b>
          </div>
        </div>
      </div>
    );
  };
  
  export default StatsContainer;
  