"use client"

import Background from "../background/background";
import Tilt from "react-parallax-tilt";
import { motion } from "motion/react";
import Image from "next/image";

import OutreachOutlet from "../../../public/assets/outreachoutlet_screenshot.png";
import TwinLight from "../../../public/assets/twinlight_screenshot.png";
import { styles } from "@/app/styles";

export default function Projects() {
    return (
        <Background>
            <div className="flex flex-col justify-center items-center gap-10">
                <h1 className={styles.titleText}>Projects</h1>
                <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10">
                    <Tilt>
                        <a
                            href="https://www.outreachoutlet.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col text-white"
                        >
                            <motion.div
                                className="w-full p-8 border bg-gradient-to-bl from-slate-800 to-slate-900 rounded-3xl shadow max-w-64 md:max-w-80 xl:max-w-96"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.75,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 10,
                                        delay: 0.6
                                    }
                                }}
                            >
                                <Image
                                    src={OutreachOutlet}
                                    alt="OutreachOutlet"
                                    className="rounded-xl mb-3 sm:mb-4 lg:mb-5"
                                />
                                <h1 className="text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-[2px] md:mb-1 xl:mb-2">
                                    OutreachOutlet
                                </h1>
                                <p className={`${styles.bodyText} leading-5 md:leading-6 lg:leading-7 tracking-wider`}>
                                    Web app that matches users with available
                                    volunteering opportunities aligned with their
                                    interests
                                </p>
                            </motion.div>
                        </a>
                    </Tilt>
                    <Tilt>
                        <a
                            href="https://www.twinlight.xyz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col text-white"
                        >
                            <motion.div
                                className="w-full p-8 border bg-gradient-to-bl from-slate-800 to-slate-900 rounded-3xl shadow max-w-64 md:max-w-80 xl:max-w-96"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.75,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 10,
                                        delay: 0.3
                                    }
                                }}
                            >
                                <Image
                                    src={TwinLight}
                                    alt="OutreachOutlet"
                                    className="rounded-xl mb-3 sm:mb-4 lg:mb-5"
                                />
                                <h1 className="text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-[2px] md:mb-1 xl:mb-2">
                                    TwinLight
                                </h1>
                                <p className="text-[10px] sm:text-xs lg:text-sm leading-5 md:leading-6 lg:leading-7 tracking-wider">
                                    Web app that displays sunrise and sunset times,
                                    along with a location that has matching solar schedules
                                </p>
                            </motion.div>
                        </a>
                    </Tilt>
                </div>
            </div>
        </Background>
    );
}
