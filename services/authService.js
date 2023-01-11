import baseService from "./httpService";

export const sendOtpApi = (data) => {
    return baseService({
        url: "/v1/auth/send-otp",
        method: "POST",
        data
    });
};

export const verifyOtpApi = (data) => {
    return baseService({
        url: "/v1/auth/verify-otp",
        method: "POST",
        data
    });
};

export const logoutApi = (data) => {
    return baseService({
        url: "/v1/auth/logout",
        method: "POST",
        data
    });
}

export const registerApi = (data) => {
    return baseService({
        url: "/v1/auth/register",
        method: "POST",
        data
    });
}