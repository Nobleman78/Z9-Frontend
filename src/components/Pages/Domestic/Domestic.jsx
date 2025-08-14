import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaMoneyBillWave, FaStar } from "react-icons/fa";
import UseDomestic from "../../Hooks/UseDomestic";
import { Helmet } from "react-helmet-async";

const Domestic = () => {
    const [domestic] = UseDomestic();
    const pageUrl = "https://www.z9airtravels.com/domestic-packages";

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>Domestic Packages | Z9 Air Travels</title>
                <meta
                    name="description"
                    content="Explore Bangladesh with Z9 Air Travels domestic travel packages. Discover curated itineraries, top destinations, and unforgettable experiences."
                />
                <meta
                    name="keywords"
                    content="domestic travel, Bangladesh tour, travel packages, Z9 Air Travels"
                />
                <link rel="canonical" href={pageUrl} />

                {/* Open Graph */}
                <meta property="og:title" content="Domestic Packages | Z9 Air Travels" />
                <meta
                    property="og:description"
                    content="Discover the best domestic travel packages in Bangladesh with Z9 Air Travels. Personalized itineraries and top destinations."
                />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.z9airtravels.com/images/domestic-packages-og.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Domestic Packages | Z9 Air Travels" />
                <meta
                    name="twitter:description"
                    content="Explore Bangladesh with our curated domestic travel packages. Personalized itineraries and top destinations."
                />
                <meta name="twitter:image" content="https://www.z9airtravels.com/images/domestic-packages-og.jpg" />
            </Helmet>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Domestic Travel Packages</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Discover the beauty of Bangladesh with our curated travel experiences
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {domestic.map((pack) => (
                        <div
                            key={pack.packageId}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={pack.image}
                                    alt={pack.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                                    <FaStar className="text-yellow-500 mr-1" />
                                    <span className="font-semibold">4.8</span>
                                </div>
                            </div>

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

export default Domestic;
