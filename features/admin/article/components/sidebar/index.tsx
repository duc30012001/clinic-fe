import { InputField, SelectField } from "@/components/form";
import { useTranslate } from "@/hooks";
import { Status } from "@/utils/enum";
import { TypeFunction } from "@/utils/types";
import _ from "lodash";
import { useForm } from "react-hook-form";
import { GetListArticleParams } from "../../types";

type Props = {
  onChangeFilter: TypeFunction;
  initialValues: Partial<GetListArticleParams>;
};
const ArticleSidebar = ({ onChangeFilter, initialValues }: Props) => {
  const { messages } = useTranslate();

  const options = [
    { value: Status.ALL, label: messages("status.all") },
    { value: Status.ACTIVE, label: messages("status.active") },
    // { value: Status.PENDING, label: messages("status.pending") },
    { value: Status.HIDDEN, label: messages("status.hidden") },
  ];

  const { handleSubmit, control } = useForm<GetListArticleParams>({
    defaultValues: {
      ...initialValues,
    },
  });

  async function handleLoginSubmit(values: GetListArticleParams) {
    await onChangeFilter(values);
  }

  function handleSubmitForm() {
    handleSubmit(handleLoginSubmit)();
  }

  const debounceSearchChange = _.debounce(handleSubmitForm, 300);

  return (
    <div>
      <form onSubmit={handleSubmit(handleLoginSubmit)} className="text-left">
        <InputField
          name="search"
          control={control}
          label={messages("article.name")}
          placeholder={messages("form.searchPlaceholder")}
          onChange={() => debounceSearchChange()}
        />
        <SelectField
          control={control}
          name="status"
          label={messages("status.label")}
          options={options}
          onChange={() => handleSubmitForm()}
        />
      </form>
    </div>
  );
};

export default ArticleSidebar;
