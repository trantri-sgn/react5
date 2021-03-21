import axios from 'axios'
import Link, { Redirect } from 'react-router-dom'

import { BrowserRouter, useHistory } from "react-router-dom";


const axiosClient = axios.create({
    baseURL: 'http://54.251.9.119:30f00/api/v1/',
    headers: {
        "Content-Type": "application/json",
    },
})

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const history = useHistory();
    const { config, status } = error.response;
    if (status === 404) {

        history.push("/helo");
        throw new Error("loi 500")
    }

    return Promise.reject(error);
});

export default axiosClient;
