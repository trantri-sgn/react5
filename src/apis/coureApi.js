import axiosClient from "./axios.Client";

const coureDetailApi = {
    getCourses(params) {
        const url = '/courses';
        return axiosClient.get(url, { params });
    },

    getslug(slug) {
        const url = `/course/${slug}`;
        return axiosClient.get(url);
    },
    getRelated(slug) {
        const url = `/course-related/${slug}`;
        return axiosClient.get(url);
    }

}

export default coureDetailApi