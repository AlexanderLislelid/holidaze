import { ArrowLeft } from "lucide-react";
import Link from "next/link";

/**
 * A "back to" link with a left arrow that nudges left on hover.
 *
 * @param {Object} props
 * @param {string} props.href - Where the link goes, e.g. "/"
 * @param {string} props.name - Page name shown after "back to", e.g. "home"
 * @returns {JSX.Element} The back link
 *
 * @example
 * <BreadCrumb href="/" name="home" />
 */
export default function BreadCrumb({ href, name }) {
  return (
    <Link
      href={href}
      className="group mx-4 my-8 inline-flex items-center gap-2 text-sm font-medium text-primary-100 uppercase hover:font-medium hover:text-primary-hover"
    >
      <ArrowLeft
        className="transition duration-300 group-hover:-translate-x-1"
        size={20}
      />
      back to {name}
    </Link>
  );
}
