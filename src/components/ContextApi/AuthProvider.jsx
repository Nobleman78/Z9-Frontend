import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth';

import { auth } from '../Utility/Firebase';
import useAxiosPublic from '../Hooks/UseAxiosPublic';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInWithEmailandPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const handleForgetPassword = (email) => {
        if (!email) {
            alert('Please provide a valid email address');
        } else {
            return sendPasswordResetEmail(auth, email);
        }
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                try {
                    const userInfo = { email: currentUser.email };
                    const res = await axiosPublic.post('/jwt', userInfo);
                    if (res.data.token) {
                        localStorage.setItem('access-token', res.data.token);
                    }
                } catch (err) {
                    console.error('JWT token fetch failed:', err);
                }
            } else {
                localStorage.removeItem('access-token');
            }

            setLoading(false);
        });

        return () => unsubscribe();
    }, [axiosPublic]);

    const value = {
        loading,
        user,
        createUser,
        signInWithEmailandPassword,
        handleForgetPassword,
        signOutUser,
        loginWithGoogle,

    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;