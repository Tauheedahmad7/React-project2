import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

const HeroText = () => {

  const { scrollY } = useScroll()

  const [scrollDirection, setscrollDirection] = useState(1)

  // agar sidha scrolling hua to value positive hoga 
  // and scrollDirection ki value 1 hogi

  // agar ulta scrolling hoa to value negative Hogi
  // and scrollDirection ki value 0 hogi


  const handleScrolling = () => {
    const currentDirection = scrollY.get() - scrollY.getPrevious()

    if (currentDirection > 0) {
      setscrollDirection(1)
    }
    else {
      setscrollDirection(0)
    }

  }



  useEffect(() => {
    scrollY.on("change", handleScrolling);
  }, [scrollY])

  return (
    <motion.div

      initial={{
        x: -1220
      }}

      animate={{
        x: scrollDirection > 0 ? -2440 : 0 //sidha chlane pei -1220 or ulta chlne pei 2440
      }}
      transition={{
        duration: 10,
        ease: "linear",
        repeat: Infinity
      }}
      className="relative  text-white flex  top-[28vw]"
    >
      <h2 className="text-[24vh] tracking-tighter font-medium whitespace-nowrap">- Dennis Snellenberg</h2>
      <h2 className="text-[24vh] tracking-tighter font-medium whitespace-nowrap">- Dennis Snellenberg</h2>
      <h2 className="text-[24vh] tracking-tighter font-medium whitespace-nowrap">- Dennis Snellenberg</h2>
    </motion.div>
  )
}

export default HeroText