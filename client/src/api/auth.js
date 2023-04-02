import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/auth`;

const getToken = () => localStorage.getItem('jwtToken');

export const login = (email, password) => {
    return axios({
      method: 'POST',
      data: {
        email: email,
        password: password,
      },
      withCredentials: true,
      url: `${API_URL}/login`,
    })
    .then((res) => {
        localStorage.setItem('jwtToken', res.data.token);
        return (res.data.message);
    })
    .catch((err) => {
        return null;
    })
};

export const register = (email, password, confirmPassword) => {
    return axios({
        method: 'POST',
        data: {
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        },
        withCredentials: true,
        url: `${API_URL}/register`,
    })
    .then((res) => {
        localStorage.setItem('jwtToken', res.data.token);
        return (res.data.message);
    })
    .catch((err) => {
        return null;
    })
}

export const getUser = () => {
    return axios({
        method: 'GET',
        headers: {
            Authorization: `Bearer ${getToken()}`
        },
        withCredentials: true,
        url: `${API_URL}/user`,
    })
    .then((res) => {
        return (res.data);
    })
    .catch((err) => {
        return null;
    })
}