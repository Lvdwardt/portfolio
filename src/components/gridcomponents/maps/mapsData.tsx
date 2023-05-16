export default async function MapsData() {
  const key = process.env.DO_KEY;

  const options = {
    method: "GET",
    url: "https://faas-ams3-2a2df116.doserverless.co/api/v1/web/fn-92258c5c-debf-42bf-8952-2c536e1c02be/location/location",
    headers: {
      "X-Require-Whisk-Auth": key as string,
      "Content-Type": "application/json",
    },
  };

  const data = await fetch(options.url, {
    method: options.method,
    headers: options.headers,
    next: {
      // revalidate every 10 minutes
      revalidate: 600,
    },
  }).then((res) => {
    return res.json();
  });

  return data;
}
