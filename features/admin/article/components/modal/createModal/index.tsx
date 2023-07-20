import { storage } from "@/firebaseConfig";
import { resizeImageFile } from "@/helpers";
import { useTranslate } from "@/hooks";
import Modal from "@/libs/modal";
import dayjs from "dayjs";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { articleApi } from "../../../api";
import { CreateArticlePayload } from "../../../types";
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
    const dataSubmit = structuredClone(values);
    if (dataSubmit.thumbnail) {
      console.log("dataSubmit.thumbnail:", dataSubmit.thumbnail);
      const thumbnail: File = (await resizeImageFile({
        file: dataSubmit.thumbnail,
      })) as File;
      const currentTime = dayjs("HHmmDDMMYYYY");
      const name = `${currentTime}-${dataSubmit.thumbnail.name}`;
      const storageRef = ref(storage, `image/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, thumbnail);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // const progress =
          //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          // setProgressUpload(progress) // to show progress upload
          // switch (snapshot.state) {
          //   case 'paused':
          //     console.log('Upload is paused')
          //     break
          //   case 'running':
          //     console.log('Upload is running')
          //     break
          // }
        },
        (error) => {
          // message.error(error.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            //url is download url of file
            dataSubmit.thumbnail_url = url;
            delete dataSubmit.thumbnail;
            createArticle(dataSubmit);
          });
        }
      );
    } else {
      dataSubmit.thumbnail_url = undefined;
      delete dataSubmit.thumbnail;
      createArticle(dataSubmit);
    }
  }

  async function createArticle(dataSubmit: CreateArticlePayload) {
    const isSuccess = await articleApi.createArticle(dataSubmit);
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
      <ArticleForm onSubmit={onSubmit} />
    </Modal>
  );
};
