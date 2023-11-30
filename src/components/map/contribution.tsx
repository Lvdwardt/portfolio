"use client";
import Link from "next/link";
import { startTransition, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { SiMapbox } from "react-icons/si";

export default function Contribution() {
  const [contributionOpen, setContributionOpen] = useState(false);
  return (
    <>
      <button
        className="absolute bottom-4 left-4 z-50 flex items-center"
        aria-label="contribution"
        onClick={() =>
          startTransition(() => {
            setContributionOpen(!contributionOpen);
          })
        }
      >
        {contributionOpen ? (
          <AiFillCloseCircle className="mr-1 text-xs text-text" />
        ) : (
          <FaInfoCircle className="mr-1 text-xs text-text" />
        )}
      </button>
      {contributionOpen && (
        <div className="absolute bottom-0 left-0 z-40 flex w-full flex-col items-start justify-center rounded-md bg-secondary p-4 pb-10 shadow-md">
          <p className="text-xs font-semibold text-text">Mapbox GL JS </p>
          <Link
            href="https://www.mapbox.com/about/maps/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaRegCopyright className="mr-1 text-xs text-text" />
            <span className="text-xs text-text">mapbox</span>
          </Link>
          <Link
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaRegCopyright className="mr-1 text-xs text-text" />
            <span className="text-xs text-text">OpenStreetMap</span>
          </Link>
          <Link
            href="https://www.mapbox.com/map-feedback/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaRegCommentDots className="mr-1 text-xs text-text" />
            <span className="text-xs text-text">Improve this map</span>
          </Link>
        </div>
      )}

      <Link
        href="https://www.mapbox.com/about/maps/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 flex items-center"
      >
        <SiMapbox className="" />
        <span className=" mx-1 select-none text-xs font-bold text-text">
          mapbox
        </span>
      </Link>
    </>
  );
}
