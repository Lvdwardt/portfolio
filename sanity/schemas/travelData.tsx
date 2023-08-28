import { FaRoute } from "@react-icons/all-files/fa/FaRoute";
import { countryList } from "@/components/map/countrylist";

export const TravelData = {
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
                  value: country.country,
                })),
              },
            },
            {
              name: "countrycode",
              type: "string",
              title: "Country Code",
            },
          ],
          preview: {
            select: {
              code: "countrycode",
            },
            prepare(selection: { code: string }) {
              function getFlagEmoji(countryCode: string) {
                return countryCode
                  .toUpperCase()
                  .replace(/./g, (char) =>
                    String.fromCodePoint(127397 + char.charCodeAt(0))
                  );
              }
              if (!selection.code) return;
              return {
                media: <span>{getFlagEmoji(selection.code)}</span>,
                title: selection.code,
              };
            },
          },
        },
      ],
    },
    // {
    //   name: "visitedCapitals",
    //   type: "array",
    //   title: "Visited Capitals",
    //   of: [{ type: "string" }],
    // },
    // {
    //   name: "visitedAirports",
    //   type: "array",
    //   title: "Visited Airports",
    //   of: [{ type: "string" }],
    // },
  ],
};
