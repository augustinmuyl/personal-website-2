"use client";

import Background from "../background/background";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

function ExperienceCard({ experience, index }) {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "rgb(15 23 42 / var(--tw-bg-opacity, 1))",
                borderRadius: "1.5rem",
                padding: "2rem",
                maxWidth: 425,
            }}
            contentArrowStyle={{ borderRight: "7px solid #232631" }}
            date={experience.date}
            dateClassName="min-[1170px]:mx-28"
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <em className="w-[55%] object-contain">
                        {experience.icon}
                    </em>
                </div>
            }
            iconClassName="bg-white"
        >
            <div>
                <h1 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold">
                    {experience.title}
                </h1>
                <p className="text-violet-200/50" style={{ margin: 0 }}>
                    {experience.company}
                </p>
            </div>

            <ul className="list-disc ml-5 tracking-wider text-white text-xs/5 sm:text-sm/6 md:text-base/7 xl:text-lg/7 mt-4 space-y-2">
                {experience.description.map((description, index) => (
                    <li key={index}>{description}</li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
}

export default function Experience() {
    const sectionRef = useRef(null);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    const isInView = useInView(sectionRef, {
        triggerOnce: true,
        amount: 0.8,
    });

    useEffect(() => {
        if (isInView && !hasBeenVisible) {
            setHasBeenVisible(true);
        }
    }, [isInView, hasBeenVisible]);

    return (
        <Background>
            <div className="flex flex-col justify-center items-center gap-8 w-full overflow-auto">
                <motion.h1
                ref={sectionRef}
                id="experience"
                className={`scroll-mt-24 mt-16  flex justify-center items-center pt-36 pb-10 sm:pb-12 md:pb-14 xl:pb-20 text-2xl sm:text-3xl lg:text-4xl`}
                initial="hidden"
                animate={hasBeenVisible ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                    },
                }}
            >
                Experience
            </motion.h1>
            <VerticalTimeline>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        experience={experience}
                        key={index}
                    ></ExperienceCard>
                ))}
            </VerticalTimeline>
            </div>
        </Background>
    );
}
