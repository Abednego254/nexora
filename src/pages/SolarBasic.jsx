import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import panelImage from "../assets/solar/solar1.webp";
import batteryImage from "../assets/solar/battery.jpg";
import cableImage from "../assets/solar/cables.jpg";
import bulbImage from "../assets/solar/bulb.jpg";

const components = [
    {
        name: "Solar Panel (50W)",
        description: "Captures sunlight and converts it into electricity for your home use.",
        image: panelImage,
    },
    {
        name: "Battery",
        description: "Stores solar energy for use during nighttime or cloudy weather.",
        image: batteryImage,
    },
    {
        name: "Cable",
        description: "For connection.",
        image: cableImage,
    },
    {
        name: "Bulb",
        description: "For Lighting.",
        image: bulbImage,
    },
];

const SolarBasic = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-24 text-center bg-yellow-600 text-white px-4 pb-10">
                <h1 className="text-4xl font-bold mb-4">Solar Basic Package</h1>
                <p className="text-lg max-w-3xl mx-auto">
                    Our entry-level solar package designed for essential lighting and charging. Ideal for small households or off-grid starter setups.
                </p>
            </div>

            {/* How It Works */}
            <div className="px-4 mt-10">
                <div className="bg-black text-white p-10 rounded-2xl shadow-lg text-center transform transition duration-300 hover:scale-105 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">How this package works</h2>
                    <p className="text-lg">
                        The Solar Basic package is designed for simplicity and affordability. We provide all components and installation. Once installed,
                        your system generates free electricity from the sun — no fuel, no noise, and no monthly bills.
                    </p>
                </div>
            </div>

            {/* Components Section */}
            <div className="px-4 mt-16">
                <h2 className="text-3xl font-bold text-center mb-8">Components Included</h2>
                <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {components.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Button to Contact Page */}
            <div className="text-center my-12">
                <Link
                    to="/contact"
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-md"
                >
                    Talk to an Expert
                </Link>
            </div>

            <Footer />
        </div>
    );
};

export default SolarBasic;
