import Head from "next/head";
import About from "../components/gridcomponents/about";
import AnimatedLayout from "../layouts/animatedLayout";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export default function Travels() {
  const imageRef = useRef<HTMLImageElement | null>(null); // Ref for the image element
  const [zoom, setZoom] = useState(1);
  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const imageElement = imageRef.current; // Get the image element from the ref
    let localZoom = zoom;
    if (imageElement) {
      const rect = imageElement.getBoundingClientRect(); // Get the position of the image element
      const offsetX = event.clientX - rect.left; // Calculate the X offset of the click relative to the image element
      const offsetY = event.clientY - rect.top; // Calculate the Y offset of the click relative to the image element
      const zoomX = offsetX / rect.width; // Calculate the X zoom ratio
      const zoomY = offsetY / rect.height; // Calculate the Y zoom ratio
      if (zoom < 9) {
        setZoom(zoom * 3);
        localZoom = zoom * 3;
      } else {
        setZoom(1);
        localZoom = 1;
      }

      // Apply CSS transform to zoom to the clicked location
      imageElement.style.transformOrigin = `${zoomX * 100}% ${zoomY * 100}%`;
      imageElement.style.transform = `scale(${localZoom})`;
      imageElement.style.transition = "transform 0.5s ease-in-out";
    }
  };

  return (
    <AnimatedLayout>
      <div className="flex flex-col items-center justify-center rounded-xl  p-4 pt-2 xl:col-span-2 xl:row-span-2">
        <Head>
          <title>Travels</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Travels</h1>
        <p className="mt-3 text-2xl">
          You can contact me on{" "}
          <a
            className="text-primary hover:underline"
            href="https://api.whatsapp.com/send?phone=31630702130"
          >
            Whatsapp
          </a>
          ,{" "}
          <a
            className="text-primary hover:underline"
            href="mailto:contact@leonvdw.nl"
          >
            Email
          </a>
          , or{" "}
          <a
            className="text-primary hover:underline"
            href="
            https://www.github.com/Lvdwardt"
          >
            Github
          </a>
        </p>
      </main> */}
        <div className="w-full overflow-visible transition-all duration-300 ease-in ">
          <div className="mx-auto grid w-full max-w-[320px] grid-cols-1 gap-5 px-4 pt-2 pb-6 [grid-auto-rows:265px] [grid-auto-columns:265px] sm:max-w-[640px] sm:grid-cols-2 xl:max-w-[1200px] xl:grid-cols-4 xl:grid-rows-[265px,265px] xl:px-0 ">
            <div className="col-span-2 rounded-[2rem] bg-card p-4 pl-6 pt-[18px]">
              <About />
            </div>
            <div className="relative col-span-4 row-span-2 overflow-hidden rounded-[2rem] bg-card text-center">
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-300 ease-in",
                  false ? "hover:cursor-zoom-in" : "hover:cursor-zoom-out"
                )}
                onClick={handleImageClick}
              >
                <Image
                  src="/images/travels/map.svg"
                  alt="map"
                  width={2400}
                  height={1200}
                  className="absolute rounded-[2rem] bg-card p-4 pl-6 pt-[18px] transition-all duration-300 ease-in"
                  ref={imageRef}
                  style={{
                    transition: "transform 0.5s ease",
                    transformOrigin: "50% 50%",
                    transform: `scale(${zoom})`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
}
