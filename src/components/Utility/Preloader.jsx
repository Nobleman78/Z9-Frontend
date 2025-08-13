
const Preloader = () => {

    return (
        <div className='fixed inset-0 z-[9999] bg-gradient-to-br from-white via-white to-white flex flex-col justify-center items-center'>
            {/* Cantina-Arc */}
            <div className='relative w-20 h-20 flex items-center justify-center'>
                <div className='cantina-arc text-blue-500 w-30 h-30 animate-cantina-spin'></div>
                <div className='cantina-arc text-sky-500 w-25 h-25 animate-cantina-spin delay-100'></div>
                <div className='cantina-arc text-black w-20 h-20 animate-cantina-spin delay-200'></div>
            </div>
        </div>
    );
};

export default Preloader;