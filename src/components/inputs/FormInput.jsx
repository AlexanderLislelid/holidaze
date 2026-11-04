import { CircleAlert } from "lucide-react";

export default function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm text-text-80">
        {label}
      </label>

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={`rounded-md border p-2 ${error ? "border-2 border-error-icon" : "border-border"}`}
        {...register(name)}
      />

      {error && (
        <p className="flex items-center gap-1.5 text-sm font-medium text-error-text">
          <CircleAlert
            size={16}
            aria-hidden="true"
            className="text-error-icon"
          />
          {error.message}
        </p>
      )}
    </div>
  );
}
