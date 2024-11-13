import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-teal-500 via-green-400 to-lime-300 p-5">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-3xl font-sans font-bold text-white h-10 w-12 bg-teal-600 text-center rounded-lg -ml-3 sm:ml-1">UH</h1>
                </div>

                <ul className="flex gap-3 text-white font-semibold mt-3">
                    <li className="hover:text-teal-600 hover:underline hover:underline-offset-4">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-teal-600 hover:underline hover:underline-offset-4">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="hover:text-teal-600 hover:underline hover:underline-offset-4">
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className="hover:text-teal-600 hover:underline hover:underline-offset-4">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
