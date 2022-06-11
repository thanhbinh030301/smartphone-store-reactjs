import axiosClient from "./axiosClient";


// export const getProducts = () => axios.get(`${URL}/products`);
// export const getProductBySlug = (slug) => axios.get(`${URL}/products/${slug}`);


export const productApi = {
    getProducts(){
        return axiosClient.get("/products")
    },
    getProductBySlug(slug){
        return axiosClient.get(`/products/${slug}`)
    },
    updateProduct(product){
        return axiosClient.put(`/products/update/${product.id}`, product)
    },
    deleteProduct(id){
        return axiosClient.delete(`/products/delete/${id}`)
    },
    addProduct(product){
        return axiosClient.post("/products/add", product)
    }
}