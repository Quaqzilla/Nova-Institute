import { Footer } from "@/Comp/Footer";
import { NavBar } from "@/Comp/NavBar";

export function About() {
    return(
        <div className="w-full">
            <NavBar/>

            {/*About Section*/}
            <section className="bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-20 lg:py-32 overflow-hidden">
                <div className=" flex flex-col items-center justify-between gap-12">
                    <div className="flex-1 max-w-2xl">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 leading-tight text-center">
                            About Us
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-4 leading-relaxed text-center">
                            We are a progressive private skills development centre dedicated to empowering individuals with practical, industry-relevant training that prepares them for today's job market.
                            Our programmes range from hospitality, culinary arts, event management, early childhood development, and computer literacy to housekeeping and waitering, all designed 
                            to bridge the gap between education and employability.
                        </p>
                        <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed text-center">
                            We believe that everyone deserves access to quality skills education—regardless of background or financial standing. Our centre provides a supportive and professional learning environment where students can develop confidence, competence, and career readiness
                        </p>
                    </div>

                    <div className="flex-1 max-w-2xl">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 leading-tight text-center">
                            Our Mission
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-4 leading-relaxed text-center">
                            To equip youth and adults with relevant, practical, and high-quality skills that open doors to employment, entrepreneurship, and lifelong growth.
                            We aim to bridge the skills gap in South Africa by offering affordable, inclusive, and transformative learning experiences that uplift individuals and communities.
                        </p>
                    </div>

                    <div className="flex-1 max-w-2xl">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 leading-tight text-center">
                            Our Vision
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-4 leading-relaxed text-center">
                           To evolve into one of South Africa’s leading private educational institutions, recognised for excellence in vocational training, innovation, and community empowerment — and to one day establish a fully accredited private university that continues to shape the future of education and opportunity
                        </p>
                    </div>

                    <div className="flex-1 bg-(--base-color) rounded-2xl p-3">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-(--text-color) leading-tight text-center">
                            Our Long-Term Goal
                        </h1>
                        <p className="text-lg md:text-xl text-white mb-4 leading-relaxed text-center">
                           We plan to grow beyond a skills training centre and establish a private university that provides full qualifications—from certificates and diplomas to degrees.
                           Over the next few years, we plan to:
                        </p>
                        <ul className="text-lg md:text-xl text-white mb-4 leading-relaxed text-left">
                            <li><span className="mr-2 text-white">✓</span>Expand our curriculum to include more accredited programmes under various SETAs.</li>
                            <li><span className="mr-2 text-white">✓</span>Partner with industry leaders to create internship and employment pathways for graduates.</li>
                            <li><span className="mr-2 text-white">✓</span>Develop a larger campus with modern training facilities, computer labs, and a culinary centre.</li>
                            <li><span className="mr-2 text-white">✓</span>Transition into a registered private higher education institution (PHEI), offering nationally and internationally recognised qualifications.Transition into a registered private higher education institution (PHEI), offering nationally and internationally recognised qualifications.</li>
                        </ul>
                    </div>

                    <p className="text-lg font-medium md:text-xl text-slade-900 mb-4 leading-relaxed text-center">We’re building more than a training centre—we’re creating a movement that inspires hope, transforms lives, and develops the next generation of professionals, innovators, and leaders.</p>

                    <div className="flex-1 max-w-2xl">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 leading-tight text-center">
                            Our Story
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-4 leading-relaxed text-center">
                          Our story is rooted in courage, hope, and a dream that refused to fade.
                          We began our journey across Gauteng, North West, and Mpumalanga, driven by one young dreamer’s belief that education could change everything. At just 17 years old, our Founder started this vision with no funds, no resources — only a deep passion to create something that could open doors for others.  
                        </p>
                        <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed text-center">
                          What started as a small idea has grown into a purpose-filled movement. We’ve seen lives transformed through the power of skills — from hospitality and culinary training to computer literacy, early childhood development, and beyond.
                        </p>
                        <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed text-center">
                          Every class we hold, every learner we teach, reminds us why we started: to give people a chance to dream bigger, to rise above their circumstances, and to believe in themselves again.
                        </p>
                        <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed text-center">
                          Our journey is still unfolding, but our mission remains the same — to build a home for learning that uplifts, inspires, and empowers. Aspire. Achieve. Advance. This is our motto, and it guides everything we do. One day, this vision will grow into a private university, but its heart will always stay the same: to make education a bridge of hope
                        </p>
                        
                    </div>



                </div>

            </section>

            <Footer/>

            
        </div>
    )
}