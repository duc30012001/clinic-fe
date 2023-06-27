import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import React from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";

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

  return (
    <div className="bg-slate-50">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}
