import React from 'react';
import govt from '../../assets/Appriciated/Govt.png';
import civil from '../../assets/Appriciated/Civil.png';

const Appricated = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
                        Our Appreciated Partners

                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
                        We extend our deepest gratitude to these organizations for their invaluable support and collaboration in our mission.
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Government Partner Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                        <div className="h-64 overflow-hidden bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center p-8">
                            <img
                                src={govt}
                                alt="Government Partner"
                                className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Government Partners</h3>
                            </div>
                            <p className="text-gray-600 mb-6">
                                We are honored to work alongside various government agencies that provide essential support and guidance for our initiatives.
                            </p>

                        </div>
                    </div>

                    {/* Civil Society Partner Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                        <div className="h-64 overflow-hidden bg-gradient-to-r from-green-100 to-teal-100 flex items-center justify-center p-8">
                            <img
                                src={civil}
                                alt="Civil Society Partner"
                                className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Civil Aviation Authority</h3>
                            </div>
                            <p className="text-gray-600 mb-6">
                                Our collaboration with Civil Aviation Authority organizations strengthens our community impact and outreach.
                            </p>
                        </div>
                    </div> 
                </div>
               
            </div>
        </section>
    );
};

export default Appricated;