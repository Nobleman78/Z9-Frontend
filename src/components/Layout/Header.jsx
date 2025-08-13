import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';
const socialLinks = [
    {
        link: 'https://www.facebook.com/Z9airtravels',
        icon: <FaFacebook />

    },
    {
        link: 'https://www.linkedin.com/Z9airtravels',
        icon: <FaLinkedin />

    },
    {
        link: 'https://www.x.com/Z9airtravels',
        icon: <FaTwitter />

    },
    {
        link: 'https://www.youtube.com/Z9airtravels',
        icon: <FaYoutube />

    },

]
const Header = () => {
    return (
        <div>
            <header className='flex bg-black text-white items-center justify-between px-2 lg:px-20 py-3'>
                <div className='flex lg:w-1/2 lg:gap-10 gap-3 '>
                    <h2 className='flex items-center gap-2 lg:gap-5 text-xs lg:text-lg'><FaPhone className='text-sky-400' />+8801710-411019</h2>
                    <p className='flex items-center gap-2 lg:gap-5 hover:text-gray-400 text-xs lg:text-lg'><FaEnvelope className='text-sky-400' />z9net@hotmail.com</p>
                </div>
                <div className='w-1/2 justify-end gap-10 hidden lg:flex'>
                    {
                        socialLinks.map(social =>
                            <div key={social.link} className='text-2xl hover:text-sky-500 cursor-pointer'>
                                <a className='hover:text-sky-500 cursor-pointer' href={social.image}>{social.icon}</a>
                            </div>
                        )
                    }
                </div>
            </header>
        </div>
    );
};

export default Header;