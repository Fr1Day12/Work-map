import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import MapComponent from "./components/MapComponent/MapComponent";
import Registration from "./components/Register/Registration";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MapComponent />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
