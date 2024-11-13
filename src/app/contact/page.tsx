import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
export default function Contact(){
    return(
        <section className="flex bg-gradient-to-r from-teal-500 via-green-400 to-lime-300 items-center justify-center">
            <div className="items-center justify-center">
                <h1 className="text-3xl font-bold mb-5 text-center text-emerald-900">Contact Me</h1>
                <form action="mailto:hanirh2468@gmail.com" className="items-center justify-center">
                    <input className="rounded-lg w-64 p-2 mb-3 focus:bg-gray-100 sm:w-[300px] text-black" type="text" placeholder="Your Name:" required/> <br />
                    <input className="rounded-lg w-64 p-2 mb-3 focus:bg-gray-100 sm:w-[300px] text-black" type="email" placeholder="Your Email:" required/> <br />
                    <textarea className="rounded-lg w-64 p-2 mb-3 focus:bg-gray-100 text-black sm:w-[300px]" name="message" id="message" rows={11} placeholder="Your message:"></textarea> <br />
                    <button className="flex gap-2 bg-white text-teal-500 p-2 rounded-3xl active:opacity-5 text-emerald-800">
                        Send message <FontAwesomeIcon icon={faPaperPlane} className="h-5"/>
                    </button>
                </form>
            </div>
        </section>
    )
}
