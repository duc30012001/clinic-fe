import { ClipLoader } from "react-spinners";

type Props = {
  loading?: boolean;
  className?: string;
};

export default function AppLoader({ loading, className }: Props) {
  return loading ? (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-[1000] flex items-center justify-center bg-gray-900/30 ${className}`}
    >
      <ClipLoader speedMultiplier={0.8} />
    </div>
  ) : null;
}
