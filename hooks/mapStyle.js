import { useEffect, useState } from "react";

export default function mapStyle() {
  const [colorStyle, setStyle] = useState("mapbox://styles/mapbox/streets-v11");
  const style =
    colorStyle === "mapbox://styles/leonvdw/ckza3leh5002g14qhbxatpdjt"
      ? "mapbox://styles/mapbox/streets-v11"
      : "mapbox://styles/leonvdw/ckza3leh5002g14qhbxatpdjt";

  return [style, setStyle];
}
