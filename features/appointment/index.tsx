import BreadCrumbs from "@/components/breadcrumbs";
import BookingForm from "./bookingForm";
import Note from "./note";

type Props = {};

export default function AppointmentBooking({}: Props) {
  return (
    <div>
      <div>
        <BreadCrumbs title="Đặt lịch khám" />
      </div>
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
        <Note />
        <BookingForm />
      </div>
    </div>
  );
}
