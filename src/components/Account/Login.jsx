import { useContext, useRef } from 'react';
import loginLottie from '../../assets/Account/Login Leady.json'
import Lottie from 'lottie-react'
import { useLocation, useNavigate } from 'react-router-dom';
import UsePasswordToggle from '../Hooks/UsePasswordToggle';
import AuthContext from '../ContextApi/AuthContext';
import useAxiosPublic from '../Hooks/UseAxiosPublic';


const Login = () => {
    const axiosPublic = useAxiosPublic()
    const { icon, inputType, handlePasswordVisibility } = UsePasswordToggle()
    const { signInWithEmailandPassword, handleForgetPassword } = useContext(AuthContext)
    const emailRef = useRef()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailandPassword(email, password)
            .then(res => {
                const userInfo = {
                    email: res.user?.email
                };

                alert("Login Successful");
                navigate(from, { replace: true });

                axiosPublic.post("/users", userInfo)
                    .then(response => {
                        console.log("User saved:", response.data);
                    })
                    .catch(error => {
                        console.error("Failed to save user:", error);
                    });


                form.reset();
            })
            .catch(error => {
                alert("Invalid Email or Password");
                console.error("Login failed:", error);
            });
    };
    const ForgetPassword = () => {
        const email = emailRef.current?.value
        handleForgetPassword(email)
            .then(() => {
                alert('Password reset link sent to the Gmail , Please Check!!!')
            })
    }
    return (
        <div>
            <main className='flex flex-col lg:flex-row gap-5'>
                {/* Left part */}
                <div className='w-full lg:w-1/2'>
                    <Lottie animationData={loginLottie}></Lottie>
                </div>
                {/* Right Part */}
                <div className='w-full lg:w-1/2 py-5 px-5 bg-blue-100 ' style={{ fontFamily: 'poppins' }}>
                    <div className='bg-white px-10 py-10 rounded-lg'>
                        <h2 className='text-xl mb-2 font-semibold'>Login</h2>
                        <div className='flex items-center gap-2 mb-5'>
                            <h2 className=''>New user</h2>
                            <button onClick={() => navigate('/registration')} className='text-blue-500 text-sm cursor-pointer hover:underline'>Register Now</button>
                        </div>
                        {/* Login With Google  */}
                        {/* onClick={handleGoogleLogin} */}
                        {/* <div  className='flex items-center justify-center gap-3 bg-gray-100 py-2 rounded  mb-5 cursor-pointer'>
                            <FcGoogle className='text-xl' /><button >Login with Google</button>
                        </div> */}
                        `  {/* <span className='flex justify-center'>Or</span>` */}

                        <form onSubmit={handleLogin}>
                            {/* Login With User name/email and password */}
                            <div className='flex flex-col gap-2 mb-5'>
                                <label htmlFor=''>User Email</label>
                                <input ref={emailRef} type='email' name='email' required placeholder='Username' className='border-2 border-gray-400 py-2 px-5 rounded' />
                            </div>
                            <div className='flex flex-col gap-2 mb-5 relative'>
                                <label htmlFor=''>Password</label>
                                <input type={inputType} name='password' required placeholder='Password' className='border-2 border-gray-400 py-2 px-5 rounded' />
                                <span onClick={handlePasswordVisibility} className='absolute top-12 right-3 text-gray-500 cursor-pointer'>
                                    {icon}
                                </span>
                            </div>
                            <div className='flex justify-between mb-5'>
                                <div className='flex items-center gap-2'>
                                    <input type='checkbox' />
                                    <button>Remember Me</button>
                                </div>
                                <button type='button' onClick={ForgetPassword} className='text-blue-500 cursor-pointer text-sm hover:underline'>Forget Password</button>
                            </div>
                            <button className='bg-sky-600 hover:bg-sky-800 w-full py-2 text-white cursor-pointer rounded mb-5'>Sign In</button>
                        </form>
                        <p className='text-xs text-center'>By creating this account, you agree to our <strong className='cursor-pointer'>Privacy Policy</strong> & <strong className='cursor-pointer'>Cookie Policy</strong>.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;