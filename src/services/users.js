import axios from "axios";
import { toast } from 'react-toastify';

export const getUsers = async () => {

    try {
        const response = await axios('http://localhost:3001/users')
        if (response.status != 200) {
            throw new Error("Server error")
        }

        return response.data;

    } catch (error) {
        console.log(error)
    }
};

export const addUser = async (data) => {
    try {
        const response = await axios.post('http://localhost:3001/users', data)
        if (response.status < 200 && response.status >= 300) {
            throw new Error("Server error")
        }
        toast.success('New user was created')
        return response.data;

    } catch (error) {
        console.log(error)
    }

}

export const deleteUser = async (id) => {

    try {
       const response = await axios.delete(`http://localhost:3001/users/${id}`)
       if (response.status < 200 && response.status >= 300) {
            throw new Error("Server error")
        }
        toast.success('User was deleted')
        return response.data;
     } catch (error) {
        console.log(error)
     }
}

export const updateUser = async (data) => {
    try {
        const response = await axios.patch(`http://localhost:3001/users/${data.id}`, data)
        if (response.status < 200 && response.status >= 300) {
            throw new Error("Server error")
        }
        toast.success('User was updated')
        return response.data;

    } catch (error) {
        console.log(error)
    }
}