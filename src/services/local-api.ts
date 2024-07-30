import axios from "axios"

const localInstance = axios.create({
    baseURL: 'http://localhost:3020/auth/',
});

export default localInstance