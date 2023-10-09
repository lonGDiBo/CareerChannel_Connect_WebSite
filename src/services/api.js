/* eslint-disable */
import axios from 'axios';
import { storage } from './storage';
export const useApi = (baseUrl, useToken = false) => {
  axios.interceptors.request.use(
    (request) => {
      const token = storage.getCache('token');
      request.baseURL = baseUrl;
      if (request.headers) {
        request.headers['Content-Type'] = 'x-www-form-urlencoded';
        request.headers['Content-Type'] = 'application/json';
        console.log("config", request.headers);
      }

      if (token && useToken) {
        //  axios.defaults.headers.common['Authorization'] = Beare ${token}
        request.headers.Authorization = `Beare ${token}`;
      }
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return { response: response.data, success: response.status }; //But when call > 2 times, it will be underfined
      //return response;
    }

    // function (error) {
    //   // Any status codes that falls outside the range of 2xx cause this function to trigger
    //   // Do something with response error
    //   if (error.response.status === 401) {
    //     return {
    //     //   response: { message: resources.auth.authorize },
    //       success: false,
    //     };
    //   }

    //   if (error.response.status === 403) {
    //     return {
    //     //   response: { message: resources.auth.forbidden },
    //       success: false,
    //     };
    //   }
    //   if (error.response.status === 404) {
    //     return {
    //     //   response: { message: resources.generalError },
    //       success: false,
    //     };
    //   }

    //   if (error.response.status === 500) {
    //     // return { response: { message: json.message }, success: response.ok };
    //   }

    // //   if (!response.ok && error.response.status !== 400 && response) {
    // //     return Promise.reject(response);
    // //   }
    // }
  );

  return axios;
};
