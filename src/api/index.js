import axios from 'axios';
import { BASE_URL } from '../constants';
import { store } from '../store';
import md5 from 'md5';
import {logOute} from "../store/loginSlice";
import {setAlertAction} from "../store/alertSlice";

const httpClient = axios.create({
    baseURL: BASE_URL,
});

httpClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        store.dispatch(setAlertAction({ type: 'error', message: error?.response?.data?.message || error?.message }));
        let status = (error.response && error.response.status) || 0;
        if (status === 401) {
            console.log('status ====>', error);
            store.dispatch(logOute());
            return Promise.reject('login or password invalid');
        }
        return Promise.reject(error);
    }
);

httpClient.interceptors.request.use(async (config) => {
    const user = store.getState().auth.user;
    if (user) {
        const sign = config.method.toLocaleUpperCase()+config.url+(config.data?JSON.stringify(config.data):'')+user.secret
        config.headers = Object.assign(config.headers, {
           'Content-Type': 'application/json',
            Key: user.key,
            Sign: md5(sign).toString(),
        });
        return config;
    } else {
        config.headers = Object.assign(config.headers, {
            'Content-Type': 'application/json',
        })
        return config;
    }
});

export const httpGet = (url, params) => httpClient(url, { method: 'get', ...params });

export const httpPost = (url, params) => httpClient(url, { method: 'post', ...params });

export const httpPut = (url, params) => httpClient(url, { method: 'put', ...params });

export const httpPatch = (url, params) => httpClient(url, { method: 'patch', ...params });

export const httpDelete = (url, params) => httpClient(url, { method: 'delete', ...params });
