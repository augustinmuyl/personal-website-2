"use client";

import { useState, useEffect, useRef } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const listRef = useRef(null);

    useEffect(() => {
        const list = listRef.current;
        if (!list) return;

        const outsideClick = () => {
            setIsMenuOpen(false);
        };

        document.addEventListener("click", outsideClick);

        return () => {
            document.removeEventListener("click", outsideClick);
        };
    });

    const toggleMenu = (e) => {
        e.stopPropagation();
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div className="flex justify-end lg:justify-between items-center">
            {/* Mobile */}
            <button onClick={toggleMenu} className="lg:hidden">
                <img
                    src={
                        isMenuOpen
                            ? "https://cdn3.iconfinder.com/data/icons/minimal-website-ui-kit/100/ld_menu_open-512.png"
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
                    }
                    alt="Menu"
                    className="invert size-8 transition-all"
                />
            </button>
            <div
                ref={listRef}
                className={`${
                    isMenuOpen ? "" : "hidden"
                } absolute right-6 top-22 flex flex-col items-center w-fit h-fit p-6 border bg-black rounded-4xl lg:hidden`}
            >
                <a href="/about" className="hover:text-gray-400 transition-all">
                    About
                </a>
                <a
                    href="/experience"
                    className="hover:text-gray-400 transition-all"
                >
                    Experience
                </a>
                <a
                    href="/projects"
                    className="hover:text-gray-400 transition-all"
                >
                    Projects
                </a>
                <a
                    href="/contact"
                    className="hover:text-gray-400 transition-all"
                >
                    Contact
                </a>
            </div>

            {/* Large Screens */}
            <a
                href="/about"
                className="hidden lg:block hover:text-gray-400 transition-all"
            >
                About
            </a>
            <a
                href="/experience"
                className="hidden lg:block hover:text-gray-400 transition-all"
            >
                Experience
            </a>
            <a
                href="/projects"
                className="hidden lg:block hover:text-gray-400 transition-all"
            >
                Projects
            </a>
            <a
                href="/contact"
                className="hidden lg:block hover:text-gray-400 transition-all"
            >
                Contact
            </a>
        </div>
    );
}
