import { useMemo } from "react";

const TeamCard = ({
  mohitImg,
  mohitVaru,
  managingDirector,
  girlscriptFoundation,
  propAlignSelf,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className="w-[190px] flex flex-col items-center justify-start py-2 px-0 box-border gap-[8px] text-left text-sm text-gray-100 font-poppins"
      style={frameDivStyle}
    >
      <img
        className="relative rounded-81xl w-[140px] h-[140px] object-cover"
        alt=""
        src={mohitImg}
      />
      <div className="flex flex-col items-center justify-start gap-[4px]">
        <div className="relative tracking-[0.03em] font-semibold">
          {mohitVaru}
        </div>
        <div className="relative text-xs tracking-[0.03em] text-center">
          <p className="m-0">{managingDirector}</p>
          <p className="m-0">{girlscriptFoundation}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
