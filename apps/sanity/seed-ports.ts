import { createClient } from "@sanity/client";
import voyages from "../../voyages.json";

const client = createClient({
  projectId: "jiej64re",
  dataset: "dev",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

// Extract all unique ports from all voyages
const portMap = new Map<string, { name: string; country: string; lat: number; lng: number }>();

for (const voyage of voyages as any[]) {
  if (!voyage.processed_geojson?.features) continue;

  for (const feature of voyage.processed_geojson.features) {
    const props = feature.properties;
    const geom = feature.geometry;
    if (!props || !geom) continue;

    const featureType = props.Feature_type;
    if (featureType !== "start" && featureType !== "end" && featureType !== "port_call") continue;

    const portName = props.Port_Name || props.Name;
    const country = props.Country || props.Country_code || "";
    const [lng, lat] = geom.coordinates;

    const key = `${portName}-${country}`;
    if (!portMap.has(key)) {
      portMap.set(key, { name: portName, country, lat, lng });
    }
  }
}

const ports = Array.from(portMap.values());

const visitedCruisePorts = ports.map((port) => ({
  _type: "object",
  _key: `${port.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${port.country.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
  port: `${port.name}, ${port.country}`,
  coordinates: `${port.lat},${port.lng}`,
}));

console.log(`Patching ${visitedCruisePorts.length} cruise ports (preserving all other fields)...`);

// Patch ONLY the visitedCruisePorts field on both published and draft docs
const transaction = client.transaction();
transaction.patch("travelData", (p) => p.set({ visitedCruisePorts }));
transaction.patch("drafts.travelData", (p) => p.set({ visitedCruisePorts }));

const result = await transaction.commit();
console.log(`Done! Transaction ID: ${result.transactionId}`);

// Verify
const doc = await client.fetch(`*[_id in ["travelData", "drafts.travelData"]]{ _id, "portCount": count(visitedCruisePorts), "countryCount": count(visitedCountries), "airportCount": count(visitedAirports) }`);
console.log("Verification:", JSON.stringify(doc, null, 2));
