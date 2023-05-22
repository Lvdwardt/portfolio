"use client";
import { useState, useEffect, createElement } from "react";
import { UncontrolledReactSVGPanZoom } from "react-svg-pan-zoom";
import { parse as parseSVG } from "svg-parser";
import { toH } from "hast-to-hyperscript";

export default function TravelMap() {
  const [svg, setSVG] = useState(<svg />);

  useEffect(() => {
    fetch("/images/travels/map.svg")
      .then((r) => r.text())
      .then((text) => {
        const hast = parseSVG(text);
        const element = toH(createElement, hast);
        setSVG(element);
      });
  }, []);

  if (svg === <svg />) {
    return <div />;
  }

  return (
    <div>
      <UncontrolledReactSVGPanZoom
        background="transparent"
        SVGBackground="transparent"
        width={2400}
        height={800}
        detectAutoPan={true}
        detectWheel={true}
        detectPinchGesture={true}
        toolbarProps={{
          position: "none",
        }}
        tool="auto"
      >
        {svg}
      </UncontrolledReactSVGPanZoom>
    </div>
  );
}
