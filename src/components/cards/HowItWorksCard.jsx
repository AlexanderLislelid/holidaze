export default function HowItWorksCard({ step, title, desc }) {
  return (
    <div className="flex max-w-92 flex-col items-center gap-2 rounded-2xl border border-border bg-white p-3">
      <p className="font-heading text-xl text-primary-100">Step {step}</p>
      <h2 className="text-2xl">{title}</h2>
      <p className="text-center text-sm text-muted-100">{desc}</p>
    </div>
  );
}
