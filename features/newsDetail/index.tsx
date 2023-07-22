import { Breadcrumb, NewsContent, NewsTitle } from "./components";
import { useArticleDetail } from "./hooks";

type Props = {
  slug: string;
};

function NewsDetail({ slug }: Props) {
  const { data: newsDetail } = useArticleDetail({ slug });
  return (
    <div>
      <Breadcrumb newsDetail={newsDetail} />
      <NewsTitle newsDetail={newsDetail} />
      <NewsContent newsDetail={newsDetail} />
    </div>
  );
}

export default NewsDetail;
