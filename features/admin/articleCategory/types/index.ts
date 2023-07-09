import { CommonAttribute } from "@/utils/types";

export * from "./createArticleCategoryPayload";
export * from "./getListArticleCategoryParams";
export * from "./updateArticleCategoryPayload";

export interface ArticleCategory extends CommonAttribute {
  article_category_name?: string;
  description: string;
  slug?: string;
  status?: number;
}

export interface ArticleCategoryList {
  dataSource: Array<ArticleCategory>;
}
