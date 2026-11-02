import Form from "next/form";

export default function SearchBar() {
  return (
    <Form action="/">
      <input name="query" placeholder="Search venues" />
      <button type="submit">Search</button>
    </Form>
  );
}
