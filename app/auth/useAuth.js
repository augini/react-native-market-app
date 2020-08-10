import { useContext } from "react";
import AuthContext from "./AuthContext";
import authStorage from "./storage";
import jwtDecode from "jwt-decode";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const login = (authToken) => {
    const data = jwtDecode(authToken);
    setUser(data);
    authStorage.storeToken(authToken);
  };
  return { user, setUser, login, logout };
};
