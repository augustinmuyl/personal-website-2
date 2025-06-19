"use client";

import Background from "../background/background";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//import { StaticImageData } from "next/image";
import { experiences } from "../../constants";
import { styles } from "@/app/styles";

//type Experience = {
//    title: string,
//        company: string,
//        date: string,
//        icon: any,
//        description: Array<string>
//}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ExperienceCard({ experience }: { experience: any }) {
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
                <h1 className="text-lg sm:text-xl lg:text-2xl">
                    {experience.title}
                </h1>
                <p className="text-violet-200/60" style={{ margin: 0 }}>
                    {experience.company}
                </p>
            </div>

            <ul className={`${styles.bodyText} leading-5 md:leading-6 lg:leading-7 list-disc ml-5 tracking-wider mt-4 space-y-2`}>
                {experience.description.map((description: Array<string>, index: number) => (
                    <li key={index}>{description}</li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
}

export default function Experience() {
    return (
        <Background>
            <div className="flex flex-col justify-center items-center gap-8 w-full overflow-auto">
                <h1 className={styles.titleText}>Experience</h1>
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
