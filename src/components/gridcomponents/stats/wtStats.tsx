import { SiWakatime } from "react-icons/si";

export default async function WakatimeStats() {
  const wakatimeKey = process.env.WAKATIME_KEY;

  // format: YYYY-MM-DD

  const { workingOn, minutesDifference } = await fetch(
    `https://wakatime.com/api/v1/users/current/heartbeats?date=Today&api_key=${wakatimeKey}`,
    {
      next: {
        revalidate: 600,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      // get the last item in data array
      const lastItem = data.data.slice(-1)[0];
      // get the project name
      const workingOn = lastItem.project;
      // get the last update
      const minutesDifference = Math.floor(
        (new Date().getTime() - new Date(lastItem.time * 1000).getTime()) /
          60000
      );

      return { workingOn, minutesDifference };
    });

  const { hours, dailyAverage } = await fetch(
    `https://wakatime.com/api/v1/users/current/summaries?range=last_7_days_from_yesterday&api_key=${wakatimeKey}`,
    {
      next: {
        revalidate: 600,
      },
    }
  )
    .then((res) => res.json())
    // set hours to the total hours coded in the past week
    .then((data) => {
      const hours = Math.floor(data.cumulative_total.seconds / 3600);
      const dailyAverage = data.daily_average.text
        .split(" ")
        .map((item: string, index: number) => {
          if (index === 1) {
            return item + ",";
          } else {
            return item;
          }
        })
        .join(" ");

      return { hours, dailyAverage };
    });

  const { todayText, todaySeconds } = await fetch(
    `https://wakatime.com/api/v1/users/current/summaries?range=Today&api_key=${wakatimeKey}`,
    {
      next: {
        revalidate: 86400,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      const todayText = data.cumulative_total.text;
      const todaySeconds = data.cumulative_total.seconds;
      return { todayText, todaySeconds };
    });

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
          last update: {minutesDifference} minute
          {minutesDifference === 1 ? "" : "s"} ago
        </span>
        <br />
      </div>
    );
  };

  function returnRandom() {
    const possible = [Hours, DailyAverage];
    if (todaySeconds > 14400) {
      possible.push(Today);
    }
    if (minutesDifference < 10) {
      possible.push(WorkingOn);
    }
    const random = Math.floor(Math.random() * possible.length);
    return possible[random]();
  }

  return (
    <div className="flex h-full w-full flex-col p-8">
      <a href="https://wakatime.com/@LvdWardt" target="_blank" rel="noreferrer">
        <SiWakatime className="text-6xl text-primary" />
      </a>
      <div className="mt-auto flex flex-col">{returnRandom()}</div>
    </div>
  );
}
