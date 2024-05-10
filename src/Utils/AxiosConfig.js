// axiosConfig.js

import axios from 'axios';

// Create an Axios instance with default configuration
const instance = axios.create({
    baseURL: process.env.REACT_APP_BASEURL, // Set your base URL
    timeout: 15000, // Set a timeout
    headers: {
        'Content-Type': 'application/json',
        // You can add other common headers here
    },
});

// You can also add interceptors if needed
instance.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        const token = localStorage.getItem("token");
        if (token) {
            config.headers['Authorization'] = token;
        }
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        // Do something with successful response
        return response;
    },
    (error) => {
        // Do something with response error
        return Promise.reject(error);
    }
);

export default instance;
