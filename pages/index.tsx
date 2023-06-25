import { useTranslate } from "@/hooks";

export default function Home() {
  const { messages } = useTranslate();
  return (
    <main>
      <h1 className="text-3xl">{messages("common.password")}</h1>Home
    </main>
  );
}
