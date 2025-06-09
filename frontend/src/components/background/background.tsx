"use client"

import { ReactNode } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { motion } from "motion/react"

export default function Background({ children }: { children: ReactNode }) {
    return (
        <div className="h-screen p-6">
            <motion.div
                className="border h-full"
                style={{ background: "radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to))" }}
                animate={{ "--tw-gradient-from": ["#0F172A", "#19213b", "#222b4a"] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
                <div className="p-10 md:mx-28 lg:mx-50 z-10 relative">
                    <Navbar />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    {children}
                </div>
                <div className="absolute bottom-10 right-10">
                    <Footer />
                </div>
            </motion.div>
        </div>
    );
}
