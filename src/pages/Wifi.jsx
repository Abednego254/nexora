import { FaSignal, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

const wifiPackages = [
    {
        title: "Our WIFI",
        speed: "24 Mbps",
        features: [
            "We pay Rent",
            "Perfect for all your browsing needs",
            "24/7 Customer support",
        ],
        link: "/wifi/ourwifi"
    },
    {
        title: "Your WIFI",
        speed: "24 Mbps",
        features: [
            "Best for all your browsing needs",
            "Tenda router included",
            "Priority tech support"
        ],
        link: "/wifi/yourwifi"
    }
];

const Wifi = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <Navbar />
            <div className="bg-blue-900 text-white py-12 text-center shadow-md mt-16">
                <h1 className="text-4xl font-bold mb-2">NEXORA WIFI SOLUTIONS</h1>
                <p className="text-lg max-w-3xl mx-auto">
                    Nexora Tech Solutions offers fast, reliable wifi solutions for everyone. We have two main WIFI packages. See below:
                </p>
            </div>
            <h2 className="text-3xl font-bold text-center mb-12">WiFi Packages</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {wifiPackages.map((pkg, index) => (
                    <Link to={pkg.link} key={index}>
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition border border-blue-100 hover:border-blue-400">
                            <FaSignal className="text-blue-600 text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-center">{pkg.title}</h3>
                            <p className="text-blue-700 font-semibold mb-2 text-center">{pkg.speed}</p>
                            <p className="text-lg font-semibold mb-4 text-center">{pkg.price}</p>

                            <ul className="text-sm text-gray-600 space-y-2">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-center justify-center gap-2">
                                        <FaCheckCircle className="text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 text-center">
                <span className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
                  View Plan
                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Wifi;