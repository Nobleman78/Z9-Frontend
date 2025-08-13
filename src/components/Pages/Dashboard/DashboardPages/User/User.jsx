import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";

const SUPER_ADMIN_EMAIL = "demo@gmail.com";

const Users = () => {
    const axiosSecure = UseAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleDelete = (id, email) => {
        if (email === SUPER_ADMIN_EMAIL) return;

        axiosSecure.delete(`/users/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch();
                }
            });
    };

    const handleToggleRole = (user) => {
        if (user.email === SUPER_ADMIN_EMAIL) return;

        const newRole = user.role === 'admin' ? 'user' : 'admin';

        axiosSecure.patch(`/users/admin/${user._id}`, { role: newRole })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                }
            });
    };

    return (
        <div className="p-4">
            <div className="flex mb-4">
                <h2 className="font-bold text-purple-500 text-2xl">Total Users: {users.length}</h2>
            </div>

            {/* Mobile view */}
            <div className="block md:hidden space-y-6">
                {users.map((item) => (
                    <div key={item._id} className="bg-white shadow rounded-xl p-4 border">
                        <div className="mb-2">
                            <span className="font-medium">Email:</span> {item.email}
                        </div>
                        <div className="mb-2 flex items-center gap-2">
                            <span className="font-medium">Role:</span>
                            {item.email === SUPER_ADMIN_EMAIL ? (
                                <span className="text-purple-600 font-bold">Super Admin</span>
                            ) : (
                                <button
                                    onClick={() => handleToggleRole(item)}
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    {item.role === 'admin' ? 'Make User' : <FaUser />}
                                </button>
                            )}
                        </div>
                        <button
                            onClick={() => handleDelete(item._id, item.email)}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mt-3 rounded shadow text-sm"
                            disabled={item.email === SUPER_ADMIN_EMAIL}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            {/* Desktop view */}
            <div className="overflow-x-auto mt-10 rounded-2xl shadow-md hidden md:block">
                <table className="min-w-full bg-white text-gray-800 text-left">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold">#</th>
                            <th className="px-6 py-4 text-sm font-semibold">Email</th>
                            <th className="px-6 py-4 text-sm font-semibold">Role</th>
                            <th className="px-6 py-4 text-sm font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => (
                            <tr key={item._id} className="border-b hover:bg-blue-50 transition">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4 font-medium">{item.email}</td>
                                <td className="px-6 py-4 font-medium">
                                    {item.email === SUPER_ADMIN_EMAIL ? (
                                        <span className="text-purple-600 font-bold">Super Admin</span>
                                    ) : (
                                        <button
                                            onClick={() => handleToggleRole(item)}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            {item.role === 'admin' ? 'Make User' : <FaUser />}
                                        </button>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleDelete(item._id, item.email)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
                                        disabled={item.email === SUPER_ADMIN_EMAIL}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;