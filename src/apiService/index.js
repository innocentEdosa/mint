import axios from 'axios';

const getAxiosInstance = (baseURL = '/api') => {
  const API_BASE_URL = baseURL;

  return axios.create({
    baseURL: API_BASE_URL,
  });
};

export const createApiService = (endpoint, httpVerb = 'get', baseURL = '/api') => {
  switch (httpVerb.toLowerCase()) {
    case 'post':
      return (params) => getAxiosInstance(baseURL).post(endpoint, params);
    default:
      return (params) => getAxiosInstance(baseURL).get(endpoint, params);
  }
};


export const fetchPaymentService = createApiService('/payments');
export const fetchOrders = createApiService('/orders');
