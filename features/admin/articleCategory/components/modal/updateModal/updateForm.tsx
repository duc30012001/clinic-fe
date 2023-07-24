import { InputField } from "@/components/form";
import { useTranslate, useYupValidationResolver } from "@/hooks";
import { Button } from "@/libs/button";
import { TypeFunction } from "@/utils/types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ArticleCategory, CreateArticleCategoryPayload } from "../../../types";

type Props = {
  onSubmit: TypeFunction;
  dataEdit?: ArticleCategory;
};

export default function ArticleCategoryForm({ onSubmit, dataEdit }: Props) {
  const { messages } = useTranslate();
  const defaultValues = {
    article_category_name: dataEdit?.article_category_name,
    description: dataEdit?.description,
  };

  const validationSchema = yup.object({
    article_category_name: yup
      .string()
      .required(messages("validation.inputRequired")),
    description: yup.string().required(messages("validation.inputRequired")),
  });

  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, control } = useForm<CreateArticleCategoryPayload>({
    resolver,
    defaultValues,
  });

  async function handleLoginSubmit(values: CreateArticleCategoryPayload) {
    const dataSubmit = {
      ...values,
      status: dataEdit?.status,
    };
    await onSubmit(dataSubmit);
  }

  return (
    <form onSubmit={handleSubmit(handleLoginSubmit)} className="text-left">
      <InputField
        name="article_category_name"
        control={control}
        label={messages("articleCategory.name")}
        required
      />
      <InputField
        name="description"
        control={control}
        label={messages("common.description")}
      />
      <Button primary className="mt-4 max-w-full" type="submit">
        {messages("common.submit")}
      </Button>
    </form>
  );
}
