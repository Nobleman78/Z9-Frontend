import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseAxiosPublic";

const UseInternational = () => {
    const axiosPublic = useAxiosPublic()
    const { data: international = [], refetch } = useQuery({
        queryKey: ['international'],
        queryFn: async () => {
            const result = await axiosPublic.get('/international')
            return result.data
        }
    })
    return [international, refetch]
};

export default UseInternational;