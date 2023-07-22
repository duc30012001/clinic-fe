import { Article } from "@/features/admin/article/types";

type Props = {
  newsDetail: Article | null;
};

export function NewsContent({ newsDetail }: Props) {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: newsDetail?.content || "",
        }}
      />
    </div>
  );
}
