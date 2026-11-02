import { Search } from "lucide-react";
import Form from "next/form";

export default function SearchBar() {
  return (
    <Form action="/" className="relative w-full max-w-88">
      <input
        name="query"
        placeholder="Find your destination"
        className="w-full rounded-full border border-muted-70 py-2 pr-30 pl-4"
      />
      <button
        type="submit"
        className="absolute inset-y-1 right-1 flex items-center gap-2 rounded-full bg-primary-100 px-4 text-white hover:bg-primary-hover"
      >
        <Search size={18} /> Search
      </button>
    </Form>
  );
}
