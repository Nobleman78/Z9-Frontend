import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const UsePageLoading = () => {
    const [loading, setLoading] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer)
    }, [location])
    return loading
};

export default UsePageLoading;