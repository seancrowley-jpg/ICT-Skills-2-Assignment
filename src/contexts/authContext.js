import React, { useContext, useEffect, useState } from "react";
import {auth} from "../firebase";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, SetLoading] = useState(true);

    function signUp(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function logIn(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logOut() {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            SetLoading(false);
        })  
        return unsubscribe  
    }, [])

    const value = {
        currentUser,
        signUp,
        logIn,
        logOut
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}