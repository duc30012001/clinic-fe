import { Article, GetListArticleParams } from "@/features/admin/article/types";
import { useArticleList } from "@/features/news/hooks";
import { useTranslate } from "@/hooks";
import RelatedNewsItem from "./relatedNewsItem";

type Props = {
  newsDetail: Article | null;
};

const columns =
  "id,article_title,article_category_id,thumbnail_url,description,slug";

export function RelatedNewsList({ newsDetail }: Props) {
  const { messages } = useTranslate();
  const article_category_id = newsDetail?.article_category_id;
  const dataFilter: Partial<GetListArticleParams> = {
    article_category_id,
    take: 5,
    columns,
  };

  const { data } = useArticleList({ params: dataFilter });
  const dataSource = data.data;
  if (dataSource.length === 0) return null;
  return (
    <div className="mt-10 border p-6">
      <h3 className="text-lg font-semibold">{messages("article.related")}</h3>
      <ul>
        {dataSource.map((item) => {
          return <RelatedNewsItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default RelatedNewsList;
