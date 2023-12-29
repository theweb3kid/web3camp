import { useMemo } from "react";

const OrganizersCard = ({
  participantName,
  participantLabel,
  organizerName,
  propAlignSelf,
  propAlignSelf1,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const organizerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div className="w-[190px] flex flex-col items-center justify-start gap-[8px] text-left text-sm text-gray font-poppins">
      <img
        className="relative rounded-81xl w-16 h-16 object-cover"
        alt=""
        src={participantName}
      />
      <div
        className="flex flex-col items-center justify-start gap-[4px]"
        style={frameDiv1Style}
      >
        <div className="relative tracking-[0.03em] font-semibold">
          {participantLabel}
        </div>
        <div
          className="relative text-xs tracking-[0.03em] text-center"
          style={organizerStyle}
        >
          {organizerName}
        </div>
      </div>
    </div>
  );
};

export default OrganizersCard;
