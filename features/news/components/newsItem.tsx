import { Article } from "@/features/admin/article/types";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: Article;
};

const NewsItem = ({ item }: Props) => {
  console.log("item:", item);
  const thumbnail_url = item.thumbnail_url || require("@/assets/thumbnail.jpg");
  const date = dayjs(item.date_modified || item.date_created).format(
    "DD/MM/YYYY"
  );
  return (
    <li className="mt-5 flex flex-col gap-5 border-t pt-5 sm:flex-row">
      <Image
        alt={item.article_title}
        src={thumbnail_url}
        className="order-2 w-full flex-none rounded-md sm:order-1 sm:w-40 md:w-80"
        width={500}
        height={300}
      />
      <div className="order-1 sm:order-2">
        <Link href={`/tin-tuc/${item.slug}`}>
          <h3 className="line-clamp-2 text-lg font-semibold sm:text-xl">
            {item.article_title}
          </h3>
        </Link>
        <p className="py-3">
          <span className="font-medium">
            {item.article_category.article_category_name}
          </span>{" "}
          - <span className="italic text-gray-500">{date}</span>
        </p>
        <p className="line-clamp-3">{item.description}</p>
      </div>
    </li>
  );
};

export default NewsItem;
