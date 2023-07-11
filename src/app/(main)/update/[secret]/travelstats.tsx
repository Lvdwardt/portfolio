"use client";

import { useState } from "react";

export default function Travelstats({ secret }: { secret: string }) {
  const [stats, setStats] = useState<{
    countries: number;
    capitals: number;
    airports: number;
  } | null>({
    countries: 0,
    capitals: 0,
    airports: 0,
  });

  const updateStats = async () => {
    if (!stats || !secret) return;
    await fetch("/api/travelstats", {
      method: "POST",
      headers: {
        stats: JSON.stringify(stats),
        secret: secret,
      },
    }).catch((err) => console.log(err));
  };

  const getFromDB = async () => {
    const res = await fetch("/api/travelstats", {
      method: "GET",
      headers: {
        secret: secret,
      },
      next: {
        // once every week
        revalidate: 60 * 60 * 24 * 7,
      },
    });
    const data = await res.json();
    const stats = data.stats[0];
    setStats(stats);
  };

  return (
    <div className="flex flex-col items-center gap-2 pb-4 text-center">
      <h1>Travel stats</h1>
      <button className="my-2 rounded-lg bg-secondary p-4" onClick={getFromDB}>
        Get Stats
      </button>
      {stats && (
        <div className="flex flex-col gap-2">
          {/* <input>Countries: {stats.countries}</input>
          <input>Capitals: {stats.capitals}</input>
          <input>Airports: {stats.airports}</input> */}
          <div>Countries: {stats.countries}</div>
          <input
            type="number"
            value={stats.countries}
            onChange={(e) =>
              setStats({ ...stats, countries: parseInt(e.target.value) })
            }
          />
          <div>Capitals: {stats.capitals}</div>
          <input
            type="number"
            value={stats.capitals}
            onChange={(e) =>
              setStats({ ...stats, capitals: parseInt(e.target.value) })
            }
          />
          <div>Airports: {stats.airports}</div>
          <input
            type="number"
            value={stats.airports}
            onChange={(e) =>
              setStats({ ...stats, airports: parseInt(e.target.value) })
            }
          />

          <br />

          <button
            className="my-2 rounded-lg bg-primary p-4"
            onClick={updateStats}
          >
            Update Stats
          </button>
        </div>
      )}
    </div>
  );
}
