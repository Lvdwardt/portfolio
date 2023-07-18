export const countries = [
  "Belgium",
  "Germany",
  "France",
  "Spain",
  "Portugal",
  "Italy",
  "Turkey",
  "Vatican City",
  "United Arab Emirates",
  "Austria",
  "Czech Republic",
  "Poland",
  "Hungary",
  "Slovakia",
  "Croatia",
  "Bulgaria",
  "Romania",
  "Switzerland",
  "Egypt",
  "United Kingdom",
];

export const airportCodes = [
  "AMS",
  "EIN",
  "MST",
  "RTM",
  "NRN",
  "CGN",
  "GZP",
  "HRG",
  "SSH",
  "STN",
  "BSL",
  "ZAG",
  "FCO",
  "CIA",
  "CAG",
  "MAD",
  "LTN",
  "IBZ",
  "BCN",
  "OPO",
  "BGY",
  "CTA",
  "AUH",
  "NAP",
  "BRI",
  "OTP",
  "SOF",
];

export const capitalNames = [
  "Brussels",
  "Berlin",
  "Paris",
  "Madrid",
  "Lisbon",
  "Rome",
  "Vatican City",
  "Vienna",
  "Prague",
  "Budapest",
  "Bratislava",
  "Zagreb",
  "Sofia",
  "Bucharest",
  "London",
];

export const cityNames = [
  {
    name: "Amsterdam",
    country: "nl",
  },
  {
    name: "Antwerp",
    country: "be",
  },
  {
    name: "Brussels",
    country: "be",
  },
  {
    name: "Paris",
    country: "fr",
  },
  {
    name: "Mimizan",
    country: "fr",
  },
  {
    name: "Barcelona",
    country: "es",
  },
  {
    name: "Madrid",
    country: "es",
  },
  {
    name: "Ibiza",
    country: "es",
  },
  {
    name: "Porto",
    country: "pt",
  },
  {
    name: "Stuttgart",
    country: "de",
  },
  {
    name: "Berlin",
    country: "de",
  },
  {
    name: "Zurich",
    country: "ch",
  },
  {
    name: "Basel",
    country: "ch",
  },
  {
    name: "Geneva",
    country: "ch",
  },
  {
    name: "Zermatt",
    country: "ch",
  },
  {
    name: "Milan",
    country: "it",
  },
  {
    name: "Rome",
    country: "it",
  },
  {
    name: "Naples",
    country: "it",
  },
  {
    name: "Bari",
    country: "it",
  },
  {
    name: "Catania",
    country: "it",
  },
  {
    name: "Cagliari",
    country: "it",
  },
  {
    name: "Prague",
    country: "cz",
  },
  {
    name: "Vienna",
    country: "at",
  },
  {
    name: "Bratislava",
    country: "sk",
  },
  {
    name: "Budapest",
    country: "hu",
  },
  {
    name: "Zagreb",
    country: "hr",
  },
  {
    name: "Pula",
    country: "hr",
  },
  {
    name: "Zadar",
    country: "hr",
  },
  {
    name: "Porec",
    country: "hr",
  },
  {
    name: "Krakow",
    country: "pl",
  },
  {
    name: "Zator",
    country: "pl",
  },
  {
    name: "Sofia",
    country: "bg",
  },
  {
    name: "Bucharest",
    country: "ro",
  },
  {
    name: "Dubai",
    country: "ae",
  },
];

export const trips = [
  {
    id: "0",
    title: "Zargeb, Rome, Cagliari",
    legs: [
      {
        from: {
          code: "NRN",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "ZAG",
          coordinates: [] as unknown as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "ZAG",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "FCO",
          coordinates: [] as unknown as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "CIA",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "CAG",
          coordinates: [] as unknown as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "CAG",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "NRN",
          coordinates: [] as unknown as number[],
        },
        type: "plane",
      },
    ],
    duration: 7,
    date: "2022/03",
  },
  {
    id: "1",
    title: "London, Ibiza, Barcelona, Porto",
    legs: [
      {
        from: {
          code: "MST",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "LTN",
          coordinates: [] as unknown as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "LTN",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "IBZ",
          coordinates: [] as unknown as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "IBZ",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "BCN",
          coordinates: [] as unknown as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "BCN",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "OPO",
          coordinates: [] as unknown as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "OPO",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "MST",
          coordinates: [] as unknown as number[],
        },
        type: "plane",
      },
    ],
    duration: 8,
    date: "2022-05",
  },
  {
    id: "2",
    title:
      "Zadar, Pichl, Zermatt, Zürich, Zagreb, Budapest, Bratislava, Vienna, Zator, Krakow, Prague",
    legs: [
      {
        from: {
          code: "Rhenen",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "Zadar",
          coordinates: [] as unknown as number[],
        },
        type: "car",
      },
      {
        from: {
          code: "Zadar",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "Pichl",
          coordinates: [] as unknown as number[],
        },
        type: "car",
      },
      {
        from: {
          code: "Pichl",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "Zermatt",
          coordinates: [] as unknown as number[],
        },
        type: "train",
      },
      {
        from: {
          code: "Zermatt",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "Zürich",
          coordinates: [] as unknown as number[],
        },
        type: "train",
      },
      {
        from: {
          code: "Zürich",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "Zagreb",
          coordinates: [] as unknown as number[],
        },
        type: "train",
      },
      {
        from: {
          code: "Zagreb",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "Budapest",
          coordinates: [] as unknown as number[],
        },
        type: "train",
      },
      {
        from: {
          code: "Budapest",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "Bratislava",
          coordinates: [] as unknown as number[],
        },
        type: "bus",
      },
      {
        from: {
          code: "Bratislava",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "Vienna",
          coordinates: [] as unknown as number[],
        },
        type: "bus",
      },
      {
        from: {
          code: "Vienna",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "Zator",
          coordinates: [] as unknown as number[],
        },
        type: "train",
      },
      {
        from: {
          code: "Zator",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "Krakow",
          coordinates: [] as unknown as number[],
        },
        type: "train",
      },
      {
        from: {
          code: "Krakow",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "Prague",
          coordinates: [] as unknown as number[],
        },
        type: "train",
      },
      {
        from: {
          code: "Prague",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "Rhenen",
          coordinates: [] as unknown as number[],
        },
        type: "train",
      },
    ],
    duration: 28,
    date: "2022-07",
  },
  {
    id: "3",
    title: "Catania, Dubai, Naples, Bari",
    legs: [
      {
        from: {
          code: "CGN",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "BGY",
          coordinates: [] as unknown as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "BGY",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "CTA",
          coordinates: [] as unknown as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "CTA",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "AUH",
          coordinates: [] as unknown as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "AUH",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "Dubai",
          coordinates: [] as unknown as number[],
        },
        type: "bus",
      },
      {
        from: {
          code: "Dubai",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "AUH",
          coordinates: [] as unknown as number[],
        },
        type: "bus",
      },
      {
        from: {
          code: "AUH",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "NAP",
          coordinates: [] as unknown as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "Naples",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "Bari",
          coordinates: [] as unknown as number[],
        },
        type: "bus",
      },
      {
        from: {
          code: "BRI",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "MST",
          coordinates: [] as unknown as number[],
        },
        type: "plane",
      },
    ],
    duration: 10,
    date: "2023-03",
  },
  {
    id: "4",
    title: "Milan, Bucharest, Sofia",
    legs: [
      {
        from: {
          code: "NRN",
          coordinates: [] as unknown as number[],
        },
        to: {
          code: "BGY",
          coordinates: [] as unknown as number[],
        },
        type: "plane",
      },
      {
        from: {
          code: "BGY",
          coordinates: [] as unknown as number[],
        },
        to: { code: "OTP", coordinates: [] },
        type: "plane",
      },
      {
        from: {
          code: "OTP",
          coordinates: [] as unknown as number[],
        },
        to: { code: "SOF", coordinates: [] },
        type: "plane",
      },
      {
        from: {
          code: "SOF",
          coordinates: [] as unknown as number[],
        },
        to: { code: "EIN", coordinates: [] },
        type: "plane",
      },
    ],
    duration: 9,
    date: "2023-07",
  },
];
