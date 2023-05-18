import { SiWakatime } from "react-icons/si";

export default async function WakatimeStats() {
  const wakatimeKey = process.env.WAKATIME_KEY;

  const res = await fetch(
    `https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=${wakatimeKey}`,
    {
      next: {
        revalidate: 86400,
      },
    }
  ).then((res) => res.json());

  const total = res.data.total_seconds;
  //calculate hours
  const hours = Math.floor(total / 3600);

  return (
    <div className="flex h-full w-full flex-col p-8">
      <SiWakatime className="text-6xl text-primary" />
      <div className="mt-auto flex flex-col">
        <div>
          <span className="pb-[1px] font-silka">Coded for:</span>
          <br />
          <span className="text-2xl font-bold">{hours} hours</span>
          <br />
          <span className="font-silka text-sm text-gray-400">past week</span>
        </div>
      </div>
    </div>
  );
}
