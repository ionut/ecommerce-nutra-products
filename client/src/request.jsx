import axios from "axios";


const token = import.meta.env.VITE_API_TOKEN;
const apiUrl = import.meta.env.VITE_API_URL;


export const makeRequest = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `bearer ${token}`,
    }
})