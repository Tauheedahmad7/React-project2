import CenterFlex from "./CenterFlex"
import HeroImage from "./HeroImage"
import HeroText from "./HeroText"

const Homepage = () => {
  return (
    <div className="h-screen overflow-hidden ">
        <HeroImage/>
        <HeroText/>
        <CenterFlex/>
    </div>
  )
}

export default Homepage