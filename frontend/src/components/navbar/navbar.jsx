export default function Navbar() {
    return (
        <div className="flex justify-between items-center">
            <a href="/about" className="hover:text-gray-400 transition-all">
                About
            </a>
            <a
                href="/experience"
                className="hover:text-gray-400 transition-all"
            >
                Experience
            </a>
            <a href="/projects" className="hover:text-gray-400 transition-all">
                Projects
            </a>
            <a href="/contact" className="hover:text-gray-400 transition-all">
                Contact
            </a>
        </div>
    );
}
