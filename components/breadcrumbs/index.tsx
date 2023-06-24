type Props = {
  title: string;
};

export default function BreadCrumbs({ title }: Props) {
  return (
    <div>
      <h1 className="mb-14 text-center text-2xl font-bold uppercase text-blue-800">
        {title}
      </h1>
    </div>
  );
}
