'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import bannerImg from '../assets/bg.jpg';

const icons = [
    {
        name: 'Javascript',
        icon: RiJavascriptFill,
    },
    {
        name: 'React',
        icon: FaReact,
    },
    {
        name: 'Next.js',
        icon: TbBrandNextjs,
    },
    {
        name: 'Typescript',
        icon: BiLogoTypescript,
    },
];
const Banner = () => {
    const [showDeveloper, setShowDeveloper] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowDeveloper((prev) => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative h-[60vh] md:h-screen place-items-start items-center bg-cover overflow-hidden"
            style={{ backgroundImage: `url(${bannerImg.src})` }}
        >
            <div className="flex justify-center w-full">
                <div className="text-center mt-52">
                    <h1 className="text-3xl md:text-7xl font-medium">Welcome!</h1>
                    <p className="text-xl md:text-4xl font-medium mt-4 mb-2">I am </p>
                    <div className="text-2xl md:text-6xl font-medium ">
                        <AnimatePresence>
                            <motion.div
                                key={showDeveloper ? 'developer' : 'name'}
                                initial={{ opacity: 0, x: -300 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, type: 'spring', mess: 4 }}
                            >
                                <p className="text-center text-[#c49b66]">
                                    {showDeveloper ? 'A Web Developer' : 'Shakil Khan'}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-6 justify-center items-center mt-4 bg-white/5 rounded-lg px-2 py-1 w-2/3 md:w-1/5 mx-auto ">
                {icons.map((item, index) => (
                    <div key={index} className="flex flex-col justify-center items-center ">
                        <item.icon size={25} />
                        {/* <p className="text-xs">{item.name}</p> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Banner;
