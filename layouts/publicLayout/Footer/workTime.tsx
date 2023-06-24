import Container from "@/components/container";

type Props = {};

export default function WorkTime({}: Props) {
  return (
    <div className="bg-orange-50 py-3">
      <Container>
        <p className="block text-center">
          <span>Thời gian làm việc:</span> Bác sĩ tư vấn từ{" "}
          <span className="font-semibold">06:00</span> đến{" "}
          <span className="font-semibold">23:00</span> - Phòng khám hoạt động từ{" "}
          <span className="font-semibold">08:00</span> đến{" "}
          <span className="font-semibold">20:00</span>
        </p>
      </Container>
    </div>
  );
}
