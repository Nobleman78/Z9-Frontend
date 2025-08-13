import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const AirTicket = () => {
    return (
        <div>
            <main>
                <div className='flex items-center py-4 px-2 lg:px-15 text-lg bg-gray-50'>
                    <Link to='/' className='flex items-center hover:underline '> Home  <IoIosArrowForward /> </Link><span className='text-blue-600'>Air Ticketing</span>
                </div>
                {/* Hero Section */}
                <div className="relative bg-gradient-to-r from-sky-800 to-indigo-900 py-16 md:py-24">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Global <span className="text-purple-600">Ticket</span> Services</h1>
                            <p className="lg:text-xl text-blue-100 mb-8">Buy Ticket and Explore Different Countries.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <marquee className='text-xl lg:text-5xl italic text-red-500 py-5' behavior="" direction="">Online Ticket Booking System Not Available Right Now !</marquee>
                </div>
                <div className="  py-20 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl shadow-lg">
                    <div className="text-center space-y-6">
                        <h1 className="text-2xl lg:text-5xl font-bold text-sky-700 animate-bounce">
                            Online Ticketing Service
                        </h1>
                        <p className="text-xl md:text-3xl text-gray-700 font-medium">
                            Coming Soon...
                        </p>
                        <p className="text-md md:text-2xl text-gray-600">
                            For now, please visit our office for bookings.
                        </p>
                        <a target="_blank" href="https://www.google.com/maps/place/Z9+Air+Travels/@23.2725026,90.4771176,16z/data=!4m14!1m7!3m6!1s0x37550505d63444df:0x99ca3177d9456e49!2sZ9+Air+Travels!8m2!3d23.2726281!4d90.4775017!16s%2Fg%2F11lwcnrl9s!3m5!1s0x37550505d63444df:0x99ca3177d9456e49!8m2!3d23.2726281!4d90.4775017!16s%2Fg%2F11lwcnrl9s?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D" className="mt-6 px-8 py-3 bg-sky-600 text-white rounded-full shadow-md hover:bg-sky-700 transition duration-300">
                            Find Our Office
                        </a>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default AirTicket;