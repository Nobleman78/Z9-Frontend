import { useNavigate } from "react-router-dom";
import UseVisa from "../../../../Hooks/UseVisa";
import Swal from "sweetalert2";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";

const ManageVisa = () => {
    const [visa, refetch] = UseVisa()
    const axiosSecure = UseAxiosSecure()
    const navigate = useNavigate()
    const hanldeaddvisa = () => {
        navigate('/dashboard/addvisa');
    };

    const handleeditvisa = (visaId) => {
        navigate(`/dashboard/updatevisa/${visaId}`);
    };
    const handledeletevisa = async (visaId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/visa/${visaId}`)
                    .then(res => {
                        // Check for success flag instead of deletedCount
                        if (res.data.success) {
                            refetch();
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your file has been deleted.',
                                icon: 'success'
                            });
                        }
                    })
                    .catch(error => {
                        // Handle errors (404 or 500)
                        let errorMessage = "Failed to delete visa";

                        if (error.response) {
                            // Extract error message from backend
                            errorMessage = error.response.data.error || errorMessage;
                        }

                        Swal.fire({
                            title: 'Error!',
                            text: errorMessage,
                            icon: 'error'
                        });
                    });
            }
        });
    };
    return (
        <div className='bg-white min-h-screen p-4 md:p-6 rounded-lg shadow'>
            <div className='flex flex-col md:flex-row md:items-center justify-between mb-6'>
                <h2 className='text-2xl font-bold text-sky-600 mb-4 md:mb-0'>Manage Visa</h2>
                <button
                    onClick={hanldeaddvisa}
                    className='cursor-pointer bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors'>
                    <FaPlus /> Add New Visa
                </button>
            </div>
            {visa.length > 0 ? (
                <>
                    {/* Mobile Card View */}
                    <div className='md:hidden space-y-4'>
                        {visa.map((visa, index) => (
                            <div key={visa._id || index} className='bg-gray-50 p-4 rounded-lg shadow border border-gray-200'>
                                <div className='flex justify-between items-start mb-3'>
                                    <h3 className='font-medium text-gray-800'>{visa.CountryName}</h3>
                                    <span className='text-xs bg-sky-100 text-sky-800 px-2 py-1 rounded-full'>
                                        #{index + 1}
                                    </span>
                                </div>
                                <div className='flex flex-col gap-2 mt-4'>
                                    <button
                                        onClick={() => handleeditvisa(visa._id)}
                                        className='cursor-pointer flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors'>
                                        <FaEdit /> Edit
                                    </button>
                                    <button
                                        onClick={() => handledeletevisa(visa._id)}

                                        className='flex items-center justify-center bg-red-600 text-white cursor-pointer gap-1 px-3 py-1.5 rounded-lg transition-colors'>
                                        <>
                                            <FaTrash className='text-sm' /> Delete
                                        </>

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
                                    <th className='px-4 py-3 border text-left font-medium text-gray-700'>Country</th>
                                    <th className='px-4 py-3 border text-left font-medium text-gray-700'>Fee</th>
                                    <th className='px-4 py-3 border text-center font-medium text-gray-700'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {visa.map((visa, index) => (
                                    <tr key={visa._id || index} className='hover:bg-gray-50 transition-colors'>
                                        <td className='px-4 py-3 border text-center font-medium text-gray-600'>{index + 1}</td>
                                        <td className='px-4 py-3 border font-medium text-gray-800'>{visa.CountryName}</td>
                                        <td className='px-4 py-3 border font-medium text-gray-800'>
                                            {Object.values(visa.Fees).join(', ')}
                                        </td>
                                        <td className='px-4 py-3 border text-center'>
                                            <div className='flex justify-center gap-2'>
                                                <button
                                                    onClick={() => handleeditvisa(visa._id)}
                                                    className='cursor-pointer flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg transition-colors' >
                                                    <FaEdit className='text-sm' /> Edit
                                                </button>
                                                <button
                                                    onClick={() => handledeletevisa(visa._id)}
                                                    className='flex items-center bg-red-600 text-white cursor-pointer gap-1 px-3 py-1.5 rounded-lg transition-colors'>
                                                    <>
                                                        <FaTrash className='text-sm' /> Delete
                                                    </>

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
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                        </svg>
                    </div>
                    <p className='text-gray-500 text-lg mb-4'>No Services Found</p>
                    <button
                        onClick={hanldeaddvisa}
                        className='bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 mx-auto transition-colors'
                    >
                        <FaPlus /> Add Your First Service
                    </button>
                </div>
            )}
        </div>
    );
};

export default ManageVisa;