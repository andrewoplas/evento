import "server-only";
import { notFound } from "next/navigation";
import prisma from "./db";
import { capitalize } from "./utils";

export const PAGINATION_PAGES_LENGTH = 6;

export const getEventsByCity = async (city: string, page = 1) => {
  const events = await prisma.eventoEvent.findMany({
    where: { city: city === "all" ? undefined : capitalize(city) },
    orderBy: { date: "asc" },
    take: PAGINATION_PAGES_LENGTH,
    skip: (page - 1) * PAGINATION_PAGES_LENGTH,
  });

  const totalCount = await prisma.eventoEvent.count({
    where: { city: city === "all" ? undefined : capitalize(city) },
  });

  return { events, totalCount };
};

export const getEventBySlug = async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug },
  });

  if (!event) {
    return notFound();
  }

  return event;
};
