import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseAxiosPublic";

const UseInternational = () => {
    const axiosPublic = useAxiosPublic()
    const { data: international = [], refetch, isLoading, isFetching } = useQuery({
        queryKey: ['international'],
        queryFn: async () => {
            const result = await axiosPublic.get('/international')
            return result.data
        },
        refetchOnMount: 'always',
        staleTime: 0
    })
    return [international, refetch, isLoading, isFetching]
};

export default UseInternational;