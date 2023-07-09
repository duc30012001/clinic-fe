import { useTranslate } from "@/hooks";
import Modal from "@/libs/modal";
import { articleCategoryApi } from "../../../api";
import { CreateArticleCategoryPayload } from "../../../types";
import ArticleCategoryForm from "./createForm";

interface CreateArticleCategoryModalProps {
  closeModal: () => void;
  isOpen: boolean;
  getListData: () => void;
}

export const CreateArticleCategoryModal = ({
  closeModal,
  isOpen,
  getListData,
}: CreateArticleCategoryModalProps) => {
  const { messages } = useTranslate();

  async function onSubmit(values: CreateArticleCategoryPayload) {
    const isSuccess = await articleCategoryApi.createArticleCategory(values);
    if (isSuccess) {
      closeModal();
      getListData();
    }
  }

  return (
    <Modal
      title={messages("common.create")}
      isOpen={isOpen}
      closeModal={closeModal}
      footer={null}
    >
      <ArticleCategoryForm onSubmit={onSubmit} />
    </Modal>
  );
};
