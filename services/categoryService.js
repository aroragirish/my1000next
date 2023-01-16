import baseService from "./httpService";

export const getAllCategories = (data) => {
    return baseService({
        url: "/v1/category",
        method: "GET"
    });
};