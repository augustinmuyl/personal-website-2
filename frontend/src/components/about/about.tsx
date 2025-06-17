import Background from "@/components/background/background";
import PFP from "../../../public/assets/pfp.jpeg";
import Image from "next/image";
import { styles } from "@/app/styles"

export default function About() {
    return (
        <Background>
            <div className="flex flex-col justify-center items-center gap-8 overflow-auto">
                <h1 className={styles.titleText}>About Me</h1>
                <div className="flex flex-col justify-center items-center gap-8 max-w-xl mx-auto px-6">
                    <Image
                        src={PFP}
                        alt="PFP"
                        className="rounded-full bg-white size-32 sm:size-42"
                    />
                    <p className={`${styles.bodyText} leading-7 tracking-wider`}>
                        Hi, I&#39;m Augustin, an undergraduate student at Boston University, where I&#39;m immersing myself in the rigorous world of Mathematics and Computer Science.
                        I have experience in full-stack development, especially using React.js/Next.js, Tailwind CSS, Flask/FastAPI, and SQL.
                        <br />
                        <br />Born to a French father and a Colombian mother, I’ve called six distinct places across North and South America, the Caribbean, and Europe home.
                        This multicultural upbringing has sharpened my adaptability and given me a nuanced perspective on global collaboration,
                        from which I bring a versatile toolkit forged by diverse experiences—and an unwavering passion for bridging cultures through technology.
                    </p>
                </div>
            </div>
        </Background>
    );
}
