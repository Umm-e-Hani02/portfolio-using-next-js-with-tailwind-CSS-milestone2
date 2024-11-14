import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Footer(){
    return(
        <footer className="bg-gradient-to-r from-teal-600 via-green-500 to-lime-400 text-white p-6 text-center">
            <div className="mt-4">
                <p className="flex items-center justify-center mb-2 text-emerald-800">
                    <Link href="mailto:hanirh2468@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} className="h-6 mr-1 " />
                    </Link>
                
                </p>
                <Link href="https://www.linkedin.com/in/umm-e-hani-400b812b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="mx-3 text-emerald-800">Linkedin</Link>
                <Link href="https://github.com/Umm-e-Hani02" target="_blank" className="mx-3 text-emerald-800">Github</Link>
            </div>
            <div className="mt-4 text-sm text-emerald-800">
                <p>&copy; Umm-e-Hani 2024 | All rights reserved.</p> 
            </div>
        </footer>
    )
}
