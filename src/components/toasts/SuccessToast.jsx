import { CircleCheck } from "lucide-react";
export default function SuccessToast({ message }) {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-3 rounded-lg border border-success-border bg-success-bg px-8 py-4 text-success-text">
      <CircleCheck size={24} className="text-success-icon" aria-hidden="true" />
      <p>{message}</p>
    </div>
  );
}
