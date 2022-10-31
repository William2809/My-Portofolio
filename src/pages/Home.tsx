import Email from '../assets/email.svg';
import Whatsapp from '../assets/whatsapp.svg';
import Github from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';
import { MdMonitor, MdOutlineAod, MdOutlineFileDownload } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";
import useWindowDimensions from '../hooks/useWindowDimensions';
import profil from '../assets/profil-pict.png';
import tailwind from '../assets/tailwind-logo.svg';
import laravel from '../assets/laravel-logo.svg';
import react from '../assets/react-logo.svg';
import nodejs from '../assets/nodejs-logo.svg';
import ProgrammingSkills from '../components/home/ProgrammingSkills';
import DesignSkills from '../components/home/DesignSkills';
import MyProjects from '../components/home/MyProjects';
import MyServices from '../components/home/MyServices';




function Home() {

    const { width } = useWindowDimensions();


    return (
        <div >
            {/* Section 1 */}
            <div id="about" className={`pt-2 sm:pt-[40px] w-full md:flex md:flex-row-reverse md:justify-between items-center`}>
                <div>
                    <div className={`${width > 640 ? "flex justify-center" : ""}`}>


                        {width > 640 &&
                            <div className="flex flex-col justify-between py-20 px-5">
                                <div>
                                    <img src={tailwind} alt="" />
                                </div>
                                <div>
                                    <img src={laravel} alt="" />
                                </div>

                            </div>}

                        <div className="flex justify-center bg-photo rounded-[20px] pt-5 px-2 h-[240px] sm:h-[500px] md:h-[360px] xl:h-[500px]">
                            <img className="h-[220px] sm:h-[480px] md:h-[340px] xl:h-[480px]" src={profil} alt="" />

                        </div>
                        {width > 640 &&
                            <div className="flex flex-col justify-between py-20 px-5" >
                                <div>
                                    <img src={react} alt="" />
                                </div>
                                <div>
                                    <img src={nodejs} alt="" />
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className={` ${width > 640 ? "w-[300px]" : ""} ${width > 900 ? "w-[400px]" : ""} ${width > 1024 ? "w-[500px]" : ""} ${width > 1200 ? "w-[670px]" : ""}`}>
                    <div className="mt-6 md:mt-0">
                        <div className="text-primary-100 text-20 lg:text-24 font-bold">
                            Hello, I'm William Huang
                        </div>
                        <div className="text-white text-36 lg:text-42 font-bold mt-2 sm:mt-6">
                            UI/UX Designer and Front-End Developer.
                        </div>
                        <div className="text-neutral-100 text- mt-2 md:mt-6">
                            I'm a Computer Science student in BINUS University Indonesia. I have been working on school and independent project as a UI/UX designer and front-end developer for one year. Currently I'm looking forward to gain experiences from collaborating with you!
                        </div>
                        <div className="flex font-normal gap-[32px] xl:gap-[40px] mt-6">
                            <a href="mailto:william28.office@gmail.com?subject=Work request">
                                <div className="flex gap-2 items-center">
                                    <img src={Email} alt="email" />
                                    {width > 1024 &&
                                        <div className="text-primary-100 font-normal">
                                            Email
                                        </div>}
                                </div>
                            </a>
                            <a href="https://wa.me/6282177150569?text=Hello I'd would like to ask something" target="_blank">
                                <div className="flex gap-2 items-center">
                                    <img src={Whatsapp} alt="whatsapp" />
                                    {width > 1024 &&
                                        <div className="text-whatsapp ">
                                            Whatsapp
                                        </div>}
                                </div>
                            </a>
                            <a href="https://github.com/William2809" target="_blank">
                                <div className="flex gap-2 items-center">
                                    <img src={Github} alt="github" />
                                    {width > 1024 &&
                                        <div className="text-white ">
                                            Github
                                        </div>}
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/william-huang-4011251b1/" target="_blank">
                                <div className="flex gap-2 items-center">
                                    <img src={Linkedin} alt="linkedin" />
                                    {width > 1024 &&
                                        <div className="text-linkedin ">
                                            Linked In
                                        </div>}
                                </div>
                            </a>
                        </div>
                        {/* CV not available yet */}
                        {/* <div className="flex gap-2 mt-6">
                            <MdOutlineFileDownload size="24" className="text-white"></MdOutlineFileDownload>
                            <div className="underline text-white">
                                Download CV
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>


            {/* section 2 */}
            <MyServices />

            {/* section 3 */}
            <div id="skills" className="pt-[100px]">
                <div className="text-white text-32 font-bold">
                    My Skills
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-between max-w-4xl">
                    <ProgrammingSkills />
                    <DesignSkills />
                    <div>
                        <div className="text-24 text-primary-100 font-semibold">
                            Language
                        </div>
                        <div className="mt-2 text-neutral-100 font-semibold text-18">
                            <div>
                                Indonesia - <span className="text-primarywl">native</span>
                            </div>
                            <div>
                                English - <span className="text-primarywl">fluent</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Section 4 */}
            <div id="work">
                <MyProjects />
            </div>

        </div>
    )
}

export default Home