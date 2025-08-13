import UseBlogs from '../../../../Hooks/UseBlogs';
import UseDomestic from '../../../../Hooks/UseDomestic';
import UseInternational from '../../../../Hooks/UseInternational';
import UseVisa from '../../../../Hooks/UseVisa';


const DashboardHome = () => {
    // const axiosSecure = UseAxiosSecure()
    // const [users, setUsers] = useState([]);
    const [blogs] = UseBlogs()
    const [domestic] = UseDomestic()
    const [international] = UseInternational()
    const [visa] = UseVisa()

    // useEffect(() => {
    //     axiosSecure.get('/users')
    //         .then(res => setUsers(res.data))
    //         .catch(err => console.error('Failed to fetch users', err));
    // }, [axiosSecure]);

    return (
        <div className='bg-white min-h-screen p-5 rounded shadow'>
            <h2 className='lg:text-2xl font-bold mb-4 text-purple-600'>Welcome to Dashboard Home</h2>
            <div className='flex flex-wrap gap-5 bg-amber-200 p-5 rounded'>
                {/* <p className='text-white text-sm lg:text-lg px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md'>
                    Users: {users.length}
                </p> */}
                <p className='text-white text-sm lg:text-lg px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 shadow-md'>
                    Services: {domestic.length}
                </p>
                <p className='text-white text-sm lg:text-lg px-4 py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 shadow-md'>
                    Blogs: {blogs.length}
                </p>
                <p className='text-white text-sm lg:text-lg px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 shadow-md'>
                    International Packages: {international.length}
                </p>
                <p className='text-white text-sm lg:text-lg px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 shadow-md'>
                    Domestic Packages: {domestic.length}
                </p>

                <p className='text-white text-sm lg:text-lg px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 shadow-md'>
                    Visa: {visa.length}
                </p>
            </div>


        </div>
    );
};

export default DashboardHome;