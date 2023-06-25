import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export function AdminLayout({ children }: Props) {
  const { isLoading, isAuthenticated } = useAuth();
  const router = useRouter();

  if (!isLoading && !isAuthenticated) {
    router.push("/auth/login");
  }

  if (!isAuthenticated) return <div>Loading...</div>;

  return <div>ProtectedLayout{children}</div>;
}
