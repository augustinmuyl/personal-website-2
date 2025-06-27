import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"

export const metadata: Metadata = {
    title: "Augustin Muyl - Math & CS Student, Full-Stack Developer",
    description: "I'm Augustin, a Math & CS student building full-stack apps with React, Next.js, FastAPI, and SQL. Explore my portfolio and past projects.",
    openGraph: {
        title: "Augustin Muyl – Math & CS Student, Full-Stack Developer",
        description:
            "Explore the portfolio of Augustin Muyl, a Math & CS student passionate about impactful, full-stack development using React, Next.js, and FastAPI.",
        url: "https://augustinmuyl.com",
        type: "website",
    },
    other: {
        "google-site-verification": "QRq3mt4oDRYX-iD63Jgqn4jwU-BybcobJZ-tBbg4ar4"
    }
};

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="bg-black text-white font-extralight font-sans">
                {children}
            </body>
        </html>
    );
}
