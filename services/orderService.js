import baseService from "./httpService";

export const addOrder = (data) => {
  return baseService({
    url: "/v1/orders/add-order",
    method: "POST",
    data,
  });
};

export const getMyorders = (data) => {
  return baseService({
    url: "/v1/orders/get-my-orders",
    method: "GET",
  });
};

export const rejectOrder = (data) => {
  return baseService({
    url: "/v1/orders/reject-order",
    method: "POST",
    data,
  });
};

export const getAllOrders = (data) => {
  return baseService({
    url: "/v1/orders/get-All-orders",
    method: "GET",
  });
};
// export const getAllBusinessesByCategory = (category, page, perPage) => {
//   return baseService({
//     url: `/v1/business/category/${category}`,
//     method: "POST",
//     data: {
//       page,
//       perPage,
//     },
//   });
// };

// export const getBusinessById = (id) => {
//   return baseService({
//     url: `/v1/business/${id}`,
//     method: "GET",
//   });
// };

// export const getBusinessesByUser = () => {
//   return baseService({
//     url: `/v1/business/getBusinessesForUser`,
//     method: "GET",
//   });
// };

export const cancelOrderById = (id) => {
  return baseService({
    url: `/v1/orders/delete/${id}`,
    method: "DELETE",
  });
};
export const approveOrderApi = (id) => {
  return baseService({
    url: `/v1/orders/approve-order/${id}`,
    method: "GET",
  });
};

// export const approveBusiness = (id) => {
//   return baseService({
//     url: `/v1/business/approve`,
//     method: "POST",
//     data: {
//       id,
//     },
//   });
// };
