import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseAxiosPublic";

const UseVisa = () => {
    const axiosPublic = useAxiosPublic();

    const { data: visa = [], refetch, isLoading, isFetching } = useQuery({
        queryKey: ['visa'],
        queryFn: async () => {
            const result = await axiosPublic.get('/visa');
            return result.data;
        },
        refetchOnMount: 'always', 
        staleTime: 0, 
    });

    return [visa, refetch, isLoading, isFetching];
};

export default UseVisa;
