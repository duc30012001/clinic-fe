import BreadCrumbs from "@/components/breadcrumbs";
import Pagination from "@/libs/pagination";
import { PageSize } from "@/utils/constants";
import { Status } from "@/utils/enum";
import { useRouter } from "next/router";
import { GetListArticleParams } from "../admin/article/types";
import { ArticleCategorySelect, NewsList } from "./components";
import { useArticleList } from "./hooks";

type Props = {};

const columns =
  "id,article_title,date_modified,article_category_id,thumbnail_url,description,slug";

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

  const { data } = useArticleList({ params: dataFilter });
  const dataSource = data.data;
  const pagination = data.pagination;

  function onChangePage(value: number) {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          page: value,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  }

  function onChangeFilter({
    article_category_id,
    search,
  }: Partial<GetListArticleParams>) {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          page: 1,
          search,
          article_category_id,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  }

  return (
    <div>
      <BreadCrumbs title="Tin tức" />
      <ArticleCategorySelect
        onChangeFilter={onChangeFilter}
        dataFilter={dataFilter}
      />
      <div className="grid grid-cols-4">
        <div className="col-span-4 md:col-span-3">
          <NewsList dataSource={dataSource} />
          <Pagination
            onChange={onChangePage}
            current={filter.page}
            total={pagination.itemCount}
            pageSize={PageSize}
            wrapperClassName="px-2"
            placement="center"
            hideOnSinglePage
          />
        </div>
        <div className="col-span-4 md:col-span-1"></div>
      </div>
    </div>
  );
}
