import React from 'react'
import { BiCodeBlock } from 'react-icons/bi'
import { MdOutlineAod, MdMonitor } from 'react-icons/md'
import useWindowDimensions from '../../hooks/useWindowDimensions';

function MyServices() {
    const { width } = useWindowDimensions();

    return (
        <div>
            {width < 768 && <div className="mt-[100px]">
                <div className="text-white text-32 font-bold">
                    My Services
                </div>
                <div className="mt-6 flex flex-col gap-8">
                    <div className="flex flex-col justify-center items-center bg-base rounded-[20px] w-full h-[280px] gap-4 p-6 text-center">
                        <div className="text-primary-100 text-24 font-bold">
                            Application Design
                        </div>
                        <div>
                            <MdOutlineAod size={`${width > 640 ? "72px" : "56px"}`} className="text-neutral-200"></MdOutlineAod>
                        </div>
                        <div className="text-14 font-light  text-neutral-200">
                            Building an application design that looks more professional than the competition. An application that can boost the users engagement.
                        </div>
                    </div>


                    <div className="flex flex-col justify-center items-center bg-base rounded-[20px] w-full h-[280px] gap-4 p-6 text-center">
                        <div className="text-primary-100 text-24 font-bold">
                            Websign Design
                        </div>
                        <div>
                            <MdMonitor size={`${width > 640 ? "72px" : "56px"}`} className="text-neutral-200"></MdMonitor>
                        </div>
                        <div className="text-14 font-light  text-neutral-200">
                            Design website layouts that fit your business in a professional and faithful way in development with fully customize design.
                        </div>
                    </div>


                    <div className="flex flex-col justify-center items-center bg-base rounded-[20px] w-full h-[280px] gap-4 p-6 text-center">
                        <div className="text-primary-100 text-24 font-bold">
                            Front-end Development
                        </div>
                        <div>
                            <BiCodeBlock size={`${width > 640 ? "72px" : "56px"}`} className="text-neutral-200"></BiCodeBlock>
                        </div>
                        <div className="text-14 font-light text-neutral-200">
                            Implementing a website framework to your website using Laravel or React JS with fully responsive web page design.
                        </div>
                    </div>
                </div>
            </div>}





            {width >= 768 && <div className="mt-[100px]">
                <div className="text-white text-32 font-bold">
                    My Services
                </div>
                <div className=" mt-[24px] flex flex-row gap-8 h-[400px] lg:h-[280px] text-center">
                    <div className="group relative w-full cursor-pointer">
                        <div className="absolute flex flex-col justify-center items-center bg-base rounded-[20px] h-full gap-4 p-6  ">
                            <div className="text-primary-100 text-24 font-bold md:translate-y-[80%] lg:translate-y-[150%] group-hover:translate-y-0 transition-transform">
                                Application Design
                            </div>
                            <div className="translate-y-[80%] group-hover:translate-y-0 transition-transform">
                                <MdOutlineAod size="72px" className="text-neutral-200"></MdOutlineAod>
                            </div>
                            <div className="text-14 font-light h-[160px] lg:h-[84px] text-neutral-200 translate-y-[40%] opacity-0 group-hover:translate-y-0 transition-all group-hover:opacity-100">
                                Building an application design that looks more professional than the competition. An application that can boost the users engagement.
                            </div>
                        </div>
                    </div>

                    <div className="group relative w-full cursor-pointer">
                        <div className="absolute flex flex-col justify-center items-center bg-base rounded-[20px] h-full gap-4 p-6  ">
                            <div className="text-primary-100 text-24 font-bold md:translate-y-[80%] lg:translate-y-[150%] group-hover:translate-y-0 transition-transform">
                                Website Design
                            </div>
                            <div className="translate-y-[80%] group-hover:translate-y-0 transition-transform">
                                <MdMonitor size={`${width > 640 ? "72px" : "56px"}`} className="text-neutral-200"></MdMonitor>
                            </div>
                            <div className="text-14 font-light h-[160px] lg:h-[84px] text-neutral-200 translate-y-[40%] opacity-0 group-hover:translate-y-0 transition-all group-hover:opacity-100">
                                Design website layouts that fit your business in a professional and faithful way in development with fully customize design.
                            </div>
                        </div>
                    </div>

                    <div className="group relative w-full cursor-pointer">
                        <div className="absolute flex flex-col justify-center items-center bg-base rounded-[20px] h-full gap-4 p-6  ">
                            <div className="text-primary-100 text-24 font-bold md:translate-y-[80%] lg:translate-y-[150%] group-hover:translate-y-0 transition-transform">
                                Front-end Dev
                            </div>
                            <div className="translate-y-[80%] group-hover:translate-y-0 transition-transform">
                                <BiCodeBlock size={`${width > 640 ? "72px" : "56px"}`} className="text-neutral-200"></BiCodeBlock>
                            </div>
                            <div className="text-14 font-light h-[160px] lg:h-[84px] text-neutral-200 translate-y-[40%] opacity-0 group-hover:translate-y-0 transition-all group-hover:opacity-100">
                                Implementing a website framework to your website using Laravel or React JS with fully responsive web page design.
                            </div>
                        </div>
                    </div>

                </div>
            </div>}
        </div>
    )
}

export default MyServices