import HowItWorksCard from "../cards/HowItWorksCard";

export default function HowItWorks() {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      <div className="absolute top-6 right-1/6 left-1/6 hidden border-t-2 border-dashed border-primary-30 md:block" />
      <HowItWorksCard
        step="01"
        title="Find your place"
        desc="Search by destination or name, or just browse until you find a place you like."
      />
      <HowItWorksCard
        step="02"
        title="Pick your dates"
        desc="Check the calendar to see which dates are available"
      />
      <HowItWorksCard
        step="03"
        title="Book and go"
        desc="Log in, choose the number of guests and confirm your booking"
      />
    </ol>
  );
}
