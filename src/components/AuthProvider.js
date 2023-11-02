import React, {createContext, useCallback, useEffect, useMemo, useState} from "react";
import { getCurrentUser, logIn, logOut } from "../services/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext(null);

function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const tokenData = Cookies.get("auth-token");

        if (tokenData) {
            setIsLoading(true)
            getCurrentUser().then(res => {
            setUser(res?.data || null)
            setIsLoading(false)
        })
          }

    }, [])

    const authUser = useCallback((data) => {
        setIsLoading(true)
        logIn(data).then(res => {
            setUser(res?.data?.user)
            setIsLoading(false)
        })
    }, [])

    const logOutUser = useCallback(() => {
        setIsLoading(true)
        logOut().then(res => {
            setUser(null)
            setIsLoading(false)
        })
    }, [])
 
    const auth = useMemo(() => {
        return {user, isLoading, authUser, logOutUser}
    }, [user, isLoading, authUser, logOutUser])

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider