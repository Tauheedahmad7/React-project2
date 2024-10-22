const CenterFlex = () => {
    return (
      <div className="relative flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex bg-[#1C1D20] text-[#FFFFFF] py-3 gap-3 px-3 sm:gap-5 sm:px-5 rounded-e-full">
          <h3 className="ml-5 sm:ml-10 leading-5 text-xs sm:text-sm md:text-base lg:text-lg">
            Located <br /> in the <br /> Netherlands
          </h3>
          <div className="earth w-[12vw] h-[12vw] sm:w-[8vw] sm:h-[8vw] lg:w-[5vw] lg:h-[5vw] rounded-full flex justify-center items-center bg-[#999D9E]">
            <i className="ri-global-line text-3xl sm:text-4xl lg:text-5xl"></i>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="text-white mt-10 md:mt-0 mr-0 md:mr-[8vw] mb-16 flex flex-col gap-5 sm:gap-8 lg:gap-10 items-start md:items-end">
          <i className="ri-arrow-right-down-line text-xl sm:text-2xl lg:text-3xl"></i>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Freelance <br />
            Designer & Developer
          </h1>
        </div>
      </div>
    );
  };
  
  export default CenterFlex;
  