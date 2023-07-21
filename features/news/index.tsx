import BreadCrumbs from "@/components/breadcrumbs";
import { PageSize } from "@/utils/constants";
import { Status } from "@/utils/enum";
import { useRouter } from "next/router";
import { GetListArticleParams } from "../admin/article/types";
import { NewsList } from "./components";
import { useArticleList } from "./hooks";

type Props = {};

const columns =
  "id,article_title,date_modified,article_category_id,thumbnail_url,description";

export default function News({}: Props) {
  const router = useRouter();
  const filter: Partial<GetListArticleParams> = {
    page: 1,
    take: PageSize,
    ...router.query,
  };
  const dataFilter = {
    columns,
  };
  for (const key in filter) {
    if (filter[key] === Status.ALL) {
      dataFilter[key] = undefined;
    } else {
      dataFilter[key] = filter[key];
    }
  }

  const { data, mutate } = useArticleList({ params: dataFilter });
  const dataSource = data.data;
  return (
    <div>
      <BreadCrumbs title="Tin tức" />
      <div className="grid grid-cols-4">
        <div className="col-span-4 md:col-span-3">
          <NewsList dataSource={dataSource} />
        </div>
        <div className="col-span-4 md:col-span-1"></div>
      </div>
    </div>
  );
}
