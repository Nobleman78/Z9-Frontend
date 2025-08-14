import React from 'react';
import { Link } from 'react-router-dom';


const services = [
    {
        icon: 'https://cdn-icons-png.flaticon.com/128/15560/15560097.png',
        title: 'Visa Service',
        description: 'Hassle-free visa processing for all countries',
        path: '/visaservices'
    },
    {
        icon: 'https://cdn-icons-png.flaticon.com/128/11362/11362657.png',
        title: 'Tour Packages',
        description: 'Curated travel experiences for every budget',
        path: '/tourpackages'
    },
    {
        icon: 'https://cdn-icons-png.flaticon.com/128/1277/1277454.png',
        title: 'Travels Information',
        description: 'Explore the beauty of Bangladesh with our guided tours',
        path: '/news'
    },
    {
        icon: 'https://cdn-icons-png.flaticon.com/128/432/432312.png',
        title: 'Air Ticket',
        description: 'Best deals on domestic and international flights',
        path: '/airticket'
    },
];

const ServiceCard = ({ service, index }) => {
    const [imageError, setImageError] = React.useState(false);
    
    return (
        <div 
            className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 flex flex-col items-center text-center p-3 lg:p-8 border border-gray-100 relative"
            role="article"
            aria-labelledby={`service-title-${index}`}>
            <div className="w-15 h-15 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                {imageError ? (
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </div>
                ) : (
                    <img 
                        src={service.icon} 
                        loading="lazy" 
                        alt={`${service.title} icon`} 
                        className="h-10 w-10 lg:w-12 lg:h-12 object-contain"
                        onError={() => setImageError(true)}
                    />
                )}
            </div>
            <h3 
                id={`service-title-${index}`}
                className="text-2xl font-bold text-gray-800 mb-2 lg:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
            </h3>
            <p className="text-gray-600 mb-3 lg:mb-6 flex-grow">
                {service.description}
            </p>
            <Link 
                to={service.path} 
                className="mt-auto cursor-pointer px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                aria-label={`Explore ${service.title}`}>
                Explore Service
            </Link>
        </div>
    );
};

const OurServices = () => {
    return (
        <section 
            className="relative py-10 lg:py-20 px-4 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=PYs9JKctmfYj5VNwSQp5QcxHmaPsEGuYEIMT_rFM3ow=')`
            }}>
          
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-10 lg:mb-16">
                    <h2 
                        id="services-heading"
                        className="text-3xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
                        <span>_Our</span> <span className="text-white px-2">Services</span><span>_</span>
                    </h2>   
                    <p className="text-white max-w-sm lg:max-w-2xl mx-auto text-md lg:text-lg">
                        Comprehensive travel solutions designed to make your journey seamless and unforgettable
                    </p>
                    <div className="mt-6 w-24 h-1 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;