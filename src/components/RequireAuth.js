import React, {useContext} from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function RequireAuth({children}) {
    const {user} = useContext(AuthContext)

    const location = useLocation();
    const url = new URLSearchParams();
    
    url.set("redirect", location.pathname + location.search);

    return !user ? <Navigate 
                    to={{
                        pathname: "/login",
                        search: url.toString(),
                      }} state={{from: location}}/> : children

}

export default RequireAuth;