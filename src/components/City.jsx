import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const City = ({ image, cityName, date, propWidth, Registrations ,online}) => {
  const imageIconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/eventDetails")}
      className="rounded-3xl bg-white box-border w-auto overflow-hidden  flex flex-wrap flex-col items-center justify-start relative text-left text-base text-gray-100 font-montserrat border-[1px] border-solid border-gray-200"
    >
      <img
        className="relative w-[330px] h-[223px] object-cover z-[0]"
        alt=""
        src={image}
        style={imageIconStyle}
      />
      <div className="self-stretch rounded-t-none rounded-b-lg flex flex-row items-start justify-start pt-2 px-4 pb-4 z-[1]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
          <div className="rounded-lg flex flex-row items-center justify-center">
            <div className="relative tracking-[0.03em] font-semibold">
              {cityName}
            </div>
          </div>
          <div className="rounded-lg flex flex-col items-start justify-center gap-[4px]">
            <div className="relative tracking-[0.03em] font-semibold">
              {date}
            </div>
            <div className="relative tracking-[0.03em] font-semibold hidden">
              SJB Institute Of Technology
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-mediumslateblue-200 shrink-0 flex flex-col items-start justify-center py-1.5 px-3 text-xs text-mediumslateblue-100">
          <div className="relative tracking-[0.03em] font-medium">{online? 'Online' :'Offline'}</div>
        </div>
      </div>
        {Registrations ? (
          <div className="my-0 mx-[!important] absolute top-[16px] left-[0px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none [background:linear-gradient(rgba(130,_92,_246,_0.1),_rgba(130,_92,_246,_0.1)),_#fff] flex flex-row items-center justify-center py-2 px-4 z-[2] text-xs text-mediumslateblue-100">
          <div className="relative tracking-[0.03em] font-semibold">
            Registrations open
          </div>
        </div>
        ) : (
          <div className="my-0 mx-[!important] absolute top-[16px] left-[0px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-white flex flex-row items-center justify-center py-2 px-4 z-[2] text-xs">
          <div className="relative tracking-[0.03em] font-medium">
            Registrations closed
          </div>
      </div>
        )}
    </div>
  );
};

export default City;
