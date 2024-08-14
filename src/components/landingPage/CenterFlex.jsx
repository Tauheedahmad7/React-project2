
const CenterFlex = () => {
    return (
        <div className="relative  flex justify-between items-center">
            <div className="flex bg-[#1C1D20] text-[#FFFFFF] py-3 gap-5 px-3 rounded-e-full">
                <h3 className="ml-10 leading-5">Locoted <br /> in the <br /> Netherlands</h3>
                <div className="earth w-[5vw] h-[5vw] rounded-full flex justify-center items-center bg-[#999D9E]">
                    <i className="ri-global-line text-5xl"></i>
                </div>
            </div>
            <div className="  text-white mr-[8vw] mb-16 flex flex-col gap-10">
                <i className="ri-arrow-right-down-line text-2xl  "></i>
                <h1 className="text-3xl">Freelance <br />
                    Designer & Developer
                </h1>
            </div>
        </div>
    )
}

export default CenterFlex