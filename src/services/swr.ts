'use client';

import axios from '@/services/axios';
import useSWR from 'swr';
import { ICustomSWRConfig, ISwrApi } from './type';

const useCustomSWR = (api: ISwrApi, config?: ICustomSWRConfig) => {
  const fetchData = async () => {
    if (api.method === 'get' || api.method === 'undefined') {
      const response = await axios.get(api.url);
      return response.data;
    } else {
      const response = await axios({
        method: api.method,
        url: api.url,
        data: api.body
      });

      return response.data;
    }
  };

  const { data, error } = useSWR(api.url, fetchData, config);

  return {
    data,
    isLoading: !error && !data,
    isError: error
  };
};

export default useCustomSWR;

// usage

// const { data, isLoading, isError } = useCustomSWR('/api/data', {
//     refreshInterval: 5000, // Refresh every 5 seconds
//     revalidateOnReconnect: true,
//     revalidateOnFocus: true,
//   });
