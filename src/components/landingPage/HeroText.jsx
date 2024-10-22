import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const HeroText = () => {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState(1);

  const handleScrolling = () => {
    const currentDirection = scrollY.get() - scrollY.getPrevious();
    setScrollDirection(currentDirection > 0 ? 1 : 0);
  };

  useEffect(() => {
    scrollY.on("change", handleScrolling);
  }, [scrollY]);

  return (
    <motion.div
      initial={{ x: -1220 }}
      animate={{
        x: scrollDirection > 0 ? -2440 : 0, // Move left when scrolling down
      }}
      transition={{
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      }}
      className="relative text-white flex top-[28vw] whitespace-nowrap"
    >
      <h2 className="text-[10vw] sm:text-[20vh] md:text-[24vh] tracking-tighter font-medium">
        - Dennis Snellenberg
      </h2>
      <h2 className="text-[10vw] sm:text-[20vh] md:text-[24vh] tracking-tighter font-medium">
        - Dennis Snellenberg
      </h2>
      <h2 className="text-[10vw] sm:text-[20vh] md:text-[24vh] tracking-tighter font-medium">
        - Dennis Snellenberg
      </h2>
    </motion.div>
  );
};

export default HeroText;
