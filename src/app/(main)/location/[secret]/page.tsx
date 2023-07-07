import LocationForm from "./form";

export default function Page({ params }: { params: { secret: string } }) {
  if (params.secret !== process.env.MY_SECRET_TOKEN) {
    return <div>Access denied</div>;
  }
  return <LocationForm secret={params.secret} />;
}
