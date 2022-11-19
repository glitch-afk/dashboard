import { API_KEY, BACKEND_URL } from '@/config/routes';
import axios from 'axios'

export const axiosAuth = (query: any, variables?: any) => {
  return axios({
    url: BACKEND_URL,
    data: {
      query,
      variables
    },
    headers: {
      'secret-key': API_KEY,
      'content-type': 'application/json'
    }
  });
}