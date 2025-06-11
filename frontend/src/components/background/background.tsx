"use client"

import { ReactNode } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { motion } from "motion/react"

export default function Background({ children }: { children: ReactNode }) {
    return (
        <div className="h-screen p-6">
            <motion.div
                className="border h-full flex flex-col overflow-hidden"
                style={{
                    background: "radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to))"
                }}
                animate={{
                    "--tw-gradient-from": ["#0F172A", "#19213b", "#222b4a"]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
            >
                <div className="p-10 md:mx-28 lg:mx-50 z-10 relative shrink-0">
                    <Navbar />
                </div>
                <main className="flex-grow overflow-auto relative">
                    <div className="flex items-center justify-center min-h-full px-4 sm:px-8 md:px-16 lg:px-24 py-10">
                        {children}
                    </div>
                </main>
                <div className="shrink-0 p-4 self-end z-10">
                    <Footer />
                </div>
            </motion.div>
        </div>
    );
}
