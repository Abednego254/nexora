import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Dummy service data to simulate global search
const allServices = [
    { name: "WiFi Solutions", description: "Fast, stable internet", link: "/wifi" },
    { name: "CCTV Installations", description: "Smart security cameras", link: "/cctv" },
    { name: "Solar Power", description: "Clean energy for your home", link: "/solar" },
    { name: "Our WiFi", description: "We pay rent and manage billing", link: "/wifi/ourwifi" },
    { name: "Your WiFi", description: "Custom WiFi solution with support", link: "/wifi/yourwifi" }
];

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchResults = () => {
    const query = useQuery().get("q")?.toLowerCase() || "";
    const [results, setResults] = useState([]);

    useEffect(() => {
        const filtered = allServices.filter(
            (item) =>
                item.name.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query)
        );
        setResults(filtered);
    }, [query]);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-20">
            <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
            {results.length > 0 ? (
                <ul className="space-y-4">
                    {results.map((res, index) => (
                        <li key={index} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                            <a href={res.link} className="text-blue-600 text-xl font-semibold hover:underline">
                                {res.name}
                            </a>
                            <p className="text-sm text-gray-600">{res.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600">No results found.</p>
            )}
        </div>
    );
};

export default SearchResults;
