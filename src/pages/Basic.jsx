import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import cameraImage from '../assets/cctvbasic1.webp';
import mobileAppImage from '../assets/cctvbasic3.jpeg';
import setupImage from '../assets/cctvbasic2.jpg';

const Basic = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
            {/* Fixed Navbar */}
            <Navbar />

            {/* Hero Section - offset to account for fixed Navbar */}
            <header className="bg-blue-900 text-white py-12 text-center shadow-md mt-16">
                <h1 className="text-4xl font-bold mb-2">Welcome to the Basic CCTV Package</h1>
                <p className="text-lg">
                    Perfect for small shops and businesses. Stay secure with smart surveillance.
                </p>
            </header>

            {/* What's Included Section */}
            <main className="py-10 px-6 flex-grow">
                <section className="max-w-6xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-blue-800">What's Included</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Camera */}
                        <div className="bg-white rounded-xl shadow-md p-4">
                            <img src={cameraImage} alt="360° HD Camera" className="w-full h-48 object-cover rounded-md" />
                            <h3 className="text-xl font-semibold mt-4">360° HD Camera</h3>
                            <p className="text-gray-600 mt-2">
                                Our high-definition 360° security camera captures a full panoramic view of your space,
                                minimizing blind spots and ensuring complete coverage. With night vision and motion
                                detection, it offers intelligent protection day and night.
                            </p>
                            <p className="text-gray-600 mt-2">
                                Mount it on ceilings or walls and integrate it seamlessly with your mobile device for
                                real-time monitoring from anywhere.
                            </p>
                        </div>

                        {/* Mobile App */}
                        <div className="bg-white rounded-xl shadow-md p-4">
                            <img src={mobileAppImage} alt="Mobile App Monitoring" className="w-full h-48 object-cover rounded-md" />
                            <h3 className="text-xl font-semibold mt-4">Mobile App Monitoring</h3>
                            <p className="text-gray-600 mt-2">
                                Access live camera feeds anytime using our secure mobile app, available for Android and iOS.
                                Get instant motion alerts, playback recorded footage, and manage camera settings effortlessly.
                            </p>
                            <p className="text-gray-600 mt-2">
                                Stay connected and in control, even when you're away from your premises.
                            </p>
                        </div>

                        {/* Setup & Installation */}
                        <div className="bg-white rounded-xl shadow-md p-4">
                            <img src={setupImage} alt="Setup & Installation" className="w-full h-48 object-cover rounded-md" />
                            <h3 className="text-xl font-semibold mt-4">Setup & Installation</h3>
                            <p className="text-gray-600 mt-2">
                                We provide high-quality cables and mounting gear for a clean and permanent setup.
                                Our technicians will install the camera, configure network settings, and pair the mobile app for seamless use.
                            </p>
                            <p className="text-gray-600 mt-2">
                                Installation includes expert positioning for best camera angles and coverage.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="mt-16 bg-blue-50 py-10 px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Total Cost</h2>
                        <ul className="text-gray-700 mb-6">
                            <li>• 360° HD Camera – KSh 2,500</li>
                            <li>• Mobile App – Free</li>
                            <li>• Setup & Installation – KSh 1,000</li>
                        </ul>
                        <div className="text-3xl font-bold text-green-700">KSh 3,499 Only</div>
                        <p className="text-sm text-gray-500 mt-2">
                            *Final price may vary depending on site condition and cable requirements.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Basic;
