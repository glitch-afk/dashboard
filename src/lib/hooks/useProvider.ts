import { useState } from "react";

import { CREATE_PROVIDER, GET_PROVIDERS } from "../helpers/graphQL";
import { axiosAuth } from "../helpers/request";
import type { Provider } from "../../types";

export const useProvider = () => {
  const [provider, setProvider] = useState<Provider>();

  const getProvider = async (id: string) => {
    const res = await axiosAuth(GET_PROVIDERS, {
      id,
    });

    const data = await res.data;

    setProvider(data);

    return data;
  };

  const createProvider = async (id: Provider) => {
    const res = await axiosAuth(CREATE_PROVIDER, {
      data: id,
    });

    const data = await res.data;

    setProvider(data);

    return data;
  };

  return {
    provider,
    getProvider,
    createProvider,
  };
};
