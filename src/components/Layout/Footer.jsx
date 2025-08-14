import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/Logo/logo.avif';
import Bikash from '../../assets/Footer/Bkash.png';
import Nagad from '../../assets/Footer/Nagad.png';
import Rokect from '../../assets/Footer/Rokect.png';
import Master from '../../assets/Footer/master.png';
import Visa from '../../assets/Footer/Visa.svg';
import { Link } from 'react-router-dom';

const socialLinks = [
    { href: 'https://www.facebook.com/Z9airtravels', icon: <FaFacebookF /> },
    { href: 'https://www.x.com/Z9airtravels', icon: <FaTwitter /> },
    { href: 'https://www.linkedin.com/Z9airtravels', icon: <FaLinkedinIn /> },
    { href: 'https://www.youtube.com/Z9airtravels', icon: <FaYoutube /> },
];

const paymentMethods = [
    { src: Bikash, alt: 'bKash' },
    { src: Nagad, alt: 'Nagad' },
    { src: Rokect, alt: 'Rocket' },
    { src: Visa, alt: 'Visa' },
    { src: Master, alt: 'Mastercard' },
];
const exploreUs = [
    { title: 'About Us', path: '/about' },
    { title: 'Our Team', path: '/ourteam' },
    { title: 'Blog', path: '/blogs' },
   

]
const services = [
    { title: 'Visa Services', path: '/visaservices' },
    { title: 'Air Tickets', path: '/airticket' },
    { title: 'Packages', path: '/tourpackages' },
]

const Footer = () => {

    return (
        <footer className="bg-gray-700 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Logo Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <img className="w-40 rounded-lg" src={logo} alt="Logo"  />
                        </div>
                        <p className="mb-6">Your trusted partner for innovative solutions and exceptional service.</p>

                        {/* Social Links and Payment System */}
                        <div className='flex flex-col lg:flex-row justify-between gap-5 lg:gap-10'>
                            <div className="flex space-x-4 text-white">
                                {socialLinks.map(({ href, icon }) => (
                                    <a
                                        target='_blank'
                                        key={href}
                                        href={href}
                                        className="w-10 h-10 rounded-full bg-sky-400 flex items-center justify-center hover:bg-sky-700 transition-colors">
                                        {icon}
                                    </a>
                                ))}
                            </div>
                            <div >
                                <h3 className="text-xl font-semibold mb-4 mt-5">We Accept Payment</h3>
                                <div className="flex gap-3 lg:w-[500px]">
                                    {paymentMethods.map(({ src, alt }) => (
                                        <div key={alt} className="rounded  ">
                                            <img src={src} alt={alt} className="border border-gray-300 w-35 lg:w-40 h-10 lg:h-15 " loading="lazy" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Explore Us */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-400">Explore Us</h3>
                        <ul className="space-y-3 text-white">
                            {exploreUs.map((item, index) =>
                                <div key={index} className='flex flex-col gap-2 hover:text-sky-700'>
                                    <Link key={index} to={item.path}>{item.title}</Link>
                                </div>
                            )}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-400">Services</h3>
                        <ul className="space-y-3 text-white">
                            {services.map((item, index) =>
                                <div key={index} className='flex flex-col gap-2 hover:text-sky-700'>
                                    <Link key={index} to={item.path}>{item.title}</Link>
                                </div>
                            )}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-400">Contact Us</h3>
                        <ul className="space-y-4 text-white">
                            <li className="flex items-center">
                                <FaPhone className="text-purple-500 mr-3" />
                                <span>+8801710-411019</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="text-purple-500 mr-3" />
                                <span>z9airtravels@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Office & Payment */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-400">Office</h3>
                        <div className="space-y-4 flex flex-col">
                            <p className="flex items-start text-white">
                                <FaMapMarkerAlt className="text-purple-500 text-xl mt-1 mr-3" />
                                <span>
                                    Gharisar, naria, shariatpur, Dhaka,
                                    <br />
                                    Bangladesh
                                </span>
                            </p>
                            <a target='_blank' className='flex items-center gap-2' href="https://www.google.com/maps/place/Z9+Air+Travels/@23.2725026,90.4771176,16z/data=!4m14!1m7!3m6!1s0x37550505d63444df:0x99ca3177d9456e49!2sZ9+Air+Travels!8m2!3d23.2726281!4d90.4775017!16s%2Fg%2F11lwcnrl9s!3m5!1s0x37550505d63444df:0x99ca3177d9456e49!8m2!3d23.2726281!4d90.4775017!16s%2Fg%2F11lwcnrl9s?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D">
                                <FaMapMarkerAlt className='text-xl text-purple-500' /><p className='font-semibold text-white'>View Map</p>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-400 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} Company. All rights reserved.</p>
                        <div className="flex space-x-6">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy) => (
                                <a key={policy} href="#" className="text-gray-500 hover:text-sky-700 transition-colors">
                                    {policy}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
