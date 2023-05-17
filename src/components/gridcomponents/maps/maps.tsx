import { SiGooglemaps } from "react-icons/si";
import MapsData from "./mapsData";
import ct from "countries-and-timezones";
import countries from "i18n-iso-countries";

type MapsData = {
  current_location: string;
  delta: string;
};

export async function Maps() {
  const data = await MapsData();
  console.log(data);
  const currentLocation = data[0].current_location as string;

  const isDetailed = currentLocation.split(",").length > 2 ? true : false;

  const longZipRegex = /[0-9]{4} [A-Z]{2}/g;
  const shortZipRegex = /[0-9]{4}/g;

  const longZipMatch = currentLocation
    .match(longZipRegex)
    ?.reduce((prev, curr) => (curr.length > prev.length ? curr : prev));
  const shortZipMatch = currentLocation
    .match(shortZipRegex)
    ?.reduce((prev, curr) => (curr.length > prev.length ? curr : prev));

  const zip = longZipMatch || shortZipMatch || "";

  let city = isDetailed
    ? currentLocation.split(",")[1].replace(zip, "").trim()
    : currentLocation.split(",")[0].replace(zip, "").trim();

  if (city === "Heidelberglaan 15") {
    city = "Hogeschool Utrecht";
  }

  const acurateCountry = data[0].current_location.split(",")[2];
  const globalCountry = data[0].current_location.split(",")[1];
  const country = acurateCountry ? acurateCountry.trim() : globalCountry.trim();
  const countryISO = countries.getAlpha2Code(country, "en");

  const delta = data[0].delta;

  const isOnline = data[0].delta < 5 ? true : false;

  const date = new Date();

  const timeZones = ct.getTimezonesForCountry(countryISO);

  const timeZoneOffset = timeZones ? timeZones[0].utcOffset : 0;

  const isSleeping =
    date.getHours() + timeZoneOffset / 60 > 0 &&
    date.getHours() + timeZoneOffset / 60 < 9 &&
    data[0].charging;

  return (
    <div className="flex flex-col overflow-hidden rounded-[2rem] bg-card p-8 sm:order-5 xl:order-8">
      <SiGooglemaps className="text-6xl text-primary" />

      <div className="mt-auto flex flex-col">
        <div>
          <span className="pb-[1px] font-silka">
            {isSleeping
              ? `sleeping, this night in: `
              : isOnline
              ? `online, currently in: `
              : `last seen ${delta} minutes ago in: `}
          </span>
          <span className="text-xl font-bold">{city}</span>
        </div>
        <span className="font-silka text-sm text-gray-400">{country}</span>

        {/* <div className="flex items-center gap-2">
          <FaHome className="mb-0.5 h-4 w-4 text-base" />
          <span className="pb-[1px] font-silka">offline, last traveled to</span>
        </div>
        <span className="text-2xl font-bold">Zadar</span>
        <span className="font-silka text-sm text-gray-400">Croatia</span> */}
      </div>
    </div>
  );
}
