import BreadCrumbs from "@/components/breadcrumbs";
import { Section } from "./components";

type Props = {};

type TypeNewsItem = {
  id: Number;
  title: string;
  shortContent: string;
  thumbnailUrl: string;
};

export type TypeDataNews = Array<TypeNewsItem>;

const dataNews: TypeDataNews = [
  {
    id: 1,
    title: "Hạt mít bị vứt bỏ lại được bán giá đắt đỏ ở Nhật vì bổ như thuốc",
    shortContent:
      "Ở Việt Nam, hạt mít thường bị vứt bỏ sau khi bổ, nhưng ít ai ngờ tại Nhật Bản chúng được bán với giá rất cao.",
    thumbnailUrl:
      "https://icdn.dantri.com.vn/zoom/252_168/2023/06/06/du-an-moi-crop-1685984514982.jpeg",
  },
  {
    id: 2,
    title: "Hạt mít bị vứt bỏ lại được bán giá đắt đỏ ở Nhật vì bổ như thuốc",
    shortContent:
      "Ở Việt Nam, hạt mít thường bị vứt bỏ sau khi bổ, nhưng ít ai ngờ tại Nhật Bản chúng được bán với giá rất cao.",
    thumbnailUrl:
      "https://icdn.dantri.com.vn/zoom/252_168/2023/06/06/du-an-moi-crop-1685984514982.jpeg",
  },
  {
    id: 3,
    title: "Hạt mít bị vứt bỏ lại được bán giá đắt đỏ ở Nhật vì bổ như thuốc",
    shortContent:
      "Ở Việt Nam, hạt mít thường bị vứt bỏ sau khi bổ, nhưng ít ai ngờ tại Nhật Bản chúng được bán với giá rất cao.",
    thumbnailUrl:
      "https://icdn.dantri.com.vn/zoom/252_168/2023/06/06/du-an-moi-crop-1685984514982.jpeg",
  },
  {
    id: 4,
    title: "Hạt mít bị vứt bỏ lại được bán giá đắt đỏ ở Nhật vì bổ như thuốc",
    shortContent:
      "Ở Việt Nam, hạt mít thường bị vứt bỏ sau khi bổ, nhưng ít ai ngờ tại Nhật Bản chúng được bán với giá rất cao.",
    thumbnailUrl:
      "https://icdn.dantri.com.vn/zoom/252_168/2023/06/06/du-an-moi-crop-1685984514982.jpeg",
  },
  {
    id: 5,
    title: "Hạt mít bị vứt bỏ lại được bán giá đắt đỏ ở Nhật vì bổ như thuốc",
    shortContent:
      "Ở Việt Nam, hạt mít thường bị vứt bỏ sau khi bổ, nhưng ít ai ngờ tại Nhật Bản chúng được bán với giá rất cao.",
    thumbnailUrl:
      "https://icdn.dantri.com.vn/zoom/252_168/2023/06/06/du-an-moi-crop-1685984514982.jpeg",
  },
];

export default function News({}: Props) {
  return (
    <div>
      <BreadCrumbs title="Tin tức" />
      <div className="grid grid-cols-4">
        <div className="col-span-4 md:col-span-3">
          <Section title="Tai" dataNews={dataNews} />
          <Section title="Mũi" dataNews={dataNews} />
          <Section title="Họng" dataNews={dataNews} />
          <Section title="Phẫu thuật đầu cổ" dataNews={dataNews} />
        </div>
        <div className="col-span-4 md:col-span-1"></div>
      </div>
    </div>
  );
}
