import { RefObject, startTransition } from "react";
import { computeCameraPosition } from "../util";
import * as turf from "@turf/turf";
import { MapRef } from "react-map-gl";
import mapboxgl from "mapbox-gl";

const animatePath = async ({
  mapRef,
  duration,
  path,
  startBearing,
  startAltitude,
  pitch,
}: {
  mapRef: RefObject<MapRef>;
  duration: number;
  path: turf.Feature<turf.LineString>;
  startBearing: number;
  startAltitude: number;
  pitch: number;
}) => {
  const pathDistance = turf.lineDistance(path);
  let startTime: number;
  let finished = false;

  const frame = async (currentTime: number) => {
    if (finished) return;
    if (!startTime) startTime = currentTime;
    const animationPhase = (currentTime - startTime) / duration;

    // when the duration is complete, resolve the promise and stop iterating
    if (animationPhase > 1) {
      finished = true;
      return;
    }

    // calculate the distance along the path based on the animationPhase
    const alongPath = turf.along(path, pathDistance * animationPhase).geometry
      .coordinates;

    const lngLat = {
      lng: alongPath[0],
      lat: alongPath[1],
    };

    // slowly rotate the map at a constant rate
    const bearing = startBearing - animationPhase * 200.0;

    // compute corrected camera ground position, so that he leading edge of the path is in view
    const correctedPosition = computeCameraPosition(
      pitch,
      bearing,
      lngLat,
      startAltitude,
      true // smooth
    );

    // set the pitch and bearing of the camera
    const camera = mapRef?.current?.getFreeCameraOptions();
    if (!camera) return;
    camera.setPitchBearing(pitch, bearing);

    // set the position and altitude of the camera
    camera.position = mapboxgl.MercatorCoordinate.fromLngLat(
      correctedPosition,
      startAltitude
    );

    // apply the new camera options
    startTransition(() => {
      mapRef?.current?.setFreeCameraOptions(camera);
    });

    // repeat!
    window.requestAnimationFrame(frame);
  };

  window.requestAnimationFrame(frame);
};

export default animatePath;
