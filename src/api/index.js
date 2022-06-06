import axios from 'axios';

const URL = 'http://localhost:5000';

export const getProducts = () => axios.get(`${URL}/products`);
export const getProductBySlug = (slug) => axios.get(`${URL}/products/${slug}`);
export const addToCart = (item) => axios.post(`${URL}/carts`, item);
export const getCarts = () => axios.get(`${URL}/carts`);
export const deleteCart = (id) => axios.delete(`${URL}/carts/${id}`);

