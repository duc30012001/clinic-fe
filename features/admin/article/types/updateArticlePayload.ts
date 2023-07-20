export interface UpdateArticlePayload {
  article_category_name: string;
  description: string;
  article_category_id: string;
  content: string;
  thumbnail_url?: string;
  thumbnail?: File;
}
