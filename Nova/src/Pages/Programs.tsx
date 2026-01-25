import { NavBar } from "@/Comp/NavBar";
import Courses from "@/assets/Courses";
import { Card, CardHeader, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, GraduationCap } from "lucide-react";
import { Footer } from "@/Comp/Footer";

export function Programs(){
    return(
        <div className="w-full">
            <NavBar/>

            {/*Title section*/}
            <section className="px-6 pt-22 pb-7 overflow-hidden flex flex-col items-center">
                <div className="mb-6">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-slate-900 leading-tight text-center">Our Programs</h1>
                    <p className="text-center text-lg md:text-xl leading-relaxed">Our programs are structured to be short, practical, and accessible for learners at different skill levels.</p>
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-slate-900 leading-tight text-center">Requirements</h2>
                    <p className="text-center text-lg md:text-xl">Minimum age of 16 years, with basic literacy and communication skills.</p>
                </div>
            </section>

            {/*Different programs offered*/}
            <section className="px-6 mb-4">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 w-full">
                {Courses.map((item) => (
                    <Card 
                        className="w-full h-80 relative bg-cover bg-center bg-no-repeat overflow-hidden border-none" 
                        key={item.id} 
                        style={{backgroundImage: `url(${item.image})`}}
                    >
                        {/* Dark overlay for text readability */}
                        <div className="absolute inset-0 bg-black/50"></div>
                        
                        <CardHeader className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">{item.courseName}</h3>
                        </CardHeader>

                        <CardFooter className="relative z-10 flex flex-col gap-3 mt-auto w-full items-start">
                            <CardDescription className="text-white/90 text-base flex flex-col gap-3 items-start">
                                <div className="flex gap-2 items-center">
                                    <GraduationCap className="w-6 h-6 text-blue-400"/>
                                    <span>{item.duration}</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Clock className="w-6 h-6 text-blue-400"/>
                                    <span>{item.time}</span>
                                </div>
                            </CardDescription>
                            
                            <Button className="w-full bg-slate-900 hover:bg-slate-800 cursor-pointer">Enroll</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            </section>

            <Footer/>
        </div>
    )
}