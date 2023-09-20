import React from 'react'
import { Link } from "react-router-dom";
import SearchCompo from './SearchCompo';
import logo from '../assets/1.avif'


const BannerCompo = () => {
    return (
        <>
            <section className=" relative w-screen bg-gray-800 text-gray-100 overflow-x-hidden">
                <img src={logo} alt='logo' className=' absolute z-0 object-cover h-full w-full' />
                <div className=" w-4/5 relative z-10 container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className=" overflow-hidden flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                            TAKING <span className="text-violet-400">HUMANS</span> TO
                            SPACE
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">
                            In 2020, SpaceX returned America’s ability to fly NASA astronauts
                            to and from the International Space Station on American vehicles
                            for the first time since 2011.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link

                                to="/"
                                className="hover:scale-105 hover:border border hover:bg-gray-800 hover:text-gray-100 hover:border-gray-100 transition-all ease-in-out px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
                            >
                                Learn More
                            </Link>
                            <Link
                                href="/"
                                className="hover:scale-105 hover:border hover:bg-violet-400 hover:text-gray-100 hover:border-gray-100 transition-all ease-in-out px-8 py-3 text-lg font-semibold rounded  text-gray-100 border "
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
            <SearchCompo />
        </>
    )
}

export default BannerCompo