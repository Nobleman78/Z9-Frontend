import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseAxiosPublic";

const UseBlogs = () => {
    const axiosPublic = useAxiosPublic()
    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const result = await axiosPublic.get('/blogs')
            return result.data
        }
    })
    return [blogs, refetch]
};

export default UseBlogs;