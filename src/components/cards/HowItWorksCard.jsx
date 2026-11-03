export default function HowItWorksCard({ step, title, desc }) {
  return (
    <div className="flex max-w-88 flex-col gap-2 rounded-2xl border border-border bg-white p-3">
      <div className="flex gap-8">
        <p className="font-heading text-lg text-primary-100">Step {step}</p>
        <h2 className="text-lg font-medium">{title}</h2>
      </div>

      <p className="text-sm text-muted-100">{desc}</p>
    </div>
  );
}
