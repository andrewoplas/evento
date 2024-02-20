import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type Props = {
  previousPath: string;
  nextPath: string;
};

const btnStyles =
  "text-white px-5 py-3 bg-white/5 rounded-md opacity-75 flex items-center gap-x-2 hover:opacity-100 transition text-sm";

const PaginationControls = ({ previousPath, nextPath }: Props) => {
  return (
    <section className="flex justify-between mt-6 md:mt-8 w-full">
      {previousPath ? (
        <Link href={previousPath} className={btnStyles}>
          <ArrowLeftIcon />
          Prev
        </Link>
      ) : (
        <div />
      )}

      {nextPath && (
        <Link href={nextPath} className={btnStyles}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
};

export default PaginationControls;
