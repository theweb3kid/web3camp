const Testimonials = () => {
  return (
    <div className="flex flex-col items-center flex-wrap justify-start md:justify-between gap-8 px-28 w-full py-16 max-w-[1440px] mx-auto ">
      <div className="flex flex-col flex-wrap items-start justify-start gap-8 md:flex-row md:items-center ">
        <div className="flex flex-col items-start justify-start gap-4 md:max-w-[430px] h-auto">
          <div className="self-stretch relative tracking-[0.03em] font-semibold">
            Testimonials
          </div>
        </div>
        <div className="relative w-[1216px] h-[776px] overflow-x-auto overflow-y-hidden">
          <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[40px]">
            <img
              className="relative rounded-lg w-[380px] h-[334px] object-cover"
              alt=""
              src="/image 33.png"
            />
            <img
              className="relative rounded-lg w-[380px] h-[366px] object-cover"
              alt=""
              src="/image 37.png"
            />
          </div>
          <div className="absolute top-[40px] left-[1260px] flex flex-col items-start justify-start gap-[40px]">
            <img
              className="relative rounded-lg w-[380px] h-[334px] object-cover"
              alt=""
              src="/image 33.png"
            />
            <img
              className="relative rounded-lg w-[380px] h-[366px] object-cover"
              alt=""
              src="/image 37.png"
            />
          </div>
          <div className="absolute top-[40px] left-[420px] flex flex-col items-start justify-start gap-[40px]">
            <img
              className="relative rounded-lg w-[380px] h-[370px] object-cover"
              alt=""
              src="/image 35.png"
            />
            <img
              className="relative rounded-lg w-[380px] h-[334px] object-cover"
              alt=""
              src="/image 36.png"
            />
          </div>
          <div className="absolute top-[0px] left-[840px] flex flex-col items-start justify-start gap-[40px]">
            <img
              className="relative rounded-lg w-[380px] h-[366px] object-cover"
              alt=""
              src="/image 37.png"
            />
            <img
              className="relative rounded-lg w-[380px] h-[370px] object-cover"
              alt=""
              src="/image 35.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
