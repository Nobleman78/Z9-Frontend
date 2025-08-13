import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPlus, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../../Hooks/UseAxiosSecure';


const AddVisa = () => {
    const navigate = useNavigate();
    const axiosSecure = UseAxiosSecure();

    // Main form data
    const [formData, setFormData] = useState({
        CountryName: '',
        Type: 'E-Visa',
        Validity: '',
        MaxStay: '',
        image: '',
        Fees: {
            'Visa Fee': ''
        },
        Requirements: {
            'For Businessman': {
                'Visa Type': '',
                Documents: []
            },
            'For Tourist': {
                'Visa Type': '',
                Documents: []
            },
            'For Students': {
                'Visa Type': '',
                Documents: []
            }
        }
    });

    // Temporary states for building form sections
    const [documentInput, setDocumentInput] = useState('');
    const [activeTab, setActiveTab] = useState('For Businessman');

    // Handle basic info changes
    const handleBasicInfoChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle visa fee change
    const handleFeeChange = (e) => {
        const { value } = e.target;
        setFormData(prev => ({
            ...prev,
            Fees: {
                'Visa Fee': value
            }
        }));
    };

    // Handle visa type change for requirements
    const handleVisaTypeChange = (e) => {
        const { value } = e.target;
        setFormData(prev => ({
            ...prev,
            Requirements: {
                ...prev.Requirements,
                [activeTab]: {
                    ...prev.Requirements[activeTab],
                    'Visa Type': value
                }
            }
        }));
    };

    // Add a document to the active requirement category
    const addDocument = () => {
        if (documentInput.trim()) {
            setFormData(prev => ({
                ...prev,
                Requirements: {
                    ...prev.Requirements,
                    [activeTab]: {
                        ...prev.Requirements[activeTab],
                        Documents: [...prev.Requirements[activeTab].Documents, documentInput.trim()]
                    }
                }
            }));
            setDocumentInput('');
        }
    };

    // Remove a document from the active requirement category
    const removeDocument = (index) => {
        setFormData(prev => ({
            ...prev,
            Requirements: {
                ...prev.Requirements,
                [activeTab]: {
                    ...prev.Requirements[activeTab],
                    Documents: prev.Requirements[activeTab].Documents.filter((_, i) => i !== index)
                }
            }
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting visa data:', formData);
        try {
            const response = await axiosSecure.post('/visa', formData);
            if (response.data && response.data.success) {
                Swal.fire('Visa added successfully!');
                navigate('/dashboard/managevisa');
            } else {
                const errorMessage = response.data?.message || 'Failed to add visa';
                Swal.fire('Error', errorMessage, 'error');
            }
        } catch (error) {
            console.error('Error adding visa:', error);
            Swal.fire('Error', 'An error occurred while adding the visa', 'error');
        }
    };

    return (
        <div className='bg-white min-h-screen p-4 md:p-6 rounded-lg shadow'>
            <div className='flex items-center mb-6'>
                <button
                    onClick={() => navigate('/dashboard/managevisa')}
                    className='mr-4 text-gray-600 hover:text-gray-900'>
                    <FaArrowLeft />
                </button>
                <h2 className='text-2xl font-bold text-purple-600'>Add New Visa</h2>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Basic Information Section */}
                <div className='mb-6'>
                    <h3 className='text-lg font-semibold text-gray-800 mb-4'>Basic Information</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-gray-700 mb-2'>Country Name *</label>
                            <input
                                type='text'
                                name='CountryName'
                                value={formData.CountryName}
                                onChange={handleBasicInfoChange}
                                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                                placeholder='Enter country name'
                                required
                            />
                        </div>

                        <div>
                            <label className='block text-gray-700 mb-2'>Visa Type</label>
                            <select
                                name='Type'
                                value={formData.Type}
                                onChange={handleBasicInfoChange}
                                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                            >
                                <option value='E-Visa'>E-Visa</option>
                                <option value='Sticker Visa'>Sticker Visa</option>
                                <option value='Visa on Arrival'>Visa on Arrival</option>
                            </select>
                        </div>

                        <div>
                            <label className='block text-gray-700 mb-2'>Validity Period *</label>
                            <input
                                type='text'
                                name='Validity'
                                value={formData.Validity}
                                onChange={handleBasicInfoChange}
                                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                                placeholder='e.g., 5 years'
                                required
                            />
                        </div>

                        <div>
                            <label className='block text-gray-700 mb-2'>Maximum Stay *</label>
                            <input
                                type='text'
                                name='MaxStay'
                                value={formData.MaxStay}
                                onChange={handleBasicInfoChange}
                                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                                placeholder='e.g., 6 months'
                                required
                            />
                        </div>

                        <div>
                            <label className='block text-gray-700 mb-2'>Image URL</label>
                            <input
                                type='text'
                                name='image'
                                value={formData.image}
                                onChange={handleBasicInfoChange}
                                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                                placeholder='Enter image URL'
                            />
                        </div>

                        <div>
                            <label className='block text-gray-700 mb-2'>Visa Fee *</label>
                            <input
                                type='text'
                                value={formData.Fees['Visa Fee']}
                                onChange={handleFeeChange}
                                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                                placeholder='e.g., BDT 7000'
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Visa Requirements Section */}
                <div className='mb-6'>
                    <h3 className='text-lg font-semibold text-gray-800 mb-4'>Visa Requirements</h3>

                    {/* Tabs */}
                    <div className='flex border-b border-gray-200 mb-4'>
                        {Object.keys(formData.Requirements).map((category) => (
                            <button
                                key={category}
                                type='button'
                                className={`py-2 px-4 font-medium text-sm focus:outline-none ${activeTab === category
                                        ? 'text-purple-600 border-b-2 border-purple-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                onClick={() => setActiveTab(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className='bg-gray-50 p-4 rounded-lg'>
                        <div className='mb-4'>
                            <label className='block text-gray-700 mb-2'>Visa Type *</label>
                            <input
                                type='text'
                                value={formData.Requirements[activeTab].VisaType}
                                onChange={handleVisaTypeChange}
                                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                                placeholder='Enter visa type'
                                required
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-700 mb-2'>Required Documents</label>
                            <div className='flex gap-2 mb-2'>
                                <input
                                    type='text'
                                    value={documentInput}
                                    onChange={(e) => setDocumentInput(e.target.value)}
                                    className='flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500'
                                    placeholder='Enter a required document'
                                />
                                <button
                                    type='button'
                                    onClick={addDocument}
                                    className='bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm transition-colors'
                                >
                                    <FaPlus /> Add
                                </button>
                            </div>

                            {formData.Requirements[activeTab].Documents.length > 0 && (
                                <div className='space-y-2 mt-2'>
                                    {formData.Requirements[activeTab].Documents.map((doc, index) => (
                                        <div key={index} className='flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200'>
                                            <span className='text-gray-700'>{doc}</span>
                                            <button
                                                type='button'
                                                onClick={() => removeDocument(index)}
                                                className='text-red-500 hover:text-red-700'
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type='submit'
                    className='w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors'
                >
                    <FaPlus /> Add Visa
                </button>
            </form>
        </div>
    );
};

export default AddVisa;