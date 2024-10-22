import Page2Animation from "./page2Animation/Page2Animation";
import Page2Info from "./page2Info/Page2Info";

const Page2 = () => {
  return (
    <div className="min-h-screen bg-lme-300 py-[5vw] px-5 md:px-10 lg:px-20">
      <Page2Info />
      <Page2Animation />
    </div>
  );
};

export default Page2;
