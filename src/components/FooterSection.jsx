 const FooterSection = ({scrollToTarget}) => {
    return (<>
     
      <div className=" top-[5334px]  [background:linear-gradient(-69.18deg,_rgba(130,_92,_246,_0.49),_rgba(130,_92,_246,_0)),_#141238] w-full overflow-hidden flex flex-wrap md:flex-row flex-col items-center justify-center pt-16 px-[20px] pb-6 box-border gap-[327px] text-left text-base text-gray-500 font-montserrat">
      <div className=" flex flex-col items-start justify-start gap-[32px] text-xs text-gray-400">
         <div className="flex flex-col items-start justify-start gap-[8px]">
           <div className="flex flex-col items-start justify-start gap-[8px]">
             <img
               className="relative w-[187px] h-[33px] object-cover"
               alt=""
               src="/gslogo-white-1@2x.png"
             />
             <img
               className="relative w-56 h-[65px] object-cover"
               alt=""
               src="/web3camp-logo@2x.png"
             />
           </div>
           <div className="flex flex-col items-start justify-start">
             <div className="flex flex-row items-center justify-start gap-[12px]">
               <div className="relative [text-decoration:underline] leading-[150%] font-medium">
                 More about us
               </div>
               <div className="relative rounded-[10px] bg-gray-500 w-2.5 h-2.5" />
             </div>
           </div>
         </div>
         <div className="self-stretch flex flex-col items-start justify-start text-xl">
           <div className="flex flex-row items-start justify-start gap-[48px]">
             <div className="flex flex-col items-start justify-start gap-[16px]">
               <div className="relative tracking-[-0.01em] leading-[110%] font-medium">
                 Contact Us
               </div>
               <div className="flex flex-col items-start justify-start text-sm">
                 <div className="relative leading-[160%]">
                   +91 899 991 7506
                 </div>
                 <a
                   className="relative [text-decoration:underline] leading-[160%] text-[inherit]"
                   href="mailto:anubha@girlscript.tech"
                   target="_blank"
                 >
                   anubha@girlscript.tech
                 </a>
                 <a
                   className="relative [text-decoration:underline] leading-[160%] text-[inherit]"
                   href="mailto:mohit@girlscript.tech"
                   target="_blank"
                 >
                   mohit@girlscript.tech
                 </a>
                 <a
                   className="relative [text-decoration:underline] leading-[160%] text-[inherit]"
                   href="mailto:web3camp@girlscript.tech"
                   target="_blank"
                 >
                   web3camp@girlscript.tech
                 </a>
               </div>
             </div>
             <div className="flex flex-col items-start justify-start gap-[16px]">
               <div className="relative tracking-[-0.01em] leading-[110%] font-medium">
                 Location
               </div>
               <div className="flex flex-col items-start justify-start gap-[4px] text-sm">
                 <div className="relative leading-[160%] inline-block w-[206px]">{`Girlscript Foundation `}</div>
                 <div className="relative text-xs leading-[160%] inline-block w-[206px]">
                   OFFICE 442, 4TH FLOOR, GERA,S IMPERIUM RISE, MULS HI PUNE
                   HINJAVADI (CT) 411057
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="flex flex-col items-start justify-start gap-[100px]">
         <div className="flex flex-col items-start justify-start gap-[14px]">
           <div className="flex flex-row items-center justify-center">
             <div className="relative tracking-[0.03em] font-semibold">
               Home
             </div>
           </div>
           <div className="flex flex-row items-center justify-center">
             <div className="relative tracking-[0.03em] font-semibold">
               Web3Camp
             </div>
           </div>
           <div className="flex flex-row items-center justify-center">
             <div className="relative tracking-[0.03em] font-semibold">
               Timeline
             </div>
           </div>
           <div className="flex flex-row items-center justify-center">
             <div className="relative tracking-[0.03em] font-semibold">
               Curriculum
             </div>
           </div>
           <div className="flex flex-row items-center justify-center">
             <div className="relative tracking-[0.03em] font-semibold">
               Team
             </div>
           </div>
         </div>
         <div className="relative text-xs leading-[140%] font-medium">
           <p className="m-0">© 2023 — Copyright</p>
           <p className="m-0">All Rights reserved</p>
         </div>
       </div>
       <div className="flex flex-col items-start justify-start gap-[14px]">
         <div className="flex flex-row items-center justify-center">
           <div className="relative tracking-[0.03em] font-semibold">
             Connect with us
           </div>
         </div>
         <div className="self-stretch flex flex-row items-end justify-start">
           <div className="flex flex-row items-end justify-start">
             <div className="flex flex-row items-start justify-start gap-[10px]">
               <div className="rounded-21xl bg-lavender w-10 h-10 flex flex-row items-center justify-center">
                 <img
                   className="relative w-4 h-3.5 overflow-hidden shrink-0"
                   alt=""
                   src="/X svg (1).svg"
                 />
               </div>
               <div className="rounded-21xl bg-lavender w-10 h-10 hidden flex-row items-center justify-center">
                 <img
                   className="relative w-[18px] h-[18px]"
                   alt=""
                   src="/Vector.svg"
                 />
               </div>
               <div className="rounded-21xl bg-lavender w-10 h-10 flex flex-row items-center justify-center">
                 <img
                   className="relative w-[18px] h-[15.19px] overflow-hidden shrink-0"
                   alt=""
                   src="/LinkedIn svg.svg"
                 />
               </div>
               <div className="rounded-21xl bg-lavender w-10 h-10 flex flex-row items-center justify-center">
                 <img
                   className="relative w-[18px] h-[18px]"
                   alt=""
                   src="/Vector.svg"
                 />
               </div>
               <div className="rounded-21xl bg-lavender w-10 h-10 hidden flex-row items-center justify-center">
                 <img
                   className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                   alt=""
                   src="/whatsapp-svg.svg"
                 />
               </div>
             </div>
           </div>
         </div>
       </div>
     </div></>
    );
  };
  
  export default FooterSection;
  