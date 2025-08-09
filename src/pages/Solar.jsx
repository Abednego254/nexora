import { FaSun, FaCheckCircle } from 'react-icons/fa'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import solarBanner from "../assets/solar.webp"
import { useNavigate } from "react-router-dom" // 👈 import useNavigate

const solarPackages = [
    {
        title: "SOLAR HOME SYSTEM",
        power: "50W System",
        features: ["Ideal for basic lighting, charging", "bulbs", "Includes a battery", "Free Installation"],
        link: "/solar/solarbasic" // 👈 Add a link
    },
    {
        title: "Home Essentials",
        power: "1kW System",
        price: "Ksh 119,999",
        features: ["Lights + TV + Fridge", "MPPT Controller", "1-Year Warranty"]
    },
    {
        title: "Pro Off-Grid",
        power: "3kW+ System",
        price: "Custom Quote",
        features: ["Complete Home Use", "Backup Integration", "Maintenance Plan Included"]
    }
]

const Solar = () => {
    const navigate = useNavigate(); // 👈 Hook init

    return (
        <div className="bg-white text-gray-800">
            <Navbar />

            {/* Hero */}
            <section
                className="relative h-72 bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${solarBanner})` }}
            >
                <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl font-bold">Solar Power Solutions</h1>
                    <p className="text-lg mt-2">Clean, Reliable, and Cost-Effective Energy for Every Need</p>
                </div>
            </section>

            {/* Intro */}
            <section className="py-12 px-4 md:px-12 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Power Your World with Solar</h2>
                <p className="max-w-3xl mx-auto text-gray-600">
                    Nexora Tech provides professionally designed and installed solar systems for residential, commercial, and institutional clients.
                    Our mission is to help you reduce power bills, improve energy independence, and embrace sustainable technology.
                </p>
            </section>

            {/* Solar Packages */}
            <section className="bg-gray-100 py-16 px-4 md:px-12">
                <h2 className="text-3xl font-bold text-center mb-12">Our Solar Packages</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {solarPackages.map((pkg, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition border border-yellow-100">
                            <FaSun className="text-yellow-500 text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                            <p className="text-yellow-600 font-semibold mb-4">{pkg.power}</p>
                            <p className="text-lg font-semibold mb-4">{pkg.price}</p>
                            <ul className="text-sm text-gray-600 space-y-2">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-center justify-center gap-2">
                                        <FaCheckCircle className="text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="mt-6 bg-yellow-500 text-white px-5 py-2 rounded-full hover:bg-yellow-600 transition"
                                onClick={() => pkg.link ? navigate(pkg.link) : null} // 👈 navigate if link exists
                            >
                                View This Plan
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 md:px-12 text-center bg-yellow-500 text-white">
                <h2 className="text-3xl font-bold mb-4">Switch to Solar Today</h2>
                <p className="mb-6 max-w-2xl mx-auto">
                    Ready to cut down on electricity costs and rely on clean, sustainable power? Contact our experts today for a free consultation and site survey.
                </p>
                <a href="/contact" className="bg-white text-yellow-600 font-semibold px-6 py-3 rounded-full hover:bg-yellow-100 transition">
                    Contact Us
                </a>
            </section>

            <Footer />
        </div>
    )
}

export default Solar;
