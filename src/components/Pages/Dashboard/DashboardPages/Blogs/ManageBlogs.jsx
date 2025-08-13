import { FaPlus, FaEdit, FaTrash, FaPlusCircle, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import UseBlogs from '../../../../Hooks/UseBlogs';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../../Hooks/UseAxiosSecure';

const ManageBlogs = () => {
    const [blogs, refetch] = UseBlogs()
    const navigate = useNavigate();
    const axiosSecure = UseAxiosSecure()
    const formatDate = (dateString) => {
        if (!dateString) return 'No date';
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleAddBlog = () => {
        navigate('/dashboard/addblog');
    };

    const handleEditBlog = (id) => {
        navigate(`/dashboard/updateblog/${id}`);
    };
    const handleDeleteBlog = async (id) => {

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
                    const response = await axiosSecure.delete(`/blogs/${id}`);
                    if (response.data && response.data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Blog has been deleted.',
                            'success'
                        );
                        refetch();
                    } else {
                        Swal.fire(
                            'Error!',
                            'Failed to delete blog',
                            'error'
                        );
                    }
                } catch (error) {
                    console.error('Error deleting blog:', error);
                    Swal.fire(
                        'Error!',
                        'Failed to delete blog',
                        'error'
                    );
                }
            }
        });
    };

    return (
        <div className='bg-white min-h-screen p-4 md:p-6 rounded-lg shadow'>
            <div className='flex flex-col md:flex-row md:items-center justify-between mb-6'>
                <h2 className='text-2xl font-bold text-sky-600 mb-4 md:mb-0'>Manage Blogs</h2>
                <button
                    onClick={handleAddBlog}
                    className='cursor-pointer bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors'>
                    <FaPlus /> Add New Blog
                </button>
            </div>
            {blogs.length > 0 ? (
                <>
                    {/* Mobile Card View */}
                    <div className='md:hidden space-y-4'>
                        {blogs.map((blog, index) => (
                            <div key={blog._id || index} className='bg-gray-50 p-4 rounded-lg shadow border border-gray-200'>
                                <div className='flex justify-between items-start mb-3'>
                                    <h3 className='font-medium text-gray-800 text-lg'>{blog.title}</h3>
                                    <span className='text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full'>
                                        #{index + 1}
                                    </span>
                                </div>
                                <div className='flex items-center gap-2 text-sm text-gray-500 mb-3'>
                                    <FaCalendarAlt />
                                    <span>{formatDate(blog.date)}</span>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <button
                                        onClick={() => handleEditBlog(blog._id)}
                                        className='cursor-pointer flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors'>
                                        <FaEdit /> Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteBlog(blog._id)}
                                        className='cursor-pointer flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-colors
                                           
                                            bg-red-500 hover:bg-red-600 text-white'>

                                        <>
                                            <FaTrash /> Delete
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
                                    <th className='px-4 py-3 border text-left font-medium text-gray-700'>Title</th>
                                    <th className='px-4 py-3 border text-left font-medium text-gray-700'>Date</th>
                                    <th className='px-4 py-3 border text-center font-medium text-gray-700'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogs.map((blog, index) => (
                                    <tr key={blog._id || index} className='hover:bg-gray-50 transition-colors'>
                                        <td className='px-4 py-3 border text-center font-medium text-gray-600'>{index + 1}</td>
                                        <td className='px-4 py-3 border font-medium text-gray-800'>{blog.title}</td>
                                        <td className='px-4 py-3 border text-gray-600'>
                                            <div className='flex items-center gap-2'>
                                                <FaCalendarAlt className='text-gray-400' />
                                                <span>{formatDate(blog.date)}</span>
                                            </div>
                                        </td>
                                        <td className='px-4 py-3 border text-center'>
                                            <div className='flex justify-center gap-2'>
                                                <button
                                                    onClick={() => handleEditBlog(blog._id)}
                                                    className='cursor-pointer flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg transition-colors'
                                                >
                                                    <FaEdit className='text-sm' /> Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteBlog(blog._id)}
                                                    className=' cursor-pointer flex items-center gap-1 px-3 py-1.5 rounded-lg transition-color
                                                         bg-red-500 hover:bg-red-600 text-white'>


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
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' />
                        </svg>
                    </div>
                    <p className='text-gray-500 text-lg mb-4'>No Blogs Found</p>
                    <button
                        onClick={handleAddBlog}
                        className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 mx-auto transition-colors'
                    >
                        <FaPlus /> Add Your First Blog
                    </button>
                </div>
            )}
        </div>
    );
};

export default ManageBlogs;