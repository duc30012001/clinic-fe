import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { RoutesProps } from "./routes";

type Props = {
  routes: RoutesProps;
};

const NavbarDesktop = ({ routes }: Props) => {
  const { pathname } = useRouter();
  return (
    <nav>
      <ul className="hidden gap-1 lg:flex">
        {routes.map((item) => (
          <li key={item.id}>
            <Link
              href={item.pathname}
              className={clsx(
                { "bg-cyan-600": pathname === item.pathname },
                "inline-block rounded-lg px-5 py-2 hover:bg-cyan-600"
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
