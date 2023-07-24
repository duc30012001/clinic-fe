import { Article } from "@/features/admin/article/types";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: Article;
};

const RelatedNewsItem = ({ item }: Props) => {
  console.log("item:", item);
  const thumbnail_url = item.thumbnail_url || require("@/assets/thumbnail.jpg");
  const date = dayjs(item.date_modified || item.date_created).format(
    "DD/MM/YYYY"
  );
  return (
    <li className="mt-5 flex gap-5 border-t pt-5">
      <Image
        alt={item.article_title}
        src={thumbnail_url}
        className="w-40 flex-none rounded-md md:w-60"
        width={160}
        height={100}
      />
      <div>
        <Link href={`/tin-tuc/${item.slug}`}>
          <h3 className="line-clamp-2 text-xl font-semibold">
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

export default RelatedNewsItem;
