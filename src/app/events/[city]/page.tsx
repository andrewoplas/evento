import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};

type PageProps = Props & {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const title =
    params.city !== "all"
      ? "All Events"
      : `Events in ${capitalize(params.city)}`;

  return { title };
};

const pageNumberSchema = z.coerce.number().int().positive().optional();

const EventsPage = async ({ params, searchParams }: PageProps) => {
  const { city } = params;
  const { page } = searchParams;

  const currentPage = Math.max(+(page ?? 1), 1);
  const parsedPage = pageNumberSchema.safeParse(page);
  if (parsedPage === undefined || !parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="flex flex-col items-center py-16 md:py-20 lg:py-24 padding-x min-h-[110vh]">
      <H1 className="mb-12 md:mb-16">
        Events {city !== "all" && <>in {capitalize(city)}</>}
      </H1>

      <Suspense key={city + currentPage} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
};

export default EventsPage;
