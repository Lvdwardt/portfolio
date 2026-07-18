import Link from "next/link";
import { SiWakatime } from "react-icons/si";

type WakatimeView = {
  workingOn: string;
  minutesDifference: number;
  hours: number;
  dailyAverage: string;
  todayText: string;
  todaySeconds: number;
};

const emptyView: WakatimeView = {
  workingOn: "Unknown",
  minutesDifference: 0,
  hours: 0,
  dailyAverage: "",
  todayText: "0 secs",
  todaySeconds: 0,
};

async function getWakatimeView(): Promise<WakatimeView> {
  const wakatimeKey = process.env.WAKATIME_KEY;
  if (!wakatimeKey) {
    return emptyView;
  }

  const [heartbeatsRes, weekRes, todayRes] = await Promise.all([
    fetch(
      `https://wakatime.com/api/v1/users/current/heartbeats?date=Today&api_key=${wakatimeKey}`,
      { next: { revalidate: 600 } }
    ),
    fetch(
      `https://wakatime.com/api/v1/users/current/summaries?range=last_7_days_from_yesterday&api_key=${wakatimeKey}`,
      { next: { revalidate: 600 } }
    ),
    fetch(
      `https://wakatime.com/api/v1/users/current/summaries?range=Today&api_key=${wakatimeKey}`,
      { next: { revalidate: 86400 } }
    ),
  ]);

  for (const res of [heartbeatsRes, weekRes, todayRes]) {
    if (!res.ok) {
      throw new Error(`Wakatime responded with ${res.status}`);
    }
    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      throw new Error("Wakatime returned a non-JSON response");
    }
  }

  const [heartbeats, week, today] = await Promise.all([
    heartbeatsRes.json(),
    weekRes.json(),
    todayRes.json(),
  ]);

  let workingOn = "Unknown";
  let minutesDifference = 0;
  if (Array.isArray(heartbeats?.data) && heartbeats.data.length > 0) {
    const lastItem = heartbeats.data.slice(-1)[0];
    workingOn = lastItem.project ? lastItem.project : "Unknown";
    minutesDifference = Math.floor(
      (new Date().getTime() - new Date(lastItem.time * 1000).getTime()) / 60000
    );
  }

  const hours = Math.floor((week?.cumulative_total?.seconds || 0) / 3600);
  let dailyAverage = (week?.daily_average?.text || "")
    .split(" ")
    .map((item: string, index: number) => {
      if (index === 1) {
        return item + ", ";
      }
      return item;
    })
    .join(" ");

  if (dailyAverage.length < 10) {
    dailyAverage = dailyAverage.slice(0, -2);
  }

  return {
    workingOn,
    minutesDifference,
    hours,
    dailyAverage,
    todayText: today?.cumulative_total?.text || "0 secs",
    todaySeconds: today?.cumulative_total?.seconds || 0,
  };
}

export default async function WakatimeStats() {
  let view = emptyView;
  try {
    view = await getWakatimeView();
  } catch (error) {
    console.error("Failed to fetch Wakatime stats:", error);
  }

  const {
    workingOn,
    minutesDifference,
    hours,
    dailyAverage,
    todayText,
    todaySeconds,
  } = view;

  const Hours = () => {
    return (
      <div>
        <span className="pb-[1px] font-silka">Coded for:</span>
        <br />
        <span className="text-2xl font-bold">{hours} hours</span>
        <br />
        <span className="font-silka text-sm text-gray-400">
          {" "}
          in the past week
        </span>
        <br />
      </div>
    );
  };

  const Today = () => {
    return (
      <div>
        <span className="pb-[1px] font-silka">Already coded for:</span>
        <br />
        <span className="text-2xl font-bold">{todayText}</span>
        <br />
        <span className="font-silka text-sm text-gray-400">today</span>
        <br />
      </div>
    );
  };

  const DailyAverage = () => {
    return (
      <div>
        <span className="pb-[1px] font-silka">Daily average:</span>
        <br />
        <span className="text-2xl font-bold">{dailyAverage}</span>
        <br />
        <span className="font-silka text-sm text-gray-400">
          of coding in the past week
        </span>
        <br />
      </div>
    );
  };

  const WorkingOn = () => {
    return (
      <div>
        <span className="pb-[1px] font-silka">Currently working on:</span>
        <br />
        <span className="text-2xl font-bold">{workingOn}</span>
        <br />
        <span className="font-silka text-sm text-gray-400">
          last update:{" "}
          {minutesDifference === 0
            ? " just now"
            : `${minutesDifference} minute${
                minutesDifference === 1 ? "" : "s"
              } ago`}
        </span>
        <br />
      </div>
    );
  };

  const OnHoliday = () => {
    return (
      <div>
        <span className="pb-[1px] font-silka">Currently on holiday</span>
        <br />
        <span className="text-2xl font-bold">🏖</span>
        <br />
        <span className="font-silka text-sm text-gray-400">
          will be back on the grind soon
        </span>
        <br />
      </div>
    );
  };

  function returnRandom() {
    const possible = [];
    if (hours > 4) {
      possible.push(Hours);
    }
    if (dailyAverage !== "") {
      possible.push(DailyAverage);
    }
    if (todaySeconds > 14400) {
      possible.push(Today);
    }
    if (minutesDifference < 10 && workingOn !== "Unknown") {
      possible.push(WorkingOn);
    }
    const random = Math.floor(Math.random() * possible.length);
    if (possible.length === 0) {
      return <OnHoliday />;
    }
    return possible[random]();
  }

  return (
    <div className="group flex h-full w-full flex-col p-8">
      <Link
        href="https://wakatime.com/@LvdWardt"
        target="_blank"
        rel="noreferrer"
        aria-label="look at my stats on wakatime"
      >
        <SiWakatime className="text-6xl text-primary  animate-once group-hover:animate-rotate-x" />
      </Link>
      <div className="mt-auto flex flex-col">{returnRandom()}</div>
    </div>
  );
}
