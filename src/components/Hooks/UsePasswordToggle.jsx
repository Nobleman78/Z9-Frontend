import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UsePasswordToggle = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [icon, setIcon] = useState(FaEyeSlash)
    const handlePasswordVisibility = () => {
        if (passwordVisible) {
            setIcon(FaEyeSlash)
        }
        else {
            setIcon(FaEye)
        }
        setPasswordVisible(prev => !prev)
    }
    const inputType = passwordVisible ? 'text' : 'password'
    return {
        icon, inputType, handlePasswordVisibility
    }

};

export default UsePasswordToggle;