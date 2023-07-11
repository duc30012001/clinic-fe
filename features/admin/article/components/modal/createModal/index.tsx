import { useTranslate } from "@/hooks";
import Label from "@/libs/label";
import Modal from "@/libs/modal";
import { articleApi } from "../../../api";
import { CreateArticlePayload } from "../../../types";
import CkEditor from "./ckEditor";
import ArticleForm from "./createForm";

interface CreateArticleModalProps {
  closeModal: () => void;
  isOpen: boolean;
  getListData: () => void;
}

export const CreateArticleModal = ({
  closeModal,
  isOpen,
  getListData,
}: CreateArticleModalProps) => {
  const { messages } = useTranslate();

  async function onSubmit(values: CreateArticlePayload) {
    const isSuccess = await articleApi.createArticle(values);
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
      className="max-w-7xl"
    >
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4">
          <ArticleForm onSubmit={onSubmit} />
        </div>
        <div className="col-span-8">
          <Label label={messages("common.content")} className="mb-2" required />
          <CkEditor />
        </div>
      </div>
    </Modal>
  );
};
