import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import lg from "./../assets/Images/Logo.png";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export function NavBar(){

    const [isOpen, setIsOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    //Check if a user has logged in
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsLogged(!!user);
        });
        return unsubscribe;
    }, []);

    const LogOut = async() => {
        try{
            await signOut(auth)
            setIsLogged(false)
            navigate('/')
        }catch (Error){
            console.error(Error)
        }
    }

    const Home = async()=> {
        try{
            await navigate("/")
        }
        catch{
            console.error("Could not move to home page")
        }
    }

    const Login = async () => {
        try{
            await navigate("/Login")
        }catch{
            console.error("Could not move to Login Screen")
        }
    }

    const Signup = async () => {
        try{
            await navigate("/SignUp")
        }catch{
            console.error("Could not move to Sign Up Screen")
        }
    }

    const Apply = async () => {
        try{
            await navigate("/Application")
        }catch{
            console.error("Could not move to Sign Up Screen")
        }
    }


    const menuItems = [
            { label: 'Home', href: '/'},
            { label: 'About', href: '/Nova-Institute/About'},
            { label: 'Programs', href: '/Nova-Institute/Programs'},
            { label: 'Gallery', href: '/Nova-Institute/Gallery' },
            { label: 'Newsletter', href: '/Nova-Institute/NewsLetter'},
            { label: 'Contact', href: '/Nova-Institute/Contact'},
    ];

    useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
    }, []);

    return(
        <div className={`w-full py-5 text-white px-4 text-md font-family-grotesk font-medium flex fixed justify-between items-center md:justify-evenly z-100 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <img src={lg} alt="logo" className="w-15 h-15" onClick={Home}/>
            
                <ul className="hidden md:flex gap-4">
                    <Link to="/" className="text-black hover:text-(--main-color) hover:font-lg duration-200">Home</Link>
                    <Link to="/About" className="text-black hover:text-(--main-color) hover:font-lg duration-200">About</Link>
                    <Link to="/Programs" className="text-black hover:text-(--main-color) hover:font-lg duration-200">Programs</Link>
                    <Link to="/" className="text-black hover:text-(--main-color) hover:font-lg duration-200">Gallery</Link>
                    <Link to="/" className="text-black hover:text-(--main-color) hover:font-lg duration-200">Newsletter</Link>
                    <Link to="/" className="text-black hover:text-(--main-color) hover:font-lg duration-200">Contact</Link>
                </ul>
                
                {/*Hamburger menu Mobile */}
                <button
                onClick={toggleMenu}
                className="bg-(--base-color) text-(--text-color) rounded-xl backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 p-3 group md:hidden relative z-100"
                aria-label="Toggle menu"
                >
                    <div className="relative w-6 h-6">
                        <Menu
                        size={26}
                        className={`absolute inset-0 transition-all duration-300 ${ isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
                        />
                        <X
                        size={26}
                        className={`absolute inset-0 transition-all duration-300 ${ isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}
                        />

                    </div>

                </button>

                <div
                    className={`fixed inset-0 bg-black/80 backdrop-blur-md z-40 transition-all duration-500 md:hidden ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={toggleMenu}
                />

                <div
                    className={`fixed top-0 right-0 h-full w-80 bg-(--base-color) border-l border-white/10 z-40 transform transition-all duration-500 ease-out md:hidden ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex flex-col h-full p-8 pt-28">
                        <nav className="flex-1 space-y-2">
                            {menuItems.map((item, index) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={`group flex items-center justify-between p-4 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:bg-linear-to-r hover:from-purple-600/20 hover:to-blue-600/20 border border-transparent hover:border-white/10 transform hover:translate-x-2 ${
                                        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`}
                                    style={{
                                        transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                                    }}
                                    onClick={toggleMenu}
                                >
                                    <span className="text-lg font-medium">{item.label}</span>
                                    <ChevronRight
                                        size={20}
                                        className="opacity-50 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                                    />
                                </a>
                            ))}
                        </nav>
                        
                        {isLogged ? 
                        <button className={`w-full mb-4 py-4 px-6 bg-(--text-color) text-black font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: isOpen ? '200ms' : '0ms' }}
                            onClick={LogOut}>Log Out</button> : 
                        <button
                            className={`w-full mb-4 py-4 px-6 bg-(--text-color) text-black font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: isOpen ? '200ms' : '0ms' }}
                            onClick={Login}
                        >
                            Login / Sign Up
                        </button>
                        }
                        <button
                            className={`w-full py-4 px-6 bg-(--text-color) text-black font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: isOpen ? '200ms' : '0ms' }}
                            onClick={Apply}
                        >
                            Enroll Now
                        </button>
                    </div>
                </div>
                
                {isLogged ?  
                <div className="hidden md:flex md:gap-2 md:items-center">
                    <button className="cursor-pointer hidden px-10 py-3 bg-(--base-color) text-white font-bold rounded-xl backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 p-3 md:flex" onClick={LogOut}>Log Out</button>
                </div>
                :
                 <div className="hidden md:flex md:gap-2 md:items-center">
                    <button className="cursor-pointer hidden px-6 py-3 bg-(--base-color) text-white font-bold rounded-xl backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 p-3 md:flex" onClick={Login}>Login</button>
                    <button className="cursor-pointer hidden px-5 py-3 bg-(--base-color) text-white font-bold rounded-xl backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 p-3 md:flex"onClick={Signup}>Sign Up</button>
                </div>
                }
        </div>
    )
}