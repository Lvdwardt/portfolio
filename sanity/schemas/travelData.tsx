import { FaRoute } from "@react-icons/all-files/fa/FaRoute";
import airportList from "@/components/map/airports.json";
import capitalList from "@/components/map/capitals.json";
import { countryList } from "@/components/map/countrylist";
import { defineType } from "sanity";
import { MdLocalAirport } from "@react-icons/all-files/md/MdLocalAirport";

export default defineType({
  name: "travelData",
  icon: FaRoute,
  type: "document",
  title: "Travel Data",
  fields: [
    {
      name: "visitedCountries",
      type: "array",
      title: "Visited Countries",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "countryname",
              type: "string",
              title: "Country Name",
              options: {
                list: countryList.map((country) => ({
                  title: `${country.country} (${country.code})`,
                  value: `${country.country} ,${country.code}`,
                })),
              },
            },
          ],
          preview: {
            select: {
              name: "countryname",
            },
            prepare(selection) {
              const { name } = selection;
              const code = name.split(",")[1];
              const getFlagEmoji = (countryCode: string) => {
                return countryCode
                  .toUpperCase()
                  .replace(/./g, (char) =>
                    String.fromCodePoint(127397 + char.charCodeAt(0))
                  );
              };
              if (!code)
                return {
                  media: <span>{code}</span>,
                  title: name,
                };
              return {
                media: <span>{getFlagEmoji(code)}</span>,
                title: name,
              };
            },
          },
        },
      ],
    },
    {
      name: "visitedAirports",
      type: "array",
      title: "Visited Airports",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "airport",
              type: "string",
              title: "Airport",
              options: {
                list: airportList.map((airport) => ({
                  title: `${airport.code} (${airport.name})`,
                  value: `${airport.code}|${airport.coordinates.toString()}`,
                })),
              },
            },
          ],
          preview: {
            select: {
              airport: "airport",
            },
            prepare(selection) {
              const { airport } = selection;
              const code = airport.split("|")[0];
              return {
                title: code,
                media: MdLocalAirport,
              };
            },
          },
        },
      ],
    },
    {
      name: "visitedCapitals",
      type: "array",
      title: "Visited Capitals",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "capital",
              type: "string",
              title: "Capital",
              options: {
                list: capitalList.map((capital) => ({
                  title: `${capital.CapitalName} (${capital.CountryCode})`,
                  value: `${capital.CapitalName},${capital.CountryCode}|${capital.lat},${capital.lon}`,
                })),
              },
            },
          ],
          preview: {
            select: {
              capital: "capital",
            },
            prepare(selection) {
              const { capital } = selection;
              const name = capital.split("|")[0];
              const countryCode = capital.split(",")[1].split("|")[0];
              const getFlagEmoji = (countryCode: string) => {
                return countryCode
                  .toUpperCase()
                  .replace(/./g, (char) =>
                    String.fromCodePoint(127397 + char.charCodeAt(0))
                  );
              };
              return {
                title: name.split(",")[0],
                media: <span>{getFlagEmoji(countryCode)}</span>,
              };
            },
          },
        },
      ],
    },
  ],
});
