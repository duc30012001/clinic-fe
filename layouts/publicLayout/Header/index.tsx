import Container from "@/components/container";
import LoginButton from "./authMenu";
import Hotline from "./hotline";
import MenuDesktop from "./menuDesktop";
import MenuMobile from "./menuMobile";

type Props = {};

export type MenuItem = {
  id: number;
  name: string;
  pathname: string;
};

export type TypeMenu = Array<MenuItem>;

const menu: TypeMenu = [
  {
    id: 1,
    name: "Trang chủ",
    pathname: "/",
  },
  {
    id: 2,
    name: "Tin tức",
    pathname: "/tin-tuc",
  },
  {
    id: 3,
    name: "Đặt lịch khám",
    pathname: "/dat-lich-kham",
  },
];

export default function Header({}: Props) {
  return (
    <header className="bg-slate-100 font-medium">
      <Container>
        <nav className="h-10">
          <div className="flex h-full items-center gap-3">
            <MenuDesktop menu={menu} />
            <Hotline />
            <LoginButton />
            <MenuMobile menu={menu} />
          </div>
        </nav>
      </Container>
    </header>
  );
}
