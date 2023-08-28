import clsx from "clsx";
import { startTransition } from "react";
import { FaMinus } from "@react-icons/all-files/fa/FaMinus";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";

export default function Controls({
  setZoom,
  exactZoom,
  setTransitioning,
}: {
  setZoom: (arg: number) => void;
  exactZoom: number;
  setTransitioning: (arg: boolean) => void;
}) {
  const plus = () => {
    startTransition(() => {
      setTransitioning(true);
      setZoom(exactZoom + 2);
    });
  };

  const minus = () => {
    startTransition(() => {
      setTransitioning(true);
      setZoom(exactZoom - 2);
    });
  };
  return (
    <div>
      <button
        className={clsx(
          exactZoom <= 0.1 && "hidden",
          "absolute bottom-12 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-text"
        )}
        title="Zoom out"
        onClick={minus}
      >
        <FaMinus />
      </button>

      <button
        className={clsx(
          exactZoom >= 11 && "hidden",
          "absolute bottom-12 right-8 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-text"
        )}
        title="Zoom in"
        onClick={plus}
      >
        <FaPlus />
      </button>
    </div>
  );
}
