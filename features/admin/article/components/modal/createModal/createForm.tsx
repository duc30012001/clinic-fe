import { InputField, TextAreaField } from "@/components/form";
import { useTranslate, useYupValidationResolver } from "@/hooks";
import { Button } from "@/libs/button";
import { Status } from "@/utils/enum";
import { TypeFunction } from "@/utils/types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { CreateArticlePayload } from "../../../types";

type Props = {
  onSubmit: TypeFunction;
};

export default function ArticleForm({ onSubmit }: Props) {
  const { messages } = useTranslate();

  const validationSchema = yup.object({
    article_category_name: yup
      .string()
      .required(messages("validation.inputRequired")),
    description: yup.string().required(messages("validation.inputRequired")),
  });

  const resolver = useYupValidationResolver(validationSchema);
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<CreateArticlePayload>({ resolver });

  async function handleLoginSubmit(values: CreateArticlePayload) {
    const dataSubmit = {
      ...values,
      status: Status.ACTIVE,
    };
    await onSubmit(dataSubmit);
  }

  return (
    <form onSubmit={handleSubmit(handleLoginSubmit)} className="text-left">
      <InputField
        name="article_category_name"
        control={control}
        label={messages("article.name")}
        required
      />
      <TextAreaField
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
