import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import UseBlogs from "../../Hooks/UseBlogs";

const BlogDetails = () => {
    const [blogs] = UseBlogs()
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const foundBlog = blogs.find(blog => blog._id === id);
        if (foundBlog) {
            setBlog(foundBlog);
            setError(null);
        } else {
            setError("Blog post not found");
        }

        setLoading(false);
    }, [id,blogs]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mb-4"></div>
                <p className="text-gray-600 text-lg">Loading blog post...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
                    <h1 className="text-3xl font-bold text-red-500 mb-4">404 - Blog Post Not Found</h1>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <p className="text-gray-500 mb-6">Please check the URL or return to the blog listing.</p>
                    <button
                        onClick={() => window.history.back()}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                    >
                        ← Back to Blogs
                    </button>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <header className="p-6 md:p-8 border-b border-gray-200">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600">
                        <time dateTime={blog.date} className="flex items-center mb-2 sm:mb-0">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {formatDate(blog.date)}
                        </time>
                        <span className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {blog.location}
                        </span>
                    </div>
                </header>

                <figure className="relative">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-64 md:h-96 object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </figure>

                <section className="p-6 md:p-8">
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p className="text-lg leading-relaxed">{blog.description}</p>
                    </div>
                </section>

                <footer className="p-6 md:p-8 bg-gray-50 border-t border-gray-200">
                    <Link
                        to='/blogs'
                        onClick={() =>  window.scrollTo(0, 0) }
                        className="cursor-pointer flex items-center text-blue-500 hover:text-blue-700 font-medium transition duration-300">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Blogs
                    </Link>
                </footer>
            </div>
        </article>
    );
};

export default BlogDetails;