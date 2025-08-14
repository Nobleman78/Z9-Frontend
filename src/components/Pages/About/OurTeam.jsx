import React from "react";
import { Helmet } from "react-helmet-async";

const OurTeam = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Shakil Ahmed",
            role: "Founder & CEO",
            imageUrl: "https://via.placeholder.com/150",
            imageAlt: "Portrait of Shakil Ahmed, Founder & CEO"
        },
        {
            id: 2,
            name: "Karim Hasan",
            role: "Lead Travel Agent",
            imageUrl: "https://via.placeholder.com/150",
            imageAlt: "Portrait of Karim Hasan, Lead Travel Agent"
        },
        {
            id: 3,
            name: "Rahim Hasan",
            role: "Customer Support Specialist",
            imageUrl: "https://via.placeholder.com/150",
            imageAlt: "Portrait of Rahim Hasan, Customer Support Specialist"
        }
    ];

    return (
        <section className="relative py-20 bg-gradient-to-br from-blue-800 to-indigo-100 overflow-hidden">
            <Helmet>
                <title>Our Team | Z9 Air Travels</title>
                <meta
                    name="description"
                    content="Meet the dedicated team at Z9 Air Travels, committed to providing exceptional travel experiences, visa assistance, and personalized support worldwide."
                />
                <meta
                    name="keywords"
                    content="Z9 Air Travels team, travel experts, travel agency staff, visa services, air tickets, tour packages"
                />
                <link rel="canonical" href="https://www.z9airtravels.com/our-team" />

                {/* Open Graph */}
                <meta property="og:title" content="Our Team | Z9 Air Travels" />
                <meta
                    property="og:description"
                    content="Meet our travel experts at Z9 Air Travels, dedicated to making your journeys unforgettable."
                />
                <meta property="og:url" content="https://www.z9airtravels.com/our-team" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.z9airtravels.com/images/team-og.jpg" />
            </Helmet>

            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white  to-white mb-4 tracking-tight">
                        Meet Our Team
                    </h2>
                    <p className="text-xl text-white leading-relaxed">
                        We're a dedicated group of travel enthusiasts committed to making your journey unforgettable.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-white to-purple-500 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamMembers.map((member) => (
                        <TeamMemberCard key={member.id} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TeamMemberCard = ({ member }) => {
    return (
        <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>

            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 transform group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-80"></div>

                <div className="relative pt-8 px-8 pb-6 z-10">
                    <div className="relative mx-auto w-40 h-40 mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-30 transition duration-300"></div>
                        <div className="absolute inset-2 bg-white rounded-full shadow-lg"></div>
                        <img
                            src={member.imageUrl}
                            alt={member.imageAlt}
                            className="absolute inset-4 w-32 h-32 rounded-full object-cover mx-auto"
                        />
                    </div>

                    <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-indigo-700 transition-colors duration-300">
                            {member.name}
                        </h3>
                        <p className="text-indigo-600 font-medium mb-4">
                            {member.role}
                        </p>

                        <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mb-4 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
