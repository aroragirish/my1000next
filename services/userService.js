import baseService from "./httpService";

export const updateBankDetails = (data) => {
    return baseService({
        url: "/v1/users/update-bank-details",
        method: "POST",
        data
    });
};

export const getUserByid = (id) => {
    return baseService({
        url: `/v1/users/${id}`,
        method: "GET",
    });
};

export const uploadKyc = (data) => {
    return baseService({
        url: "/v1/users/update-kyc-documents",
        method: "POST",
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};