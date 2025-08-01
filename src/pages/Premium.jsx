import React from "react";
import cameraImage from "../assets/eightCameraPackage/8camera.png";
import dvrImage from "../assets/eightCameraPackage/dvr8.png";
import screenImage from "../assets/eightCameraPackage/screen32.png";
import hddImage from "../assets/eightCameraPackage/hdd2TB.png";
import connectorImage from "../assets/fourCameraPackage/bnc.png";
import jackImage from "../assets/fourCameraPackage/powerjacks.png";
import powerImage from "../assets/fourCameraPackage/supply.png";
import cableImage from "../assets/fourCameraPackage/cable.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const components = [
    {
        name: "8 HD CCTV Cameras",
        description: "These high-definition security cameras offer clear, wide-angle video coverage both during the day and at night. Designed with infrared night vision and motion detection capabilities, they ensure round-the-clock surveillance for entrances, shops, hallways, or driveways.",
        image: cameraImage,
    },
    {
        name: "8-Channel DVR",
        description: "The Digital Video Recorder connects to all four cameras, storing high-quality video footage continuously. It supports playback, remote access via smartphone apps, and features motion-triggered recording, giving you total control and visibility from anywhere.",
        image: dvrImage,
    },
    {
        name: "32-inch Monitor",
        description: "A full HD screen that displays real-time footage from your cameras. Whether mounted on a wall or placed on a desk, it allows quick viewing of live streams or recorded clips — ideal for guards, reception areas, or control rooms.",
        image: screenImage,
    },
    {
        name: "2TB Hard Disk Drive",
        description: "This storage unit is embedded into the DVR system and offers weeks of recording time without interruption. It automatically overwrites the oldest footage and ensures your surveillance history is always up to date and accessible.",
        image: hddImage,
    },
    {
        name: "BNC Connectors",
        description: "Durable, shielded connectors used to link the cameras to the DVR. They provide strong signal transmission with minimal interference, ensuring a crisp video feed from each camera without lag or loss.",
        image: connectorImage,
    },
    {
        name: "Power Jacks",
        description: "These jacks distribute power to the individual cameras and DVR system. Built for safety and efficiency, they prevent overload and keep your system running 24/7 without interruption.",
        image: jackImage,
    },
    {
        name: "Power Supply Unit",
        description: "Central power adapter that supplies consistent voltage to all four cameras. It features surge protection and energy efficiency to reduce power costs while improving reliability.",
        image: powerImage,
    },
    {
        name: "Coaxial Cable (Roll)",
        description: "A roll of high-quality cable that connects the cameras to the DVR and power supply. This ensures clean signal transmission over long distances, suitable for both indoor and outdoor installations.",
        image: cableImage,
    },
];

const Standard = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <Navbar />

            {/* Welcome Section */}
            <div className="bg-blue-900 text-white py-12 text-center shadow-md mt-16">
                <h1 className="text-4xl font-bold mb-2">Welcome to the premium CCTV Package</h1>
            </div>

            {/* Components Section */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {components.map((item, idx) => (
                    <div key={idx} className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>

            {/* Pricing Section */}
            <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Package Total: <span className="text-green-600">Ksh 64,100</span>
                </h2>
                <p className="text-sm text-gray-600">
                    This price includes hardware, installation, mobile app setup, and customer training. Taxes and minor additional wiring (if required) may apply.
                </p>
                <div className="mt-4">
                    <button className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition">
                        Request Installation
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Standard;
