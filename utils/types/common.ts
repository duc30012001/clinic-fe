import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactNode } from "react";

export type TypeFunction = (event: any) => void;

export interface LayoutProps {
  children: ReactNode;
}

export type NextPageWithLayout = NextPage & {
  Layout?: (props: LayoutProps) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type PageMeta = {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};
