import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaMoneyBillWave, FaStar } from "react-icons/fa";

const domestic = [
    {
        "packageId": "BD-DP-001",
        "title": "Cox's Bazar Beach Getaway",
        "destination": "Cox's Bazar",
        "duration": "3 Days 2 Nights",
        "price": 8500,
        "currency": "BDT",
        "highlights": [
            "Visit the world's longest sea beach",
            "Enjoy sunset at Inani Beach",
            "Seafood dinner at local restaurants"
        ],
        "inclusions": [
            "Accommodation in 3-star hotel",
            "Breakfast & Dinner",
            "AC Bus/Hiace transport"
        ],
        "exclusions": [
            "Lunch",
            "Personal expenses",
            "Entry fees to attractions"
        ],
        "image": "https://images.unsplash.com/photo-1590603740183-980e7f6920eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y294J3MlMjBiYXphcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        "packageId": "BD-DP-002",
        "title": "Sundarbans Mangrove Adventure",
        "destination": "Sundarbans, Khulna",
        "duration": "4 Days 3 Nights",
        "price": 12500,
        "currency": "BDT",
        "highlights": [
            "Boat safari in the mangroves",
            "Spotting Royal Bengal Tigers",
            "Visit Karamjol wildlife sanctuary"
        ],
        "inclusions": [
            "River cruise accommodation",
            "All meals on board",
            "Guide and forest permit"
        ],
        "exclusions": [
            "Personal expenses",
            "Tips for crew"
        ],
        "image": "https://plus.unsplash.com/premium_photo-1686310335921-38acc0679321?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "packageId": "BD-DP-003",
        "title": "Bandarban Hill Trek",
        "destination": "Bandarban",
        "duration": "3 Days 2 Nights",
        "price": 9500,
        "currency": "BDT",
        "highlights": [
            "Trekking to Nilgiri & Nilachal",
            "Explore Nafakhum Waterfall",
            "Visit tribal villages"
        ],
        "inclusions": [
            "Accommodation in eco-resort",
            "Breakfast, Lunch & Dinner",
            "Local guide & transport"
        ],
        "exclusions": [
            "Personal shopping",
            "Camera fees"
        ],
        "image": "https://images.unsplash.com/photo-1585123388867-3bfe6dd4bdbf?q=80&w=801&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "packageId": "BD-DP-004",
        "title": "Srimangal Tea Garden Retreat",
        "destination": "Srimangal, Sylhet",
        "duration": "2 Days 1 Night",
        "price": 6500,
        "currency": "BDT",
        "highlights": [
            "Visit tea gardens & tea factory",
            "Explore Lawachara National Park",
            "Seven-layer tea tasting"
        ],
        "inclusions": [
            "Resort accommodation",
            "Breakfast & Dinner",
            "AC transport from Dhaka"
        ],
        "exclusions": [
            "Lunch",
            "Entry fees"
        ],
        "image": "https://images.unsplash.com/photo-1714810267476-533496f19be2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "packageId": "BD-DP-005",
        "title": "Saint Martin's Island Escape",
        "destination": "Saint Martin's Island",
        "duration": "3 Days 2 Nights",
        "price": 10500,
        "currency": "BDT",
        "highlights": [
            "Boat ride to Saint Martin's Island",
            "Beach BBQ under the stars",
            "Explore Chera Dwip"
        ],
        "inclusions": [
            "Hotel/Resort accommodation",
            "Breakfast & Dinner",
            "Dhaka-Teknaf AC bus and boat tickets"
        ],
        "exclusions": [
            "Lunch",
            "Personal activities"
        ],
        "image": "https://images.unsplash.com/photo-1617280325974-f9c5721a4862?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]
const international = [
    {
        "packageId": "INTL-001",
        "title": "Dubai City Highlights",
        "destination": "Dubai, UAE",
        "duration": "5 Days 4 Nights",
        "price": 55000,
        "currency": "BDT",
        "highlights": [
            "Visit Burj Khalifa and Dubai Mall",
            "Desert Safari with BBQ Dinner",
            "Explore Dubai Marina and Palm Jumeirah"
        ],
        "inclusions": [
            "4-star hotel accommodation",
            "Daily breakfast",
            "Airport transfers and city tours"
        ],
        "exclusions": [
            "Visa fees",
            "Personal expenses",
            "Optional activities"
        ],
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=60"
    },
    {
        "packageId": "INTL-002",
        "title": "Bangkok and Pattaya Escape",
        "destination": "Bangkok & Pattaya, Thailand",
        "duration": "6 Days 5 Nights",
        "price": 48000,
        "currency": "BDT",
        "highlights": [
            "Grand Palace and Wat Arun visit",
            "Coral Island tour",
            "Floating market experience"
        ],
        "inclusions": [
            "Hotel stays with breakfast",
            "Airport transfers",
            "Sightseeing tours with guide"
        ],
        "exclusions": [
            "Thailand visa",
            "Lunch and dinner",
            "Personal expenses"
        ],
        "image": "https://images.unsplash.com/photo-1653582245800-b36cdd7c7d0d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "packageId": "INTL-003",
        "title": "Singapore Family Tour",
        "destination": "Singapore",
        "duration": "4 Days 3 Nights",
        "price": 52000,
        "currency": "BDT",
        "highlights": [
            "Visit Universal Studios Singapore",
            "Gardens by the Bay",
            "Singapore Zoo Night Safari"
        ],
        "inclusions": [
            "3-star hotel accommodation",
            "Breakfast daily",
            "City tours and entrance fees"
        ],
        "exclusions": [
            "Singapore visa",
            "Lunch and dinner",
            "Personal shopping"
        ],
        "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "packageId": "INTL-004",
        "title": "Maldives Island Paradise",
        "destination": "Maldives",
        "duration": "5 Days 4 Nights",
        "price": 78000,
        "currency": "BDT",
        "highlights": [
            "Stay in beach villa",
            "Snorkeling and scuba diving",
            "Sunset cruise"
        ],
        "inclusions": [
            "Resort accommodation",
            "Breakfast and dinner",
            "Speedboat transfers"
        ],
        "exclusions": [
            "Maldives visa",
            "Personal expenses",
            "Water sports fees"
        ],
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=60"
    },
    {
        "packageId": "INTL-005",
        "title": "Turkey Cultural Experience",
        "destination": "Istanbul, Cappadocia, Turkey",
        "duration": "7 Days 6 Nights",
        "price": 85000,
        "currency": "BDT",
        "highlights": [
            "Explore Hagia Sophia and Blue Mosque",
            "Hot air balloon ride in Cappadocia",
            "Bosphorus cruise"
        ],
        "inclusions": [
            "4-star hotel stays",
            "Daily breakfast",
            "Domestic flights and tours"
        ],
        "exclusions": [
            "Turkey visa",
            "Lunch and dinner",
            "Personal expenses"
        ],
        "image": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const TourPackages = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
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