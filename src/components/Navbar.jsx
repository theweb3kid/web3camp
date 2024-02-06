import React from 'react';

const Navbar = ({scrollToTarget}) => {
  return (
    <div className="rounded-lg bg-white w-auto flex flex-col flex-wrap md:flex-row items-center justify-between py-2 px-2 box-border z-[2] text-gray-100">
    <img onClick={()=>scrollToTarget('Home')}
      className="cursor-pointer relative w-[187px] h-[33px] object-cover"
      alt=""
      src="/gs-logo-black@2x.png"
    />
    <div className="rounded-lg  flex flex-col md:flex-row items-start justify-start p-2 gap-[14px]">
      <div className="cursor-pointer flex flex-row items-center justify-center p-2">
        <div onClick={()=>scrollToTarget('Home')} className="relative tracking-[0.03em] font-semibold">Home</div>
      </div>
      <div className="  flex flex-row items-center justify-center p-2">
        <div  onClick={()=>scrollToTarget('Web3Camp')} className="cursor-pointer relative tracking-[0.03em] font-semibold">
          Web3Camp
        </div>
      </div>
      <div className=" flex flex-row items-center justify-center p-2">
        <div onClick={()=>scrollToTarget('Timeline')} className="cursor-pointer relative tracking-[0.03em] font-semibold">
          Timeline
        </div>
      </div>
      <div className=" flex flex-row items-center justify-center p-2">
        <div onClick={()=>scrollToTarget('Curriculum')} className=" cursor-pointer relative tracking-[0.03em] font-semibold">
          Curriculum
        </div>
      </div>
      <div className=" flex flex-row items-center justify-center p-2">
        <div onClick={()=>scrollToTarget('Team')} className="cursor-pointer relative tracking-[0.03em] font-semibold">Team</div>
      </div>
    </div>
    <div className=" flex shrink-0 flex-col md:flex-row items-start justify-center gap-[16px] text-sm text-white font-open-sans">
      <a href='mailto:web3camp@girlscript.tech' className="cursor-pointer no-underline rounded-lg bg-white shrink-0 flex flex-row items-start justify-start py-3 px-4 text-mediumslateblue-100 border-[1px] border-solid border-mediumslateblue-100">
        <b className="relative tracking-[0.03em]">Partner with us</b>
      </a>
    </div>
  </div>
  );
};

export default Navbar;

