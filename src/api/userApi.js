import axiosClient from "./axiosClient";

export const loginUser = (user) => axiosClient.post(`$v1/auth/login`, user);
export const registerUser = (user) => axiosClient.post(`v1/auth/register`, user);
export const getUsers = (accesstoken) => axiosClient.get(`v1/user`,{
    headers: {token: `Bearer ${accesstoken}`}
});


const userApi = {
    register(user){
        return axiosClient.post("v1/auth/register", user);
    },
    login(user){
        return axiosClient.post("v1/auth/login", user);
    },
    getUsers(accesstoken){
        return axiosClient.get("v1/user/getAllUsers")
    }
 
}
export default userApi;