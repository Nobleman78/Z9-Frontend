import { FaPlus, FaEdit, FaTrash, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import UseDomestic from '../../../../Hooks/UseDomestic';
import UseAxiosSecure from '../../../../Hooks/UseAxiosSecure';

const ManageDomestic = () => {
    const [domestic, refetch] = UseDomestic();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const axiosSecure = UseAxiosSecure();

    // Fetch data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                await refetch();
                setLoading(false);
            } catch (err) {
                setError(err.message || "Failed to fetch packages");
                setLoading(false);
            }
        };

        fetchData();
    }, [refetch]);

    const handleAddPackage = () => {
        navigate('/dashboard/adddomestic');
    };

    const handleEditPackage = (id) => {
        navigate(`/dashboard/updatedomestic/${id}`);
    };

    const handleDeletePackage = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axiosSecure.delete(`/domestic/${id}`);
                    if (response.data && response.data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Package has been deleted.',
                            'success'
                        );
                        refetch();
                    } else {
                        Swal.fire(
                            'Error!',
                            'Failed to delete package',
                            'error'
                        );
                    }
                } catch (error) {
                    console.error('Error deleting package:', error);
                    Swal.fire(
                        'Error!',
                        'Failed to delete package',
                        'error'
                    );
                }
            }
        });
    };

    if (loading) {
        return (
            <div className='bg-white min-h-screen p-4 md:p-6 rounded-lg shadow flex justify-center items-center'>
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading packages...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='bg-white min-h-screen p-4 md:p-6 rounded-lg shadow flex justify-center items-center'>
                <div className="text-center">
                    <div className="text-red-500 text-5xl mb-4">⚠️</div>
                    <p className="text-xl text-red-600 mb-4">{error}</p>
                    <button
                        onClick={() => {
                            setError(null);
                            refetch();
                        }}
                        className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-white min-h-screen p-4 md:p-6 rounded-lg shadow'>
            <div className='flex flex-col md:flex-row md:items-center justify-between mb-6'>
                <h2 className='text-2xl font-bold text-sky-600 mb-4 md:mb-0'>Manage Domestic Packages</h2>
                <button
                    onClick={handleAddPackage}
                    className='cursor-pointer bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors'>
                    <FaPlus /> Add New Package
                </button>
            </div>
            {domestic && domestic.length > 0 ? (
                <>
                    {/* Mobile Card View */}
                    <div className='md:hidden space-y-4'>
                        {domestic.map((pkg, index) => (
                            <div key={pkg._id || index} className='bg-gray-50 p-4 rounded-lg shadow border border-gray-200'>
                                <div className='flex justify-between items-start mb-3'>
                                    <h3 className='font-medium text-gray-800 text-lg'>{pkg.title}</h3>
                                    <span className='text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full'>
                                        #{index + 1}
                                    </span>
                                </div>
                                <div className='flex items-center gap-2 text-sm text-gray-500 mb-2'>
                                    <FaMapMarkerAlt />
                                    <span>{pkg.destination}</span>
                                </div>
                                <div className='flex items-center gap-2 text-sm text-gray-500 mb-3'>
                                    <FaClock />
                                    <span>{pkg.duration}</span>
                                </div>
                                <div className='text-lg font-bold text-sky-600 mb-3'>
                                    {pkg.currency} {pkg.price.toLocaleString()}
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <button
                                        onClick={() => handleEditPackage(pkg._id)}
                                        className='cursor-pointer flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors'>
                                        <FaEdit /> Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeletePackage(pkg._id)}
                                        className='cursor-pointer flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-colors bg-red-500 hover:bg-red-600 text-white'>
                                        <FaTrash /> Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Desktop Table View */}
                    <div className='hidden md:block overflow-x-auto'>
                        <table className='table-auto w-full border border-gray-200 rounded-lg overflow-hidden'>
                            <thead className='bg-gray-100'>
                                <tr>
                                    <th className='px-4 py-3 border text-left font-medium text-gray-700'>#</th>
                                    <th className='px-4 py-3 border text-left font-medium text-gray-700'>Title</th>
                                    <th className='px-4 py-3 border text-left font-medium text-gray-700'>Destination</th>
                                    <th className='px-4 py-3 border text-left font-medium text-gray-700'>Duration</th>
                                    <th className='px-4 py-3 border text-left font-medium text-gray-700'>Price</th>
                                    <th className='px-4 py-3 border text-center font-medium text-gray-700'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {domestic.map((pkg, index) => (
                                    <tr key={pkg._id || index} className='hover:bg-gray-50 transition-colors'>
                                        <td className='px-4 py-3 border text-center font-medium text-gray-600'>{index + 1}</td>
                                        <td className='px-4 py-3 border font-medium text-gray-800'>{pkg.title}</td>
                                        <td className='px-4 py-3 border text-gray-600'>
                                            <div className='flex items-center gap-2'>
                                                <FaMapMarkerAlt className='text-gray-400' />
                                                <span>{pkg.destination}</span>
                                            </div>
                                        </td>
                                        <td className='px-4 py-3 border text-gray-600'>
                                            <div className='flex items-center gap-2'>
                                                <FaClock className='text-gray-400' />
                                                <span>{pkg.duration}</span>
                                            </div>
                                        </td>
                                        <td className='px-4 py-3 border font-bold text-sky-600'>
                                            {pkg.currency} {pkg.price.toLocaleString()}
                                        </td>
                                        <td className='px-4 py-3 border text-center'>
                                            <div className='flex justify-center gap-2'>
                                                <button
                                                    onClick={() => handleEditPackage(pkg._id)}
                                                    className='cursor-pointer flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg transition-colors'
                                                >
                                                    <FaEdit className='text-sm' /> Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeletePackage(pkg._id)}
                                                    className='cursor-pointer flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors bg-red-500 hover:bg-red-600 text-white'
                                                >
                                                    <FaTrash className='text-sm' /> Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <div className='text-center py-12'>
                    <div className='mb-4 text-gray-400'>
                        <svg className='mx-auto h-16 w-16' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                    </div>
                    <p className='text-gray-500 text-lg mb-4'>No Domestic Packages Found</p>
                    <button
                        onClick={handleAddPackage}
                        className='bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 mx-auto transition-colors'
                    >
                        <FaPlus /> Add Your First Package
                    </button>
                </div>
            )}
        </div>
    );
};

export default ManageDomestic;