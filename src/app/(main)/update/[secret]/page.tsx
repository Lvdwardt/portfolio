import Location from "./location";
import Travelstats from "./travelstats";

export default function Page({ params }: { params: { secret: string } }) {
  if (params.secret !== process.env.MY_SECRET_TOKEN) {
    return <div>Access denied</div>;
  }
  return (
    <div className="flex flex-col items-center justify-center gap-2 pb-4 text-center lg:flex-row">
      <Location secret={params.secret} />
      <Travelstats secret={params.secret} />
    </div>
  );
}
