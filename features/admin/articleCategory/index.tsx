import AppContainer from "@/components/appContainer";
import Pagination from "@/libs/pagination";
import { PageSize } from "@/utils/constants";
import { Status } from "@/utils/enum";
import { useRouter } from "next/router";
import { useState } from "react";
import { articleCategoryApi } from "./api";
import ArticleCategoryHeader from "./components/header";
// import { CreateArticleCategoryModal, UpdateArticleCategoryModal } from "./components/modal";
import {
  CreateArticleCategoryModal,
  UpdateArticleCategoryModal,
} from "./components/modal";
import ArticleCategorySidebar from "./components/sidebar";
import ArticleCategoryTable from "./components/table";
import { ArticleCategoryModal } from "./enums";
import { useArticleCategoryList } from "./hooks";
import {
  ArticleCategory,
  GetListArticleCategoryParams,
  UpdateStatusArticleCategoryPayload,
} from "./types";

type Props = {};

export type TypeOpenModal = (
  typeModal: ArticleCategoryModal,
  dataEdit?: ArticleCategory
) => void;

const ArticleCategoryFeature = (props: Props) => {
  const [typeModal, setTypeModal] = useState<ArticleCategoryModal | null>(null);
  const [dataEdit, setDataEdit] = useState<ArticleCategory | undefined>(
    undefined
  );

  const router = useRouter();
  const filter: Partial<GetListArticleCategoryParams> = {
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

  const { data, mutate } = useArticleCategoryList({ params: dataFilter });
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

  function onChangeFilter({ search, status }: GetListArticleCategoryParams) {
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

  function openModal(
    typeModal: ArticleCategoryModal,
    newDataEdit?: ArticleCategory
  ) {
    setTypeModal(typeModal);
    setDataEdit(newDataEdit);
  }

  async function onUpdateStatus({ value, record }) {
    const payload: UpdateStatusArticleCategoryPayload = {
      status: value,
      articleCategoryId: record.id,
    };
    await articleCategoryApi.updateStatusArticleCategory(payload);
    mutate();
  }

  return (
    <AppContainer
      sidebarContent={
        <ArticleCategorySidebar
          initialValues={filter}
          onChangeFilter={onChangeFilter}
        />
      }
      headerContent={<ArticleCategoryHeader openModal={openModal} />}
    >
      <ArticleCategoryTable
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
      <CreateArticleCategoryModal
        isOpen={typeModal === ArticleCategoryModal.CREATE}
        closeModal={closeModal}
        getListData={getListData}
      />
      <UpdateArticleCategoryModal
        isOpen={typeModal === ArticleCategoryModal.UPDATE}
        closeModal={closeModal}
        getListData={getListData}
        dataEdit={dataEdit}
      />
    </AppContainer>
  );
};

export default ArticleCategoryFeature;
