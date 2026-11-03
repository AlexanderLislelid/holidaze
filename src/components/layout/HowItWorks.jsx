import HowItWorksCard from "../cards/HowItWorksCard";

export default function HowItWorks() {
  return (
    <div className="m-4">
      <div className="my-6 flex flex-col items-center justify-center gap-2">
        <p className="text-sm font-medium text-primary-100 uppercase">
          simple as that
        </p>
        <h2 className="text-3xl font-medium text-muted-100">How it works</h2>
        <p className="text-muted-100">
          From browsing to booked in three steps.
        </p>
      </div>
      <div className="grid justify-center gap-4 lg:grid-cols-3">
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
      </div>
    </div>
  );
}
