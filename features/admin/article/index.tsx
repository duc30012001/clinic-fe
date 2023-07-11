import AppContainer from "@/components/appContainer";
import Pagination from "@/libs/pagination";
import { PageSize } from "@/utils/constants";
import { Status } from "@/utils/enum";
import { useRouter } from "next/router";
import { useState } from "react";
import { articleApi } from "./api";
import ArticleHeader from "./components/header";
import { CreateArticleModal } from "./components/modal";
import ArticleSidebar from "./components/sidebar";
import ArticleTable from "./components/table";
import { ArticleModal } from "./enums";
import { useArticleList } from "./hooks";
import {
  Article,
  GetListArticleParams,
  UpdateStatusArticlePayload,
} from "./types";

type Props = {};

export type TypeOpenModal = (
  typeModal: ArticleModal,
  dataEdit?: Article
) => void;

const ArticleFeature = (props: Props) => {
  const [typeModal, setTypeModal] = useState<ArticleModal | null>(null);
  const [dataEdit, setDataEdit] = useState<Article | undefined>(undefined);

  const router = useRouter();
  const filter: Partial<GetListArticleParams> = {
    page: 1,
    take: PageSize,
    ...router.query,
  };
  const dataFilter = {};
  for (const key in filter) {
    if (filter[key] === Status.ALL) {
      dataFilter[key] = undefined;
    } else {
      dataFilter[key] = filter[key];
    }
  }

  const { data, mutate } = useArticleList({ params: dataFilter });
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

  function onChangeFilter({ search, status }: GetListArticleParams) {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          page: 1,
          search,
          status,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  }

  function getListData() {
    mutate();
  }

  function closeModal() {
    setTypeModal(null);
    setDataEdit(undefined);
  }

  function openModal(typeModal: ArticleModal, newDataEdit?: Article) {
    setTypeModal(typeModal);
    setDataEdit(newDataEdit);
  }

  async function onUpdateStatus({ value, record }) {
    const payload: UpdateStatusArticlePayload = {
      status: value,
      articleId: record.id,
    };
    await articleApi.updateStatusArticle(payload);
    mutate();
  }

  return (
    <AppContainer
      sidebarContent={
        <ArticleSidebar
          initialValues={filter}
          onChangeFilter={onChangeFilter}
        />
      }
      headerContent={<ArticleHeader openModal={openModal} />}
    >
      <ArticleTable
        dataSource={dataSource}
        onEdit={openModal}
        current={filter.page}
        pageSize={PageSize}
        onUpdateStatus={onUpdateStatus}
      />
      <Pagination
        onChange={onChangePage}
        current={filter.page}
        total={pagination.itemCount}
        pageSize={PageSize}
        wrapperClassName="px-2"
      />
      <CreateArticleModal
        isOpen={typeModal === ArticleModal.CREATE}
        closeModal={closeModal}
        getListData={getListData}
      />
      {/* 
      <UpdateArticleModal
        isOpen={typeModal === ArticleModal.UPDATE}
        closeModal={closeModal}
        getListData={getListData}
        dataEdit={dataEdit}
      /> */}
    </AppContainer>
  );
};

export default ArticleFeature;
