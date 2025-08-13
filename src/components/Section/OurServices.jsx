import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: 'https://cdn-icons-png.flaticon.com/128/15560/15560097.png',
        title: 'Visa Service',
        description: 'Hassle-free visa processing for all countries',
        path:'/visaservices'
    },
    {
        icon: 'https://cdn-icons-png.flaticon.com/128/11362/11362657.png',
        title: 'Tour Packages',
        description: 'Curated travel experiences for every budget',
        path:'/tourpackages'
    },
    {
        icon: 'https://cdn-icons-png.flaticon.com/128/1277/1277454.png',
        title: 'Travels Information',
        description: 'Explore the beauty of Bangladesh with our guided tours',
        path:'/news'
    },
    {
        icon: 'https://cdn-icons-png.flaticon.com/128/432/432312.png',
        title: 'Air Ticket',
        description: 'Best deals on domestic and international flights',
        path:'/airticket'
    },
];

const OurServices = () => {
    return (
        <section 
            className="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=PYs9JKctmfYj5VNwSQp5QcxHmaPsEGuYEIMT_rFM3ow=')`
            }}
        >
            {/* Overlay for readability */}
            {/* <div className="absolute inset-0 bg-white/50"></div> */}

            <div className='max-w-7xl mx-auto relative z-10'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl lg:text-6xl font-bold text-white mb-5 tracking-tight'>
                        <span className='text-sky-600'>_Our</span> <span className=' text-white px-2'>Services</span><span>_</span>
                    </h2>
                    <p className='text-white max-w-2xl mx-auto text-md lg:text-lg'>
                        Comprehensive travel solutions designed to make your journey seamless and unforgettable
                    </p>
                    <div className='mt-6 w-24 h-1 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 mx-auto rounded-full'></div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className='group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 flex flex-col items-center text-center p-8 border border-gray-100 relative'
                        >
                            <div className='w-24 h-24 rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md'>
                                <img src={service.icon} loading='lazy' alt={service.title} className='w-12 h-12 object-contain' />
                            </div>
                            <h3 className='text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300'>{service.title}</h3>
                            <p className='text-gray-600 mb-6 flex-grow'>{service.description}</p>
                            <Link 
                                to={service.path} 
                                className='mt-auto cursor-pointer px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1'
                            >
                                Explore Service
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
