import dynamic from "next/dynamic";

const AppointmentBooking = dynamic(() => import("@/features/appointment"));

type Props = {};

export default function AppointmentPage({}: Props) {
  return <AppointmentBooking />;
}
