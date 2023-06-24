import Link from "next/link";
import { TypeMenu } from ".";

type Props = {
  menu: TypeMenu;
};

export default function MenuDesktop({ menu }: Props) {
  return (
    <ul className="hidden h-full grow gap-5 md:flex md:items-center">
      {menu.map((item) => (
        <li key={item.id}>
          <Link href={item.pathname}>
            <span className="px-2">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
