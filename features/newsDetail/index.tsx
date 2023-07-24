import {
  Breadcrumb,
  NewsContent,
  NewsTitle,
  RelatedNewsList,
} from "./components";
import { useArticleDetail } from "./hooks";

type Props = {
  slug: string;
};

function NewsDetail({ slug }: Props) {
  const { data: newsDetail } = useArticleDetail({ slug });
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-4 md:col-span-3">
        <Breadcrumb newsDetail={newsDetail} />
        <NewsTitle newsDetail={newsDetail} />
        <NewsContent newsDetail={newsDetail} />
        <RelatedNewsList newsDetail={newsDetail} />
      </div>
    </div>
  );
}

export default NewsDetail;
