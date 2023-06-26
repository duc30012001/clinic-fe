import Container from "../component/container";
import NavbarDesktop from "./navbarDesktop";
import NavbarMobile from "./navbarMobile";
import { adminRoutes } from "./routes";
import UserButton from "./userButton";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="bg-cyan-700 text-white">
      <Container>
        <div className="flex w-full items-center">
          <NavbarDesktop routes={adminRoutes} />
          <NavbarMobile routes={adminRoutes} />
          <UserButton />
        </div>
      </Container>
    </div>
  );
};

export default Header;
