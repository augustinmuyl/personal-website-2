"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { Flame, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                (buttonRef.current &&
                    buttonRef.current.contains(event.target as Node)) ||
                !isMenuOpen
            ) {
                return;
            }

            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    const toggleMenu = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMenuOpen((prev) => !prev);
    };

    const isActive = (path: string) => {
        if (!mounted) return false;
        return pathname === path;
    };

    const getLinkStyle = (path: string) => {
        return isActive(path)
            ? "hover:brightness-75 transition-all font-medium underline"
            : "hover:brightness-75 transition-all";
    };

    return (
        <div className="flex justify-between items-center">
            {/* Mobile */}
            <Link
                href="/"
                className="md:hidden hover:brightness-75 transition-all bg-gradient-to-r from-[#6454F0] to-[#6EE2F5] bg-clip-text text-transparent"
            >
                AM
            </Link>
            <motion.button
                ref={buttonRef}
                onClick={toggleMenu}
                className="md:hidden text-white absolute right-10 top-12 z-50"
                whileTap={{ rotate: 180 }}
            >
                {isMenuOpen ? <X size={32}/> : <Menu size={32}/>}
            </motion.button>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.5 }}
                        className="md:hidden text-white text-2xl fixed left-0 top-0 w-full h-screen bg-[rgba(0,0,0,0.8)] z-20 overflow-hidden flex flex-col justify-center items-center z-40"
                    >
                        <motion.p
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.5, delay: 0.25 }}
                            className="md:hidden hover:opacity-85"
                        >
                            <Link href="/about" className={getLinkStyle("/about")}>
                                About
                            </Link>
                        </motion.p>
                        <motion.p
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.5, delay: 0.25 }}
                            className="md:hidden mt-12 hover:opacity-85"
                        >
                            <Link
                                href="/experience"
                                className={getLinkStyle("/experience")}
                            >
                                Experience
                            </Link>
                        </motion.p>
                        <motion.p
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.5, delay: 0.5 }}
                            className="md:hidden mt-12 hover:opacity-85"
                        >
                            <Link href="/projects" className={getLinkStyle("/projects")}>
                                Projects
                            </Link>
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Large Screens */}
            <Link
                href="/"
                className="hidden md:block hover:brightness-75 transition-all bg-gradient-to-r from-[#6454F0] to-[#6EE2F5] bg-clip-text text-transparent"
            >
                AM
            </Link>
            <Link
                href="/about"
                className={`hidden md:block ${getLinkStyle("/about")}`}
            >
                About
            </Link>
            <Link
                href="/experience"
                className={`hidden md:block ${getLinkStyle("/experience")}`}
            >
                Experience
            </Link>
            <Link
                href="/projects"
                className={`hidden md:block ${getLinkStyle("/projects")}`}
            >
                Projects
            </Link>
        </div>
    );
}
