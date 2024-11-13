import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Footer(){
    return(
        <footer className="bg-gradient-to-r from-teal-500 via-green-400 to-lime-300 text-white p-6 text-center">
            <div className="mt-4">
                <p className="flex items-center justify-center mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="h-6 mr-1" />
                hanirh2468@gmail.com
                </p>
                <Link href="https://www.linkedin.com/in/umm-e-hani-400b812b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="mx-3">Linkedin</Link>
                <Link href="https://github.com/Umm-e-Hani02" target="_blank" className="mx-3">Github</Link>
            </div>
            <div className="mt-4 text-sm">
                <p>&copy; Umm-e-Hani 2024 | All rights reserved.</p> 
            </div>
        </footer>
    )
}