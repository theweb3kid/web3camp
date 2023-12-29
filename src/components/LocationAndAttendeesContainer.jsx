import { useMemo } from "react";

const LocationAndAttendeesContainer = ({
  locationName,
  eventDateRange,
  universityName,
  attendeesCount,
  womenAttendeesCount,
  propWidth,
}) => {
  const dec8ContainerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="rounded-lg [background:linear-gradient(-61.43deg,_rgba(130,_92,_246,_0.09),_rgba(130,_92,_246,_0))] box-border md:w-[666px] flex flex-col md:flex-row items-center justify-center p-6 relative text-left text-13xl text-gray font-montserrat border-[1px] border-solid border-darkslateblue-200">
      <div className="shrink flex flex-col md:flex-row items-start justify-end gap-[16px] z-[0]">
        <div className="relative tracking-[0.03em] font-semibold">
          {locationName}
        </div>
        <div
          className="relative text-base tracking-[0.03em] font-semibold"
          style={dec8ContainerStyle}
        >
          <p className="m-0">{eventDateRange}</p>
          <p className="m-0">{universityName}</p>
        </div>
      </div>
      <div className="shrink-0 flex flex-col items-start justify-center gap-[8px] z-[1] text-xl text-darkslateblue-100 font-poppins">
        <div className="self-stretch rounded-lg [background:linear-gradient(-44.76deg,_rgba(130,_92,_246,_0.49),_rgba(130,_92,_246,_0))] flex flex-col items-start justify-center py-2 px-3 border-[1px] border-solid border-darkslateblue-200">
          <div className="relative tracking-[0.03em] font-semibold">
            {attendeesCount}
          </div>
        </div>
        <div className="rounded-lg [background:linear-gradient(-44.76deg,_rgba(130,_92,_246,_0.49),_rgba(130,_92,_246,_0))] shrink-0 flex flex-col items-start justify-center py-2 px-3 border-[1px] border-solid border-darkslateblue-200">
          <div className="relative tracking-[0.03em] font-semibold">
            {womenAttendeesCount}
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[-24px] left-[24px] rounded-lg [background:linear-gradient(-71.1deg,_#f7f5fe,_rgba(255,_255,_255,_0))] shrink-0 hidden flex-col items-start justify-start py-2 px-4 z-[2] text-5xl border-[1px] border-solid border-darkslateblue-200">
        <div className="relative tracking-[0.03em] font-semibold">
          Hyderabad
        </div>
      </div>
    </div>
  );
};

export default LocationAndAttendeesContainer;
