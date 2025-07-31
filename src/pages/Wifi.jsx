import { FaSignal, FaCheckCircle, FaRocket } from 'react-icons/fa'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import wifiBanner from "../assets/wifi-hero.jpg" // You can replace with your own banner

const wifiPackages = [
    {
        title: "Basic Plan",
        speed: "5 Mbps",
        price: "Ksh 1,499 / month",
        features: ["Free Installation", "Unlimited Data", "24/7 Support"]
    },
    {
        title: "Standard Plan",
        speed: "10 Mbps",
        price: "Ksh 2,499 / month",
        features: ["Free Router", "Unlimited Data", "24/7 Support", "Free Maintenance"]
    },
    {
        title: "Premium Plan",
        speed: "20 Mbps",
        price: "Ksh 3,999 / month",
        features: ["Smart Router", "Priority Support", "Unlimited Devices", "Free Maintenance"]
    }
]

const Wifi = () => {
    return (
        <div className="bg-white text-gray-800">
            <Navbar />

            {/* Hero */}
            <section className="relative h-72 bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url(${wifiBanner})` }}>
                <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl font-bold">Our Wifi Solutions</h1>
                    <p className="text-lg mt-2">Reliable, Fast, and Affordable Internet for Homes & Businesses</p>
                </div>
            </section>

            {/* Intro */}
            <section className="py-12 px-4 md:px-12 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Why Choose Nexora Wifi?</h2>
                <p className="max-w-3xl mx-auto text-gray-600">
                    At Nexora Tech, we deliver high-speed internet tailored for every need – from streaming and gaming to business operations. Our network is built for uptime and speed, with unmatched support.
                </p>
            </section>

            {/* Wifi Packages */}
            <section className="bg-gray-100 py-16 px-4 md:px-12">
                <h2 className="text-3xl font-bold text-center mb-12">Wifi Packages</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {wifiPackages.map((pkg, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition border border-blue-100">
                            <FaSignal className="text-blue-600 text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                            <p className="text-blue-700 font-semibold mb-4">{pkg.speed}</p>
                            <p className="text-lg font-semibold mb-4">{pkg.price}</p>
                            <ul className="text-sm text-gray-600 space-y-2">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-center justify-center gap-2">
                                        <FaCheckCircle className="text-green-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
                                Get This Plan
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 md:px-12 text-center bg-blue-700 text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Connected?</h2>
                <p className="mb-6 max-w-2xl mx-auto">Contact us today to schedule your installation or ask any questions about our packages. Let’s power your world with fast, reliable internet.</p>
                <a href="/contact" className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition">
                    Contact Us
                </a>
            </section>

            <Footer />
        </div>
    )
}

export default Wifi
