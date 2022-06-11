import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://phone-store-web.herokuapp.com/',
    headers: {
        'content-type': 'application/json',
    }
})
axiosClient.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    console.log(error);
    const {status, data} = error.response;
    if(status===401){
        throw new Error(data);
    }
    return Promise.reject(error);
});

export default axiosClient;