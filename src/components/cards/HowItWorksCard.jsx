export default function HowItWorksCard({ step, title, desc }) {
  return (
    <div className="flex max-w-92 flex-col items-center rounded-2xl p-16">
      <p className="font-heading text-xl text-primary-100">Step {step}</p>
      <h2 className="text-2xl">{title}</h2>
      <p className="text-sm">{desc}</p>
    </div>
  );
}
