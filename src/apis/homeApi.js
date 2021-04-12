import axiosClient from "./axios.Client";

const homeApi = {
    getAll(params) {
        const url = '/home';
        return axiosClient.get(url, { params });
    }
}

export default homeApi