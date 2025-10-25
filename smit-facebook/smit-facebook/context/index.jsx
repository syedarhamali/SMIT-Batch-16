import { createContext, useEffect, useState } from "react";
import { auth } from "../config";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext()

function AuthProvider({ children }) {
    const [firebaseUser, setFirebaseUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                setFirebaseUser(user)
                setLoading(false)
                // ...
            } else {
                // User is signed out
                // ...
            }
        });

        return unsubscribe
    }, [])


    return (
        <AuthContext.Provider value={{ firebaseUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }