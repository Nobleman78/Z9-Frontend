import { useState } from 'react';
import logo from '../../assets/Logo/logo.avif';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaEnvelope, FaUserCircle } from 'react-icons/fa';
import { PiSignOut } from "react-icons/pi";
import AuthContext from '../ContextApi/AuthContext';
import { useContext } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, signOutUser } = useContext(AuthContext);
    const [packageDropdown, setPackageDropDown] = useState(false);
    const [userDropdown, setUserDropdown] = useState(false);

    const navLinkClass = ({ isActive }) =>
        isActive ? 'text-sky-500' : 'hover:text-sky-500 text-black';

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setUserDropdown(false); // Close user dropdown when toggling menu
    };

    const handleMobileLinkClick = () => {
        setMenuOpen(false);
        setPackageDropDown(false);
        setUserDropdown(false); // Close user dropdown when clicking links
    };

    const handleUserClick = () => {
        setUserDropdown(!userDropdown);
        setPackageDropDown(false); // Close package dropdown when opening user dropdown
    };

    const handleLogout = () => {
        signOutUser();
        setUserDropdown(false);
        setMenuOpen(false);
    };

    return (
        <div className='sticky top-0 w-full z-200 bg-white shadow'>
            <nav className='flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 md:px-10 lg:px-15 py-3 gap-4 sm:gap-0'>
                {/* Logo */}
                <div className='flex items-center justify-between w-full lg:w-auto'>
                    <NavLink to='/'>
                        <img src={logo} className='cursor-pointer w-15 lg:w-25 ' alt='logo' />
                    </NavLink>
                    {/* Mobile Menu Icon */}
                    <div className='lg:hidden text-3xl cursor-pointer' onClick={toggleMenu}>
                        {menuOpen ? <HiX /> : <HiMenu />}
                    </div>
                </div>

                {/* Desktop Nav Links */}
                <div className='hidden lg:flex gap-10 text-lg font-semibold items-center'>
                    <NavLink to='/' className={navLinkClass}>Home</NavLink>
                    <NavLink to='/visaservices' className={navLinkClass}>Visa Service</NavLink>
                    <NavLink to='/airticket' className={navLinkClass}>Air Ticket</NavLink>

                    {/* Packages Dropdown */}
                    <div className='relative' onMouseEnter={() => setPackageDropDown(true)} onMouseLeave={() => setPackageDropDown(false)}>
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <span className={`${navLinkClass({ isActive: false })}`}>Packages</span>
                            <IoIosArrowDown className={`mt-1 transition-transform duration-300 ${packageDropdown ? 'rotate-180' : ''}`} />
                        </div>
                        {packageDropdown && (
                            <div className='absolute top-full left-0 w-70'>
                                <div className='mt-7 flex flex-col bg-white p-0 border-t-3 border-sky-500 shadow-md'>
                                    <NavLink onClick={() => setPackageDropDown(false)} className='block hover:bg-gray-100 hover:text-sky-500 text-sm py-3 px-8 border-b border-gray-200' to='/packages/domestic'>Domestic Package</NavLink>
                                    <NavLink onClick={() => setPackageDropDown(false)} className='block hover:bg-gray-100 hover:text-sky-500 text-sm py-3 px-8 border-b border-gray-200' to='/packages/international'>International Package</NavLink>
                                </div>
                            </div>
                        )}
                    </div>

                    <NavLink to='/blogs' className={navLinkClass}>Blog</NavLink>
                    <NavLink to='/contact' className={navLinkClass}>Contact Us</NavLink>

                    {/* User Profile Dropdown - Desktop */}
                    {user && (
                        <div className='relative'>
                            <div
                                className='flex items-center gap-2 cursor-pointer'
                                onClick={handleUserClick}>
                                <FaUserCircle className='text-2xl text-gray-600' />
                                <IoIosArrowDown className={`mt-1 transition-transform duration-300 ${userDropdown ? 'rotate-180' : ''}`} />
                            </div>
                            {userDropdown && (
                                <div className='absolute right-0 mt-2 w-56  bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200'>
                                    <div className='px-4 py-3  border-b border-gray-200'>
                                        <p className='text-sm font-medium text-gray-800'>Signed in as</p>
                                        <p className='text-sm text-gray-600 truncate flex items-center gap-3 mt-2 '> <FaEnvelope />{user.email}</p>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className='cursor-pointer flex items-center gap-3 text-red-600 w-full text-left px-4 py-2 text-sm'>
                                        <PiSignOut className='text-lg' />Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </nav>

            {/* Mobile Nav Links */}
            {menuOpen && (
                <div className='lg:hidden absolute top-full z-40 w-full bg-gray-50 py-5 flex flex-col gap-4 px-6 text-base font-medium'>
                    <NavLink to='/' onClick={handleMobileLinkClick} className={navLinkClass}>Home</NavLink>
                    <NavLink to='/visaservices' onClick={handleMobileLinkClick} className={navLinkClass}>Visa Service</NavLink>
                    <NavLink to='/airticket' onClick={handleMobileLinkClick} className={navLinkClass}>Air Ticket</NavLink>

                    <div onClick={() => setPackageDropDown(!packageDropdown)} className='flex justify-between items-center cursor-pointer'>
                        <span className={navLinkClass({ isActive: false })}>Package</span>
                        <IoIosArrowDown className={`transition-transform duration-300 ${packageDropdown ? 'rotate-180' : ''}`} />
                    </div>
                    {packageDropdown && (
                        <div className='ml-4 mt-2 flex flex-col gap-2'>
                            <NavLink className='block hover:bg-gray-100 hover:text-sky-500 text-sm py-2 px-8 border-b border-gray-200' to='/packages/domestic' onClick={handleMobileLinkClick}>Domestic Package</NavLink>
                            <NavLink className='block hover:bg-gray-100 hover:text-sky-500 text-sm py-2 px-8 border-b border-gray-200' to='/packages/international' onClick={handleMobileLinkClick}>International Package</NavLink>
                        </div>
                    )}

                    <NavLink to='/blogs' onClick={handleMobileLinkClick} className={navLinkClass}>Blog</NavLink>
                    <NavLink to='/contact' onClick={handleMobileLinkClick} className={navLinkClass}>Contact</NavLink>

                    {/* User Profile Section - Mobile */}
                    {user && (
                        <div className='mt-2 pt-4 border-t border-gray-200'>
                            <div
                                className='flex justify-between items-center cursor-pointer'
                                onClick={handleUserClick}>
                                <div className='flex items-center gap-2'>
                                    <FaUserCircle className='text-xl text-gray-600' />
                                    <span>My Account</span>
                                </div>
                                <IoIosArrowDown className={`transition-transform duration-300 ${userDropdown ? 'rotate-180' : ''}`} />
                            </div>
                            {userDropdown && (
                                <div className='mt-3 bg-white rounded-md shadow py-2 border border-gray-200'>
                                    <div className='px-4 py-2 border-b border-gray-200'>
                                        <p className='text-xs font-medium text-gray-500'>Signed in as</p>
                                        <p className='text-sm text-gray-800 truncate flex items-center gap-2 mt-2'><FaEnvelope />{user.email}</p>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="cursor-pointer text-red-600 flex items-center gap-2 w-full text-left px-4 py-2 text-s">
                                        <PiSignOut size={18} />
                                        <span>Logout</span>
                                    </button>

                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;