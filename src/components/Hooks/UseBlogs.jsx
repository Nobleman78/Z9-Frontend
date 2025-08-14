import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseAxiosPublic";

const UseBlogs = () => {
    const axiosPublic = useAxiosPublic()
    const { data: blogs = [], refetch, isLoading, isFetching } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const result = await axiosPublic.get('/blogs')
            return result.data
        },
        refetchOnMount: 'always',
        staleTime: 0
    })
    return [blogs, refetch, isLoading, isFetching]
};

export default UseBlogs;