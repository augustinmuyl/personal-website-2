import LinkedIn_Icon from "../../../public/assets/linkedin-logo.svg";
import GitHub_Icon from "../../../public/assets/github-logo.svg";
import Email_Icon from "../../../public/assets/email-icon.svg";

import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex gap-5 sm:gap-[30px]">
            <a href="/about">
                <Image
                    src={Email_Icon}
                    alt="Email"
                    className="invert w-6 lg:w-8 hover:scale-110 transition-all"
                />
            </a>
            <a
                href="https://www.github.com/augustinmuyl/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src={GitHub_Icon}
                    alt="GitHub"
                    className="invert w-6 lg:w-8 hover:scale-110 transition-all"
                />
            </a>
            <a
                href="https://www.linkedin.com/in/augustinmuyl/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src={LinkedIn_Icon}
                    alt="LinkedIn"
                    className="invert w-6 lg:w-8 hover:scale-110 transition-all"
                />
            </a>
        </div>
    );
}
