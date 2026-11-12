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
      ref={(node) => {
        if (node && !node.open) {
          node.showModal();
        }
      }}
    >
      <div className="p-4">
        <div className="flex justify-between">
          <h2>{title}</h2>
          <button onClick={onCancel} type="button" aria-label="Close">
            <X aria-hidden="true" />
          </button>
        </div>
        {message && <p>{message}</p>}
        <div className="flex justify-end gap-4">
          <button onClick={onCancel} type="button" autoFocus>
            Cancel
          </button>
          <button onClick={onConfirm} type="button">
            {confirmText}
          </button>
        </div>
      </div>
    </dialog>
  );
}
