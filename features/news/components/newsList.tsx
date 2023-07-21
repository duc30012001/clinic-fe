import { Article } from "@/features/admin/article/types";
import Image from "next/image";

type Props = {
  dataSource: Array<Article>;
};

export function NewsList({ dataSource }: Props) {
  return (
    <div className="mb-10 mt-6 pb-4 ">
      <ul>
        {dataSource.map((item) => {
          const thumbnail_url =
            item.thumbnail_url || require("@/assets/thumbnail.jpg");
          return (
            <li key={item.id} className="mb-5 flex gap-5 border-b pb-5">
              <Image
                alt={item.article_title}
                src={thumbnail_url}
                className="w-40 flex-none rounded-md md:w-80"
                width={160}
                height={100}
              />
              <div>
                <h3 className="line-clamp-3 text-lg font-semibold">
                  {item.article_title}
                </h3>
                <p className="line-clamp-3">{item.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
