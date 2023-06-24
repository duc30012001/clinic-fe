import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export function PublicLayout({ children }: Props) {
  return (
    <div className="">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}
