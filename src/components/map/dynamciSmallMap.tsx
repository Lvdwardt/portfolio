import dynamic from "next/dynamic";

const DynamicSmallMapbox = dynamic(() => import("./smallMapContent"), {
  ssr: false,
});

export default DynamicSmallMapbox;
