import React, {createContext, useMemo} from "react";
import { getCurrentUser} from "../services/auth";
import { useQuery } from "react-query";

export const AuthContext = createContext(null);

function AuthProvider({children}) {
    const {data = null, isFetching} = useQuery('user', getCurrentUser)

    const auth = useMemo(() => {
        return {user: data, isLoading: isFetching}
    }, [data, isFetching])

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider