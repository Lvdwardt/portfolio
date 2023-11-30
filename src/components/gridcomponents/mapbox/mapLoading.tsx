import Contribution from "@/components/map/contribution";
import { FaMinus } from "react-icons/fa";

export default function MapLoading() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <Contribution />
      <div
        className="absolute bottom-12 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-text"
        title="Zoom out"
      >
        <FaMinus />
      </div>
    </div>
  );
}
