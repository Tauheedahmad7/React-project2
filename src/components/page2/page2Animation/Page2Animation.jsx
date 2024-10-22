import TextDiv from "./TextDiv";

const Page2Animation = () => {
  return (
    <div className="mt-10 px-4 sm:px-8 md:px-16">
      <h2 className="uppercase text-xs mb-8 sm:mb-12 md:mb-16">recent work</h2>
      <TextDiv />

      <button className="px-8 py-4 border-[1px] rounded-full border-zinc-600 relative left-1/2 -translate-x-1/2 text-sm sm:text-base">
        More work
      </button>
    </div>
  );
};

export default Page2Animation;
