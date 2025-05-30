import axios from 'axios';
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
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  async (error) => {
    // const config = error?.config;

    // if (error?.response?.status === 401 && !config?.sent) {
    //   config.sent = true;

    //   const result = await processToken();

    //   if (result?.accessToken) {
    //     config.headers = {
    //       ...config.headers,
    //       authorization: `Bearer ${result?.accessToken}`,
    //     };
    //   }

    //   return axios(config);
    // }
    return Promise.reject(error);
  }
);

export default axiosClient;
