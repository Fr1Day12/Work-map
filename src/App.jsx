import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import MapComponent from "./components/MapComponent/MapComponent";
import Registration from "./components/Register/Registration";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAuthMe, selectIsAuth, setAuth } from "./redux/slices/auth";
import { verifyToken } from "./api/apiService";
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    const fetchAuthStatus = async () => {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          const response = await verifyToken(token);
          if (response) {
            dispatch(fetchAuthMe(response));
          }
        } catch (error) {
          console.error("Ошибка при проверке токена:", error);
        }
      }
    };
    fetchAuthStatus();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<MapComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
