import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom"
import useWindowDimensions from "../hooks/useWindowDimensions"

function Navbar({ children }: any) {
    const { height, width } = useWindowDimensions();
    return (
        <div className="flex justify-between items-center h-[80px]">

            <div className="text-white font-bold text-20 ">
                WH.
            </div>
            {width > 640 &&
                (<div className="flex gap-3 text-white">
                    <a className="text-16 flex justify-center items-center h-[40px] w-[110px] rounded-xl hover:bg-primary-200 duration-200" href="#about">About</a>
                    <a className="text-16 flex justify-center items-center h-[40px] w-[110px] rounded-xl hover:bg-primary-200 duration-200" href="#skills">Skills</a>
                    <a className="text-16 flex justify-center items-center h-[40px] w-[110px] rounded-xl hover:bg-primary-200 duration-200" href="#work">Work</a>
                    <a className="text-16 flex justify-center items-center h-[40px] w-[110px] rounded-xl bg-primary-100 hover:bg-primary-200 duration-200" href="mailto:william28.office@gmail.com?subject=Work request" target="_blank">Contact</a>
                </div>)
            }
            {width <= 640 &&
                <div>
                    <MdMenu size="32" className="text-white"></MdMenu>

                </div>
            }
        </div>
    )
}

export default Navbar