import api from './api';
import Cookies from "js-cookie";

export const logIn = async (data) => {
    try {

        const response = await api.post("/auth/email/login", data)

        if (response.status < 200 || response.status >= 300) {
            throw new Error(response.errors)
        }

        Cookies.set("auth-token", response.data.token, { expires: 1 });
        
        return response;
        
        }

        catch (error) {
            console.log(error)
        }
}

export const getCurrentUser = async () => {

    try {

        const response = await api.get("/auth/me")

        if (response.status < 200 || response.status >= 300) {

            throw new Error(response.errors)
        }

        return response;
        
        }

        catch (error) {
            console.log(error)
        }
}

export const logOut = async () => {
    try {
        const response = await api.post("/auth/logOut")
        
        if (response.status < 200 || response.status >= 300) {
            throw new Error(response.errors)
        }
        Cookies.remove("auth-token")
        return response;

    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async (data) => {
    try {
        const response = await api.patch("/auth/me", data)
        
        if (response.status < 200 ||  response.status >= 300) {
            throw new Error(response)
        }

        return response;

    } catch (error) {
    }
}
    