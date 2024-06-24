import { verifyToken } from "../api/apiService";
import { setAuth } from "./slices/auth";

const authMiddleware = (store) => (next) => async (action) => {
  const token = window.localStorage.getItem("token");
  if (token) {
    try {
      const response = await verifyToken();
      if (response && response.valid) {
        store.dispatch(setAuth(true));
      }
    } catch (error) {
      console.log(error);
    }
  }
  return next(action);
};

export default authMiddleware;
