import axios from "axios";
import { loadFromLocalStorage } from "@/shared/lib/localstorage";

const $api = axios.create({
  baseURL: "/cdek",
});

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${loadFromLocalStorage("cdekToken")}`;
  return config;
};

$api.interceptors.request.use(authInterceptor);

export { $api };
