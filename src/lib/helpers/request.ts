import axios from 'axios';

const BASE_URL = process.env.BASE;

export const request = (query: string, variables?: any, headers?: any) => {
  return axios({
    url: BASE_URL,
    data: {
      query,
      variables,
    },
    headers: {
      ...headers,
      'content-type': 'application/json',
    },
  });
};
