import { useMemo } from "react";

const SpeakerCard = ({
  personImg,
  personTitle,
  jobTitle,
  companyName,
  propBorderRadius,
  propGap,
  propColor,
  propColor1,
}) => {
  const adityaIconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const mrAdityaJoshiStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const blockchainDeveloperWalmartContainerStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className="w-[190px] flex flex-col items-center justify-start gap-[8px] text-left text-sm text-black font-poppins">
      <img
        className="relative w-16 h-16 object-cover"
        alt=""
        src={personImg}
        style={adityaIconStyle}
      />
      <div
        className="flex flex-col items-center justify-start gap-[4px]"
        style={frameDivStyle}
      >
        <div
          className="relative tracking-[0.03em] font-semibold"
          style={mrAdityaJoshiStyle}
        >
          {personTitle}
        </div>
        <div
          className="relative text-xs tracking-[0.03em] text-center"
          style={blockchainDeveloperWalmartContainerStyle}
        >
          <p className="m-0">{jobTitle}</p>
          <p className="m-0">{companyName}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
