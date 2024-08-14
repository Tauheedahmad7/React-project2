import Navpart1 from "./Navpart1"
import Navpart2 from "./Navpart2"

const Navbar = () => {
  return (
    <div className="z-10 fixed w-full flex justify-between items-center bg-rse-300 py-7 px-10 text-white">
        <Navpart1/>
        <Navpart2/>
    </div>
  )
}

export default Navbar