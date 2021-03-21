import axiosClient from "./axios.Client";

const testApi = {
    getAll(params) {
        const url = '/products';
        return axiosClient.get(url, { params });
    }
}

export default testApi