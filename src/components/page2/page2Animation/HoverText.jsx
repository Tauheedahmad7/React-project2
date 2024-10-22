const HoverText = (props) => {
    const mouseEntered = () => {
      props.setImageScroll(props.translate);
    };
  
    return (
      <div
        onMouseEnter={mouseEntered}
        className="relative border-t-[1px] border-zinc-200 px-4 sm:px-8 md:px-16 py-[3vw] flex items-center justify-between"
      >
        <div className="absolute h-full w-full left-0 top-0 z-20"></div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{props.h1}</h1>
        <h5 className="text-base sm:text-lg md:text-xl">interaction & Development</h5>
      </div>
    );
  };
  
  export default HoverText;
  