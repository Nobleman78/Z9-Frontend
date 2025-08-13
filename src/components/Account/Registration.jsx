import registrationLottie from '../../assets/Account/Login Leady.json'
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import { useContext } from 'react';
import UsePasswordToggle from '../Hooks/UsePasswordToggle';
import AuthContext from '../ContextApi/AuthContext';

const Registration = () => {
    const navigate = useNavigate()
    const { createUser } = useContext(AuthContext)
    const { icon, inputType, handlePasswordVisibility } = UsePasswordToggle()

    const isStrongPassword = (password) => {
        const minLength = 8
        const hasUpperCase = /[A-Z]/.test(password)
        const hasLowerCase = /[a-z]/.test(password)
        const hasDigit = /[0-9]/.test(password)
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return (
            password.length >= minLength &&
            hasUpperCase &&
            hasLowerCase &&
            hasDigit &&
            hasSpecialChar

        )
    }
    const handleRegistration = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (!isStrongPassword(password)) {
            alert('Password must be at least 8 characters and include uppercase, lowercase, number, and special character.');
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                alert('Sign Up Successful');
                form.reset();
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('User with this email already exists!');
                } else {
                    alert(error.message);
                }
            });

    }

    return (
        <div>
            <main className='flex flex-col lg:flex-row gap-5'>
                {/* Left part */}
                <div className='w-full lg:w-1/2'>
                    <Lottie animationData={registrationLottie}></Lottie>
                </div>
                {/* Right Part */}
                <div className='w-full lg:w-1/2 py-5 px-5 bg-blue-100 ' style={{ fontFamily: 'poppins' }}>
                    <form onSubmit={handleRegistration} action='' className='bg-white px-10 py-10 rounded-lg'>
                        <h2 className='text-xl mb-2 font-semibold'>Registration</h2>
                        <div className='flex items-center gap-2 mb-5'>
                            <h2 className=''>Have an account?</h2>
                            <button onClick={() => navigate('/login')} className='text-blue-500 text-sm cursor-pointer hover:underline'>Login</button>
                        </div>

                        {/* Login With User name/email and password */}
                        <div className='flex flex-col gap-2 mb-5'>
                            <label htmlFor=''>User Email</label>
                            <input type='email' name='email' required placeholder='Username' className='border-2 border-gray-400 py-2 px-5 rounded' />
                        </div>
                        <div className='flex flex-col gap-2 mb-5 relative'>
                            <label htmlFor=''>Password</label>
                            <input type={inputType} placeholder='Enter your password' name='password' className='border-2 border-gray-400 py-2 px-5 rounded' />
                            <span onClick={handlePasswordVisibility} className='absolute top-12 right-3 text-gray-500 cursor-pointer'>
                                {icon}
                            </span>
                        </div>
                        <button className='bg-sky-600 hover:bg-sky-800 font-semibold w-full py-2 text-white cursor-pointer rounded mb-5'>Register/Sign Up</button>
                        <p className='text-xs text-center'>By creating this account, you agree to our <strong className='cursor-pointer'>Privacy Policy</strong> & <strong className='cursor-pointer'>Cookie Policy</strong>.</p>
                    </form>
                </div>
            </main>
        </div>
    )
};

export default Registration;