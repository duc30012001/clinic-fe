import { LoginPayload } from "@/utils/types";
import axiosClient from "./axiosClient";

export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post("/auth/login", payload);
  },

  logout() {
    return axiosClient.post("/auth/logout");
  },

  getProfile() {
    axiosClient.get("user/profile");
  },
};
