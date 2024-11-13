import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function HomeSection() {
    return (
        <section className="flex flex-col lg:flex-row min-h-screen">

            <div className="bg-gradient-to-r from-teal-500 to-green-400 lg:w-[80rem] pl-10 items-center justify-center">
                <p className="text-xl md:text-xl pt-24 sm:ml-24 text-emerald-800">Hello</p>
                <h1 className="text-2xl md:text-5xl font-bold sm:ml-24 text-emerald-900">I am UMM-E-Hani</h1>
                <p className="text-xl md:text-xl sm:ml-24 text-emerald-800">Aspiring Full Stack Developer</p>
                <p className="text-xl md:text-xl sm:ml-24 text-emerald-800">Karachi, Pakistan</p>
                <Link href="/contact">
                    <button className="mt-10 md:text-lg border-2 border-emerald-900 w-24 md:w-32 p-2 active:opacity-5 sm:ml-24 text-emerald-950">Hire Me</button>
                </Link>

                <div className="flex mt-40 gap-5 ml-24">
                    <Link href="https://www.linkedin.com/in/umm-e-hani-400b812b4" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} className="-mt-20 h-9 w-9 text-white rounded-full border-2 border-emerald-900  p-1 active:opacity-5 lg:-mt-7" />
                    </Link>
                    <Link href="https://github.com/Umm-e-Hani02" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="-mt-20 h-9 w-9 text-white rounded-full border-2 border-emerald-900 p-1 active:opacity-5 lg:-mt-7" />
                    </Link>
                </div>
            </div>

            <div className="bg-gradient-to-r from-green-400 to-lime-300 lg:w-[65rem] ">
                <img src="/pfp22.jpg" alt="Profile Picture" className="lg:h-[354px] md:w-full object-cover justify-end flex rounded-lg"/>
                <p className="p-3 text-emerald-800">
                    I am a passionate and dedicated aspiring Full Stack Developer currently on an exciting journey to master the art of creating beautiful functional and efficient web applications. With a strong foundation in front-end and back-end technologies I aim to build seamless digital experiences.
                </p>
                <Link href="https://hackathon-milestones1-2-journey.vercel.app/" target="_blank">
                    <button className="text-sm m-3 md:h-12 border-2 border-emerald-900 md:w-36 p-1 text-center active:opacity-5 text-emerald-950">VIEW RESUME</button>
                </Link>
            </div>
        </section>
    );
}
