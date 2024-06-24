import instance from "./apiLocal";

export const verifyToken = async (token) => {
  try {
    const response = await instance.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при проверке токена:", error);
  }
};

export const login = async (credentials) => {
  try {
    const response = await instance.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Ошибка при входе:", error);
  }
};
