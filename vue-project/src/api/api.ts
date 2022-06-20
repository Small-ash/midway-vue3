import login from "./login";

export const LoginApi = (params) => login.post("/api/user/login", params);
