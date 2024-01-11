const TimeLine = ({ eventDate, registrationDate }) => {
    return (
      <div className="flex flex-wrap flex-col items-center  justify-center gap-[64px] text-left text-sm text-darkslateblue-200 font-poppins">
        <div className="rounded-3xl bg-white box-border w-[180px]  flex flex-row items-center justify-center py-2 px-4 border-[1px] border-solid border-white">
          <div className="relative tracking-[0.03em] font-semibold">
            {eventDate}
          </div>
        </div>
        <div className="relative text-base tracking-[0.03em] font-medium text-white text-center inline-block w-[162px]">
          {registrationDate}
        </div>
      </div>
    );
  };
  
  export default TimeLine;
  