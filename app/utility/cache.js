import AsyncStorage from "@react-native-community/async-storage";
import moment from "moment";

const prefix = "cache";

const store = async (key, value) => {
  try {
    const item = {
      value,
      timeStamp: Date.now(),
    };

    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
