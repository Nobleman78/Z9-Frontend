const travelNews = [
    {
        id: 1,
        title: "Bangladesh Launches New Tourist Visa Process",
        date: "2025-08-10",
        source: "The Daily Star",
        link: "https://www.thedailystar.net/news/travel-visa-update",
        image: "https://images.unsplash.com/photo-1454496406107-dc34337da8d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        summary: "The government has introduced a simplified online application process for tourist visas to encourage more foreign visitors."
    },
    {
        id: 2,
        title: "Cox’s Bazar Beach Festival Announced",
        date: "2025-08-05",
        source: "Prothom Alo",
        link: "https://www.prothomalo.com/travel/coxs-bazar-festival",
        image: "https://images.unsplash.com/photo-1587302525159-2363f54affd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y294J3MlMjBiYXphcnxlbnwwfHwwfHx8MA%3D%3D",
        summary: "The annual Cox’s Bazar Beach Festival will feature live music, local cuisine, and cultural performances."
    },
    {
        id: 3,
        title: "New Luxury Cruise Route Between Dhaka and Sundarbans",
        date: "2025-07-28",
        source: "BDNews24",
        link: "https://bdnews24.com/travel/cruise-route",
        image: "https://images.unsplash.com/photo-1551615577-1c7e180a77ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VuZGFyYmFufGVufDB8fDB8fHww",
        summary: "A new luxury cruise service now connects Dhaka to the Sundarbans, offering sightseeing, wildlife tours, and fine dining."
    }
];

const News = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Travel News Portal</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Stay updated with the latest travel news, destinations, and events from Bangladesh and around the world
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {travelNews.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                                        {item.source}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 mb-5 line-clamp-3">
                                    {item.summary}
                                </p>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                                >
                                    Read Full Article
                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;