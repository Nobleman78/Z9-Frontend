import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import UseVisa from '../../Hooks/UseVisa';
import { Helmet } from 'react-helmet-async';
import Preloader from '../../Utility/Preloader';
import { FaArrowDown } from "react-icons/fa6";

const VisaService = () => {
    const [visa, , , isFetching] = UseVisa();
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {isFetching && (
                <div className="absolute inset-0 z-250 flex items-center justify-center bg-white bg-opacity-70">
                    <Preloader />
                </div>
            )}
            <Helmet>
                <title>Visa Services | Z9 Air Travels</title>
                <meta
                    name="description"
                    content="Explore global visa services with Z9 Air Travels. Get guidance for visa requirements, fees, and documentation for popular international destinations."
                />
                <meta
                    name="keywords"
                    content="Visa services, international travel, visa fees, visa application, Z9 Air Travels"
                />
                <link rel="canonical" href="https://www.z9airtravels.com/visa-services" />

                {/* Open Graph */}
                <meta property="og:title" content="Visa Services | Z9 Air Travels" />
                <meta
                    property="og:description"
                    content="Expert guidance for international travel visas. Check visa requirements and fees for top destinations."
                />
                <meta property="og:url" content="https://www.z9airtravels.com/visa-services" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.z9airtravels.com/images/visa-services-og.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Visa Services | Z9 Air Travels" />
                <meta
                    name="twitter:description"
                    content="Get expert assistance for visa applications and travel documentation with Z9 Air Travels."
                />
                <meta name="twitter:image" content="https://www.z9airtravels.com/images/visa-services-og.jpg" />
            </Helmet>

            {/* Hero Section */}
            <div className='flex items-center py-4 px-2 lg:px-15 text-lg'>
                <Link to='/' className='flex items-center hover:underline'>
                    Home <IoIosArrowForward />
                </Link>
                <span className='text-blue-600'>Visa Services</span>
            </div>

            <div className="relative bg-gradient-to-r from-blue-400  to-indigo-900 py-16 md:py-24">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Global <span className='text-purple-600'>Visa</span> Services
                    </h1>
                    <p className="lg:text-xl text-blue-100 mb-8">
                        Expert guidance for your international travel needs
                    </p>
                    <FaArrowDown className='flex items-center justify-center w-full text-4xl text-white animate-bounce' />
                </div>
            </div>

            {/* Cards Section */}
            <div className="container mx-auto py-12 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Popular Visa Destinations</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Explore visa requirements and fees for our most requested countries
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {visa.map((country) => {
                        const firstFeeType = Object.keys(country.Fees)[0];
                        const firstFeeAmount = country.Fees[firstFeeType];

                        return (
                            <div
                                key={country.CountryName}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                                <div className="relative">
                                    <img
                                        src={country.image}
                                        loading='lazy'
                                        alt={country.CountryName}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h3 className="text-xl font-bold text-white">{country.CountryName}</h3>
                                    </div>
                                </div>

                                <div className="p-5 flex-grow flex flex-col">
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-gray-500">Starting Fee</span>
                                            <span className="text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded-full">Visa</span>
                                        </div>
                                        <p className="text-2xl font-bold text-blue-600">{firstFeeAmount}</p>
                                        <p className="text-xs text-gray-500 mt-1">{firstFeeType}</p>
                                    </div>

                                    <div className="mt-auto">
                                        <Link
                                            to={`/visadetails/${encodeURIComponent(country.CountryName.replace(/\s+/g, '-').toLowerCase())}`}
                                            state={{ countryData: country }}
                                            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 text-center">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-white rounded-xl shadow-md lg:p-8 max-w-7xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 p-5 lg:p-0">Need Assistance?</h3>
                        <p className="text-gray-600 mb-6 px-5 lg:px-0">
                            Our visa experts are ready to help you with your application process
                        </p>
                        <div className='flex justify-center items-center gap-2 lg:gap-6 pb-6'>
                            <button className="bg-blue-600 text-xs lg:text-lg hover:bg-blue-700 text-white font-medium py-3 px-3 lg:px-8  rounded-lg transition duration-300">
                                Contact Our Team
                            </button>
                            <p className='bg-sky-800 text-xs lg:text-lg text-white px-3 lg:px-8 py-3 rounded-lg'>+8801710-411019</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaService;
