import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log("process.env.API_URL", process.env.API_URL);
  return <main>Home</main>;
}
