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
    // [
    //   {
    //     full_name: 'L v d W',
    //     nickname: 'L',
    //     current_location: 'Pimpelmees 12, 3911 Rhenen, Netherlands',
    //     latitude: 51.9543424,
    //     longitude: 5.5820467,
    //     datetime: '2023-05-18 15:15:05.141000+00:00',
    //     delta: '0',
    //     charging: false,
    //     battery_level: 39,
    //     accuracy: 12
    //   }
    // ]

    return res.json();
  });

  // I don't want my real location to end up in the frontend, so cut down the lat/long to 3 decimals
  data[0].latitude = data[0].latitude.toFixed(3);
  data[0].longitude = data[0].longitude.toFixed(3);

  return data;
}
