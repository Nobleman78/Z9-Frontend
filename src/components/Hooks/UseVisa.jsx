import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseAxiosPublic";

const UseVisa = () => {
    const axiosPublic = useAxiosPublic()
    const { data: visa = [], refetch } = useQuery({
        queryKey: ['visa'],
        queryFn: async () => {
            const result = await axiosPublic.get('/visa')
            return result.data
        }
    })
    return [visa, refetch]
};

export default UseVisa;