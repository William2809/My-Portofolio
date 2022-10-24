import React, { useState } from 'react'
import { SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiJavascript, SiTypescript, SiCplusplus, SiC, SiReact, SiExpress, SiMongodb, SiNodedotjs, SiLaravel, SiMysql, SiJava, SiVisualstudiocode, SiGithub } from 'react-icons/si';

function ProgrammingSkills() {
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
                Programming
            </div>
            <div className="flex gap-4 mt-2">
                <div className={`flex items-center bg-primary-200 rounded-lg`} >
                    <SiHtml5 size="24px" className={`z-10 p-2 h-[40px] w-[40px] text-white lg:cursor-pointer ${skillActive === "SiHtml5" ? "animate-pulse" : ""}`} onMouseEnter={() => mouseEnter("SiHtml5")} onMouseLeave={mouseLeave} />
                    <div className={`text-white duration-200 ${skillActive === "SiHtml5" ? "w-[60px] " : "w-0 "}`}>
                        <div className={`transition w-[60px] -z-50 ease-in-out  ${skillActive === "SiHtml5" ? " opacity-100 " : "w-0 opacity-0"}`}>
                            HTML
                        </div>
                    </div>
                </div>

                <div className={`flex items-center bg-primary-200 rounded-lg`} >
                    <SiCss3 size="24px" className={`z-10 p-2 h-[40px] w-[40px] text-white lg:cursor-pointer ${skillActive === "SiCss3" ? "animate-pulse" : ""}`} onMouseEnter={() => mouseEnter("SiCss3")} onMouseLeave={mouseLeave} />
                    <div className={`text-white duration-200 ${skillActive === "SiCss3" ? "w-[44px]  " : "w-0 "}`}>
                        <div className={`transition w-[44px] -z-50 ease-in-out  ${skillActive === "SiCss3" ? " opacity-100 " : "w-0 opacity-0"}`}>
                            CSS
                        </div>
                    </div>
                </div>



                <div className={`flex items-center bg-primary-200 rounded-lg`} >
                    <SiTailwindcss size="24px" className={`z-10 p-2 h-[40px] w-[40px] text-white lg:cursor-pointer  ${skillActive === "SiTailwindcss" ? "animate-pulse" : ""}`} onMouseEnter={() => mouseEnter("SiTailwindcss")} onMouseLeave={mouseLeave} />
                    <div className={`text-white duration-300 ${skillActive === "SiTailwindcss" ? "w-[116px]" : "w-0 "}`}>
                        <div className={`transition w-[116px] -z-50 ease-in-out  ${skillActive === "SiTailwindcss" ? " opacity-100 " : "w-0 opacity-0"}`}>
                            Tailwind CSS
                        </div>
                    </div>
                </div>

                <div className={`flex items-center bg-primary-200 rounded-lg`} >
                    <SiBootstrap size="24px" className={`z-10 p-2 h-[40px] w-[40px] text-white lg:cursor-pointer  ${skillActive === "SiBootstrap" ? "animate-pulse" : ""}`} onMouseEnter={() => mouseEnter("SiBootstrap")} onMouseLeave={mouseLeave} />
                    <div className={`text-white duration-300 ${skillActive === "SiBootstrap" ? "w-[94px]" : "w-0 "}`}>
                        <div className={`transition w-[94px] -z-50 ease-in-out  ${skillActive === "SiBootstrap" ? " opacity-100 " : "w-0 opacity-0"}`}>
                            Bootstrap
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex gap-4 mt-4">
                <div className={`flex p-2 items-center h-[40px] bg-primary-200 rounded-lg lg:cursor-pointer`} onMouseEnter={() => mouseEnter("SiJavascript")} onMouseLeave={mouseLeave}>
                    <SiJavascript size="24px" className={`text-white ${skillActive === "SiJavascript" ? "animate-pulse" : ""}`} />

                    <div className={`text-white duration-200 ${skillActive === "SiJavascript" ? "w-[90px] pl-2 " : "w-0 "}`}>
                        <div className={`transition w-[90px] ease-in-out  ${skillActive === "SiJavascript" ? " opacity-100 " : "w-0 opacity-0"}`}>
                            Javascript
                        </div>
                    </div>
                </div>

                <div className={`flex p-2 items-center h-[40px] bg-primary-200 rounded-lg lg:cursor-pointer`} onMouseEnter={() => mouseEnter("SiTypescript")} onMouseLeave={mouseLeave}>
                    <SiTypescript size="24px" className={`text-white ${skillActive === "SiTypescript" ? "animate-pulse" : ""}`} />

                    <div className={`text-white duration-200 ${skillActive === "SiTypescript" ? "w-[94px] pl-2 " : "w-0 "}`}>
                        <div className={`transition w-[94px] ease-in-out  ${skillActive === "SiTypescript" ? " opacity-100 " : "w-0 opacity-0"}`}>
                            Typescript
                        </div>
                    </div>
                </div>

                <div className={`flex p-2 items-center h-[40px] bg-primary-200 rounded-lg lg:cursor-pointer z-10`} onMouseEnter={() => mouseEnter("SiCplusplus")} onMouseLeave={mouseLeave}>
                    <SiCplusplus size="24px" className={`text-white ${skillActive === "SiCplusplus" ? "animate-pulse" : ""}`} />

                    <div className={`text-white duration-200 ${skillActive === "SiCplusplus" ? "w-[40px] pl-2 " : "w-0 "}`}>
                        <div className={`transition w-[40px] ease-in-out  ${skillActive === "SiCplusplus" ? " opacity-100 " : "w-0 opacity-0"}`}>
                            C++
                        </div>
                    </div>
                </div>

                <div className={`flex p-2 items-center h-[40px] bg-primary-200 rounded-lg lg:cursor-pointer`} onMouseEnter={() => mouseEnter("SiC")} onMouseLeave={mouseLeave}>
                    <SiC size="24px" className={`text-white ${skillActive === "SiC" ? "animate-pulse" : ""}`} />

                    <div className={`text-white duration-200 ${skillActive === "SiC" ? "w-[114px] pl-2 " : "w-0 "}`}>
                        <div className={`transition w-[114px] ease-in-out  ${skillActive === "SiC" ? " opacity-100 " : "w-0 opacity-0"}`}>
                            C Language
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex gap-4 mt-3">
                <div className={`flex items-center bg-primary-200 rounded-lg`} >
                    <SiMongodb size="24px" className={`z-10 p-2 h-[40px] w-[40px] text-white lg:cursor-pointer ${skillActive === "SiMongodb" ? "animate-pulse" : ""}`} onMouseEnter={() => mouseEnter("SiMongodb")} onMouseLeave={mouseLeave} />
                    <div className={`text-white duration-200 ${skillActive === "SiMongodb" ? "w-[92px] " : "w-0 "}`}>
                        <div className={`transition w-[92px] -z-50 ease-in-out  ${skillActive === "SiMongodb" ? " opacity-100 " : "w-0 opacity-0"}`}>
                            MongoDB
                        </div>
                    </div>
                </div>

                <div className={`flex items-center bg-primary-200 rounded-lg`} >
                    <SiExpress size="24px" className={`z-10 p-2 h-[40px] w-[40px] text-white lg:cursor-pointer ${skillActive === "SiExpress" ? "animate-pulse" : ""}`} onMouseEnter={() => mouseEnter("SiExpress")} onMouseLeave={mouseLeave} />
                    <div className={`text-white duration-200 ${skillActive === "SiExpress" ? "w-[100px]  " : "w-0 "}`}>
                        <div className={`transition w-[100px] -z-50 ease-in-out  ${skillActive === "SiExpress" ? " opacity-100 " : "w-0 opacity-0"}`}>
                            Express JS
                        </div>
                    </div>
                </div>

                <div className={`flex items-center bg-primary-200 rounded-lg`} >
                    <SiReact size="24px" className={`z-10 p-2 h-[40px] w-[40px] text-white lg:cursor-pointer ${skillActive === "SiReact" ? "animate-pulse" : ""}`} onMouseEnter={() => mouseEnter("SiReact")} onMouseLeave={mouseLeave} />
                    <div className={`text-white duration-200 ${skillActive === "SiReact" ? "w-[60px] " : "w-0 "}`}>
                        <div className={`transition w-[60px] -z-50 ease-in-out  ${skillActive === "SiReact" ? " opacity-100 " : "w-0 opacity-0"}`}>
                            React
                        </div>
                    </div>
                </div>

                <div className={`flex items-center bg-primary-200 rounded-lg`} >
                    <SiNodedotjs size="24px" className={`z-10 p-2 h-[40px] w-[40px] text-white lg:cursor-pointer ${skillActive === "SiNodedotjs" ? "animate-pulse" : ""}`} onMouseEnter={() => mouseEnter("SiNodedotjs")} onMouseLeave={mouseLeave} />
                    <div className={`text-white duration-200 ${skillActive === "SiNodedotjs" ? "w-[80px] " : "w-0 "}`}>
                        <div className={`transition w-[80px] -z-50 ease-in-out  ${skillActive === "SiNodedotjs" ? " opacity-100 " : "w-0 opacity-0"}`}>
                            Node JS
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 mt-3">
                <div className={`flex items-center bg-primary-200 rounded-lg`} >
                    <SiLaravel size="24px" className={`z-10 p-2 h-[40px] w-[40px] text-white lg:cursor-pointer ${skillActive === "SiLaravel" ? "animate-pulse" : ""}`} onMouseEnter={() => mouseEnter("SiLaravel")} onMouseLeave={mouseLeave} />
                    <div className={`text-white duration-200 ${skillActive === "SiLaravel" ? "w-[72px] " : "w-0 "}`}>
                        <div className={`transition w-[72px] -z-50 ease-in-out  ${skillActive === "SiLaravel" ? " opacity-100 " : "w-0 opacity-0"}`}>
                            Laravel
                        </div>
                    </div>
                </div>

                <div className={`flex items-center bg-primary-200 rounded-lg`} >
                    <SiMysql size="24px" className={`z-10 p-2 h-[40px] w-[40px] text-white lg:cursor-pointer ${skillActive === "SiMysql" ? "animate-pulse" : ""}`} onMouseEnter={() => mouseEnter("SiMysql")} onMouseLeave={mouseLeave} />
                    <div className={`text-white duration-200 ${skillActive === "SiMysql" ? "w-[120px] " : "w-0 "}`}>
                        <div className={`transition w-[120px] -z-50 ease-in-out  ${skillActive === "SiMysql" ? " opacity-100 " : "w-0 opacity-0"}`}>
                            MySql (basic)
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex gap-4 mt-3">
                <div className={`flex items-center bg-primary-200 rounded-lg`} >
                    <SiJava size="24px" className={`z-10 p-2 h-[40px] w-[40px] text-white lg:cursor-pointer ${skillActive === "SiJava" ? "animate-pulse" : ""}`} onMouseEnter={() => mouseEnter("SiJava")} onMouseLeave={mouseLeave} />
                    <div className={`text-white duration-200 ${skillActive === "SiJava" ? "w-[114px] " : "w-0 "}`}>
                        <div className={`transition w-[114px] -z-50 ease-in-out  ${skillActive === "SiJava" ? " opacity-100 " : "w-0 opacity-0"}`}>
                            Java (basic)
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex gap-4 mt-3">
                <div className={`flex items-center bg-primary-200 rounded-lg`} >
                    <SiVisualstudiocode size="24px" className={`z-10 p-2 h-[40px] w-[40px] text-white lg:cursor-pointer ${skillActive === "SiVisualstudiocode" ? "animate-pulse" : ""}`} onMouseEnter={() => mouseEnter("SiVisualstudiocode")} onMouseLeave={mouseLeave} />
                    <div className={`text-white duration-200 ${skillActive === "SiVisualstudiocode" ? "w-[164px] " : "w-0 "}`}>
                        <div className={`transition w-[164px] -z-50 ease-in-out  ${skillActive === "SiVisualstudiocode" ? " opacity-100 " : "w-0 opacity-0"}`}>
                            Visual Studio Code
                        </div>
                    </div>
                </div>

                <div className={`flex items-center bg-primary-200 rounded-lg`} >
                    <SiGithub size="24px" className={`z-10 p-2 h-[40px] w-[40px] text-white lg:cursor-pointer ${skillActive === "SiGithub" ? "animate-pulse" : ""}`} onMouseEnter={() => mouseEnter("SiGithub")} onMouseLeave={mouseLeave} />
                    <div className={`text-white duration-200 ${skillActive === "SiGithub" ? "w-[64px] " : "w-0 "}`}>
                        <div className={`transition w-[64px] -z-50 ease-in-out  ${skillActive === "SiGithub" ? " opacity-100 " : "w-0 opacity-0"}`}>
                            Github
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProgrammingSkills

