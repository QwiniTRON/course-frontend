import ky from 'ky';

export const appApi = ky.create({
  prefixUrl: process.env.REACT_APP_API_ADDRESS
});