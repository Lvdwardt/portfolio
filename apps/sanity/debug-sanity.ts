import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "jiej64re",
  dataset: "dev",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

// Check the current state of the document
const doc = await client.fetch(`*[_id == "travelData"][0]`);
console.log("Published doc fields:", Object.keys(doc));
console.log("visitedCountries:", doc.visitedCountries?.length ?? "NULL");
console.log("visitedAirports:", doc.visitedAirports?.length ?? "NULL");
console.log("visitedCapitals:", doc.visitedCapitals?.length ?? "NULL");
console.log("visitedCruisePorts:", doc.visitedCruisePorts?.length ?? "NULL");

// Check history - get the previous version from the dataset history
// Let's check if there's anything in the history API
const history = await client.fetch(`*[_id == "travelData"][0]{ _rev, _updatedAt }`);
console.log("\nDoc revision:", history._rev, "updated:", history._updatedAt);
