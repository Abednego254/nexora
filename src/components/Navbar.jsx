import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import nexora from '../assets/logo2.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()

    const toggleMenu = () => setIsOpen(!isOpen)

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
            console.log('Searching:', searchQuery)
        }
    }

    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between h-20">

                {/* Logo (left-aligned) */}
                <Link to="/" className="flex items-center space-x-3">
                    <img
                        src={nexora}
                        alt="Nexora Logo"
                        className="h-14 w-14 object-cover rounded-full"
                    />
                </Link>

                {/* Search Bar (centered between logo and nav links) */}
                <div className="hidden md:block w-full max-w-md mx-8">
                    <input
                        type="text"
                        placeholder="Search anything..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSearch()
                        }}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 placeholder-gray-500"
                    />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 font-medium text-gray-800">
                    <li><Link to="/" className="hover:text-blue-700">Home</Link></li>
                    <li><Link to="/services" className="hover:text-blue-700">Services</Link></li>
                    <li><Link to="/about" className="hover:text-blue-700">About</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-700">Contact</Link></li>
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden text-2xl text-blue-600 cursor-pointer" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md px-4 pb-4">
                    {/* Search Bar in Mobile Menu */}
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch()
                                    toggleMenu()
                                }
                            }}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 bg-blue-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <ul className="flex flex-col space-y-4 font-medium text-gray-800">
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
