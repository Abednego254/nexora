import { useNavigate } from "react-router-dom";
import camera1 from "../assets/camera1.webp";
import camera2 from "../assets/camera2.jpg";
import camera3 from "../assets/eightCameraPackage/8camera.png"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const packages = [
    {
        id: "basic",
        title: "Basic CCTV Package",
        description: "Ideal for small homes or shops. Includes 1-360 HD camera, a mobile app & setup.",
        image: camera1, // Replace with your image path
    },
    {
        id: "standard",
        title: "The 4 camera Package",
        description: "Perfect for medium premises like homes, offices. Comes with 4 HD cameras & 1TB storage.",
        image: camera2,
    },
    {
        id: "premium",
        title: "Eight Camera Package",
        description: "Best for large businesses. 8+ cameras, night vision, remote monitoring.",
        image: camera3,
    },
];

export default function CCTV() {
    const navigate = useNavigate();

    const handleViewDetails = (id) => {
        navigate(`/cctv/${id}`);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20 text-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to Nexora CCTV Solutions</h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Your safety is our top priority. Explore our reliable, high-definition CCTV packages tailored for your needs.
                </p>
            </section>

            {/* Packages Section */}
            <section className="py-16 px-6 md:px-20">
                <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">Our CCTV Packages</h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={pkg.image}
                                alt={pkg.title}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{pkg.title}</h3>
                                <p className="text-gray-600 mb-4">{pkg.description}</p>
                                    <button
                                        onClick={() => handleViewDetails(pkg.id)}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                                    >
                                        View Details
                                    </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
