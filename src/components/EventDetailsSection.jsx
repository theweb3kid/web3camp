import LocationAndAttendeesContainer1 from "./LocationAndAttendeesContainer";
import OrganizersCard from "./OrganizersCard";
import CongratulationsCard from "./CongratulationsCard";
import SpeakerCard from "./SpeakerCard";
import { Navigate } from "react-router-dom";
import { useNavigate,useParams } from "react-router-dom";
import { cityData } from "./Cities";

const EventDetailsSection = () => {
    const navigate = useNavigate();
    const { cityID } = useParams();

  // Fetch detailed data for the selected city based on cityName
  const cityDetails = cityData.find(city => city.id == cityID);
console.log(cityDetails,cityData)
  if (!cityDetails) {
    return <div>City not found</div>;
  }

  const {
    image,
    date,
    propWidth,
    Registrations,
    online,
    description,
    population,
    attractions,
    // Add more details as needed
  } = cityDetails;
  return (
    <div className="bg-white  flex flex-col items-center justify-center p-8 gap-[64px] text-left w-full text-sm text-gray font-poppins">
      <LocationAndAttendeesContainer1
        locationName={cityDetails?.cityName}
        eventDateRange={cityDetails?.date}
        universityName={cityDetails.address}
        attendeesCount={cityDetails?.TotalAttendees}
        womenAttendeesCount={cityDetails?.WomenAttendees}
        propWidth="unset"
      />
      <div className="rounded-lg [background:linear-gradient(-61.43deg,_rgba(130,_92,_246,_0.09),_rgba(130,_92,_246,_0))] flex flex-col md:flex-row items-center justify-center pt-8 px-6 pb-6 relative gap-[24px] border-[1px] border-solid border-darkslateblue-200">
        <div className="shrink-0 flex flex-col md:flex-row items-center justify-start gap-[24px] z-[0]">
       {cityDetails.Speakers.map((ele,index)=>(
        
       <SpeakerCard
              personImg={ele.image}
              personTitle={ele.name}
              jobTitle={ele.position}
              propBorderRadius="100px"
              propGap="4px"
              propColor="#000"
              propColor1="#000"
            />
       ))} 
         
        
        </div>
        <div className="my-0 mx-[!important] absolute top-[-24px] left-[24px] rounded-lg [background:linear-gradient(-71.1deg,_#f7f5fe,_rgba(255,_255,_255))] shrink-0 flex flex-col items-start justify-start py-2 px-4 z-[1] text-5xl text-gray font-montserrat border-[1px] border-solid border-darkslateblue-200">
              <div className="relative tracking-[0.03em] font-semibold">
                Speakers
              </div>
            </div>
      </div>
      {cityDetails.Organizer && <div className="rounded-lg [background:linear-gradient(-61.43deg,_rgba(130,_92,_246,_0.09),_rgba(130,_92,_246,_0))] shrink-0 flex flex-col items-start justify-start pt-10 px-6 pb-6 relative gap-[24px] border-[1px] border-solid border-darkslateblue-200">
        <div className="shrink-0 flex flex-col md:flex-row items-end justify-start gap-[24px] z-[0]">
    {cityDetails.Organizer?.map((ele,index)=>(

      <OrganizersCard
      participantName={ele.image}
      participantLabel={ele.name}
      organizerName="Organizer"
      propAlignSelf="unset"
      propAlignSelf1="unset"
      />
      ))}
        </div>
        <div className="my-0 mx-[!important] absolute top-[-24px] left-[24px] rounded-lg [background:linear-gradient(-71.1deg,_#f7f5fe,_rgba(255,_255,_255))] shrink-0 flex flex-col items-start justify-start py-2 px-4 z-[1] text-5xl font-montserrat border-[1px] border-solid border-darkslateblue-200">
          <div className="relative tracking-[0.03em] font-semibold">
            Organizers
          </div>
        </div>
      </div>}
      {cityDetails.Winner&& <div className="flex flex-col items-start justify-start pt-0 px-0 pb-6 text-13xl text-white font-brush-script-mt">
        <div className="rounded-lg [background:linear-gradient(-61.43deg,_rgba(130,_92,_246,_0.09),_rgba(130,_92,_246,_0))] flex flex-row items-start justify-start pt-10 px-6 pb-6 relative gap-[24px] border-[1px] border-solid border-darkslateblue-200">
      {  cityDetails.Winner.map((ele,index)=>(

        <CongratulationsCard
        place={index}
        winnerImageName={ele.image}
        participantNames={ele.name}
        // description=" Amarthaluri Hadassah, Vasireddy
        // Yasaswini, Yuktha Bodepudi"
        propWidth="354px"
        propHeight="237px"
        />
        ))}
       
        </div>
       
            
      </div>}
      <div onClick={()=> navigate(-1)} className="cursor-pointer relative rounded-3xl [background:linear-gradient(-35.95deg,_rgba(130,_92,_246,_0.32),_rgba(130,_92,_246,_0)),_#fff] box-border w-full h-[68px]   text-center text-5xl border-[1px] border-solid border-gray-300">
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
