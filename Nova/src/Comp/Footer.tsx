import { Mail, MapPin, Phone} from "lucide-react";
import lg from "./../assets/Images/Logo.png";

export function Footer(){

    const services = [
        'Reception / Front Desk',
        'Office Administration',
        'Computer Literacy',
        'TEFL (Teaching English as a foreign language)',
        'Home-Based Care',
        'Culinary Basics / Cooking',
        'Early Childhood Development (ECD)'
    ];

     const quickLinks = [
        { label: 'Home', href: '/'},
            { label: 'About', href: '/About'},
            { label: 'Programs', href: '/Programs'},
            { label: 'Gallery', href: '/Gallery' },
            { label: 'Newsletter', href: '/NewsLetter'},
            { label: 'Contact', href: '/Contact'},
    ];

    return(
        <>
        <footer className="bg-(--base-color) text-white w-full">
            <div className="mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                        <img src={lg} alt="logo" className="w-24 h-24"/>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                        Aspire. Achieve. Advance.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                        {quickLinks.map((link) => (
                            <li key={link.label}>
                            <a 
                                href={link.href} 
                                className="text-gray-400 hover:text-[#82867E] transition-colors flex items-center group"
                            >
                                <span className="mr-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                {link.label}
                            </a>
                            </li>
                        ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-white mb-6">Our Programs</h4>
                        <ul className="space-y-3">
                        {services.map((service) => (
                            <li key={service}>
                            <a 
                                href="#services" 
                                className="text-gray-400 hover:text-[#82867E] transition-colors flex items-center group"
                            >
                                <span className="mr-2 text-[#82867E]">✓</span>
                                {service}
                            </a>
                            </li>
                        ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-white mb-6">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3 group">
                                <div className="w-10 h-10 bg-[#82867E]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#82867E]/40 transition-colors">
                                <MapPin size={20} className="text-[#82867E]" />
                                </div>
                                <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <p className="text-gray-300">Ascolana Street, Pomona,South Africa</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3 group">
                                <div className="w-10 h-10 bg-[#82867E]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#82867E]/40 transition-colors">
                                <Phone size={20} className="text-[#82867E]" />
                                </div>
                                <div>
                                <p className="text-sm text-gray-400">Phone</p>
                                <a href="tel:+27123456789" className="text-gray-300 hover:text-[#82867E] transition-colors">
                                    (081)-695-1750
                                </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 group">
                                <div className="w-10 h-10 bg-[#82867E]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#82867E]/40 transition-colors">
                                <Mail size={20} className="text-[#82867E]" />
                                </div>
                                <div>
                                <p className="text-sm text-gray-400">Email</p>
                                <a href="mailto:novainstituteza@gmail.com" className="text-gray-300 hover:text-[#82867E] transition-colors break-all">
                                    novainstituteza@gmail.com
                                </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    
                        
                </div>

            </div>
                <div className="border-t border-gray-800">
                        <div className="max-w-7xl mx-auto px-6 py-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-white text-sm text-center md:text-left">
                            © 2026 Nova Institute. All rights reserved.
                            </p>
                            <div className="flex gap-6 text-sm">
                            <a href="#" className="text-white hover:text-[#82867E] transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-white hover:text-[#82867E] transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-white hover:text-[#82867E] transition-colors">
                                Cookie Policy
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
        </>
    )
}