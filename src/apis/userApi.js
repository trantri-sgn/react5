import axiosClient from "./axios.Client";

const userApi = {
    register(data) {
        const url = '/login';
        return axiosClient.post(url, data);
    },

}

export default userApi