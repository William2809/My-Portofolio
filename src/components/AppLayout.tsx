import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function AppLayout({ children }: any) {
    return (
        <div className=''>

            <div className="bg-background-100 flex font-montserrat justify-center sticky top-0 z-50 w-full">
                <div className="w-full max-w-[1600px]  sm:mx-[40px] xl:mx-[100px]">
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="bg-background-100 flex font-montserrat justify-center ">
                <div className="w-full max-w-[1600px] mx-[20px] sm:mx-[40px] xl:mx-[100px] mb-8">

                    {children}
                </div>
            </div>
            <div className="bg-base flex font-montserrat justify-center">
                <div className="w-full max-w-[1600px] mx-[20px] sm:mx-[40px] xl:mx-[100px]">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default AppLayout