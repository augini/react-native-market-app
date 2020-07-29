import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "https://react-native-server-market.herokuapp.com/api",
});

//store the original method
const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  //get the response from the server
  const response = await get(url, params, axiosConfig);

  //if response if okay, save it in the cache
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  //if response does not exist, search the data from cache
  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
