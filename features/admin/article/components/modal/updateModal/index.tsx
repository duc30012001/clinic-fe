import { useTranslate } from "@/hooks";
import Modal from "@/libs/modal";
import { articleCategoryApi } from "../../../api";
import { ArticleCategory, UpdateArticleCategoryPayload } from "../../../types";
import ArticleCategoryForm from "./updateForm";

interface UpdateArticleCategoryModalProps {
  closeModal: () => void;
  isOpen: boolean;
  getListData: () => void;
  dataEdit?: ArticleCategory;
}

export const UpdateArticleCategoryModal = ({
  closeModal,
  isOpen,
  getListData,
  dataEdit,
}: UpdateArticleCategoryModalProps) => {
  const { messages } = useTranslate();
  const articleCategoryId = dataEdit?.id || "";

  async function onSubmit(values: UpdateArticleCategoryPayload) {
    const isSuccess = await articleCategoryApi.updateArticleCategory(
      articleCategoryId,
      values
    );
    if (isSuccess) {
      closeModal();
      getListData();
    }
  }

  return (
    <Modal
      title={messages("common.edit")}
      isOpen={isOpen}
      closeModal={closeModal}
      footer={null}
    >
      <ArticleCategoryForm onSubmit={onSubmit} dataEdit={dataEdit} />
    </Modal>
  );
};
