import H1 from "@/components/h1";
import SearchForm from "@/components/search-form";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-16 md:py-20 lg:py-24 padding-x">
      <H1>Find events around you</H1>

      <p className="text-1xl lg:text-2xl mt-7 mb-12 opacity-75">
        Browse more than{" "}
        <span className="font-bold italic underline text-accent">
          10,000 events
        </span>{" "}
        around you.
      </p>

      <SearchForm />

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link className="hover:text-white transition" href="/events/austin">
            Austin
          </Link>
          <Link className="hover:text-white transition" href="/events/seattle">
            Seattle
          </Link>
        </div>
      </section>
    </main>
  );
}
