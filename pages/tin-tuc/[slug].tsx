import NewsDetail from "@/features/newsDetail";
import { useRouter } from "next/router";

type Props = {};

function ArticleDetail({}: Props) {
  const router = useRouter();
  const slug = router.query.slug as string;
  return <NewsDetail slug={slug} />;
}

export default ArticleDetail;
