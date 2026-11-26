import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <h1 className="text-lg text-text-80">
        Sorry, we couldn't find the page you were looking for
      </h1>
      <img src="/img/holidaze-404.svg" className="mx-4 max-w-2xl" />
      <Link
        href="/"
        className="my-8 rounded-full bg-primary-100 px-4 py-2 text-white hover:bg-primary-hover"
      >
        Back to venues
      </Link>
    </div>
  );
}
