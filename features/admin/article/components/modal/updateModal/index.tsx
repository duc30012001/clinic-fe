import { storage } from "@/firebaseConfig";
import { resizeImageFile } from "@/helpers";
import { useTranslate } from "@/hooks";
import Modal from "@/libs/modal";
import dayjs from "dayjs";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { MutableRefObject } from "react";
import { articleApi } from "../../../api";
import { Article, UpdateArticlePayload } from "../../../types";
import ArticleForm from "./updateForm";

interface UpdateArticleModalProps {
  closeModal: () => void;
  isOpen: boolean;
  getListData: () => void;
  dataEdit?: Article;
}

export const UpdateArticleModal = ({
  closeModal,
  isOpen,
  getListData,
  dataEdit,
}: UpdateArticleModalProps) => {
  const { messages } = useTranslate();

  async function onSubmit(
    values: UpdateArticlePayload,
    thumbnail: string,
    dataDetailRef: MutableRefObject<Article | null>
  ) {
    const dataSubmit = structuredClone(values);
    if (
      dataSubmit.thumbnail &&
      dataDetailRef.current?.thumbnail_url !== thumbnail
    ) {
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
            updateArticle(dataSubmit);
          });
        }
      );
    } else {
      dataSubmit.thumbnail_url = thumbnail || undefined;
      delete dataSubmit.thumbnail;
      updateArticle(dataSubmit);
    }
  }

  async function updateArticle(dataSubmit: UpdateArticlePayload) {
    const isSuccess = await articleApi.updateArticle(
      dataEdit?.id || "",
      dataSubmit
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
      className="max-w-7xl"
    >
      <ArticleForm onSubmit={onSubmit} dataEdit={dataEdit} />
    </Modal>
  );
};
