import { Article } from "@/features/admin/article/types";
import dayjs from "dayjs";
import { FaRegCalendarAlt } from "react-icons/fa";

type Props = {
  newsDetail: Article | null;
};

export function NewsTitle({ newsDetail }: Props) {
  const title = newsDetail?.article_title || "";
  const date = dayjs(
    newsDetail?.date_modified || newsDetail?.date_created
  ).format("HH:mm, DD/MM/YYYY");
  return (
    <div className="mb-5">
      <h1 className="my-4 text-2xl font-semibold sm:text-3xl">{title}</h1>
      <div className="flex items-center gap-2">
        <FaRegCalendarAlt /> <span>{date}</span>
      </div>
    </div>
  );
}
