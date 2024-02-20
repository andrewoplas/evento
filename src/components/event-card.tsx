"use client";

import { EventoEvent } from "@prisma/client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type Props = {
  event: EventoEvent;
};

const MotionLink = motion(Link);

const EventCard = ({ event }: Props) => {
  const date = new Date(event.date);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      ref={ref}
      href={`/event/${event.slug}`}
      className="h-full"
      style={{
        // @ts-ignore
        scale: scaleProgress,
        // @ts-ignore
        opacity: opacityProgress,
      }}
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
    >
      <article className="h-full rounded-xl overflow-hidden bg-white/[3%] relative hover:scale-105 active:scale-[1.02] transition">
        <section className="absolute left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md flex flex-col items-center justify-center">
          <p className="text-xl font-bold -mb-[5px]">
            {date.toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs uppercase text-accent">
            {date.toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>

        <Image
          className="w-full"
          src={event.imageUrl}
          alt={event.name}
          height={500}
          width={280}
        />

        <div className="p-8 flex flex-col items-center text-center">
          <h2 className="text-xl lg:text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">{event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>
      </article>
    </MotionLink>
  );
};

export default EventCard;
