import { FaRoute } from "@react-icons/all-files/fa/FaRoute";
import { countryList } from "@/components/map/countrylist";
import { defineType } from "sanity";

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
                  value: `${country.country} (${country.code})`,
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
              const code = name.split(" ")[1].replace("(", "").replace(")", "");
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
    // {
    //   name: "visitedAirports",
    //   type: "array",
    //   title: "Visited Airports",
    //   of: [
    //     {
    //       type: "object",
    //       fields: [
    //         {
    //           name: "airport",
    //           type: "string",
    //           title: "Airport",
    //           options: {
    //             list: countryList.map((country) => ({
    //               title: `${country.country} (${country.code})`,
    //               value: `${country.country} (${country.code})`,
    //             })),
    //           },
    //         },
    //       ],
    //       preview: {
    //         select: {
    //           name: "airport",
    //         },
    //         // prepare(selection) {
    //         //   const { name } = selection;
    //         //   const code = name.split(" ")[1].replace("(", "").replace(")", "");
    //         //   const getFlagEmoji = (countryCode: string) => {
    //         //     return countryCode
    //         //       .toUpperCase()
    //         //       .replace(/./g, (char) =>
    //         //         String.fromCodePoint(127397 + char.charCodeAt(0))
    //         //       );
    //         //   };
    //         //   if (!code)
    //         //     return {
    //         //       media: <span>{code}</span>,
    //         //       title: name,
    //         //     };
    //         //   return {
    //         //     media: <span>{getFlagEmoji(code)}</span>,
    //         //     title: name,
    //         //   };
    //         // },
    //       },
    //     },
    //   ],
    // },
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
});
