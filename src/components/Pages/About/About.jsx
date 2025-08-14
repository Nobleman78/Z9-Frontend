import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div className="bg-white py-12">
            <Helmet>
                <title>About Us | Z9 Air Travels</title>
                <meta
                    name="description"
                    content="Learn about Z9 Air Travels - your trusted partner for visa services, air tickets, and customized travel packages worldwide."
                />
                <meta
                    name="keywords"
                    content="About Z9 Air Travels, travel agency, visa services, flight booking, tour packages"
                />
                <link rel="canonical" href="https://www.z9airtravels.com/about" />

                {/* Open Graph for Social Sharing */}
                <meta property="og:title" content="About Us | Z9 Air Travels" />
                <meta
                    property="og:description"
                    content="Discover who we are at Z9 Air Travels. We provide visa assistance, air tickets, and memorable travel experiences."
                />
                <meta property="og:url" content="https://www.z9airtravels.com/about" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.z9airtravels.com/images/about-og.jpg" />
            </Helmet>

            <div className="container mx-auto px-4">
                {/* Main Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        About Z9 Air Travels
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Your journey begins with us.
                    </p>
                </div>

                {/* Introduction Section */}
                <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-8">
                    <h2 className="text-3xl font-semibold text-gray-700 mb-4">
                        Our Story
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Founded with a passion for exploration and a commitment to exceptional service, Z9 Air Travels is more than just a travel agency—we are your partners in adventure. We believe that every trip should be a seamless, unforgettable experience, and we work tirelessly to make that a reality for our clients.
                    </p>
                </section>

                {/* Our Mission Section */}
                <section className="bg-white p-8 rounded-lg shadow-md mb-8">
                    <h2 className="text-3xl font-semibold text-gray-700 mb-4">
                        Our Mission
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Our mission is simple: to inspire and enable incredible journeys. Whether you're planning a relaxing beach getaway, an adventurous trek through the mountains, or a business trip, we provide personalized service and expert advice to ensure every detail is handled with care.
                    </p>
                </section>

                {/* Why Choose Us Section */}
                <section className="bg-gray-100 p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-gray-700 mb-4">
                        Why Choose Us?
                    </h2>
                    <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
                        <li>
                            <span className="font-medium">Personalized Service:</span> We tailor every itinerary to your unique preferences.
                        </li>
                        <li>
                            <span className="font-medium">Expert Knowledge:</span> Our team has extensive experience and insight into destinations worldwide.
                        </li>
                        <li>
                            <span className="font-medium">Best Support:</span> We're here for you before, during, and after your trip.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default About;
