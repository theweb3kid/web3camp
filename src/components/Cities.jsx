import City from "./City";

const Cities = () => {
  return (
    <div className=" [background:linear-gradient(-61.43deg,_rgba(130,_92,_246,_0.09),_rgba(130,_92,_246,_0))] w-full  flex flex-col items-center justify-center py-16 px-28 box-border text-left text-13xl text-gray-100 font-montserrat">
      <div className="flex flex-col items-start justify-start gap-[40px]">
        <div className=" flex flex-row items-center justify-center">
          <div className="relative tracking-[0.03em] font-semibold">Cities</div>
        </div>
        <div className=" flex flex-col md:flex-row flex-wrap items-center justify-center gap-[32px] text-base">
          <City
            image="/image-26@2x.png"
            cityName="cityName"
            date="Dec 8 - Dec 9, 2023"
            propWidth="330px"
            Registrations={false}
            online={false}

          />
          <City
            image="/image-27@2x.png"
            cityName="Hyderabad"
            date="Dec 4 - Dec 5, 2023"
            propWidth="342px"
            Registrations={false}
            online={false}
          />
          <City
            image="/image-30@2x.png"
            cityName="Mumbai"
            date="Nov 26 - Nov 27, 2023"
            propWidth="342px"
            Registrations={false}
            online={false}
          />
          <City
            image="/image-29@2x.png"
            cityName="Pune"
            date="Dec 8 - Dec 9, 2023"
            propWidth="342px"
            Registrations={false}
            online={false}
          />
          <City
            image="/image-31@2x.png"
            cityName="Raipur"
            date="Nov 30 - Dec 1, 2023"
            propWidth="342px"
            Registrations={false}
            online={false}
          />
          <City
            image="/image-31@2x.png"
            cityName="Bengaluru"
            date="Dec 8 - Dec 9, 2023"
            propWidth="342px"
            Registrations
            online
          />
          
          <div className="relative rounded-3xl [background:linear-gradient(-35.95deg,_rgba(130,_92,_246,_0.32),_rgba(130,_92,_246,_0)),_#fff] box-border w-[1060px] h-[68px] overflow-hidden shrink-0 text-center text-5xl border-[1px] border-solid border-gray-300">
            <div className="absolute top-[calc(50%_-_22.5px)] left-[calc(50%_-_172.5px)] rounded-lg shrink-0 flex flex-row items-center justify-center py-2 px-4">
              <div className="relative tracking-[0.03em] font-medium">
                More cities coming soon
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
