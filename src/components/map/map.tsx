"use client";
import { Map } from "react-map-gl";
import Contribution from "./contribution";
import Controls from "./controls";
import {
  AirportMarker,
  CapitalMarker,
  HomeMarker,
  LocationMarker,
} from "./markers";
import VisitedCountries from "./visitedCountries";
import useMap from "./useMap";
import { Station, Capital, CityFeature, Trip } from "@/types";
import VisitedCities from "./visitedCities";
import TripData from "./trip";

export default async function MapboxContent({
  coords,
  data,
}: {
  coords?: { latitude: number; longitude: number };
  data?: {
    airports: Station[];
    countries: string[];
    capitals: Capital[];
    cities: CityFeature[];
    trip: Trip;
  };
}) {
  console.log(coords);
  const countries = data?.countries;
  const airports = data?.airports;
  const capitals = data?.capitals;
  const trip = data?.trip;

  const showTrip = false;

  const {
    setUncontrolledZoom,
    mapRef,
    setZoom,
    exactZoom,
    style,
    resolvedTheme,
    setTransitioning,
  } = useMap({ coords });

  return (
    <div className="relative h-full w-full">
      <Map
        onZoom={() => setUncontrolledZoom()}
        ref={mapRef}
        maxZoom={coords ? 11 : 20}
        minZoom={0.0000001}
        mapStyle={style}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: coords ? coords.longitude : 30,
          latitude: coords ? coords.latitude : 40,
          zoom: coords ? 11 : 2.7,
        }}
        projection={"globe"}
        attributionControl={false}
        styleDiffing={false}
      >
        {!coords && !showTrip && (
          <>
            {/* highlight all countries I've visited */}
            <VisitedCountries
              countries={countries}
              resolvedTheme={resolvedTheme}
            />
            <VisitedCities
              resolvedTheme={resolvedTheme}
              cities={data?.cities}
            />
            {/* show where I live */}
            <HomeMarker exactZoom={exactZoom} />
            {/* show all airports I've visited */}
            {airports &&
              airports.map((airport) => (
                <AirportMarker
                  key={airport.code}
                  exactZoom={exactZoom}
                  airport={airport}
                />
              ))}
            {/* show all capitals I've visited */}
            {capitals &&
              capitals.map((capital) => (
                <CapitalMarker
                  key={capital.CountryCode}
                  exactZoom={exactZoom}
                  capital={capital}
                />
              ))}
            {/* <VisitedCities resolvedTheme={resolvedTheme} /> */}
          </>
        )}
        {/* show all trips I've made */}
        {!coords && trip && showTrip && (
          <TripData
            exactZoom={exactZoom}
            trip={trip}
            resolvedTheme={resolvedTheme}
          />
        )}
        {/* Show a marker with my current location */}
        {coords && <LocationMarker exactZoom={exactZoom} coords={coords} />}
      </Map>
      <Contribution />

      <Controls
        exactZoom={exactZoom}
        setZoom={setZoom}
        setTransitioning={setTransitioning}
      />
    </div>
  );
}
