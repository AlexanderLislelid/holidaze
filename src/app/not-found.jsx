import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <h1 className="text-4xl">404</h1>
      <p>Sorry, we couldn&apos;t find the page you were looking for.</p>
      <Link
        href="/"
        className="rounded-full bg-primary-100 px-4 py-2 text-white hover:bg-primary-hover"
      >
        Back to venues
      </Link>
    </div>
  );
}
