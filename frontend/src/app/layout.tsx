import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Augustin's Personal Website",
    description: "Hi, I'm a Math and Computer Science student at Boston University with a background in full-stack development, especially using Flask/FastAPI, React.js/Next.JS, Tailwind CSS, and SQL",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-black text-white font-extralight">
                {children}
            </body>
        </html>
    );
}
