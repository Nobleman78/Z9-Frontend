
// Benefits data
const benefits = [
    {
        title: "Expert Local Guides",
        description: "Our knowledgeable guides provide authentic insights into Bangladesh's culture and history.",
        icon: "https://cdn-icons-png.flaticon.com/128/1144/1144769.png"
    },
    {
        title: "Comfortable Accommodations",
        description: "Stay in carefully selected hotels and resorts that ensure comfort and safety.",
        icon: "https://cdn-icons-png.flaticon.com/128/2767/2767322.png"
    },
    {
        title: "Hassle-Free Travel",
        description: "We handle all transportation, permits, and logistics for a seamless experience.",
        icon: "https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
    },
    {
        title: "Flexible Itineraries",
        description: "Customizable tour plans that cater to your interests and schedule.",
        icon: "https://cdn-icons-png.flaticon.com/128/2092/2092064.png"
    }
];

const Benefits = () => {
    return (
        <div className="bg-gradient-to-r from-sky-100 via-teal-200 to-blue-200">
            {/* Benefits Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">Why <span className="text-blue-500">Travel</span> With Us</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto lg:text-lg">
                            We're committed to providing exceptional travel experiences that exceed your expectations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 transition-all duration-300 hover:shadow-lg">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                                    <img src={benefit.icon} alt={benefit.title} className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Benefits;