import { UserData } from '../models';
import axios, { AxiosInstance, Canceler } from 'axios';


type ReturnType = {
  httpClient: AxiosInstance;
  canceler: Canceler;
};

export const appApi = axios.create({
  baseURL:process.env.REACT_APP_API_VERSION,
  withCredentials: true,
});
appApi.interceptors.request.use(function (config) {
  config.headers['Authorization'] = `Bearer ${localStorage.getItem(UserData.UserTokenKey)}`;
  return config;
});

export function CreateHttpClient(auth: string): ReturnType {
  let canceler: Canceler | undefined;

  const cancellation = new axios.CancelToken((c: any) => {
    canceler = c;
  });

  const httpClient = axios.create({
    baseURL: process.env.REACT_APP_API_VERSION,
    cancelToken: cancellation,
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${auth}`,
    }
  });

  return {
    httpClient,
    canceler: (canceler as Canceler),
  };
}