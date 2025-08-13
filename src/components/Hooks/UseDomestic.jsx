import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseAxiosPublic";

const UseDomestic = () => {
    const axiosPublic = useAxiosPublic()
    const { data: domestic = [], refetch } = useQuery({
        queryKey: ['domestic'],
        queryFn: async () => {
            const result = await axiosPublic.get('/domestic')
            return result.data
        }
    })
    return [domestic, refetch]
};

export default UseDomestic;