import InfoLeft from "./InfoLeft";
import InfoRight from "./InfoRight";

const Page2Info = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-14 px-5 md:px-10 lg:px-20">
      <InfoLeft />
      <InfoRight />
    </div>
  );
};

export default Page2Info;
