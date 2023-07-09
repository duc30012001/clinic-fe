import { CommonAttribute } from "@/utils/types";

export * from "./createArticlePayload";
export * from "./getListArticleParams";
export * from "./updateArticlePayload";

export interface Article extends CommonAttribute {
  article_title: string;
  description: string;
  slug: string;
  status: number;
  article_category_id: string;
  article_category: {
    id: string;
    article_category_name: string;
  };
}

export interface ArticleList {
  dataSource: Array<Article>;
}
