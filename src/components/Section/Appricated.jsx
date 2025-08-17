import govt from '../../assets/Appriciated/Govt.png';
import civil from '../../assets/Appriciated/Civil.png';

const Appricated = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
                        Appreciated By
                    </h2>
                </div>
                {/* Partners Grid */}
                <div className="flex items-center justify-center gap-20">
                    {/* Government Partner Card */}
                    <div className=" rounded-2xl  overflow-hidden transform transition-all duration-300  ">
                        <img
                            src={govt}
                            alt="Government Partner"
                            className="max-h-full max-w-full object-contain transition-transform duration-500 "
                        />
                    </div>

                    {/* Civil Society Partner Card */}
                    <div className=" rounded-2xl  overflow-hidden transform transition-all duration-300  ">
                        <img
                            src={civil}
                            alt="Civil Society Partner"
                            className="max-h-full max-w-full object-contain transition-transform duration-500 "
                        />
                    </div>
                </div>
                <h2 className='text-2xl italic mt-10 bg-white py-3 rounded text-orange-700 flex justify-center' behavior="" direction="">" 1st Govt accredited Travel Agency in Shariatpur "</h2>
            </div>
        </section>
    );
};

export default Appricated;