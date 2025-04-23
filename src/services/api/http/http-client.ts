import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Http GET request
 *
 * @template R Type of the response data
 *
 * @param url
 * @param config
 */
function get<R>(url: string, config?: AxiosRequestConfig) {
  return axios.get<R>(url, config);
}

/**
 * Http POST request
 *
 * @template D Type of the request data
 * @template R Type of the response data
 *
 * @param url
 * @param data
 * @param config
 */
function post<D, R>(url: string, data?: D, config?: AxiosRequestConfig<D>) {
  return axios.post<R, AxiosResponse<R>, D>(url, data, config);
}

/**
 * Http PUT request
 *
 * @template D Type of the request data
 * @template R Type of the response data
 *
 * @param url
 * @param data
 * @param config
 */
function put<D, R>(url: string, data?: D, config?: AxiosRequestConfig<D>) {
  return axios.put<R, AxiosResponse<R>, D>(url, data, config);
}

/**
 * Http PATCH request
 *
 * @template D Type of the request data
 * @template R Type of the response data
 *
 * @param url
 * @param data
 * @param config
 */
function patch<D, R>(url: string, data?: D, config?: AxiosRequestConfig<D>) {
  return axios.patch<R, AxiosResponse<R>, D>(url, data, config);
}

/**
 * Http DELETE request
 *
 * @template D Type of the request data
 *
 * @param url
 * @param config
 */
function del<D>(url: string, config?: AxiosRequestConfig<D>) {
  return axios.delete<D>(url, config);
}

export class HTTPError extends AxiosError {}

export default {
  instance: client,
  get,
  post,
  put,
  patch,
  delete: del,
};
