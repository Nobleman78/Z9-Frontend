import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
        alt: 'Mountain landscape'
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1437846972679-9e6e537be46e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Ocean view'
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1612278675615-7b093b07772d?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Forest path'
    }
];

const HeroSection = () => {
    return (
        <div className='w-full relative'>
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4 sm:px-6 md:px-8 lg:px-12">
                {/* Company name with responsive sizing */}
                <div className="text-white text-[1.5rem] sm:text-[1.6rem] md:text-[1.75rem] lg:text-[2rem] xl:text-[3rem] tracking-widest mb-2 sm:mb-3 md:mb-4 font-light">
                    "<span className='text-transparent text-7xl bg-clip-text bg-gradient-to-r from-orange-400 via-red-600 to-orange-400 transition-colors font-bold'>Z9</span> AIR TRAVELS"
                </div>

                {/* Main heading with responsive typography */}
                <h1 className="text-[1.75rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[4rem] 2xl:text-[4rem] font-light text-white drop-shadow-lg mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-wide leading-tight sm:leading-tight md:leading-tight lg:leading-tight"> 
                    <span className="block mt-1 sm:mt-1 md:mt-2">_Discover Your Next Adventure_</span>
                </h1>   
            </div>
            <main className='relative w-full '>

                <Swiper
                    spaceBetween={30}
                    effect='fade'
                    navigation={true}
                    speed={2000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    className='mySwiper w-full h-full'>
                    {slides.map((slide, index) => (
                        <SwiperSlide key={slide.id}>
                            <img src={slide.placeholder} data-src={`${slide.url}?auto=format&fit=crop&q=70&w=1920&fm=webp`}
                                srcSet={` 
                                    ${slide.url}?auto=format&fit=crop&q=70&w=640&fm=webp 640w, 
                                    ${slide.url}?auto=format&fit=crop&q=70&w=750&fm=webp 750w, 
                                    ${slide.url}?auto=format&fit=crop&q=70&w=828&fm=webp 828w,
                                    ${slide.url}?auto=format&fit=crop&q=70&w=1080&fm=webp 1080w, 
                                    ${slide.url}?auto=format&fit=crop&q=70&w=1200&fm=webp 1200w, 
                                    ${slide.url}?auto=format&fit=crop&q=70&w=1920&fm=webp 1920w`
                                }
                                sizes='100vw'
                                loading={index === 0 ? 'eager' : 'lazy'}
                                fetchPriority={index === 0 ? 'high' : 'auto'}
                                alt={slide.alt}
                                className='w-full lg:h-[500px] object-cover blur-sm transition-all duration-500 brightness-75'
                                onLoad={(e) => {
                                    e.target.src = e.target.dataset.src;
                                    e.target.classList.remove('blur-sm');
                                }} />
                        </SwiperSlide>

                    ))}
                </Swiper>
            </main>
        </div>
    );
};

export default HeroSection;