import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalculator, faGamepad, faCamera, faFile, faCode, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Projects(){
    return(
        <section className="bg-gradient-to-r from-teal-500 via-green-400 to-lime-300 h-full">

            <div className="text-center justify-center items-center">
                <h1 className="text-center text-3xl font-bold">My Work</h1>
            </div>

            <div className="flex flex-wrap grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 p-4 mt-10 gap-y-5 justify-center items-center">
                <div className="h-72 sm:h-64 w-96 bg-teal-600 p-3 rounded-tr-3xl rounded-bl-3xl">
                <FontAwesomeIcon icon={faCalculator} className="h-10 justify-center"/>
                    <h1 className="text-amber-400 text-2xl my-3 font-bold text-start">
                    CLI Calculator
                    </h1>
                    <p>A CLI tool built with TypeScript that performs basic arithmetic operations. Its efficient, straightforward, and demonstrates my skill in CLI application development and computational logic.</p>

                    <button>
                        <Link href="https://github.com/Umm-e-Hani02/CLI-Calculator.git" target="_blank">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-5 mt-2 text-white active:opacity-5"/>
                        </Link>
                    </button>
                </div>

                <div className="h-72 sm:h-64 w-96 bg-teal-600 p-3 rounded-tr-3xl rounded-bl-3xl">
                {<FontAwesomeIcon icon={faGamepad} className="h-10 justify-center"/>}
                    <h1 className="text-amber-400 text-2xl my-3 font-bold text-start">
                    CLI Number Guessing Game
                    </h1>
                    <p>An interactive TypeScript-based CLI game where players guess a number with hints provided. It showcases my ability to build engaging CLI tools with conditional logic.</p>

                    <button>
                        <Link href="https://github.com/Umm-e-Hani02/CLI-Number-Guessing-Game" target="_blank">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-5 mt-2 text-white active:opacity-5"/>
                        </Link>
                    </button>
                </div>

                <div className="h-72 sm:h-64 w-96 bg-teal-600 p-3 rounded-tr-3xl rounded-bl-3xl">
                {<FontAwesomeIcon icon={faCamera} className="h-10 justify-center"/>}
                    <h1 className="text-amber-400 text-2xl my-3 font-bold text-start">
                    Photography Website
                    </h1>
                    <p>A visually appealing photography portfolio website created with HTML, CSS, and JavaScript. It features image galleries and a minimalist design optimized for mobile and desktop.</p>
                    <button>
                        <Link href="https://photography-website-lyart.vercel.app/" target="_blank">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-5 mt-2 text-white active:opacity-5"/>
                        </Link>
                    </button>
                </div>

                <div className="h-64 w-96 bg-teal-600 p-3 rounded-tr-3xl rounded-bl-3xl">
                { <FontAwesomeIcon icon={faFile} className="h-10 justify-center"/> }
                    <h1 className="text-amber-400 text-2xl my-3 font-bold text-start">
                    Static Resume
                    </h1>
                    <p>A one-page, responsive resume created with HTML and CSS. It highlights my layout design skills, focusing on clarity, typography, and print-friendly formatting.</p>

                    <button>
                        <Link href="https://hackathon-milestones1-2-journey.vercel.app/" target="_blank">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-5 mt-2 text-white active:opacity-5"/>
                        </Link>
                    </button>
                </div>

                <div className="h-64 w-96 bg-teal-600 p-3 rounded-tr-3xl rounded-bl-3xl">
                { <FontAwesomeIcon icon={faFile} className="h-10 justify-center"/> }
                    <h1 className="text-amber-400 text-2xl my-3 font-bold text-start">
                    Editable and Shareable Resume
                    </h1>
                    <p>A tool for creating and downloading custom resumes, highlighting dynamic forms and user-focused design.</p>

                    <button>
                        <Link href="https://hackathon-milestones5-journey.vercel.app/" target="_blank">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-5 mt-2 text-white active:opacity-5"/>
                        </Link>
                    </button>
                </div>

                <div className="h-64 w-96 bg-teal-600 p-3 rounded-tr-3xl rounded-bl-3xl">
                <FontAwesomeIcon icon={faCode} className="h-10 justify-center"/>
                    <h1 className="text-amber-400 text-2xl my-3 font-bold text-start">
                        Figma to HTML Conversion
                    </h1>
                    <p>Transformed a Figma design into responsive HTML/CSS code, focusing on pixel-perfect accuracy and attention to detail for a fully functional webpage.</p>

                    <button>
                        <Link href="https://figma-to-html-nextjs-assignment.vercel.app/" target="_blank">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-5 mt-2 text-white active:opacity-5"/>
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}
