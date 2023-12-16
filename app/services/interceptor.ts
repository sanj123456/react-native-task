// import {
//   consoleHere,
//   errorToast,
//   resetDataForNewLogin,
//   screenName,
//   topicSubscription,
// } from './../core';
import {constants} from '../core';
import axios from 'axios';

// Create Instance
const AxiosInstance = axios.create({
  baseURL: '',
  timeout: 20000,
  transformRequest: [
    function (data, headers) {
      if (false) {
        headers.Authorization = `Bearer api-token`;
      }
      if (data && data._parts) {
        return data;
      } else {
        return JSON.stringify(data);
      }
    },
  ],
  headers: {'Content-Type': 'application/json'},
});

// Response Interceptor
AxiosInstance.interceptors.response.use(
  (response:any) => {
    // consoleHere({API_RESPONSE: response});
 if (response?.data?.status === 99) {
    //   consoleHere('inside un-auth');
    //   errorToast(response?.data?.message);
    //   resetDataForNewLogin();
     return response;
    } else {
      return response;
    }
  },
  error => {
    // consoleHere({ERROR_CONFIG: error.config});
    // consoleHere({ERROR_RESPONSE: error.response});
    if (!error.response) {
      return Promise.reject({
        status: constants.apiFailure,
        message: 'Something went wrong',
      });
    } else {
      return error.response;
    }
  },
);

export default AxiosInstance;
