"use client";

export default function Error({ retry }) {
  return (
    <main className="my-30 flex flex-col items-center gap-2">
      <h1 className="text-2xl">Something went wrong</h1>
      <p>Please try again</p>
      <button
        onClick={retry}
        className="rounded-full bg-primary-100 px-4 py-1 font-medium text-white hover:bg-primary-hover"
      >
        Retry
      </button>
    </main>
  );
}
