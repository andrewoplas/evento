import { PAGINATION_PAGES_LENGTH, getEventsByCity } from "@/lib/server-utils";
import EventCard from "./event-card";
import PaginationControls from "./pagination-controls";

type Props = {
  city: string;
  page?: number;
};

const EventsList = async ({ city, page = 1 }: Props) => {
  const { events, totalCount } = await getEventsByCity(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > PAGINATION_PAGES_LENGTH * page
      ? `/events/${city}?page=${page + 1}`
      : "";

  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </>
  );
};

export default EventsList;
