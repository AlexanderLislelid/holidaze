import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between p-4">
      <Link href="/">
        <img src="/holidaze-logo-light-36px.svg" />
      </Link>
    </header>
  );
}
