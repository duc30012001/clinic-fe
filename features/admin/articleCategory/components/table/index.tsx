import StatusButton from "@/components/statusButton";
import { formattedDate } from "@/helpers";
import { useTranslate } from "@/hooks";
import { Button } from "@/libs/button";
import Table from "@/libs/table";
import { Status } from "@/utils/enum";
import { TypeFunction } from "@/utils/types";
import { ColumnDef } from "@tanstack/react-table";
import { FaEdit } from "react-icons/fa";
import { TypeOpenModal } from "../..";
import { ArticleCategoryModal } from "../../enums";
import { ArticleCategory, ArticleCategoryList } from "../../types";

interface ArticleCategoryTableProps extends ArticleCategoryList {
  onEdit: TypeOpenModal;
  onUpdateStatus: TypeFunction;
  current?: number;
  pageSize: number;
}

const ArticleCategoryTable = ({
  dataSource,
  onEdit,
  current,
  pageSize,
  onUpdateStatus,
}: ArticleCategoryTableProps) => {
  const { messages } = useTranslate();

  const columns: ColumnDef<ArticleCategory>[] = [
    {
      accessorKey: "#",
      header: "#",
      cell: (info) => {
        const number = pageSize * ((current || 0) - 1) + info.row.index + 1;
        return number;
      },
    },
    {
      accessorKey: "article_category_name",
      header: messages("articleCategory.name"),
    },
    {
      accessorKey: "slug",
      header: messages("common.slug"),
    },
    // {
    //   accessorKey: "description",
    //   header: messages('common.description')
    // },
    {
      accessorKey: "date_created",
      header: messages("common.dateCreated"),
      cell: (info) => {
        const value = info.renderValue();
        const date = formattedDate(value);
        return date;
      },
    },
    {
      accessorKey: "date_modified",
      header: messages("common.dateModified"),
      cell: (info) => {
        const value = info.renderValue();
        const date = formattedDate(value);
        return date;
      },
    },
    {
      accessorKey: "status",
      header: messages("status.label"),
      cell: (info) => {
        const record = info.row.original;
        const status = info.renderValue() as Status;
        return (
          <StatusButton
            value={status}
            onChange={(value) => onUpdateStatus({ value, record })}
          />
        );
      },
    },
    {
      accessorKey: "#",
      header: messages("common.action"),
      cell: (info) => {
        const dataEdit = info.row.original as unknown as ArticleCategory;
        return (
          <Button
            className="max-w-fit"
            onClick={() => onEdit(ArticleCategoryModal.UPDATE, dataEdit)}
          >
            <FaEdit />
          </Button>
        );
      },
    },
  ];
  return (
    <div>
      <Table columns={columns} data={dataSource} />
    </div>
  );
};

export default ArticleCategoryTable;
