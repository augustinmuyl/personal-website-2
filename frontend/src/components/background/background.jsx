import Navbar from "../navbar/navbar";

export default function Background({ children }) {
    return (
        <div className="h-screen p-6">
            <div className="border h-full bg-radial from-[#0F172A] to-black relative">
                <div className="p-10 lg:mx-50 z-10 relative">
                    <Navbar />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
}
