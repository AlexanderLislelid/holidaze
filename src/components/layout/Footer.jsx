import Link from "next/link";
import { Hotel, House, LogIn, Search, UserPlus } from "lucide-react";
export default function Footer() {
  return (
    <footer className="footer-gradient">
      <div className="h-1.5 bg-linear-to-r from-highlight-100 to-accent-100" />
      <div className="mx-auto max-w-300 px-4 sm:px-6">
        <div className="flex flex-col justify-between pt-10 pb-4 sm:flex-row">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <img src="/holidaze-logo-dark-36px.svg" alt="Holidaze home" />
            </Link>
            <p className="max-w-75 leading-relaxed text-background/80">
              Find and book places to stay, or list your own venue
            </p>
            <hr className="my-2 border-t border-current opacity-15 sm:hidden" />
          </div>
          <div className="mt-6 flex gap-12 sm:mt-14">
            <div className="flex flex-col gap-2.5">
              <h3 className="mb-1 font-sans text-xs font-semibold tracking-widest text-highlight-100">
                EXPLORE
              </h3>
              <Link href="/venues" className="inline-flex items-center gap-2">
                <Hotel size={16} aria-hidden="true" />
                Venues
              </Link>
              <Link href="#" className="inline-flex items-center gap-2">
                <Search size={16} aria-hidden="true" />
                Search
              </Link>
            </div>

            <div className="flex flex-col gap-2.5">
              <h3 className="mb-1 font-sans text-xs font-semibold tracking-widest text-highlight-100">
                ACCOUNT
              </h3>
              <Link href="/login" className="inline-flex items-center gap-2">
                <LogIn size={16} aria-hidden="true" />
                Log in
              </Link>
              <Link href="/register" className="inline-flex items-center gap-2">
                <UserPlus size={16} aria-hidden="true" />
                Register
              </Link>
              <Link href="/register" className="inline-flex items-center gap-2">
                <House size={16} aria-hidden="true" />
                Become a host
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-6 border-t border-current opacity-15" />
        <p className="flex justify-end pb-6 text-sm text-background/60">
          &copy;2026 Holidaze · Project Exam 2
        </p>
      </div>
    </footer>
  );
}
