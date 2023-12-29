const SponsorCard = () => {
    return (
      <div className="self-stretch flex flex-col items-center md:items-start flex-wrap justify-center gap-[24px] text-left text-13xl text-gray-100 font-montserrat">
        <div className="relative tracking-[0.03em] font-semibold">
          Web3Camp 2022 Sponsors
        </div>
        <div className="flex flex-wrap flex-col items-center justify-center gap-[32px]">
          <div className="shrink-0 flex flex-wrap flex-col md:flex-row items-center justify-center gap-[74px]">
            <img
              className="relative w-[141px] h-11 object-cover"
              alt=""
              src="/image-12@2x.png"
            />
            <img
              className="relative w-44 h-[58px] object-cover"
              alt=""
              src="/image-10@2x.png"
            />
            <div className="relative w-[132.84px] h-[79.03px]">
              <img
                className="absolute top-[0px] left-[0px] w-[132.84px] h-[79.03px] object-cover"
                alt=""
                src="/image-15@2x.png"
              />
            </div>
            <img
              className="relative w-[119px] h-[70px] object-cover"
              alt=""
              src="/image-14@2x.png"
            />
          </div>
          <div className="shrink-0 flex flex-col md:flex-row items-center justify-center gap-[99px]">
            <img
              className="relative w-[139px] h-[58px] object-cover"
              alt=""
              src="/image-11@2x.png"
            />
            <img
              className="relative w-[188px] h-[30px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/nervos@2x.png"
            />
            <img
              className="relative w-[190px] h-[50px] object-cover"
              alt=""
              src="/image-13@2x.png"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default SponsorCard;
  