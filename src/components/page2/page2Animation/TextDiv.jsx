import { useRef, useState } from "react";
import HoverText from "./HoverText";
import { motion } from "framer-motion";

const TextDiv = () => {
    const hoverRef = useRef(null);
    const parentRef = useRef(null);
    const [imageScroll, setImageScroll] = useState(0);

    const textArray = ["TWICE", "The Damai", "FABRIC", "Aanstekelijk"];

    const mouseEntering = () => {
        hoverRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    const mouseLeave = () => {
        hoverRef.current.style.transform = 'translate(-50%, -50%) scale(0)';
    };

    const mouseMove = (e) => {
        const xPosition = e.clientX - parentRef.current.getBoundingClientRect().x;
        const yPosition = e.clientY - parentRef.current.getBoundingClientRect().y;

        hoverRef.current.style.left = xPosition + 'px';
        hoverRef.current.style.top = yPosition + 'px';
    };

    return (
        <div
            id="textDiv"
            className="relative mb-10"
            ref={parentRef}
            onMouseEnter={mouseEntering}
            onMouseLeave={mouseLeave}
            onMouseMove={mouseMove}
        >
            <div
                id="imageDiv"
                ref={hoverRef}
                className="overflow-hidden scale-0 h-[30vw] sm:h-[25vw] md:h-[20vw] lg:h-[15vw] w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[15vw] z-10 -translate-x-1/2 -translate-y-1/2 absolute"
            >
                <motion.div
                    animate={{
                        transform: `translateY(-${imageScroll}%)`,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                    className="h-full w-full bg-emerald-700"
                >
                    <img
                        className="h-full w-full object-cover"
                        src="https://dennissnellenberg.com/media/pages/work/twice/0ab7e43954-1710404752/thumbnail-twice-810x810-crop-q72.jpg"
                        alt=""
                    />
                    <img
                        className="h-full w-full object-cover"
                        src="https://dennissnellenberg.com/media/pages/work/the-damai/b511d32d21-1710452224/thumbnail-thedamai-v2-810x810-crop-q72.jpg"
                        alt=""
                    />
                    <img
                        className="h-full w-full object-cover"
                        src="https://dennissnellenberg.com/media/pages/work/fabric/ac07564a5f-1688453092/thumbnail-fabric-darkgray-810x810-crop-q72.jpg"
                        alt=""
                    />
                    <img
                        className="h-full w-full object-cover"
                        src="https://dennissnellenberg.com/media/pages/work/aanstekelijk/441187fb44-1687423090/thumbnail-aanstekelijk-810x810-crop-q72.jpg"
                        alt=""
                    />
                </motion.div>
            </div>
            <div id="scrollingImage">
                {textArray.map((elem, index) => (
                    <HoverText key={index} translate={index * 100} h1={elem} setImageScroll={setImageScroll} />
                ))}
            </div>
        </div>
    );
};

export default TextDiv;
