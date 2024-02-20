"use client"; // Error components must be Client Components

import H1 from "@/components/h1";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="text-center py-24">
      <H1 className="mb-5">Something went wrong!</H1>
      <p>{error.message}</p>
      <button
        className="mt-12 mx-auto text-white px-5 py-3 bg-white/5 rounded-md opacity-75 flex items-center gap-x-2 hover:opacity-100 transition text-sm"
        onClick={
          // Attempt to recover by trying to re-render the segment
          reset
        }
      >
        Try again
      </button>
    </main>
  );
}
