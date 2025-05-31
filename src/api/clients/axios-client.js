import axios from 'axios';
// import { data } from 'data/org-chart';
import queryString from 'query-string';

// import { envConfig } from '../../config';

const axiosClient = axios.create({
  baseURL: 'https://localhost:7136/api',
  headers: {
    'content-type': 'application/json'
  },
  paramsSerializer: (params) => queryString.stringify(params),
  data: (data) => data
});

axiosClient.interceptors.request.use(async (config) => {
  // const jwt = localStorage.getItem('accesstoken');
  // if (jwt) {
  //   Object.assign(config.headers, {
  //     Authorization: `Bearer ${jwt}`
  //   });
  // }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    try {
      if (response && response.data) {
        return response.data;
      }
      return response;
    } catch (error) {}
  },
  async (error) => {
    if (error) {
      const modifiedError = {
        data: null,
        code: error?.response?.status || 444,
        message: error?.response?.data?.message || error.message || 'An error occurred'
      };

      return modifiedError;
    }
  }
);

export default axiosClient;
