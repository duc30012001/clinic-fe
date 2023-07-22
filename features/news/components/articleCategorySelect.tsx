import { useArticleCategoryList } from "../hooks";

export function ArticleCategorySelect() {
  const { data } = useArticleCategoryList({ params: {} });
  const dataSource = data.data;

  return (
    <div className="flex w-full gap-2">
      {dataSource.map((item) => {
        return (
          <div
            key={item.id}
            className="cursor-pointer rounded-2xl bg-slate-100 px-4 py-2 hover:bg-slate-200"
          >
            {item.article_category_name}
          </div>
        );
      })}
    </div>
  );
}
