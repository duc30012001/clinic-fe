import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactNode } from "react";
import { Order } from "../enum";

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

export interface CommonParams {
  page: number;
  take: number;
  search: string;
  order: Order;
  orderBy: string;
  columns: string;
}
