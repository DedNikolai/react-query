import axios from "axios";

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

        return response.data;

    } catch (error) {
        console.log(error)
    }

}