
const CTA = () => {
    return (
        <div>
            {/* CTA Section */}
            <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready for Your Bangladesh Adventure?</h2>
                    <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
                        Let our travel experts create the perfect domestic tour package tailored to your preferences
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg">
                            Book Now
                        </button>
                        <button className="px-8 py-3 bg-transparent hover:bg-white/10 text-white font-semibold rounded-lg transition duration-300 border-2 border-white">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CTA;