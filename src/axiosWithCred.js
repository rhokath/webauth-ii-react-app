import axios from 'axios'; 

const axiosWithCred = axios.create({
    withCredentials: true
})

export default axiosWithCred;