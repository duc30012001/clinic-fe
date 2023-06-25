import Image from "next/image";

type Props = {
  dataNews: Array<any>;
  title: string;
};

export function Section({ dataNews, title }: Props) {
  return (
    <div className="mb-10 mt-6 border-b-2 border-blue-700 pb-4 ">
      <h2 className="my-7 text-2xl font-bold text-gray-900">{title}</h2>
      <ul>
        {dataNews.map((item) => (
          <li key={item.id} className="mb-5 flex gap-5 border-b pb-5">
            <Image
              alt={item.title}
              src={item.thumbnailUrl}
              className="w-40 rounded-md md:w-80"
              width={160}
              height={100}
            />
            <div>
              <h3 className="line-clamp-3 text-lg font-semibold">
                {item.title}
              </h3>
              <p className="line-clamp-3">{item.shortContent}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
