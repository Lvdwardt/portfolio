import GridLayout from "react-grid-layout";
import react from "react";
import React from "react";
import Timeline from "../components/timeline";
import About from "../components/about";
import Timeline2 from "../components/timeline2";

// class MyFirstGrid extends React.Component {
//   render() {
//     // layout is an array of objects, see the demo for more complete usage
//     const layout = [
//       { i: "a", x: 0, y: 0, w: 2, h: 1 },
//       { i: "b", x: 2, y: 0, w: 2, h: 1 },
//       { i: "c", x: 4, y: 0, w: 1, h: 1 },
//     ];
//     return (
//       <div className="flex justify-center">
//         <div className="bg-black ">
//           <GridLayout
//             className=" w-full"
//             layout={layout}
//             cols={4}
//             rowHeight={280}
//             width={1200}
//             rowWidth={265}
//           >
//             <div key="a" className="">
//               <Timeline2 />
//             </div>
//             <div key="b" className="">
//               <About />
//             </div>
//             <div key="c" className=" bg-green-400">
//               c
//             </div>
//           </GridLayout>
//         </div>
//       </div>
//     );
//   }
// }

import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

class MyResponsiveGrid extends React.Component {
  render() {
    // {lg: layout1, md: layout2, ...}
    const layouts =
      ({ i: "a", x: 0, y: 0, w: 2, h: 1 },
      { i: "b", x: 2, y: 0, w: 2, h: 1 },
      { i: "c", x: 4, y: 0, w: 1, h: 1 });
    return (
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        width={1200}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        <div key="a">1</div>
        <div key="b">2</div>
        <div key="c">3</div>
      </ResponsiveGridLayout>
    );
  }
}
export default MyResponsiveGrid;
