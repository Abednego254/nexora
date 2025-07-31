import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-4 mt-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Nexora Tech</h2>
                    <p>We provide innovative, affordable tech solutions in Wifi, CCTV, and Solar installations across Kenya.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/services" className="hover:text-white">Services</Link></li>
                        <li><Link to="/about" className="hover:text-white">About</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact & Socials */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
                    <p>Phone: 0742 600 965</p>
                    <p>Email: nexoratechsolutions72@gmail.com</p>
                    <div className="flex space-x-4 mt-4 text-2xl">
                        <a href="https://web.facebook.com/profile.php?id=61578851675414" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="hover:text-white" />
                        </a>
                        <a href="https://wa.me/254742600965" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="hover:text-white" />
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nexoratechsolutions72@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope className="hover:text-white" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center mt-10 text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Nexora Tech Solutions. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
