import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../ContextApi/AuthContext";

const axiosSecure = axios.create({
    //baseURL: 'http://localhost:3000'
    baseURL: 'https://backend-roan-iota-48.vercel.app'
})
const UseAxiosSecure = () => {
    const navigate = useNavigate()
    const { signOutUser } = useContext(AuthContext)
    axiosSecure.interceptors.request.use(function (config) {
        console.log('Request Stop By Interceptors')
        const token = localStorage.getItem('access-token');
        console.log(token)
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use(function (response) {
        return response;

    }, async (error) => {
        const status = error.response.status;
        // console.log('Status', status)
        if (status === 401 || status === 403) {
            await signOutUser()
            navigate('/login')
        }
        return Promise.reject(error);
    })
    return axiosSecure;
};

export default UseAxiosSecure;