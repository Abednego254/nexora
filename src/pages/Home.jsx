import { FaWifi, FaCamera, FaSolarPanel } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useState, useEffect } from "react";

// Hero slideshow images
import cctvHero from '../assets/cctv.webp';
import wifiHero from '../assets/wifi.avif';
import solarHero from '../assets/solar.webp';

// Slideshow image arrays
import wifiImages from '../assets/wifi.js';
import cctvImages from '../assets/cctv.js';
import solarImages from '../assets/solar.js';

const heroImages = [wifiHero, cctvHero, solarHero];

// Slideshow component for service cards
const Slideshow = ({ images }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images]);

    return (
        <img
            src={images[current]}
            alt="service"
            className="w-full h-40 object-cover rounded-lg transition duration-1000"
        />
    );
};

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white text-gray-800">
            <Navbar />

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center p-6 relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 transition-all duration-1000"
                    style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
                ></div>

                <div className="relative z-10 max-w-3xl">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Nexora Tech Solutions</h1>
                    <p className="text-xl mb-6">
                        Delivering Reliable Wifi, Smart CCTV Installations, and Clean Solar Solutions across Kenya.
                    </p>
                    <a
                        href="#services"
                        className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition"
                    >
                        Explore Our Services
                    </a>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 px-4 md:px-12 bg-gray-100">
                <h2 className="text-3xl font-bold text-center mb-12">Our Key Services</h2>
                <div className="grid gap-8 md:grid-cols-3 text-center">

                    {/* Wifi */}
                    <Link to="/wifi" className="group bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
                        <Slideshow images={wifiImages} />
                        <FaWifi className="text-blue-600 text-5xl mx-auto mt-4 mb-2" />
                        <h3 className="text-xl font-semibold mb-2">Wifi Solutions</h3>
                        <p className="text-gray-700">Fast, stable internet for homes, offices & remote sites. We install & support.</p>
                    </Link>

                    {/* CCTV */}
                    <Link to="/cctv" className="group bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
                        <Slideshow images={cctvImages} />
                        <FaCamera className="text-blue-600 text-5xl mx-auto mt-4 mb-2" />
                        <h3 className="text-xl font-semibold mb-2">CCTV Installations</h3>
                        <p className="text-gray-700">Keep an eye on your space with smart, remote-monitored security systems.</p>
                    </Link>

                    {/* Solar */}
                    <Link to="/solar" className="group bg-white p-6 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1">
                        <Slideshow images={solarImages} />
                        <FaSolarPanel className="text-blue-600 text-5xl mx-auto mt-4 mb-2" />
                        <h3 className="text-xl font-semibold mb-2">Solar Power</h3>
                        <p className="text-gray-700">Affordable clean energy setups with batteries & panels for every budget.</p>
                    </Link>

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
