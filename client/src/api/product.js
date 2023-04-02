import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/product`;

const getToken = () => localStorage.getItem('jwtToken');

export const cart = (productId) => {
    return axios({
        method: 'POST',
        headers: {
            Authorization: `Bearer ${getToken()}`
        },
        data: {
            id: productId,
        },
        withCredentials: true,
        url: `${API_URL}/cart`,
    })
    .then((res) => {
        return (res.data.cart);
    })
    .catch((err) => {
        console.log(err);
        return null;
    })
}

export const deleteCart = (id) => {
    return axios({
        method: 'POST',
        headers: {
            Authorization: `Bearer ${getToken()}`
        },
        data: { id: id },
        withCredentials: true,
        url: `${API_URL}/cart/delete`,
    })
    .then((res) => {
        return (res.data);
    })
    .catch((err) => {
        console.log(err);
        return null;
    })
}


export const addCart = (index, add) => {
    return axios({
        method: 'POST',
        headers: {
            Authorization: `Bearer ${getToken()}`
        },
        data: {
          index: index,
          add: add,
        },
        withCredentials: true,
        url: `${API_URL}/cart/add`,
    })
    .then((res) => {
        return (res.data);
    })
    .catch((err) => {
        console.log(err);
        return null;
    })
}


export const checkout = (userCart) => {
    return axios({
        method: 'POST',
        headers: {
            Authorization: `Bearer ${getToken()}`
        },
        data: { cart: userCart },
        withCredentials: true,
        url: `${API_URL}/checkout`,
    })
    .then((res) => {
        return (res.data);
    })
    .catch((err) => {
        console.log(err);
        return null;
    })
}


export const getProducts = () => {
    return axios({
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getToken()}`
        },
        withCredentials: true,
        url: `${API_URL}/products`
    })
    .then((res) => {
        console.log('products sent:', res);
        return (res.data);
    })
    .catch((err) => {
        console.log(err);
        return null;
    })
}