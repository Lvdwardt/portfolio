import GridLayout from "react-grid-layout";
import react from "react";
import React from "react";
import About from "../components/about";
import Mapbox from "react-map-gl/dist/esm/mapbox/mapbox";
import Toggle from "../components/toggle";
import Skills from "../components/skills";
import Whatsapp, { Discord, Github } from "../components/socials";
import Timeline from "../components/timeline";
import Janskapsalon from "../components/janskapsalon";
import Timeline2 from "../components/timeline2";

class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    // const layout = [
    //   { i: "a", x: 0, y: 0, w: 1, h: 2 },
    //   { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    //   { i: "c", x: 4, y: 0, w: 1, h: 2 },
    // ];
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div className="">
          <About />
        </div>
        <div className="">
          <Mapbox />
        </div>
        {/* <Toggle />
        <Skills />
        <Github />
        <Timeline />
        <Whatsapp />
        <Janskapsalon />
        <Timeline2 />
        <Discord /> */}
      </GridLayout>
    );
  }
}
export default MyFirstGrid;
