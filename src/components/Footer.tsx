import { MdMailOutline } from 'react-icons/md'
import { SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si'

function Footer() {
    return (
        <div className="flex flex-col justify-center items-center h-[200px] ">
            <div className="text-white text-24 lg:text-32 font-bold">
                Let's Create Awesome Things.
            </div>
            <div className="text-white w-full mt-2">
                <hr />
            </div>
            <div className="mt-4 flex w-full justify-between">
                <div className="text-primary-100 font-bold text-24 lg:text-32">
                    WH.
                </div>
                <div className="flex gap-4">
                    <a href="mailto:william28.office@gmail.com?subject=Work request" target="_blank">
                        <MdMailOutline size="30" className="text-white" /></a>
                    <a href="https://wa.me/6282177150569?text=Hello I'd would like to ask something" target="_blank">
                        <SiWhatsapp size="30" className="text-white" />
                    </a>
                    <a href="https://github.com/William2809" target="_blank">
                        <SiGithub size="30" className="text-white" />
                    </a>
                    <a href="https://www.linkedin.com/in/william-huang-4011251b1/" target="_blank">
                        <SiLinkedin size="30" className="text-white" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer