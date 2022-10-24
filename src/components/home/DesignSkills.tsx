import { useState } from 'react'
import { SiFigma, SiMiro } from 'react-icons/si';

function DesignSkills() {
    const [skillActive, setSkillActive] = useState('');

    const mouseEnter = (name: string) => {
        setSkillActive(name);
    }

    const mouseLeave = () => {
        setSkillActive('');
    }
    return (
        <div>
            <div className="text-24 text-primary-100 font-semibold">
                Design
            </div>
            <div className="flex gap-4 mt-2">

                <div className={` flex p-2 items-center h-[40px] bg-primary-200 rounded-lg lg:cursor-pointer`} onMouseEnter={() => mouseEnter("SiFigma")} onMouseLeave={mouseLeave}>
                    <SiFigma size="24px" className={`text-white ${skillActive === "SiFigma" ? "animate-pulse" : ""}`} />

                    <div className={` text-white duration-200 ${skillActive === "SiFigma" ? "w-[60px] pl-2 " : "w-0 -z-10 "}`}>
                        <div className={`transition w-[60px] ease-in-out  ${skillActive === "SiFigma" ? " opacity-100 " : "w-0 opacity-0 "}`}>
                            Figma
                        </div>
                    </div>
                </div>

                <div className={`z-10 flex p-2 items-center h-[40px] bg-primary-200 rounded-lg lg:cursor-pointer`} onMouseEnter={() => mouseEnter("SiMiro")} onMouseLeave={mouseLeave}>
                    <SiMiro size="24px" className={`text-white ${skillActive === "SiMiro" ? "animate-pulse" : ""}`} />

                    <div className={`text-white duration-200 ${skillActive === "SiMiro" ? "w-[52px] pl-2 " : "w-0 "}`}>
                        <div className={`transition w-[52px] ease-in-out  ${skillActive === "SiMiro" ? " opacity-100 " : "w-0 opacity-0"}`}>
                            Miro
                        </div>
                    </div>
                </div>




            </div>


        </div>
    )
}

export default DesignSkills

