import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://3.36.247.28/api/", // 직접 URL 지정
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  // 정규 표현식을 사용하여 /post/{id} 패턴 매칭
  const excludedUrls = [
    "/opinion",
    "/home",
    "/users/sign-up",
    "/users/sign-in",
    "/users/emailSend",
    "/post", // 문자열로 /post 제외
    /^\/post\/\d+$/, // 정규 표현식으로 /post/{id} 패턴 매칭
  ];

  if (token) {
    const isExcluded = excludedUrls.some((url) => {
      if (typeof url === "string") {
        return config.url === url;
      } else if (url instanceof RegExp) {
        return url.test(config.url || "");
      }
      return false;
    });

    if (token) {
      if (config.url === "/users/logout") {
        config.headers.Authorization = `Bearer ${token}`;
      } else if (!isExcluded) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
  }

  return config;
});

export default axiosInstance;
