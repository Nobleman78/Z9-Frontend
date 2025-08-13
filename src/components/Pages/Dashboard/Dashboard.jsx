import { useContext, useEffect } from "react";
import { FaHome, FaUser, FaCogs, FaBlog, FaBriefcase, FaUsers } from "react-icons/fa";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../ContextApi/AuthContext";
import UseAdmin from "../../Hooks/UseAdmin";

const Dashboard = () => {
    const location = useLocation();
    const { user, loading: authLoading } = useContext(AuthContext);
    const { isAdmin, isLoading: adminLoading } = UseAdmin(); // assuming UseAdmin returns { isAdmin, isLoading }
    const navigate = useNavigate();

    useEffect(() => {
        if (!authLoading && !adminLoading && !isAdmin) {
            navigate('/login');
        }
    }, [authLoading, adminLoading, isAdmin, navigate]);

    if (authLoading || adminLoading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    if (!isAdmin) {
        return <div className="text-center mt-10 text-red-500">You do not have permission to view this page.</div>;
    }
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-sky-200 z-10 shadow-lg">
                <div className="flex justify-around items-center py-3">
                    <NavLink
                        to="/dashboard/home"
                        className={({ isActive }) =>
                            `flex flex-col items-center p-2 rounded-lg ${isActive ? 'text-purple-700 bg-purple-100' : 'text-blue-600'}`
                        }
                    >
                        <FaHome className="text-xl" />
                        <span className="text-xs mt-1">Home</span>
                    </NavLink>
                    <NavLink
                        to="/dashboard/users"
                        className={({ isActive }) =>
                            `flex flex-col items-center p-2 rounded-lg ${isActive ? 'text-purple-700 bg-purple-100' : 'text-blue-600'}`
                        }
                    >
                        <FaUser className="text-xl" />
                        <span className="text-xs mt-1">User</span>
                    </NavLink>
                    <NavLink
                        to="/dashboard/managevisa"
                        className={({ isActive }) =>
                            `flex flex-col items-center p-2 rounded-lg ${isActive ? 'text-purple-700 bg-purple-100' : 'text-blue-600'}`
                        }
                    >
                        <FaCogs className="text-xl" />
                        <span className="text-xs mt-1">Visa</span>
                    </NavLink>
                    <NavLink
                        to="/dashboard/manageblog"
                        className={({ isActive }) =>
                            `flex flex-col items-center p-2 rounded-lg ${isActive ? 'text-purple-700 bg-purple-100' : 'text-blue-600'}`
                        }
                    >
                        <FaBlog className="text-xl" />
                        <span className="text-xs mt-1">Blogs</span>
                    </NavLink>
                    <NavLink
                        to="/dashboard/managedomestic"
                        className={({ isActive }) =>
                            `flex flex-col items-center p-2 rounded-lg ${isActive ? 'text-purple-700 bg-purple-100' : 'text-blue-600'}`
                        }
                    >
                        <FaBriefcase className="text-xl" />
                        <span className="text-xs mt-1">Domestic</span>
                    </NavLink>
                    <NavLink
                        to="/dashboard/manageinternational"
                        className={({ isActive }) =>
                            `flex flex-col items-center p-2 rounded-lg ${isActive ? 'text-purple-700 bg-purple-100' : 'text-blue-600'}`
                        }
                    >
                        <FaUsers className="text-xl" />
                        <span className="text-xs mt-1">International</span>
                    </NavLink>
                </div>
            </nav>

            {/* Sidebar for Medium and Large Devices */}
            <aside className="hidden md:block w-full md:w-64 bg-sky-200 shadow-md">
                <div className="p-4 border-b border-sky-300">
                    <h2 className="text-xl font-bold text-sky-800">Dashboard</h2>
                </div>
                <nav className="flex flex-col p-4 gap-2">
                    <NavLink
                        to="/dashboard/home"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? 'bg-purple-700 text-white' : 'text-blue-800 hover:bg-sky-300'
                            }`
                        }
                    >
                        <FaHome className="text-lg" />
                        <span>Home</span>
                    </NavLink>
                    <NavLink
                        to="/dashboard/users"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? 'bg-purple-700 text-white' : 'text-blue-800 hover:bg-sky-300'
                            }`
                        }
                    >
                        <FaUser className="text-lg" />
                        <span>User</span>
                    </NavLink>
                    <NavLink
                        to="/dashboard/managevisa"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? 'bg-purple-700 text-white' : 'text-blue-800 hover:bg-sky-300'
                            }`
                        }
                    >
                        <FaCogs className="text-lg" />
                        <span>Manage Visa</span>
                    </NavLink>
                    <NavLink
                        to="/dashboard/manageblog"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? 'bg-purple-700 text-white' : 'text-blue-800 hover:bg-sky-300'
                            }`
                        }
                    >
                        <FaBlog className="text-lg" />
                        <span>Manage Blogs</span>
                    </NavLink>
                    <NavLink
                        to="/dashboard/managedomestic"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? 'bg-purple-700 text-white' : 'text-blue-800 hover:bg-sky-300'
                            }`
                        }
                    >
                        <FaBriefcase className="text-lg" />
                        <span>Manage Domestic</span>
                    </NavLink>
                    <NavLink
                        to="/dashboard/manageinternational"
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? 'bg-purple-700 text-white' : 'text-blue-800 hover:bg-sky-300'
                            }`
                        }
                    >
                        <FaUsers className="text-lg" />
                        <span>Manage International</span>
                    </NavLink>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 md:p-6 bg-yellow-50 overflow-x-auto pb-20 md:pb-0">
                {location.pathname === '/dashboard' && (
                    <div className="mb-6 p-4 bg-white rounded-lg shadow">
                        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-800 via-green-500 to-blue-800 bg-clip-text text-transparent">
                            Welcome Back {user?.email}
                        </h1>
                    </div>
                )}
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;
