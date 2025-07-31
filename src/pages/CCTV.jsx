import React, { useEffect, useState } from "react";

// Import images from src/assets
import cctv1 from "../assets/cctv1.jpeg";
import cctv2 from "../assets/cctv2.webp";
import cctv3 from "../assets/cctv3.jpeg";
import cctv4 from "../assets/cctv4.avif";
import cctv5 from "../assets/cctv5.jpeg";
import cctv6 from "../assets/cctv6.webp";
import cctv7 from "../assets/cctv7.jpeg";

const cctvImages = [cctv1, cctv2, cctv3, cctv4, cctv5, cctv6, cctv7];

const CCTV = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % cctvImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">CCTV Solutions</h2>

                {/* Slideshow */}
                <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-xl mb-10">
                    {cctvImages.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`Slide ${idx + 1}`}
                            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                                idx === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                        />
                    ))}
                    {/* Dot indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {cctvImages.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-3 h-3 rounded-full ${
                                    idx === currentIndex ? "bg-white" : "bg-gray-400"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Description */}
                <div className="text-gray-700 text-lg text-center leading-relaxed">
                    <p>
                        We provide reliable CCTV solutions for homes, businesses, and institutions.
                        Our installations include high-resolution cameras, remote viewing options, and round-the-clock support.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CCTV;
