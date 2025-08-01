import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import routerImage from "../assets/ourWifi/router.webp";
import microtikImage from "../assets/ourWifi/microtick.webp";
import ethernetImage from "../assets/ourWifi/ethernet.webp";
import rjImage from "../assets/ourWifi/rj.jpeg";

const components = [
    {
        name: "Tenda Routers",
        description: "High quality routers designed to provide very fast internet connectivity.",
        image: routerImage,
    },
    {
        name: "Microtik",
        description: "Used to install the billing system on the WiFi. Works just like a router.",
        image: microtikImage,
    },
    {
        name: "Ethernet Cables",
        description: "Used in the connection between routers and other components to transfer internet.",
        image: ethernetImage,
    },
    {
        name: "RJ Connectors",
        description: "Connected to Ethernet cables to be inserted into routers and computers.",
        image: rjImage,
    },
];

const OurWifi = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-24 text-center bg-blue-900 text-white px-4 pb-10">
                <h1 className="text-4xl font-bold mb-4">Our WiFi Package</h1>
                <p className="text-lg max-w-3xl mx-auto">
                    This plan includes reliable 24 Mbps speeds, rent-inclusive billing, and 24/7 customer support.
                    Ideal for shared spaces or rental properties where we manage all aspects of your connectivity.
                </p>
            </div>

            {/* How It Works */}
            <div className="px-4 mt-10">
                <div className="bg-black text-white p-10 rounded-2xl shadow-lg text-center transform transition duration-300 hover:scale-105 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">How this package works</h2>
                    <p className="text-lg">
                        Nexora Tech Solutions incurs all installation costs including component purchases. We pay Ksh. 1000 monthly rent for housing the components.
                        Users are billed through our system while we handle all maintenance and renovations. Visit our WiFi plans to learn more.
                    </p>
                </div>
            </div>

            {/* Components Section */}
            <div className="px-4 mt-16">
                <h2 className="text-3xl font-bold text-center mb-8">Components Used</h2>
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

            {/* Button to Pricing Page */}
            <div className="text-center my-12">
                <Link
                    to="/wifi/prices"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-md"
                >
                    View WiFi Pricing
                </Link>
            </div>

            <Footer />
        </div>
    );
};

export default OurWifi;
