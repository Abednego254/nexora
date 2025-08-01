import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Prices = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Navbar />
            <main className="flex-grow flex items-center justify-center mt-20">
                <div className="bg-white shadow-lg rounded-xl p-10 text-center max-w-xl mx-4">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Internet Prices Page</h1>
                    <p className="text-gray-600 text-lg mb-6">
                        We’re currently working on this page to provide you with all our pricing plans.
                        Please check back soon for updates!
                    </p>
                    <div className="text-gray-400 text-sm italic">
                        Thank you for your patience.
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Prices;
