import axiosClient, { authApi } from "@/apiClient";
import { showNotification } from "@/helpers";
import { LoginPayload } from "@/utils/types";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";
import { useTranslate } from "./useTranslate";

interface ErrorResponse {
  message: string;
  // Add any other properties you expect in the error response
}

export function useAuth(option?: Partial<PublicConfiguration>) {
  const { messages } = useTranslate();
  const route = useRouter();

  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/user/profile", {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...option,
  });

  const isAuthenticated = profile?.id;
  const isLoading = profile === undefined && error === undefined;

  async function login(payload: LoginPayload) {
    try {
      await axiosClient.post("/auth/login", payload);
      mutate();
      route.push("/");
    } catch (error) {
      console.log("error:", error);
      const err = error as AxiosError<ErrorResponse>;
      const message =
        err.response?.data.message || messages("message.somethingWentWrong");
      showNotification("error", message);
    }
  }

  async function logout() {
    const response = await authApi.logout();
    console.log("response:", response);
    mutate({}, false);
  }

  return {
    profile,
    error,
    login,
    logout,
    isAuthenticated,
    isLoading,
  };
}