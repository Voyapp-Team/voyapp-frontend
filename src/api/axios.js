import axios from "axios";

const api = axios.create({
    baseUrl: process.env.BASE_URL,
    timeout: 15000,
    headers:{
        "Content-Type":"application/json",
    },
})

export default api;