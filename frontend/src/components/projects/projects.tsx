"use client"

import Background from "../background/background";
import Tilt from "react-parallax-tilt";
import { motion } from "motion/react";
import Image from "next/image";

import Linkedin_Logo from "../../../public/assets/outreachoutlet_screenshot.png";

export default function Projects() {
    return (
        <Background>
            <div className="flex flex-col justify-center items-center gap-10">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl">Projects</h1>
                <div className="flex justify-center items-center">
                    <Tilt>
                        <a
                            href="https://www.outreachoutlet.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col text-white"
                        >
                            <motion.div
                                className="w-full p-8 border-2 bg-gradient-to-bl from-slate-800 to-slate-900 rounded-3xl shadow max-w-64 md:max-w-80 xl:max-w-96"
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.75,
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 10,
                                        },
                                    },
                                }}
                            >
                                <Image
                                    src={Linkedin_Logo}
                                    alt="OutreachOutlet"
                                    className="rounded-xl mb-6"
                                />
                                <h1 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold mb-0 sm:mb-[2px] md:mb-1 xl:mb-2">
                                    OutreachOutlet
                                </h1>
                                <p className="text-xs/5 sm:text-sm/6 md:text-base/7 xl:text-lg/7 tracking-wider">
                                    Web app that matches users with available
                                    volunteering opportunities aligned with their
                                    interests
                                </p>
                            </motion.div>
                        </a>
                    </Tilt>
                </div>
            </div>
        </Background>
    );
}
