"use client";

import { X } from "lucide-react";

export default function ConfirmationModal({
  open,
  title,
  message,
  confirmText = "Confirm",
  onConfirm,
  onCancel,
}) {
  if (!open) return null;

  return (
    <dialog
      className="mx-auto my-20 rounded-2xl"
      ref={(node) => {
        if (node && !node.open) {
          node.showModal();
        }
      }}
    >
      <div className="flex flex-col gap-6 p-4">
        <div className="flex justify-between">
          <h2 className="font-sans text-xl font-semibold">{title}</h2>
          <button onClick={onCancel} type="button" aria-label="Close">
            <X aria-hidden="true" className="hover:text-primary-hover" />
          </button>
        </div>
        {message && <p className="text-text-80">{message}</p>}
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            type="button"
            className="rounded-lg px-4 py-2 text-primary-100 hover:font-semibold hover:text-primary-hover"
            autoFocus
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            type="button"
            className="rounded-lg bg-primary-100 px-4 py-2 text-white hover:bg-primary-hover"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </dialog>
  );
}
