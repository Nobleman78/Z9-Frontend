import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import UseBlogs from "../../Hooks/UseBlogs";
import { Helmet } from "react-helmet-async";

const Blog = () => {
    const [blogs] = UseBlogs()
    return (
        <div>
            <div className="flex items-center py-4 px-2 lg:px-15 text-lg bg-gray-50">
               <Helmet>
                <title>Blog | Z9 Air Travels</title>
               </Helmet>
                <Link to='/' className='flex items-center hover:underline text-gray-600 '>
                    Home <IoIosArrowForward className="mx-1" />
                </Link>
                <span className='text-blue-600 ml-1'>Blog</span>
            </div>
            <div className="lg:px-15 px-2 mt-2">
                <h1 className="text-3xl font-bold mb-8">Travel Blogs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <span>{blog.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{blog.location}</span>
                                </div>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {blog.description}
                                </p>
                                <Link
                                    to={`/blogs/${blog._id}`}
                                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    Read More <IoIosArrowForward className="ml-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;

