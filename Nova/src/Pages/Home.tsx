import { NavBar } from "@/Comp/NavBar";
import { ChevronRight, GraduationCap, Clock, Sparkles, Shield, Star, Users } from "lucide-react";
import student from "./../assets/Images/student.webp";
import { Card, CardHeader, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footer } from "@/Comp/Footer";
import Courses from "@/assets/Courses";

export function Home(){
    const iconMap = {
    Sparkles,
    Shield,
    Star,
    Users
    };

    const values = [
        {icon: "Sparkles", title: "Empowerment", reason: "Creating opportunities through skills and education"},
        {icon: "Shield", title: "Integrity", reason: "Operating with honesty, transparency, and accountability"},
        {icon: "Star", title: "Excellence", reason: "Delivering training that meets real-world industry standards"},
        {icon: "Users", title: "Inclusivity", reason: "Making education accessible to all, regardless of background"}
    ];

    return(
        <div className="w-full">
            <NavBar/>

            {/*Hero Section*/}
            <section className="gradient-to-br from-slate-50 to-blue-50 px-6 py-20 lg:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-12 md:flex-row">
                    <div className="flex-1 max-w-2xl">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 leading-tight">
                            Shape Your Future With <span className="text-blue-600 font-light italic block mt-2">Excellence</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                            Experience-Building Opportunities, Job Placement, Assistance, Flexible Learning, Affordable & Inclusive Experiences, Experienced Facilitators & Meals During Training
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-(--base-color) text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 font-semibold cursor-pointer">
                                Apply Now
                                <ChevronRight className="w-5 h-5" />
                            </button>
                            <button className="px-8 py-4 border-2 border-(--base-color) text-(--base-color) rounded-lg hover:bg-blue-50 transition-all font-semibold cursor-pointer">
                                Explore Programs
                            </button>
                        </div> 
                    </div>

                    <div className="hidden md:flex md:flex-1 md:relative md:w-full md:max-w-lg">
                        <div className="absolute inset-0 gradient-to-tr from-blue-400 to-purple-400 rounded-3xl transform rotate-6 opacity-20"></div>
                        <img 
                            src={student} 
                            alt="Student studying" 
                            className="relative rounded-3xl shadow-2xl w-full h-auto object-cover aspect-square"
                        />
                    </div>
                </div>
            </section>

            {/*Faculties Section*/}
            <section className="px-6 py-16 overflow-hidden bg-(--base-color) flex flex-col gap-5 items-center">
                <div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-slate-200 leading-tight">Our Programs</h1>
                    <p className="text-center text-lg md:text-xl text-(--text-color) mb-8 leading-relaxed">We offer a wide range of in demand fields to study.</p>
                </div>

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

            {/*Why Choose Us Section*/}
            <section className="px-6 py-16 overflow-hidden flex flex-col gap-5 items-center">
                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-slate-900 leading-tight">Our Values</h1>
                    <p className="text-center text-lg md:text-xl mb-8 leading-relaxed">Experience a transformative education</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value) => {
                        const Icon = iconMap[value.icon as keyof typeof iconMap];
                        return (
                        <div className="flex flex-col items-center text-center p-6">
                            <Icon className="w-12 h-12 text-(--base-color) mb-4" />
                            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                            <p className="text-gray-600">{value.reason}</p>
                        </div>
                        );
                    })}
                </div>

            </section>

            {/*News*/}
            <section className="px-6 py-16 overflow-hidden bg-slate-900 flex flex-col gap-5 items-center">

                <div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-slate-200 leading-tight">Recent News</h1>
                    <p className="text-center text-lg md:text-xl text-(--text-color) mb-8 leading-relaxed">Explore our most recent news</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                        <div className="relative h-48 overflow-hidden">
                            <img 
                                src={student} 
                                alt="News Image" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            {/* Dark gradient overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            
                            {/* Title overlay on image */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                                <h3 className="text-xl font-bold text-white">Successful Open Day</h3>
                            </div>
                        </div>
                        
                        <div className="p-6">
                            <p className="text-gray-600 mb-4 line-clamp-2">
                                Successful open day at Nova Institute. We are excited to host over...
                            </p>
                            <button className="flex items-center gap-2 text-(--base-color) font-semibold hover:gap-3 transition-all">
                                Read More 
                                <span>→</span>
                            </button>
                        </div>
                    </div> 
                </div>

            </section>

            <Footer/>
        </div>
    )
}