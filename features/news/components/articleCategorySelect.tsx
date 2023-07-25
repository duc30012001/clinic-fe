import { GetListArticleParams } from "@/features/admin/article/types";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useArticleCategoryList } from "../hooks";

interface Props {
  onChangeFilter: (dataFilter: Partial<GetListArticleParams>) => void;
  dataFilter: Partial<GetListArticleParams>;
}

export function ArticleCategorySelect({ onChangeFilter, dataFilter }: Props) {
  const { data } = useArticleCategoryList({ params: {} });
  const article_category_id = dataFilter.article_category_id;
  const dataSource = data.data;

  return (
    <div className="flex w-full flex-wrap gap-2">
      {dataSource.map((item) => {
        const isSelected = article_category_id === item.id;
        return (
          <button
            key={item.id}
            className={twMerge(
              clsx(
                "cursor-pointer rounded-2xl bg-slate-100 px-4 py-2 hover:bg-slate-300",
                {
                  "bg-slate-300": isSelected,
                }
              )
            )}
            onClick={() =>
              onChangeFilter({
                article_category_id: isSelected ? undefined : item.id,
              })
            }
          >
            {item.article_category_name}
          </button>
        );
      })}
    </div>
  );
}
