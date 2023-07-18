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
import { MapData, Station, Trip } from "@/types";
import VisitedCities from "./visitedCities";
import TripData from "./trip";
import { startTransition } from "react";

export default async function MapboxContent({
  big,
  coords,
  data,
  trip,
  stations,
}: {
  big: boolean;
  coords?: { latitude: number; longitude: number };
  data?: MapData;
  trip?: Trip;
  stations?: Station[];
}) {
  const countries = data?.countries;
  const airports = data?.airports;
  const capitals = data?.capitals;

  const showTrip = data?.showTrip;

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
        onResize={(e) => {
          startTransition(() => {
            e.target.resize();
          });
        }}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: "-50%",
          left: "-50%",
          margin: "auto",
          width: big ? "895px" : "100%",
        }}
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
              cities={data?.cities}
              resolvedTheme={resolvedTheme}
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
          </>
        )}
        {/* show all trips I've made */}
        {!coords && trip && stations && showTrip && (
          <TripData
            exactZoom={exactZoom}
            trip={trip}
            stations={stations}
            resolvedTheme={resolvedTheme}
            mapRef={mapRef}
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
