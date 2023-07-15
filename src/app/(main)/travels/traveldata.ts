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
    id: "1",
    title: "London, Ibiza, Barcelona, Porto",
    legs: [
      {
        from: "MST",
        to: "LTN",
        type: "plane",
      },
      {
        from: "LTN",
        to: "IBZ",
        type: "plane",
      },
      {
        from: "IBZ",
        to: "BCN",
        type: "plane",
      },
      {
        from: "BCN",
        to: "OPO",
        type: "plane",
      },
      {
        from: "OPO",
        to: "MST",
        type: "plane",
      },
    ],
    duration: 8,
    date: "2022-05",
  },
  {
    id: "2",
    title: "Catania, Dubai, Naples, Bari",
    legs: [
      {
        from: "CGN",
        to: "BGY",
        type: "plane",
      },
      {
        from: "BGY",
        to: "CTA",
        type: "plane",
      },
      {
        from: "CTA",
        to: "AUH",
        type: "plane",
      },
      {
        from: "AUH",
        to: "Dubai",
        type: "bus",
      },
      {
        from: "Dubai",
        to: "AUH",
        type: "bus",
      },
      {
        from: "AUH",
        to: "NAP",
        type: "plane",
      },
      {
        from: "Naples",
        to: "Bari",
        type: "bus",
      },
      {
        from: "BRI",
        to: "MST",
        type: "plane",
      },
    ],
    duration: 10,
    date: "2023-05",
  },
  {
    id: "3",
    title: "Milan, Bucharest, Sofia",
    legs: [
      {
        from: "NRN",
        to: "BGY",
        type: "plane",
      },
      {
        from: "BGY",
        to: "OTP",
        type: "plane",
      },
      {
        from: "OTP",
        to: "SOF",
        type: "plane",
      },
      {
        from: "SOF",
        to: "EIN",
        type: "plane",
      },
    ],
    duration: 9,
    date: "2023-07",
  },
];
