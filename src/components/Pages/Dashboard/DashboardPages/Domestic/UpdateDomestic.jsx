import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaSave, FaArrowLeft } from 'react-icons/fa';
import UseAxiosSecure from '../../../../Hooks/UseAxiosSecure';

const UpdateDomestic = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const axiosSecure = UseAxiosSecure();

    // Form state
    const [formData, setFormData] = useState({
        title: '',
        destination: '',
        duration: '',
        price: '',
        currency: 'BDT',   
        highlights: '',
        inclusions: '',
        exclusions: '',
        terms: ''
    });

    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    // Fetch package data
    useEffect(() => {
        const fetchPackage = async () => {
            try {
                const response = await axiosSecure.get(`/domestic/${id}`);
                if (response.data && response.data.success) {
                    const packageData = response.data.data;
                    setFormData({
                        title: packageData.title || '',
                        destination: packageData.destination || '',
                        duration: packageData.duration || '',
                        price: packageData.price || '',
                        currency: packageData.currency || 'BDT',
                        highlights: packageData.highlights || '',
                        inclusions: packageData.inclusions || '',
                        exclusions: packageData.exclusions || '',
                        terms: packageData.terms || ''
                    });
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Failed to fetch package details',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        navigate('/dashboard/managedomestic');
                    });
                }
            } catch (error) {
                console.error('Error fetching package:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to fetch package details',
                    icon: 'error',
                    confirmButtonText: 'OK'
                }).then(() => {
                    navigate('/dashboard/managedomestic');
                });
            } finally {
                setLoading(false);
            }
        };

        fetchPackage();
    }, [id, navigate, axiosSecure]);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = 'Title is required';
        }

        if (!formData.destination.trim()) {
            newErrors.destination = 'Destination is required';
        }

        if (!formData.duration.trim()) {
            newErrors.duration = 'Duration is required';
        }

        if (!formData.price) {
            newErrors.price = 'Price is required';
        } else if (isNaN(formData.price) || parseInt(formData.price) <= 0) {
            newErrors.price = 'Price must be a positive number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setSubmitting(true);

        try {
            const response = await axiosSecure.put(`/domestic/${id}`, {
                ...formData,
                price: parseInt(formData.price)
            });

            if (response.data && response.data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Package updated successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    navigate('/dashboard/managedomestic');
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to update package',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            console.error('Error updating package:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to update package',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } finally {
            setSubmitting(false);
        }
    };

    // Handle back button
    const handleBack = () => {
        navigate('/dashboard/managedomestic');
    };

    if (loading) {
        return (
            <div className='bg-white min-h-screen p-4 md:p-6 rounded-lg shadow flex justify-center items-center'>
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading package details...</p>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-white min-h-screen p-4 md:p-6 rounded-lg shadow'>
            <div className='flex flex-col md:flex-row md:items-center justify-between mb-6'>
                <h2 className='text-2xl font-bold text-sky-600 mb-4 md:mb-0'>Update Domestic Package</h2>
                <button
                    onClick={handleBack}
                    className='flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors'
                >
                    <FaArrowLeft /> Back to Packages
                </button>
            </div>

            <div className='bg-gray-50 p-4 md:p-6 rounded-lg shadow border border-gray-200'>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* Title */}
                        <div>
                            <label className='block text-gray-700 font-medium mb-2' htmlFor='title'>
                                Package Title <span className='text-red-500'>*</span>
                            </label>
                            <input
                                type='text'
                                id='title'
                                name='title'
                                value={formData.title}
                                onChange={handleInputChange}
                                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.title ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-sky-200'}`}
                                placeholder='Enter package title'
                            />
                            {errors.title && <p className='mt-1 text-red-500 text-sm'>{errors.title}</p>}
                        </div>

                        {/* Destination */}
                        <div>
                            <label className='block text-gray-700 font-medium mb-2' htmlFor='destination'>
                                Destination <span className='text-red-500'>*</span>
                            </label>
                            <input
                                type='text'
                                id='destination'
                                name='destination'
                                value={formData.destination}
                                onChange={handleInputChange}
                                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.destination ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-sky-200'}`}
                                placeholder='Enter destination'
                            />
                            {errors.destination && <p className='mt-1 text-red-500 text-sm'>{errors.destination}</p>}
                        </div>

                        {/* Duration */}
                        <div>
                            <label className='block text-gray-700 font-medium mb-2' htmlFor='duration'>
                                Duration <span className='text-red-500'>*</span>
                            </label>
                            <input
                                type='text'
                                id='duration'
                                name='duration'
                                value={formData.duration}
                                onChange={handleInputChange}
                                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.duration ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-sky-200'}`}
                                placeholder='e.g., 5 Days / 4 Nights'
                            />
                            {errors.duration && <p className='mt-1 text-red-500 text-sm'>{errors.duration}</p>}
                        </div>

                        {/* Price */}
                        <div>
                            <label className='block text-gray-700 font-medium mb-2' htmlFor='price'>
                                Price <span className='text-red-500'>*</span>
                            </label>
                            <div className='flex'>
                                <select
                                    name='currency'
                                    value={formData.currency}
                                    onChange={handleInputChange}
                                    className='px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-sky-200'
                                >
                                    <option value='USD'>BDT</option>
                                    <option value='USD'>USD</option>
                                    <option value='EUR'>EUR</option>
                                    <option value='GBP'>GBP</option>
                                    <option value='JPY'>JPY</option>
                                    <option value='INR'>INR</option>
                                </select>
                                <input
                                    type='number'
                                    id='price'
                                    name='price'
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-r-lg focus:outline-none focus:ring-2 ${errors.price ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-sky-200'}`}
                                    placeholder='0.00'
                                    min='0'
                                    step='0.01'
                                />
                            </div>
                            {errors.price && <p className='mt-1 text-red-500 text-sm'>{errors.price}</p>}
                        </div>

                       

                        {/* Highlights */}
                        <div className='md:col-span-2'>
                            <label className='block text-gray-700 font-medium mb-2' htmlFor='highlights'>
                                Trip Highlights
                            </label>
                            <textarea
                                id='highlights'
                                name='highlights'
                                value={formData.highlights}
                                onChange={handleInputChange}
                                rows='3'
                                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-200'
                                placeholder='Enter trip highlights (one per line)'
                            ></textarea>
                        </div>

                        {/* Inclusions */}
                        <div className='md:col-span-2'>
                            <label className='block text-gray-700 font-medium mb-2' htmlFor='inclusions'>
                                Inclusions
                            </label>
                            <textarea
                                id='inclusions'
                                name='inclusions'
                                value={formData.inclusions}
                                onChange={handleInputChange}
                                rows='3'
                                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-200'
                                placeholder='Enter inclusions (one per line)'
                            ></textarea>
                        </div>

                        {/* Exclusions */}
                        <div className='md:col-span-2'>
                            <label className='block text-gray-700 font-medium mb-2' htmlFor='exclusions'>
                                Exclusions
                            </label>
                            <textarea
                                id='exclusions'
                                name='exclusions'
                                value={formData.exclusions}
                                onChange={handleInputChange}
                                rows='3'
                                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-200'
                                placeholder='Enter exclusions (one per line)'
                            ></textarea>
                        </div>


                    </div>

                    <div className='flex  mt-8 gap-3'>

                        <button
                            type='submit'
                            disabled={submitting}
                            className='w-full text-center cursor-pointer gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50'
                        >     
                            {submitting ? 'Updating...' : 'Update Package'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateDomestic;