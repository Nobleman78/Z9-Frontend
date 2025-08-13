import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../../Hooks/UseAxiosSecure';


const AddBlog = () => {
    const navigate = useNavigate();
    const axiosSecure = UseAxiosSecure()

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        image: '',
        location: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const blogData = {
            ...formData,
            date: formData.date || new Date().toISOString().split('T')[0]
        };
        try {
            const response = await axiosSecure.post('/blogs', blogData);
            console.log('Response from server:', response);
            if (response.data && response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Blog added successfully!'
                });
                navigate('/dashboard/manageblog');
            } else {
                const errorMessage = response.data?.message || 'Failed to add blog';
                Swal.fire({ errorMessage });
            }
        } catch (error) {
            console.error('Error adding blog:', error);
        }
    };

    return (
        <div className='bg-white min-h-screen p-4 md:p-6 rounded-lg shadow'>
            <div className='flex items-center mb-6'>
                <button onClick={() => navigate('/dashboard/manageblog')}
                    className='mr-4 text-gray-600 hover:text-gray-900'>
                    <FaArrowLeft />
                </button>
                <h2 className='text-2xl font-bold text-sky-600'>Add New Blog</h2>
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
                        name='location'
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
                    className='w-full flex items-center justify-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium transition-colors'>
                    <FaPlus /> Add Blog
                </button>
            </form>
        </div>
    );
};

export default AddBlog;