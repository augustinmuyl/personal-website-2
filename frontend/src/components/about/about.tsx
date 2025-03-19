import Background from "@/components/background/background";
import PFP from "../../../public/assets/pfp.jpeg";
import Image from "next/image";

export default function About() {
    return (
        <Background>
            <div className="flex flex-col justify-center items-center gap-8">
                <h1 className="text-3xl lg:text-4xl">About Me</h1>
                <div className="flex flex-col justify-center items-center gap-8 mx-10 lg:max-w-3/8">
                    <Image
                        src={PFP}
                        alt="globe"
                        className="rounded-full bg-white size-42"
                    />
                    <p className="text-xs leading-7 tracking-wider">
                        I’m a Mathematics and Computer Science student at Boston
                        University with a background in full-stack development,
                        especially using React (Next.js), Tailwind CSS, Flask,
                        MongoDB, and PostgreSQL.
                        <br />
                        <br />I am passionate about web development an its
                        intersection with social impact.
                    </p>
                </div>
            </div>
        </Background>
    );
}
