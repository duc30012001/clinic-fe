import Container from "@/components/container";
import Map from "@/components/map";
import Copyright from "./copyright";
import Information from "./information";
import WorkTime from "./workTime";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-slate-100">
      <WorkTime />
      <Container>
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
          <div>
            <Information />
            <Copyright />
          </div>
          <div className="h-72">
            <Map />
          </div>
        </div>
      </Container>
    </footer>
  );
}
