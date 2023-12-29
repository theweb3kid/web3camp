import LocationAndAttendeesContainer1 from "./LocationAndAttendeesContainer";
import OrganizersCard from "./OrganizersCard";
import CongratulationsCard from "./CongratulationsCard";
import SpeakerCard from "./SpeakerCard";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EventDetailsSection = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-white  flex flex-col items-center justify-center p-8 gap-[64px] text-left w-full text-sm text-gray font-poppins">
      <LocationAndAttendeesContainer1
        locationName="Hyderabad"
        eventDateRange="Dec 4 - Dec 5, 2023"
        universityName="Mahindra University"
        attendeesCount="Total Attendees - 157"
        womenAttendeesCount="Women Attendees - 32"
        propWidth="unset"
      />
      <div className="rounded-lg [background:linear-gradient(-61.43deg,_rgba(130,_92,_246,_0.09),_rgba(130,_92,_246,_0))] flex flex-col md:flex-row items-center justify-center pt-8 px-6 pb-6 relative gap-[24px] border-[1px] border-solid border-darkslateblue-200">
        <div className="shrink-0 flex flex-col md:flex-row items-center justify-start gap-[24px] z-[0]">
        <SpeakerCard
              personName="/taufeeq@2x.png"
              personTitle="Mr Taufeeq Riyaz"
              jobTitle="Founder"
              companyName="Tenacity"
              propBorderRadius="100px"
              propGap="4px"
              propColor="#000"
              propColor1="#000"
            />
          <SpeakerCard
              personName="/mohit-img@2x.png"
              personTitle="Mr Mohit Varu"
              jobTitle="Managing Director"
              companyName="Girlscript Foundation"
              propBorderRadius="100px"
              propGap="4px"
              propColor="#000"
              propColor1="#000"
            />
          <SpeakerCard
              personName="/ojas-image@2x.png"
              personTitle=" Mr Ojas Rajankar"
              jobTitle="Co-organizer Web3Campr"
              companyName="Girlscript Foundation"
              propBorderRadius="100px"
              propGap="4px"
              propColor="#000"
              propColor1="#000"
            />
        
        </div>
        <div className="my-0 mx-[!important] absolute top-[-24px] left-[24px] rounded-lg [background:linear-gradient(-71.1deg,_#f7f5fe,_rgba(255,_255,_255))] shrink-0 flex flex-col items-start justify-start py-2 px-4 z-[1] text-5xl text-gray font-montserrat border-[1px] border-solid border-darkslateblue-200">
              <div className="relative tracking-[0.03em] font-semibold">
                Speakers
              </div>
            </div>
      </div>
      <div className="rounded-lg [background:linear-gradient(-61.43deg,_rgba(130,_92,_246,_0.09),_rgba(130,_92,_246,_0))] shrink-0 flex flex-col items-start justify-start pt-10 px-6 pb-6 relative gap-[24px] border-[1px] border-solid border-darkslateblue-200">
        <div className="shrink-0 flex flex-col md:flex-row items-end justify-start gap-[24px] z-[0]">
          <OrganizersCard
            participantName="/sruthi-manthena-1@2x.png"
            participantLabel="Sruthi Manthena"
            organizerName="Organizer"
          />
          <OrganizersCard
            participantName="/likki-aashritha-1@2x.png"
            participantLabel="Likki Aashritha Reddy"
            organizerName="Organizer"
            propAlignSelf="unset"
            propAlignSelf1="unset"
          />
          <OrganizersCard
            participantName="/siv-ram-shastri-1@2x.png"
            participantLabel="Siv Ram Shastri"
            organizerName="Organizer"
            propAlignSelf="unset"
            propAlignSelf1="unset"
          />
        </div>
        <div className="my-0 mx-[!important] absolute top-[-24px] left-[24px] rounded-lg [background:linear-gradient(-71.1deg,_#f7f5fe,_rgba(255,_255,_255))] shrink-0 flex flex-col items-start justify-start py-2 px-4 z-[1] text-5xl font-montserrat border-[1px] border-solid border-darkslateblue-200">
          <div className="relative tracking-[0.03em] font-semibold">
            Organizers
          </div>
        </div>
      </div>
      <div className="rounded-lg [background:linear-gradient(-61.43deg,_rgba(130,_92,_246,_0.09),_rgba(130,_92,_246,_0))] shrink-0 flex flex-col items-start justify-start pt-10 px-6 pb-6 relative gap-[24px] text-13xl text-white font-brush-script-mt border-[1px] border-solid border-darkslateblue-200">
        <div className="shrink-0 flex flex-col md:flex-row items-start justify-start gap-[24px] z-[0]">
          <CongratulationsCard
            winnerImageName="/hyderabad-ideathon-winners-1@2x.png"
            participantNames="Shreya Reddy, Anushka M"
            propWidth="354px"
            propHeight="237px"
          />
          <CongratulationsCard
            winnerImageName="/hyderabad-ideathon-runners-up-1@2x.png"
            participantNames="Shreya Reddy, Anushka M"
            description=" Amarthaluri Hadassah, Vasireddy
                Yasaswini, Yuktha Bodepudi"
            propWidth="354px"
            propHeight="237px"
          />
       
        </div>
        <div className="my-0 mx-[!important] absolute top-[-24px] left-[24px] rounded-lg [background:linear-gradient(-71.1deg,_#f7f5fe,_rgba(255,_255,_255))] shrink-0 flex flex-col items-start justify-start py-2 px-4 z-[1] text-5xl text-gray font-montserrat border-[1px] border-solid border-darkslateblue-200">
              <div className="relative tracking-[0.03em] font-semibold">
                Ideathon Winners
              </div>
            </div>
            
      </div>
      <div onClick={()=> navigate(-1)} className="relative rounded-3xl [background:linear-gradient(-35.95deg,_rgba(130,_92,_246,_0.32),_rgba(130,_92,_246,_0)),_#fff] box-border w-full h-[68px]   text-center text-5xl border-[1px] border-solid border-gray-300">
            <div className=" rounded-lg shrink-0 flex flex-row items-center justify-center py-2 px-4">
              <div className="relative tracking-[0.03em]  font-medium">
                Go back
              </div>
            </div>
          </div>
    </div>
  );
};

export default EventDetailsSection;
