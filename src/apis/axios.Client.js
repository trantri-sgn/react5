import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://cfd-reactjs.herokuapp.com/elearning/v4',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        const { status } = error.response;
        if (status === 403) {
            throw new Error('loi 500');
        }

        return Promise.reject(error);
    }
);

export default axiosClient;
