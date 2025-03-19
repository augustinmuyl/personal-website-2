import { ReactNode } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

export default function Background({ children }: { children: ReactNode }) {
    return (
        <div className="h-screen p-6">
            <div className="border h-full bg-radial from-[#0F172A] to-black relative">
                <div className="p-10 lg:mx-50 z-10 relative">
                    <Navbar />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    {children}
                </div>
                <div className="absolute bottom-10 right-10">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
