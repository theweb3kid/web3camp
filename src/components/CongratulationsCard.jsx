import { useMemo } from "react";

const CongratulationsCard = ({
  winnerImageName,
  participantNames,
  description,
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
    <div className="self-stretch rounded-lg [background:linear-gradient(-38.8deg,_rgba(130,_92,_246,_0.49),_rgba(130,_92,_246,_0))] shrink-0 flex flex-col items-start justify-start p-4 gap-[8px] text-left text-13xl text-white font-brush-script-mt">
      <div className="self-stretch shrink-0 flex flex-row items-center justify-between">
        <i className="relative tracking-[0.03em] text-transparent !bg-clip-text [background:linear-gradient(79.19deg,_rgba(130,_92,_246,_0.49),_rgba(130,_92,_246,_0)),_#141238] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Congratulations!
        </i>
        <div className="rounded-lg bg-darkslateblue-100 shrink-0 flex flex-col items-start justify-center py-1 px-4 text-sm font-poppins border-[1px] border-solid border-darkslateblue-100">
          <div className="relative tracking-[0.03em] font-semibold">
            #1 Winner
          </div>
        </div>
      </div>
      <img
        className="relative rounded-lg w-[354px] h-[237px] object-cover"
        alt=""
        src={winnerImageName}
        style={hyderabadIdeathonWinners1Style}
      />
      <div className="shrink-0 flex flex-col items-start justify-start text-sm text-gray font-poppins">
        <div className="relative tracking-[0.03em] font-semibold">
          {participantNames}
        </div>
      </div>
      <div className="shrink-0 flex flex-col items-start justify-start text-sm text-gray font-poppins">
              <div className="relative tracking-[0.03em] font-medium inline-block w-[352px]">
                {description}
              </div>
            </div>
    </div>
  );
};

export default CongratulationsCard;
