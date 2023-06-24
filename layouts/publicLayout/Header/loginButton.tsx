import Link from "next/link";

type Props = {};

export default function LoginButton({}: Props) {
  return (
    <Link href={"/auth/login"}>
      <button>Đăng nhập</button>
    </Link>
  );
}
