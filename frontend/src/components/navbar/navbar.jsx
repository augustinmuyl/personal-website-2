"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                (buttonRef.current &&
                    buttonRef.current.contains(event.target)) ||
                !isMenuOpen
            ) {
                return;
            }

            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    const toggleMenu = (e) => {
        e.stopPropagation();
        setIsMenuOpen((prev) => !prev);
    };

    const isActive = (path) => {
        if (!mounted) return false;
        return pathname === path;
    };

    const getLinkStyle = (path) => {
        return isActive(path)
            ? "hover:brightness-75 transition-all font-medium underline"
            : "hover:brightness-75 transition-all";
    };

    return (
        <div className="flex justify-between lg:justify-between items-center">
            {/* Mobile */}
            <a
                href="/"
                className="lg:hidden hover:brightness-75 transition-all bg-gradient-to-r from-[#6454F0] to-[#6EE2F5] bg-clip-text text-transparent"
            >
                AM
            </a>
            <motion.button
                ref={buttonRef}
                onClick={toggleMenu}
                className="lg:hidden"
                whileTap={{ rotate: 180 }}
            >
                <img
                    src={
                        isMenuOpen
                            ? "https://cdn3.iconfinder.com/data/icons/minimal-website-ui-kit/100/ld_menu_open-512.png"
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
                    }
                    alt="Menu"
                    className="invert size-8 transition-all"
                />
            </motion.button>
            <div
                ref={menuRef}
                className={`${
                    isMenuOpen ? "" : "hidden"
                } absolute right-6 top-22 flex flex-col items-center w-fit h-fit p-6 border bg-black rounded-4xl lg:hidden`}
            >
                <a href="/about" className={getLinkStyle("/about")}>
                    About
                </a>
                <a href="/experience" className={getLinkStyle("/experience")}>
                    Experience
                </a>
                <a href="/projects" className={getLinkStyle("/projects")}>
                    Projects
                </a>
            </div>

            {/* Large Screens */}
            <a
                href="/"
                className="hidden lg:block hover:brightness-75 transition-all bg-gradient-to-r from-[#6454F0] to-[#6EE2F5] bg-clip-text text-transparent"
            >
                AM
            </a>
            <a
                href="/about"
                className={`hidden lg:block ${getLinkStyle("/about")}`}
            >
                About
            </a>
            <a
                href="/experience"
                className={`hidden lg:block ${getLinkStyle("/experience")}`}
            >
                Experience
            </a>
            <a
                href="/projects"
                className={`hidden lg:block ${getLinkStyle("/projects")}`}
            >
                Projects
            </a>
        </div>
    );
}
