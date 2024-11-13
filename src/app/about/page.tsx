export default function About() {
    return (
        <section className="items-center justify-center flex bg-gradient-to-r from-teal-500 via-green-400 to-lime-300 min-h-screen lg:items-start">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-20 md:gap-10 p-5 md:p-10"> 
                <img 
                    className="rounded-xl md:-mt-9" 
                    height={380} 
                    width={380} 
                    src="about-img.jpg" 
                    alt="aboutsection-img" 
                />

            <div className="items-center p-5 md:p-8 rounded-2xl max-w-lg text-left lg:ml-20 lg:-mt-6">
                    <h3 className="text-center text-2xl font-semibold mb-4 lg:text-start text-emerald-900">Who am I?</h3>
                    <p className="text-center text-base md:text-base leading-relaxed lg:text-start text-emerald-800">
                        Hello! I am Umm-E-Hani a passionate learner on the path to becoming a full-stack developer. I am currently honing my skills in web technologies like TypeScript HTML CSS and JavaScript to build innovative web applications. Coding and solving complex problems are a big part of why I love development as it allows me to think critically and find practical solutions. <br /><br />

                        I also enjoy creating user-friendly designs ensuring the user experience is central to my work. As a student under the Governor Sindh IT Initiative I am continuously learning and applying new skills to my projects setting a strong foundation for my future. My goal is to build accessible applications that positively impact on peoples lives. With my passion for tech and commitment to growth I am excited to collaborate contribute and make a meaningful impact in the tech community.
                    </p>
                </div>

            </div>
            
        </section>
    ); 
}
