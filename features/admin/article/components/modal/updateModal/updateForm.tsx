/* eslint-disable react-hooks/exhaustive-deps */
import {
  CkEditorField,
  InputField,
  InputFileField,
  SelectField,
  TextAreaField,
} from "@/components/form";
import { useArticleCategoryList } from "@/features/admin/articleCategory/hooks";
import { useTranslate, useYupValidationResolver } from "@/hooks";
import { Button } from "@/libs/button";
import { SelectOptions } from "@/libs/select";
import { Status } from "@/utils/enum";
import Image from "next/image";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { articleApi } from "../../../api";
import {
  Article,
  CreateArticlePayload,
  UpdateArticlePayload,
} from "../../../types";

type Props = {
  onSubmit: (
    values: UpdateArticlePayload,
    thumbnail: string,
    dataDetailRef: MutableRefObject<Article | null>
  ) => void;
  dataEdit?: Article;
};

export default function ArticleForm({ onSubmit, dataEdit }: Props) {
  const [thumbnail, setThumbnail] = useState<string>("");
  const dataDetailRef = useRef<Article | null>(null);
  const { messages } = useTranslate();
  const dataFilter = {
    status: Status.ACTIVE,
    columns: "id,article_category_name",
  };
  const { data } = useArticleCategoryList({ params: dataFilter });
  const selectOptions: SelectOptions = data.data.map((item) => ({
    label: item.article_category_name,
    value: item.id,
  }));
  selectOptions.unshift({ value: Status.ALL, label: "-----------" });

  const validationSchema = yup.object({
    article_title: yup.string().required(messages("validation.inputRequired")),
    description: yup.string().required(messages("validation.inputRequired")),
    content: yup.string().required(messages("validation.inputRequired")),
    article_category_id: yup
      .string()
      .required(messages("validation.selectRequired")),
  });

  const resolver = useYupValidationResolver(validationSchema);
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    setValue,
  } = useForm<CreateArticlePayload>({ resolver });

  async function handleCreateArticleSubmit(values: CreateArticlePayload) {
    const dataSubmit = {
      ...values,
      status: Status.ACTIVE,
    };
    await onSubmit(dataSubmit, thumbnail, dataDetailRef);
  }

  function onChangeFile(event) {
    const file = event.target.files?.[0];
    const url = file ? URL.createObjectURL(file) : "";
    setValue("thumbnail", file);
    setThumbnail(url);
  }

  async function setInitialValuesForm() {
    const dataArticleDetail = await articleApi.getArticleById(
      dataEdit?.id || ""
    );
    dataDetailRef.current = dataArticleDetail;
    setThumbnail(dataArticleDetail?.thumbnail_url || "");
    for (const key in dataArticleDetail) {
      if (key !== "thumbnail_url") {
        setValue(key as keyof CreateArticlePayload, dataArticleDetail[key]);
      }
    }
  }

  useEffect(() => {
    setInitialValuesForm();
  }, [dataEdit?.id]);

  return (
    <form
      onSubmit={handleSubmit(handleCreateArticleSubmit)}
      className="text-left"
      key={"createArticle"}
    >
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4">
          <InputField
            name="article_title"
            control={control}
            label={messages("article.name")}
            required
          />
          <SelectField
            name="article_category_id"
            control={control}
            label={messages("articleCategory.name")}
            options={selectOptions}
            required
          />
          <TextAreaField
            name="description"
            control={control}
            label={messages("common.description")}
            required
          />
          <InputFileField
            name="thumbnail_url"
            control={control}
            label={messages("article.thumbnail")}
            type="file"
            accept="image/*"
            onChange={onChangeFile}
          />
          {(thumbnail && (
            <Image src={thumbnail} alt="" width={500} height={300} />
          )) ||
            null}
          <Button primary className="mt-4 max-w-full" type="submit">
            {messages("common.submit")}
          </Button>
        </div>
        <div className="col-span-8">
          <CkEditorField
            name="content"
            control={control}
            label={messages("common.content")}
            required
          />
        </div>
      </div>
    </form>
  );
}
