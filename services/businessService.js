import baseService from "./httpService";

export const addBusiness = (data) => {
    return baseService({
        url: "/v1/business/add-business",
        method: "POST",
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

export const getAllBusinesses = (data) => {
    return baseService({
        url: "/v1/business",
        method: "GET"
    });
};

export const getAllBusinessesByCategory = (category) => {
    return baseService({
        url: `/v1/business/category/${category}`,
        method: "GET"
    });
};

export const getBusinessById = (id) => {
    return baseService({
        url: `/v1/business/${id}`,
        method: "GET"
    });
};