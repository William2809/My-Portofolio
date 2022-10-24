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
                    <Link className="text-16 flex justify-center items-center h-[40px] w-[110px] rounded-xl hover:bg-primary-200 duration-200" to="about">About</Link>
                    <Link className="text-16 flex justify-center items-center h-[40px] w-[110px] rounded-xl hover:bg-primary-200 duration-200" to="about">Work</Link>
                    <Link className="text-16 flex justify-center items-center h-[40px] w-[110px] rounded-xl bg-primary-100 hover:bg-primary-200 duration-200" to="about">Contact</Link>
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