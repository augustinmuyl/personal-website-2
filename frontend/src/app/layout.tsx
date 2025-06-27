import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"

export const metadata: Metadata = {
    title: "Augustin's Personal Website",
    description: "Hi, I'm a Math and Computer Science student at Boston University with a background in full-stack development, especially using Flask/FastAPI, React.js/Next.JS, Tailwind CSS, and SQL",
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
