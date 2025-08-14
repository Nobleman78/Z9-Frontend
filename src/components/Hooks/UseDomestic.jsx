import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseAxiosPublic";

const UseDomestic = () => {
    const axiosPublic = useAxiosPublic()
    const { data: domestic = [], refetch, isLoading, isFetching } = useQuery({
        queryKey: ['domestic'],
        queryFn: async () => {
            const result = await axiosPublic.get('/domestic')
            return result.data
        },
        refetchOnMount: 'always',
        staleTime: 0,
    })
    return [domestic, refetch, isLoading, isFetching]
};

export default UseDomestic;