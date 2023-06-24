type Props = {};

const dataFooter = [
  {
    id: 1,
    label: "Địa chỉ:",
    content: process.env.ADDRESS,
  },
  {
    id: 2,
    label: "Số điện thoại:",
    content: process.env.PHONE_NUMBER,
  },
  {
    id: 3,
    label: "Email:",
    content: process.env.EMAIL,
  },
  {
    id: 4,
    label: "Website:",
    content: process.env.WEBSITE,
  },
];

export default function Information({}: Props) {
  return (
    <div className="mt-3">
      <ul className="">
        {dataFooter.map((item) => (
          <li key={item.id} className="mb-2">
            <span className="font-semibold">{item.label}</span> {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
