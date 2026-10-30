import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer-gradient">
      <div className="mx-auto max-w-300">
        <div className="flex flex-col justify-between p-4 sm:flex-row">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <img src="/holidaze-logo-dark-36px.svg" />
            </Link>
            <p className="max-w-75">
              Find and book places to stay, or list your own venue
            </p>
          </div>
          <div className="mt-14 flex gap-8">
            <div className="flex flex-col gap-2">
              <h3>EXPLORE</h3>
              <Link href="/venues">Venues</Link>
              <Link href="#">Search</Link>
            </div>

            <div className="flex flex-col gap-2">
              <h3>ACCOUNT</h3>
              <Link href="/login">Log in</Link>
              <Link href="/register">Register</Link>
              <Link href="/register">Become a host</Link>
            </div>
          </div>
        </div>
        <hr className="mx-4 my-2 border-t border-current opacity-30" />
        <p className="flex justify-end px-4 pb-2 text-sm text-text-30">
          &copy;2026 Holidaze · Project Exam 2
        </p>
      </div>
    </footer>
  );
}
