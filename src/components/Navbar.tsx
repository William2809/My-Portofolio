import { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom"
import useWindowDimensions from "../hooks/useWindowDimensions"

function Navbar({ children }: any) {
    const { height, width } = useWindowDimensions();
    const [openNav, setOpenNav] = useState(false);

    const navLink = [
        { text: "Services", link: "#services" },
        { text: "Skills", link: "#skills" },
        { text: "work", link: "#work" },
    ]

    const resetNav = () => {
        setOpenNav(false);
    }

    // useEffect(() => {
    //   if(width >= 640 && openNav){

    //   }
    //   return () => {

    //   }
    // }, [width])

    if (width >= 640 && openNav) {
        resetNav();
    }

    return (

        <div className={`flex items-center justify-between h-[80px] bg-background-100 relative`}>
            <div className="text-white font-bold text-20 ml-[20px]">
                <a href="#about" onClick={resetNav}>WH.</a>
            </div>
            <div className={`absolute sm:static sm:flex gap-3 -z-10 sm:z-0 w-full sm:w-max h-max  text-white transition-all ease-in duration-500  ${openNav ? "top-[80px]  bg-base " : "top-[-400px]"}`}>
                {navLink.map((navItem: any, index) => (
                    <a key={index} className="text-16 flex pl-5 sm:pl-0  sm:justify-center items-center h-[40px] w-full sm:w-[110px] sm:rounded-xl hover:bg-primary-200 duration-200" href={navItem.link} onClick={resetNav}>{navItem.text}</a>
                ))}
                <a className="text-16 text-primary-100 sm:text-white flex pl-5 sm:pl-0 sm:justify-center items-center h-[40px] w-full sm:w-[110px] sm:rounded-xl sm:bg-primary-100 hover:text-white hover:bg-primary-100 sm:hover:bg-primary-200 duration-200" href="mailto:william28.office@gmail.com?subject=Work request" target="_blank" onClick={resetNav}>Contact</a>
            </div>
            {openNav ?
                <MdClose size="32" className="sm:hidden text-white absolute right-0 m-1 mr-[20px]" onClick={() => setOpenNav(!openNav)} />
                :
                <MdMenu size="32" className="sm:hidden text-white absolute right-0 m-1 mr-[20px]" onClick={() => setOpenNav(!openNav)} />
            }
            {/* https://www.youtube.com/watch?v=74ys-dT94mA */}
        </div>
    )
}

export default Navbar