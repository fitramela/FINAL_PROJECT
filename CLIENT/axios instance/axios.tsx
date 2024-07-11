import axios from "axios";


const localhost = 'http://localhost:3001'
const api = 'https://pais.fitramelaniarais.my.id'

const axiosInstance = axios.create({
    baseURL: localhost 
})

export default axiosInstance


