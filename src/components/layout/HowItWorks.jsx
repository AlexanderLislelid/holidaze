import HowItWorksCard from "../cards/HowItWorksCard";

export default function HowItWorks() {
  return (
    <section className="m-4 mt-10">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-medium text-text-80">How it works</h2>
        <p className="text-sm text-muted-100">
          From browsing to booked in three steps.
        </p>
      </div>
      <ol className="grid gap-3 sm:grid-cols-3">
        <HowItWorksCard
          step="1"
          title="Find your place"
          desc="Search by destination or name, or just browse."
        />
        <HowItWorksCard
          step="2"
          badgeColor="bg-accent-100 text-text-100"
          title="Pick your dates"
          desc="Check the calendar to see which dates are available."
        />
        <HowItWorksCard
          step="3"
          badgeColor="bg-highlight-100 text-text-100"
          title="Book and go"
          desc="Log in, choose the number of guests and confirm."
        />
      </ol>
    </section>
  );
}
