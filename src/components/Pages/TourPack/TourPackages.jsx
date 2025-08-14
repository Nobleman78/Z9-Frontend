import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaMoneyBillWave, FaStar } from "react-icons/fa";
import UseDomestic from "../../Hooks/UseDomestic";
import UseInternational from "../../Hooks/UseInternational";
import { Helmet } from "react-helmet-async";

const TourPackages = () => {
    const [domestic] = UseDomestic()
    const [international] = UseInternational()
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>Tour Packages | Z9 Air Travels</title>
            </Helmet>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"> Travel Packages</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">Discover the beauty of world with our curated travel experiences</p>
                </div>

                {/* Domestic */}
                <h1 className="text-xl  lg:text-3xl font-bold text-gray-800 mb-4"> Domestic Packages</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {domestic.map((pack) => (
                        <div
                            key={pack.packageId}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        >
                            {/* Package Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={pack.image}
                                    alt={pack.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                                    <FaStar className="text-yellow-500 mr-1" />
                                    <span className="font-semibold">4.8</span>
                                </div>
                            </div>

                            {/* Package Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h2 className="text-xl font-bold text-gray-800">{pack.title}</h2>
                                    <div className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full">
                                        {pack.duration}
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600 mb-4">
                                    <FaMapMarkerAlt className="mr-2 text-indigo-600" />
                                    <span>{pack.destination}</span>
                                </div>

                                <div className="mb-4">
                                    <h3 className="font-semibold text-gray-700 mb-2">Highlights:</h3>
                                    <ul className="space-y-1">
                                        {pack.highlights.slice(0, 3).map((highlight, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-green-500 mr-2">✓</span>
                                                <span className="text-gray-600 text-sm">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex justify-between items-center mt-6">
                                    <div className="flex items-center">
                                        <FaMoneyBillWave className="text-green-600 mr-2" />
                                        <div>
                                            <span className="text-sm text-gray-500">From</span>
                                            <div className="text-xl font-bold text-gray-800">
                                                {pack.currency} {pack.price.toLocaleString()}
                                            </div>
                                        </div>
                                    </div>

                                    <Link
                                        to={`/packages/domestic/${pack.packageId}`}
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-300"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* International */}
                <h1 className="text-xl lg:text-3xl font-bold text-gray-800 mb-4 "> International Packages</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {international.map((pack) => (
                        <div
                            key={pack.packageId}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                            {/* Package Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={pack.image}
                                    alt={pack.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                                    <FaStar className="text-yellow-500 mr-1" />
                                    <span className="font-semibold">4.8</span>
                                </div>
                            </div>

                            {/* Package Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h2 className="text-xl font-bold text-gray-800">{pack.title}</h2>
                                    <div className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full">
                                        {pack.duration}
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600 mb-4">
                                    <FaMapMarkerAlt className="mr-2 text-indigo-600" />
                                    <span>{pack.destination}</span>
                                </div>

                                <div className="mb-4">
                                    <h3 className="font-semibold text-gray-700 mb-2">Highlights:</h3>
                                    <ul className="space-y-1">
                                        {pack.highlights.slice(0, 3).map((highlight, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-green-500 mr-2">✓</span>
                                                <span className="text-gray-600 text-sm">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Price and Deatils */}
                                <div className="flex justify-between items-center mt-6 ">
                                    <div className="flex items-center">
                                        <FaMoneyBillWave className="text-green-600 mr-2" />
                                        <div>
                                            <span className="text-sm text-gray-500">From</span>
                                            <div className="text-xl font-bold text-gray-800">
                                                {pack.currency} {pack.price.toLocaleString()}
                                            </div>
                                        </div>
                                    </div>

                                    <Link
                                        to={`/packages/international/${pack.packageId}`}
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-300"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
                    <button className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium px-6 py-3 rounded-lg transition-colors duration-300">
                        Customize Your Trip
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TourPackages;