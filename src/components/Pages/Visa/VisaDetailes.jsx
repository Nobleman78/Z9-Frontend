import { useState, useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useParams, useLocation, Link } from 'react-router-dom';
import UseVisa from '../../Hooks/UseVisa';


const VisaDetailes = () => {
    const [visa] = UseVisa()
    const { countryName } = useParams();
    const location = useLocation();
    const [country, setCountry] = useState(null);
    const [activeTab, setActiveTab] = useState('business');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // First check if country data is passed via location state
        if (location.state?.countryData) {
            setCountry(location.state.countryData);
            setLoading(false);
        } else {
            // Otherwise find in the array
            const decodedCountryName = decodeURIComponent(countryName.replace(/-/g, ' ').toLowerCase());
            const foundCountry = visa.find(
                c => c.CountryName.toLowerCase() === decodedCountryName.toLowerCase()
            );

            setCountry(foundCountry || null);
            setLoading(false);
        }
    }, [visa,countryName, location.state]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading visa information...</p>
                </div>
            </div>
        );
    }

    if (!country) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center max-w-md mx-auto p-8">
                    <div className="text-5xl text-gray-300 mb-4">🌍</div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Country Not Found</h1>
                    <p className="text-gray-600 mb-6">
                        We couldn't find visa information for the requested country.
                    </p>
                    <button
                        onClick={() => window.history.back()}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className='flex items-center py-4 px-2 lg:px-15 text-lg'>
                <Link to='/' className='flex items-center hover:underline '> Home  <IoIosArrowForward /> </Link><span >Visa Services </span><IoIosArrowForward/><span className='text-blue-600'>{country.CountryName}</span>
            </div>
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 py-16 md:py-24">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            {country.CountryName} Visa Information
                        </h1>
                        <p className="text-md lg:text-xl text-blue-100 max-w-2xl mx-auto">
                            Requirements, fees, and application details for your travel to {country.CountryName}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-12 px-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
                    <div className="md:flex">
                        <div className="md:w-1/3">
                            <img
                                src={country.image}
                                alt={country.CountryName}
                                className="w-full h-64 md:h-full object-cover"
                            />
                        </div>
                        <div className="md:w-2/3 p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Visa Processing Fees</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 rounded-lg">
                                {Object.entries(country.Fees).map(([feeType, amount]) => (
                                    <div key={feeType} className="rounded-lg p-4 space-y-4 w-[500px]">
                                        <p className='text-xl font-semibold'>{country.CountryName} (<span>{country.Type}</span>)</p>
                                        <div className='flex justify-between text-gray-600'>
                                            <div>
                                                <p>Validity</p>
                                                <p className='text-black text-lg'>{country.Validity}</p>
                                            </div>
                                            <div>
                                                <p>Max Stay</p>
                                                <p className='text-black text-lg'>{country.MaxStay}</p>
                                            </div>
                                        </div>
                                        <p className="text-xl font-bold text-blue-600 mt-1">{amount}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-8 bg-white p-6 rounded-lg shadow-md'>
                    <h2 className='text-2xl'>Required Documents for Visa Processing</h2>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="border-b border-gray-200">
                        <nav className="flex -mb-px">
                            {[
                                { id: 'business', label: 'For Business', key: 'For Businessman' },
                                { id: 'tourist', label: 'For Tourists', key: 'For Tourist' },
                                { id: 'student', label: 'For Students', key: 'For Students' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`py-4 px-6 text-center font-medium text-sm md:text-base ${activeTab === tab.id
                                        ? 'text-blue-600 border-b-2 border-blue-600'
                                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="p-6 md:p-8">
                        {activeTab === 'business' && (
                            <div>
                                <div className="flex items-center mb-6">
                                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">Business Visa</h3>
                                        <p className="text-gray-600">{country.Requirements['For Businessman']['Visa Type']}</p>
                                    </div>
                                </div>

                                <h4 className="font-medium text-gray-700 mb-3">Required Documents:</h4>
                                <ul className="space-y-2">
                                    {country.Requirements['For Businessman']['Documents'].map((doc, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-600">{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeTab === 'tourist' && (
                            <div>
                                <div className="flex items-center mb-6">
                                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">Tourist Visa</h3>
                                        <p className="text-gray-600">{country.Requirements['For Tourist']['Visa Type']}</p>
                                    </div>
                                </div>

                                <h4 className="font-medium text-gray-700 mb-3">Required Documents:</h4>
                                <ul className="space-y-2">
                                    {country.Requirements['For Tourist']['Documents'].map((doc, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-600">{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeTab === 'student' && (
                            <div>
                                <div className="flex items-center mb-6">
                                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">Student Visa</h3>
                                        <p className="text-gray-600">{country.Requirements['For Students']['Visa Type']}</p>
                                    </div>
                                </div>

                                <h4 className="font-medium text-gray-700 mb-3">Required Documents:</h4>
                                <ul className="space-y-2">
                                    {country.Requirements['For Students']['Documents'].map((doc, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-600">{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-lg overflow-hidden mt-12 p-8 '>
                    <h2 className='text-2xl font-semibold mb-2'>Important Notes</h2>
                    <p className='text-justify'>Please contact the Visa department for Document processing after the payment. Visa rate may change without any prior notice.</p>
                </div>
            </div>
        </div>
    );
};

export default VisaDetailes;