import React from 'react';
import { Link } from 'react-router-dom';
import visaService from '../../assets/Services/Visa_Services.avif';
import ticketService from '../../assets/Services/Air_Ticket.avif';
import tourService from '../../assets/Services/Tour_Services.avif';
import travelInformation from '../../assets/Services/Travel_Information.avif';

const services = [
    {
        icon: visaService,
        title: 'Visa Service',
        description: 'Hassle-free visa processing for all countries',
        path: '/visaservices'
    },
    {
        icon: tourService,
        title: 'Tour Packages',
        description: 'Curated travel experiences for every budget',
        path: '/tourpackages'
    },
    {
        icon: travelInformation,
        title: 'Travel Information',
        description: 'Explore the beauty of Bangladesh with our guided tours',
        path: '/news'
    },
    {
        icon: ticketService,
        title: 'Air Ticket',
        description: 'Best deals on domestic and international flights',
        path: '/airticket'
    },
];

const ServiceCard = ({ service, index }) => (
    <div className=" bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 flex flex-col text-center  border border-gray-100 relative">
        {/* Full width image */}
        <div className="w-full h-32 lg:h-60 mb-4 overflow-hidden rounded-2xl">
            <img
                src={service.icon}
                loading="lazy"
                alt={`${service.title} icon`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </div>

        <h3
            id={`service-title-${index}`}
            className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2 lg:mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {service.title}
        </h3>
        <p className="text-gray-600 mb-4 lg:mb-6 flex-grow">{service.description}</p>
        <div className='mb-4'>
            <Link
                to={service.path}
                className="mt-auto inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                aria-label={`Explore ${service.title}`}>
                Explore Service
            </Link>
        </div>
    </div>
);


const OurServices = () => (
    <section
        className="relative py-12 lg:py-24 px-4 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage:
                "url('https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=PYs9JKctmfYj5VNwSQp5QcxHmaPsEGuYEIMT_rFM3ow=')"
        }}
    >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 lg:mb-20">
                <h2
                    id="services-heading"
                    className="text-3xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
                >
                    <span className="text-orange-400">_Our</span> Services <span className="text-orange-400">_</span>
                </h2>
                <p className="text-white max-w-2xl mx-auto text-md lg:text-lg">
                    Comprehensive travel solutions designed to make your journey seamless and unforgettable
                </p>
                <div className="mt-6 w-24 h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 mx-auto rounded-full animate-pulse"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </div>
    </section>
);

export default OurServices;
