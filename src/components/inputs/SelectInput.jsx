import { ChevronDown } from "lucide-react";

/**
 * Reusable select
 *
 * @param {Object} props
 * @param {string} [props.label] - Label text.
 * @param {string} props.name - Used as name and id.
 * @param {{ value: string|number, label: string }[]} props.options - The options to show.
 *
 *
 * @example
 * <SelectInput
 *   label="Guests"
 *   name="guests"
 *   value={guests}
 *   onChange={(e) => setGuests(Number(e.target.value))}
 *   options={[{ value: 1, label: "1 Guest" }, { value: 2, label: "2 Guests" }]}
 * />
 */
export default function SelectInput({ label, name, options, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-sm text-text-80">
          {label}
        </label>
      )}

      <div className="relative">
        <select
          id={name}
          name={name}
          className="w-full cursor-pointer appearance-none rounded-lg border border-border bg-white py-2 pr-10 pl-3"
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
