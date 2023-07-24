import { Article } from "@/features/admin/article/types";
import NewsItem from "./newsItem";

type Props = {
  dataSource: Array<Article>;
};

export function NewsList({ dataSource }: Props) {
  return (
    <div className="mb-10 mt-6 pb-4 ">
      <ul>
        {dataSource.map((item) => {
          return <NewsItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}
