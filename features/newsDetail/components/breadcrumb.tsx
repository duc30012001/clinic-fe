import { Article } from "@/features/admin/article/types";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
  newsDetail: Article | null;
};

export function Breadcrumb({ newsDetail }: Props) {
  const articleCategoryName =
    newsDetail?.article_category?.article_category_name || "";
  const article_category_id = newsDetail?.article_category_id;
  return (
    <div className="flex items-center gap-2">
      <Link href={"/tin-tuc"} className="uppercase text-gray-400">
        Tin tức
      </Link>
      <IoIosArrowForward className="text-gray-400" />
      <Link
        href={`/tin-tuc?article_category_id=${article_category_id}`}
        className="uppercase text-gray-400"
      >
        {articleCategoryName}
      </Link>
    </div>
  );
}
