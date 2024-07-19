import axios from 'axios';

// const api = axios.create({
//     baseURL: "http://localhost:8000/api/v1"
// })

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})


export default api