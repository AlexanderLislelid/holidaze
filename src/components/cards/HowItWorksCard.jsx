export default function HowItWorksCard({
  step,
  title,
  desc,
  badgeColor = "bg-primary-100 text-white",
}) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-border bg-white p-3">
      <span
        aria-hidden="true"
        className={`flex size-8 shrink-0 items-center justify-center rounded-full font-heading font-semibold ${badgeColor}`}
      >
        {step}
      </span>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-100">{desc}</p>
      </div>
    </li>
  );
}
