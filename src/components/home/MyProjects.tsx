import React from 'react'
import { MdArrowForward } from 'react-icons/md'
import { SiExpress, SiFigma, SiGithub, SiLaravel, SiMongodb, SiMysql, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si'
import weeblistv2 from '../../assets/weeblistv2-preview.svg'
import linkco from '../../assets/link-co-preview.svg'
import weeblist from '../../assets/weeblist-preview.svg'
import { Link } from 'react-router-dom'

function MyProjects() {
    return (
        <div className="pt-[100px]">
            <div className="text-white text-32 font-bold">
                Some of My Projects
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-8">
                <a className="group w-full  min-w-[360px] max-w-[600px]" href="https://weeb-list-v2.vercel.app/" target="_blank">
                    <div>
                        <div className="p-3 relative flex bg-base rounded-2xl ">
                            <img className="rounded-lg w-full group-hover:opacity-0 duration-300" src={weeblistv2} alt="weeblistv2" />
                            <div className="absolute top-0 left-0 flex w-full h-full justify-center items-center opacity-0 group-hover:opacity-100 group-hover:text-white duration-300 text-16">
                                <div>
                                    <div className="font-bold text-center">
                                        Made with
                                    </div>
                                    <div className="font-medium md:mt-3 md:flex md:flex-col md:gap-3">
                                        <div className="flex items-center gap-2">
                                            <SiMongodb size="32px" />
                                            <div>
                                                MongoDB
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <SiExpress size="32px" />
                                            <div>
                                                Express JS
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <SiReact size="32px" />
                                            <div>
                                                React Js
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <SiNodedotjs size="32px" />
                                            <div>
                                                Node Js
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <SiTailwindcss size="32px" />
                                            <div>
                                                Tailwind CSS
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <SiFigma size="32px" />
                                            <div>
                                                Figma
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://github.com/William2809/weeb-list-v2" target="_blank">
                                        <div className="mt-2 md:mt-5 flex font-normal gap-2 items-center">
                                            <SiGithub size="28px" className="text-primary-100" />
                                            <div className="underline text-primary-100 text-18 ">Github Repositories</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 flex justify-between">
                            <div className="flex flex-col gap-1">
                                <div className="text-20  sm:text-32 font-bold text-primary-100">
                                    Anime Streaming Website
                                </div>
                                <div className="text-16 sm:text-18 text-white font-bold">
                                    Website Application
                                </div>
                            </div>
                            <div className="flex items-center">
                                <MdArrowForward size="52px" className="text-white duration-300 group-hover:text-primary-100 group-hover:scale-125" />
                            </div>
                        </div>
                    </div>
                </a>
                <Link to="/" className="group w-full  min-w-[360px] max-w-[600px]">
                    <div>
                        <div className="p-3 relative flex bg-base rounded-2xl ">
                            <img className="rounded-lg w-full group-hover:opacity-0 duration-300" src={linkco} alt="weeblistv2" />
                            <div className="absolute top-0 left-0 flex w-full h-full justify-center items-center opacity-0 group-hover:opacity-100 group-hover:text-white duration-300 text-24">
                                <div>
                                    <div className="font-bold text-center">
                                        Made with
                                    </div>
                                    <div className="font-medium mt-3 md:flex md:flex-col md:gap-3">
                                        <div className="flex items-center gap-2">
                                            <SiLaravel size="32px" />
                                            <div>
                                                Laravel
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <SiMysql size="32px" />
                                            <div>
                                                MySql
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <SiTailwindcss size="32px" />
                                            <div>
                                                Tailwind CSS
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <SiFigma size="32px" />
                                            <div>
                                                Figma
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://github.com/William2809/LinkCo" target="_blank">
                                        <div className="mt-5 flex font-normal gap-2 items-center">
                                            <SiGithub size="28px" className="text-primary-100" />
                                            <div className="underline text-primary-100 text-18 ">Github Repositories</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 flex justify-between">
                            <div className="flex flex-col gap-1">
                                <div className="text-20  sm:text-32 font-bold text-primary-100">
                                    Social Media for Business
                                </div>
                                <div className="text-16 sm:text-18 text-white font-bold">
                                    Website Application
                                </div>
                            </div>
                            <div className="flex items-center">
                                <MdArrowForward size="52px" className="text-white duration-300 group-hover:text-primary-100 group-hover:scale-125" />
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/" className="group w-full  min-w-[360px] max-w-[600px]">
                    <div>
                        <div className="p-3 relative flex bg-base rounded-2xl ">
                            <img className="rounded-lg w-full group-hover:opacity-0 duration-300" src={weeblist} alt="weeblistv2" />
                            <div className="absolute top-0 left-0 flex w-full h-full justify-center items-center opacity-0 group-hover:opacity-100 group-hover:text-white duration-300 text-24">
                                <div>
                                    <div className="font-bold text-center">
                                        Made with
                                    </div>
                                    <div className="font-medium mt-3">
                                        <div className="flex items-center gap-2">
                                            <SiFigma size="32px" />
                                            <div>
                                                Figma
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 flex justify-between">
                            <div className="flex flex-col gap-1">
                                <div className="text-20  sm:text-32 font-bold text-primary-100">
                                    Anime Watchlist Website
                                </div>
                                <div className="text-16 sm:text-18 text-white font-bold">
                                    Website Design
                                </div>
                            </div>
                            <div className="flex items-center">
                                <MdArrowForward size="52px" className="text-white duration-300 group-hover:text-primary-100 group-hover:scale-125" />
                            </div>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default MyProjects