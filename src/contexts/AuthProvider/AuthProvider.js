import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuhtContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    //user state
    const [user, setUser] = useState(null)
    //loading state
    const [loading, setLoading] = useState(true);
    //create user with email and pass
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    //sign in with email and password
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    //sign in with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    //update user profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)

    }
    //send email verification
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    //logout function
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser == null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = { user, loading, signInWithGoogle, logOut, createUser, loginUser, updateUserProfile, verifyEmail, setLoading };
    return (
        <AuhtContext.Provider value={authInfo}>
            {children}
        </AuhtContext.Provider>
    );
};

export default AuthProvider;