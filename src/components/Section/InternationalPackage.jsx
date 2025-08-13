import { Link } from 'react-router-dom';
import UseInternational from '../Hooks/UseInternational';

const InternationalPackage = () => {
    // Featured international tour packages data
    const [international] = UseInternational()
    const sliceTourPackages = international.slice(0, 3);
    const scrollToPackages = () => {
        const element = document.getElementById('international-tour-packages');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}></div>
                
                {/* Enhanced responsive hero content with consistent spacing */}
                <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full flex flex-col items-center justify-center py-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-5 w-[400px] lg:w-auto">
                        <span className='text-sky-600 '>International</span> Tour Packages
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                        Discover amazing destinations around the world with our exclusive international tour packages
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 w-full max-w-md">
                        <button
                            onClick={scrollToPackages}
                            className="cursor-pointer px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 shadow-lg text-sm sm:text-base w-full sm:w-auto"
                        >
                            Explore Packages
                        </button>
                        <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent hover:bg-white/10 text-white font-semibold rounded-lg transition duration-300 border-2 border-white text-sm sm:text-base w-full sm:w-auto">
                            Custom Tour
                        </button>
                    </div>
                </div>
                
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                    <svg
                        onClick={scrollToPackages}
                        className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>
            
            {/* Tour Packages Section */}
            <section id='international-tour-packages' className="py-12 sm:py-16 px-2 lg:px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                            International Packages
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
                            Discover our most popular international tour packages designed to create unforgettable memories
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {sliceTourPackages.map((tour) => (
                            <div key={tour.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col h-full">
                                <div className="relative">
                                    <img
                                        src={tour.image}
                                        alt={tour.title}
                                        className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-lg font-semibold text-sm sm:text-base">
                                        ৳{tour.price}
                                    </div>
                                </div>
                                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                                    <div className="flex-grow">
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                                            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-0">{tour.title}</h3>
                                            <span className="text-xs text-gray-500 flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {tour.location}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{tour.description}</p>
                                        <div className="flex items-center text-gray-500 mb-3 sm:mb-4 text-sm">
                                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>{tour.duration}</span>
                                        </div>
                                        <div className="mb-4 sm:mb-5">
                                            <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Highlights:</h4>
                                            <div className="flex flex-wrap gap-1 sm:gap-2">
                                                {tour.highlights.map((highlight, index) => (
                                                    <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 sm:px-3 py-1 rounded-full">
                                                        {highlight}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        to={`/packages/international/${tour.packageId}`}
                                        className="cursor-pointer text-center w-full py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 mt-auto text-sm sm:text-base"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link
                        to='/packages/international'
                        className='flex items-center justify-center w-full sm:w-72 mx-auto text-white mt-8 sm:mt-10 px-5 py-2.5 sm:py-3 bg-blue-500 cursor-pointer rounded-xl transition-colors hover:bg-blue-800 duration-300 text-sm sm:text-base'
                    >
                        See More Packages
                    </Link>
                </div>
            </section>
            
            {/* Introduction Section */}
            <section className="py-12 sm:py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="International Travel"
                                className="rounded-2xl shadow-xl w-full h-auto"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                                Why <span className='text-sky-600'>Choose</span> Our International Tours?
                            </h3>
                            <ul className="space-y-3 sm:space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full mr-3 sm:mr-4 mt-0.5 sm:mt-1 flex-shrink-0">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-base sm:text-lg text-gray-800 mb-1">Expertly Curated Itineraries</h4>
                                        <p className="text-gray-600 text-sm sm:text-base">Our travel experts design each tour to include the best experiences each destination has to offer.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full mr-3 sm:mr-4 mt-0.5 sm:mt-1 flex-shrink-0">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-base sm:text-lg text-gray-800 mb-1">All-Inclusive Packages</h4>
                                        <p className="text-gray-600 text-sm sm:text-base">Flights, accommodations, meals, and activities - we take care of everything for a hassle-free vacation.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full mr-3 sm:mr-4 mt-0.5 sm:mt-1 flex-shrink-0">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-base sm:text-lg text-gray-800 mb-1">Local Expert Guides</h4>
                                        <p className="text-gray-600 text-sm sm:text-base">Experience each destination through the eyes of knowledgeable local guides.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InternationalPackage;