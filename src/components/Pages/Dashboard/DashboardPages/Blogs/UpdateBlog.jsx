import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaPlus, FaSave } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../../Hooks/UseAxiosSecure';

const UpdateBlog = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const axiosSecure = UseAxiosSecure()
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        image: '',
        location: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fetchLoading, setFetchLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            const fetchBlog = async () => {
                try {
                    setFetchLoading(true);
                    const response = await axiosSecure.get(`/blogs/${id}`);
                    if (response.data) {
                        const blogData = {
                            ...response.data,
                            date: response.data.date ? new Date(response.data.date).toISOString().split('T')[0] : '',

                        };

                        setFormData(blogData);
                        setFetchError(null);
                    }
                } catch (error) {
                    const errorMessage = error.response?.data?.message;
                    setFetchError(errorMessage);
                    alert(errorMessage);
                } finally {
                    setFetchLoading(false);
                }
            };
            fetchBlog();
        }
    }, [axiosSecure, id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    // Send data to the backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axiosSecure.put(`/blogs/${id}`, formData);

            if (response.data.success) {
                Swal.fire(
                    'Success!',
                    'Blog updated successfully.',
                    'success'
                );
                navigate('/dashboard/manageblog');
            } else {
                alert(response.data.message || 'Failed to update blog');
            }
        } catch (error) {
            const serverError = error.response?.data?.message || 'Failed to update blog';
            alert(serverError);
        } finally {
            setLoading(false);
        }
    };


    if (fetchLoading) {
        return (
            <div className='bg-white min-h-screen p-4 md:p-6 rounded-lg shadow flex items-center justify-center'>
                <div className='text-center'>
                    <svg className='animate-spin h-12 w-12 text-purple-600 mx-auto' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                    </svg>
                    <p className='mt-4 text-gray-600'>Loading blog data...</p>
                </div>
            </div>
        );
    }

    if (fetchError) {
        return (
            <div className='bg-white min-h-screen p-4 md:p-6 rounded-lg shadow flex items-center justify-center'>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold text-red-600 mb-2'>Error Loading Blog</h2>
                    <p className='text-gray-600 mb-6'>{fetchError}</p>
                    <button
                        onClick={() => navigate('/dashboard/manageblog')}
                        className='bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 mx-auto transition-colors'>
                        <FaArrowLeft /> Back to Blogs
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-white min-h-screen p-4 md:p-6 rounded-lg shadow'>
            <div className='flex items-center mb-6'>
                <button
                    onClick={() => navigate('/dashboard/manageblog')}
                    className='mr-4 text-gray-600 hover:text-gray-900 cursor-pointer' >
                    <FaArrowLeft />
                </button>
                <h2 className='text-2xl font-bold text-sky-600'>
                    {isEditing ? 'Update Blog' : 'Add New Blog'}
                </h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label className='block text-gray-700 mb-2'>Blog Title *</label>
                    <input type='text'
                        name='title'
                        value={formData.title}
                        onChange={handleInputChange}
                        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                        placeholder='Enter blog title'
                        required />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 mb-2'>Location *</label>
                    <input type='text'
                        name='author'
                        value={formData.location}
                        onChange={handleInputChange}
                        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                        placeholder='Enter location'
                        required />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 mb-2'>Blog Content *</label>
                    <textarea name='description'
                        value={formData.description}
                        onChange={handleInputChange}
                        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                        rows='8'
                        placeholder='Enter blog content'
                        required>
                    </textarea>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 mb-2'>Publication Date</label>
                    <input type='date'
                        name='date'
                        value={formData.date}
                        onChange={handleInputChange}
                        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500' />
                </div>

                <div className='mb-6'>
                    <label className='block text-gray-700 mb-2'>Featured Image URL</label>
                    <input type='text'
                        name='image'
                        value={formData.image}
                        onChange={handleInputChange}
                        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                        placeholder='Enter image URL' />
                </div>
                <button type='submit'
                    disabled={loading}
                    className='w-full flex items-center justify-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 cursor-pointer text-white rounded-lg font-medium transition-colors disabled:opacity-50'>
                    {loading ? (
                        <>
                            <svg
                                className='animate-spin h-5 w-5 text-white'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'>
                                <circle
                                    className='opacity-25'
                                    cx='12'
                                    cy='12'
                                    r='10'
                                    stroke='currentColor'
                                    strokeWidth='4'>
                                </circle>
                                <path
                                    className='opacity-75'
                                    fill='currentColor'
                                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                            </svg>
                            {isEditing ? 'Updating...' : 'Adding...'}
                        </>
                    ) : (
                        <>
                            {isEditing ? <FaSave /> : <FaPlus />}
                            {isEditing ? ' Update Blog' : ' Add Blog'}
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default UpdateBlog;