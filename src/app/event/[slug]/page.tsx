import H1 from "@/components/h1";
import { getEventBySlug } from "@/lib/server-utils";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const event = await getEventBySlug(params.slug);

  return { title: event.name };
};

const EventPage = async ({ params }: Props) => {
  const event = await getEventBySlug(params.slug);

  return (
    <main>
      <section className="relative min-h-[370px] overflow-hidden flex items-center py-14 md:py-20 padding-x">
        <Image
          className="object-cover blur-3xl"
          src={event.imageUrl}
          alt="image background"
          fill
          quality={30}
          sizes="(max-width: 1280) 100vw, 1280px"
        />

        <div className="z-1 relative flex flex-col-reverse md:flex-row items-center md:items-stretch justify-center gap-12 w-full">
          <Image
            className="rounded-xl border-2 border-white/50 w-[350px] object-cover"
            src={event.imageUrl}
            alt="event image"
            height={300}
            width={200}
          />

          <div className="flex flex-col text-center md:text-start">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <H1 className="mb-2 mt-1 whitespace-nowrap">{event.name}</H1>

            <p className="whitespace-nowrap text-xl text-white/75 mb-6">
              Organized by <span className="italic">DJ Inc</span>
            </p>

            <button className="state-effects mt-auto bg-white/20 text-lg capitalize bg-blur w-full rounded-md border-white/10 border-2 py-2 px-4 hover:bg-accent hover:text-black transition hover:font-semibold">
              Get Tickets
            </button>
          </div>
        </div>
      </section>

      <section className="text-center py-16 md:py-20 lg:py-24 padding-x max-w-[800px] mx-auto flex flex-col gap-y-20">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>

        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </section>
    </main>
  );
};

const Section = ({ children }: { children: React.ReactNode }) => (
  <section>{children}</section>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-semibold mb-4">{children}</h2>
);

const SectionContent = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg leading-8 text-white/75">{children}</p>
);

export default EventPage;
