import { useMemo } from "react";

const CongratulationsCard = ({
  winnerImageName,
  participantNames,
  description,
  place,
  propWidth,
  propHeight,
}) => {
  const hyderabadIdeathonWinners1Style = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <>
      <div className="flex flex-row items-start justify-start z-[0]">
        <div className="self-stretch rounded-lg [background:linear-gradient(-38.8deg,_rgba(130,_92,_246,_0.49),_rgba(130,_92,_246,_0))] flex flex-col items-start justify-start p-4 gap-[8px]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <i className="relative tracking-[0.03em] text-transparent !bg-clip-text [background:linear-gradient(79.19deg,_rgba(130,_92,_246,_0.49),_rgba(130,_92,_246,_0)),_#141238] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Congratulations!
            </i>
            <div className="rounded-lg bg-darkslateblue-100 flex flex-col items-start justify-center py-1 px-4 text-sm font-poppins border-[1px] border-solid border-darkslateblue-100">
              <div className="relative tracking-[0.03em] font-semibold">
                #{place+1} Winner
              </div>
            </div>
          </div>
          <img
            className="relative rounded-lg w-[313px] h-[299px] object-cover"
            alt=""
            src={winnerImageName}
          />
          <div className="w-[313px] flex-col items-start justify-start text-sm text-gray font-poppins">
            <div className=" tracking-[0.03em] font-semibold text-darkslateblue-200 font-poppins">
              {participantNames}
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[-24px] left-[24px] rounded-lg [background:linear-gradient(-71.1deg,_#f7f5fe,_rgba(255,_255,_255))] shrink-0 flex flex-col items-start justify-start py-2 px-4 z-[1] text-5xl text-gray font-montserrat border-[1px] border-solid border-darkslateblue-200">
        <div className="relative tracking-[0.03em] font-semibold text-darkslateblue-200 font-poppins">
          Ideathon Winners
        </div>
      </div>
    </>
  );
};

export default CongratulationsCard;
