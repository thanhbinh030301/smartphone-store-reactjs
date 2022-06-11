import axiosClient from "./axiosClient";




const cartApi = {
    createCart(data){
        return axiosClient.post("carts/createCart", data);
    },
    getCarts(){
        return axiosClient.get("carts/getCarts");
    },
    getCartsByUser(userId){
        return axiosClient.get(`carts/getCartsByUser/${userId}`)
    }
}
export default cartApi;