import API from "./BaseApi.js";

const getAllProtests = async () => {
    let axiosResponse = await API.get("/protest/getAll")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            if (error.response) {
                return { error: error.response.data.error };
            }
            else {
                return { error: "Can't retrieve protests." };
            }
        });
    return axiosResponse;
};

export {
    getAllProtests
};