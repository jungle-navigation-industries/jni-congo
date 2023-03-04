import { AxiosRequestConfig } from "axios";
import { Api } from "./Api";

export default function apiClient(): Api<void> {
  const config: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_CORE_URL,
  };

  return new Api(config);
}
