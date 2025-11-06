import Cards from "./components/ui/cards";
import Link from "next/link";

export default function Home() {
  return (
    <Link href={'/dashboard'} >
      <Cards />
    </Link>
  );
}
