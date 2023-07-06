// TODO: wrtie this api route and add a front-end to update location
// get current location lat and lng
// trim to 4 decimal places
// update location in vercel edge config db
// revalidate with /api/revalidate
// return success)

export default async function GET() {
  return new Response("Hello world!");
}
