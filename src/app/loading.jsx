export default function Loading() {
  return (
    <main>
      <div
        role="status"
        className="flex flex-col items-center justify-center gap-3 py-10"
      >
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary-100/20 border-t-primary-100" />
      </div>
    </main>
  );
}
