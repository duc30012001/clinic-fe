import dynamic from "next/dynamic";

const News = dynamic(() => import("@/features/news"));

type Props = {};

export default function NewsPage({}: Props) {
  return <News />;
}
