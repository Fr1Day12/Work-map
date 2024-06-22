import axios from "axios";

const instance = axios.create({
  basUrl: "http://localhost:4444",
});

export default instance;
