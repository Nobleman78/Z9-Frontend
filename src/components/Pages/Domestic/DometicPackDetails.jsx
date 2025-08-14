import { useParams, useNavigate, Link } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaMoneyBillWave, FaStar, FaCheck, FaTimes, FaArrowLeft } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import UseDomestic from "../../Hooks/UseDomestic";
import { Tooltip } from 'react-tooltip'

const DomesticPackageDetails = () => {
    const [domestic] = UseDomestic()
    const { id } = useParams();
    const navigate = useNavigate();
    const packageDetails = domestic.find((pack) => pack.packageId === id);

    if (!packageDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
                    <div className="text-6xl mb-4"></div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Package Not Found</h2>
                    <p className="text-gray-600 mb-6">The package you're looking for doesn't exist or has been removed.</p>
                    <button
                        onClick={() => navigate('/packages/domestic')}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
                    >
                        Back to Packages
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className='text-xs px-3 flex items-center py-4 lg:px-15 lg:text-lg bg-gray-50'>
                <Link to='/' className='flex items-center hover:underline '> Home  <IoIosArrowForward /> </Link><Link className="hover:underline" to='/packages/domestic'>Domestic Packages</Link><IoIosArrowForward /><span className='text-blue-600'>{packageDetails.title}</span>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 ">
                <div className=" px-3 lg:px-15 py-8">
                    {/* Header with back button */}
                    <div className="mb-8 flex items-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Package Details</h1>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        {/* Package Image */}
                        <div className="relative h-80 md:h-96">
                            <img
                                src={packageDetails.image}
                                alt={packageDetails.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                <div className="p-6 text-white">
                                    <div className="flex items-center mb-2">
                                        <FaStar className="text-yellow-400 mr-1" />
                                        <span className="font-medium">4.8 (128 reviews)</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold">{packageDetails.title}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 md:p-8">
                            {/* Basic Info */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                        <FaMapMarkerAlt className="text-indigo-600 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm text-gray-500">Destination</h3>
                                        <p className="font-semibold text-gray-800">{packageDetails.destination}</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                        <FaClock className="text-indigo-600 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm text-gray-500">Duration</h3>
                                        <p className="font-semibold text-gray-800">{packageDetails.duration}</p>
                                    </div>
                                </div>

                                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                        <FaMoneyBillWave className="text-indigo-600 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm text-gray-500">Price</h3>
                                        <p className="font-semibold text-gray-800">{packageDetails.currency} {packageDetails.price.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Details Sections */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                                {/* Highlights */}
                                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-teal-100 p-2 rounded-lg mr-3">
                                            <FaStar className="text-teal-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-teal-800">Highlights</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {packageDetails.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="text-teal-500 mr-2 mt-1">•</span>
                                                <span className="text-gray-700">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Inclusions */}
                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-green-100 p-2 rounded-lg mr-3">
                                            <FaCheck className="text-green-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-green-800">Inclusions</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {packageDetails.inclusions.map((inclusion, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">•</span>
                                                <span className="text-gray-700">{inclusion}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Exclusions */}
                                <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border border-red-100">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-2 rounded-lg mr-3">
                                            <FaTimes className="text-red-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-red-800">Exclusions</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {packageDetails.exclusions.map((exclusion, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="text-red-500 mr-2 mt-1">•</span>
                                                <span className="text-gray-700">{exclusion}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* CTA Section */}
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6 bg-gray-50 rounded-xl">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Ready to book this package?</h3>
                                    <p className="text-gray-600">Secure your spot with just a few clicks</p>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => navigate('/packages/domestic')}
                                        className="px-6 py-3 border cursor-pointer border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                        View Other Packages
                                    </button>
                                    <Tooltip id="my-tooltip" />
                                    <button data-tooltip-id="my-tooltip" data-tooltip-content='Online Booking Feature is not Available' className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-8 bg-white rounded-xl shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Need more information?</h3>
                        <p className="text-gray-600 mb-4">Our travel experts are available to help you with any questions about this package.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to='/contact' className="px-5 py-2.5 bg-indigo-500 text-white font-medium cursor-pointer rounded-lg hover:bg-indigo-600 transition-colors duration-300">
                                Contact Us
                            </Link>
                            <Tooltip id="my-second-id"></Tooltip>
                            <button data-tooltip-id="my-second-id" data-tooltip-content='Itinerary not added yet.' className="px-5 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                Download Itinerary
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DomesticPackageDetails;