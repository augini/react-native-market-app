import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://react-native-server-market.herokuapp.com/api",
});

export default apiClient;
