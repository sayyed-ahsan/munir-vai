import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup } from 'firebase/auth';
import auth from './firebase/firebase.config';

export const AuthContext = createContext<any>({});
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }: any) => {
    //-------
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState<any>(true);
    //--------
    const [theme, setTheme] = useState(false);
    useEffect(() => {
        setTheme(JSON.parse(window.localStorage.getItem("theme") || "false"));
    }, [])
    const handleThemeChange = () => {
        // setTheme(!theme);
        // window.localStorage.setItem("theme", JSON.stringify(!theme));
    }
    //--------
    const googleSignin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    //--------
    const createUser = (email: any, password: any) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //--------
    const signIn = (email: any, password: any) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //--------
    const updateUser = (userInfo: any) => {
        return updateProfile(user, userInfo);
    }
    //--------
    const logOut = () => {
        setLoading(true);
        localStorage.setItem('accesstoken', " ");
        return signOut(auth);
    }
    //--------
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            const user = currentUser;
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])
    //--------
    const authInfo: any = {
        googleSignin,
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        loading,
        handleThemeChange, theme
    }
    //--------
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;